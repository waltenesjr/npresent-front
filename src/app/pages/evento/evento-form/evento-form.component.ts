import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FornecedorModel} from '../../../model/fornecedor.model';
import {FornecedorService} from '../../../service/fornecedor.service';
import {TipoEventoEnum} from '../../../enum/tipo-evento.enum';
import {ToastrService} from 'ngx-toastr';
import {ProdutoModel} from '../../../model/produto.model';
import {EventoModel} from "../../../model/evento.model";
import {EventoService} from "../../../service/evento.service";
import {ProdutoService} from "../../../service/produto.service";

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent {

  public loading = false;
  fornecedores: FornecedorModel[] = new Array();
  produtos: ProdutoModel[] = new Array();
  produtosSelecionados: ProdutoModel[] = new Array();
  fornecedor: FornecedorModel;
  tipos = TipoEventoEnum;
  etapa: number;
  form: FormGroup;
  fb: FormBuilder;
  @ViewChild('fileInput') fileInput: ElementRef;
  private service: EventoService;
  private fornecedorService: FornecedorService;
  private produtoService: ProdutoService;

  constructor(private injector: Injector, private toastr: ToastrService) {
    this.loading = true;
    this.service = this.injector.get(EventoService);
    this.fornecedorService = this.injector.get(FornecedorService);
    this.produtoService = this.injector.get(ProdutoService);
    this.getFornecedores();
    this.createForm();
    this.etapa = 0;
  }

  getFornecedores(): void {
    this.fornecedorService.getList().subscribe((res: FornecedorModel[]) => {
      this.fornecedores = res;
      this.loading = false;
    });
  }

  getProdutos(): void {
    this.loading = true;
    this.produtoService.getList().subscribe((res: ProdutoModel[]) => {
      this.produtos = res;
      this.loading = false;
    });
  }

  createForm(): void {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      fornecedor: this.fb.control(null),
      nome: this.fb.control(null, [Validators.required]),
      tipo: this.fb.control(null, [Validators.required]),
      imagem: this.fb.control(null, [Validators.required])
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
      if (!this.form.controls['imagem'].value) {
        this.toastr.error('Por favor adicione uma imagem ', 'Erro');
      }
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
    if (this.form.valid) {
      this.loading = true;
      this.service.save(this.convertForm()).subscribe(() => {
        this.toastr.success('Operação realizada com sucesso ', 'Sucesso');
        this.etapa = 0;
        this.loading = false;
      });
    }
  }

  convertForm(): EventoModel {
    return new EventoModel(
      0,
      this.form.controls['nome'].value,
      this.form.controls['tipo'].value,
      this.fornecedor.id,
      this.form.controls['imagem'].value,
      this.produtosSelecionados
    )
  }
}
