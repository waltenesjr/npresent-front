import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FornecedorService} from '../../../service/fornecedor.service';
import {ToastrService} from 'ngx-toastr';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {

  form: FormGroup;
  fb: FormBuilder;
  public router: Router;
  @ViewChild('fileInput') fileInput: ElementRef;
  private service: FornecedorService;

  constructor(private injector: Injector, private toastr: ToastrService) {
    this.service = this.injector.get(FornecedorService);
    this.router = this.injector.get(Router);
    this.createForm();
  }

  createForm() {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      nome: this.fb.control(null, [Validators.required]),
      email: this.fb.control(null, [Validators.required, Validators.email]),
      loja: this.fb.control(null, [Validators.required]),
      imagem: this.fb.control(null)
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.controls['imagem'].setValue(reader.result.split(',')[1]);
      };
    }
  }

  onSubmit() {
    if (this.form.valid) {
      this.service.save(this.form.value).subscribe(() => {
        this.toastr.success('Operação realizada com sucesso ', 'Sucesso');
        this.navigate(['/pages/fornecedor']);
      });
    }
  }

  navigate(commands: any[], extras: NavigationExtras = {}): Promise<boolean> {
    return this.router.navigate(commands, extras);
  }
}
