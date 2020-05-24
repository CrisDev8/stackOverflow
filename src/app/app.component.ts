import { Component, OnInit } from '@angular/core';
import { ServiciosService } from './services/servicios.service';
import { Principal } from './models/principal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'Comunidad';
  public datos: Principal[];

  constructor(
    private servicios: ServiciosService
  ) {
  }

  ngOnInit(): void {
    this.servicios.cargarData().subscribe((res: Principal[]) => {
      console.log(res);
      this.datos = res;
    });
  }
}
