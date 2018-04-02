import {Component, ElementRef, Injector, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-evento-form',
  templateUrl: './evento-form.component.html',
  styleUrls: ['./evento-form.component.scss']
})
export class EventoFormComponent {

  form: FormGroup;
  fb: FormBuilder;
  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private injector: Injector) {
    this.createForm();
  }

  createForm() {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      nome: [null, Validators.required],
      categoria: [null, Validators.required],
      avatar: null
    });
  }

  onFileChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.controls['avatar'].setValue(reader.result.split(',')[1]);
      };
    }
  }

  onSubmit() {
    const formModel = this.form.value;
    // In a real-world app you'd have a http request / service call here like
    // this.http.post('apiUrl', formModel)
    setTimeout(() => {
      console.log(formModel);
      alert('done!');
    }, 1000);
  }
}
