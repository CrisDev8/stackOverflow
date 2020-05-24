import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Principal } from '../models/principal';

@Injectable({
  providedIn: 'root'
})
export class ServiciosService {

  constructor(
    private http: HttpClient
  ) { }

  cargarData(): Observable<Principal[]> {
    const url = `assets/prueba.json`;
    return this.http.get<Principal[]>(url);
  }
}
