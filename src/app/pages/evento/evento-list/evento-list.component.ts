import {Component, Injector, OnInit} from '@angular/core';
import {EventoModel} from '../../../model/evento.model';
import {EventoService} from '../../../service/evento.service';

@Component({
  selector: 'app-evento-list',
  templateUrl: './evento-list.component.html',
  styleUrls: ['./evento-list.component.scss']
})
export class EventoListComponent implements OnInit {

  public loading = false;
  list: EventoModel[] = new Array();
  private service: EventoService;

  constructor(private injector: Injector) {
    this.service = this.injector.get(EventoService);
  }

  ngOnInit() {
    this.loading = true;
    this.service.getList().subscribe((res: EventoModel[]) => {
      this.list = res;
      this.loading = false;
    });
  }

}
