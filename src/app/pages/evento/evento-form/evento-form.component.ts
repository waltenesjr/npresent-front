import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FornecedorModel} from '../../../model/fornecedor.model';
import {FornecedorService} from '../../../service/fornecedor.service';
import {TipoEventoEnum} from '../../../enum/tipo-evento.enum';
import {ToastrService} from 'ngx-toastr';
import {ProdutoService} from '../../../service/produto.service';
import {ProdutoModel} from '../../../model/produto.model';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent {

  fornecedores: FornecedorModel[] = new Array();
  produtos: ProdutoModel[] = new Array();
  produtosSelecionados: ProdutoModel[] = new Array();
  fornecedor: FornecedorModel;
  tipos = TipoEventoEnum;
  etapa: number;
  form: FormGroup;
  fb: FormBuilder;
  @ViewChild('fileInput') fileInput: ElementRef;
  private fornecedorService: FornecedorService;
  private produtoService: ProdutoService;

  constructor(private injector: Injector, private toastr: ToastrService) {
    this.fornecedorService = this.injector.get(FornecedorService);
    this.produtoService = this.injector.get(ProdutoService);
    this.getFornecedores();
    this.createForm();
    this.etapa = 0;
  }

  getFornecedores(): void {
    this.fornecedorService.getList().subscribe((res: FornecedorModel[]) => {
      this.fornecedores = res;
    });
  }

  getProdutos(): void {
    this.produtoService.getList().subscribe((res: ProdutoModel[]) => {
      this.produtos = res;
    });
  }

  createForm(): void {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      fornecedor: this.fb.control(null),
      nome: this.fb.control(null, [Validators.required]),
      tipo: this.fb.control(null, [Validators.required]),
      imagem: this.fb.control(null)
    });
  }

  setFornecedor(fornecedor: FornecedorModel): void {
    this.fornecedor = fornecedor;
    this.toastr.info('Fornecedor selecionado ', 'Info');
    this.etapa = 1;
  }

  addProduto(produto: ProdutoModel, index: number): void {
    this.produtosSelecionados.push(produto);
    this.produtos.splice(index, 1);
    this.toastr.info('Produto adicionado', 'Info');
  }

  removeProduto(produto: ProdutoModel, index: number): void {
    this.produtos.push(produto);
    this.produtosSelecionados.splice(index, 1);
    this.toastr.info('Produto removido', 'Info');
  }

  trackByFn(i: number) {
    return i;
  }

  getEtapaProduto() {
    if (this.form.valid) {
      this.etapa = 2;
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  onFileChange(event): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.controls['imagem'].setValue(reader.result.split(',')[1]);
      };
    }
    this.getProdutos();
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({onlySelf: true});
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

  onSubmit() {
  }
}
