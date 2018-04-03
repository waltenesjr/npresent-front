import {Component, Injector} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {CategoriaProdutoEnum} from '../../../enum/categoria-produto.enum';
import {ProdutoService} from '../../../service/produto.service';
import {ProdutoModel} from '../../../model/produto.model';

@Component({
  selector: 'app-produto-form',
  templateUrl: './produto-form.component.html',
  styleUrls: ['./produto-form.component.scss']
})
export class ProdutoFormComponent {

  categorias = CategoriaProdutoEnum;
  produtos: ProdutoModel[];
  form: FormGroup;
  fb: FormBuilder;
  private service: ProdutoService;

  constructor(private injector: Injector, private toastr: ToastrService) {
    this.service = this.injector.get(ProdutoService);
    this.createForm();
    this.getList();
  }

  createForm() {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      nome: [null, Validators.required],
      link: [null, Validators.required],
      categoria: [null, Validators.required],
      valor: [null, Validators.required]
    });
  }

  getList() {
    this.service.getList().subscribe((res: ProdutoModel[]) => {
      this.produtos = res;
    });
  }

  onSubmit(): void {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(() => {
        this.toastr.success('Operação realizada com sucesso ', 'Sucesso');
        this.form.reset({
          nome: '',
          link: '',
          categoria: '',
          valor: ''
        });
        this.getList();
      });
    }
  }

  edit(id: number): void {
    this.form.reset(this.produtos.find(x => x.id === id));
  }
}
