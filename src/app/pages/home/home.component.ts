import {Component, Injector, OnInit} from '@angular/core';
import {EventoModel} from '../../model/evento.model';
import {EventoService} from '../../service/evento.service';
import {TipoEventoEnum} from '../../enum/tipo-evento.enum';
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public loading = false;
  form: FormGroup;
  fb: FormBuilder;
  tipos = TipoEventoEnum;
  eventos: EventoModel[];
  private eventoService: EventoService;

  constructor(private injector: Injector) {
    this.loading = true;
    this.eventos = new Array();
    this.eventoService = this.injector.get(EventoService);
  }

  ngOnInit() {
    this.createForm();
    this.eventoService.getList().subscribe((res: EventoModel[]) => {
      this.eventos = res;
      this.loading = false;
    });
  }

  createForm(): void {
    this.fb = this.injector.get(FormBuilder);
    this.form = this.fb.group({
      nome: this.fb.control(null),
      tipo: this.fb.control(null)
    });
  }

}
