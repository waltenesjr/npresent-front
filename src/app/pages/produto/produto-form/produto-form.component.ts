import {Component, Injector, OnInit} from '@angular/core';
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
export class ProdutoFormComponent implements OnInit {

  public loading = false;
  categorias = CategoriaProdutoEnum;
  produtos: ProdutoModel[];
  form: FormGroup;
  fb: FormBuilder;
  private service: ProdutoService;

  constructor(private injector: Injector, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.service = this.injector.get(ProdutoService);
    this.getList();
    this.createForm();
  }

  createForm(): void {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      id: this.fb.control(null),
      nome: this.fb.control(null, [Validators.required]),
      link: this.fb.control(null, [Validators.required]),
      categoria: this.fb.control(null, [Validators.required]),
      valor: this.fb.control(null, [Validators.required])
    });
  }

  getList(): void {
    this.loading = true;
    this.service.getList().subscribe((res: ProdutoModel[]) => {
      this.produtos = res;
      this.loading = false;
    });
  }

  onSubmit(): void {
    this.loading = true;
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(() => {
        this.toastr.success('Operação realizada com sucesso ', 'Sucesso');
        this.getList();
        this.loading = false;
      });
    } else {
      this.loading = false;
    }
  }

  edit(id: number): void {
    this.form.reset(this.produtos.find(x => x.id === id));
  }

  delete(id: number): void {
    this.loading = true;
    this.service.remove(id).subscribe(() => {
      this.toastr.success('Operação realizada com sucesso ', 'Sucesso');
      this.getList();
      this.loading = false;
    });
  }
}
