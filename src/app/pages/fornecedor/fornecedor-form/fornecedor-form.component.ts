import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FornecedorService} from '../../../service/fornecedor.service';

@Component({
  selector: 'app-fornecedor-form',
  templateUrl: './fornecedor-form.component.html',
  styleUrls: ['./fornecedor-form.component.scss']
})
export class FornecedorFormComponent {

  form: FormGroup;
  fb: FormBuilder;
  @ViewChild('fileInput') fileInput: ElementRef;
  private service: FornecedorService;

  constructor(private injector: Injector) {
    this.service = this.injector.get(FornecedorService);
    this.createForm();
  }

  createForm() {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      nome: [null, Validators.required],
      email: [null, Validators.required],
      loja: [null, Validators.required],
      imagem: null
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
    const formModel = this.form.value;
    this.service.save(this.form.value).subscribe(() => { });
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
    }, 1000);
  }
}
