import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/service.index';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {
  // importo el sidebar service para poder usar esa propiedad
  // en este caso no lo traigo del sidebar settings si no del que esta compartido o el centralizado en este caso el service.index
  constructor( public _sidebar: SidebarService ) { }

  ngOnInit(): void {
  }

}
