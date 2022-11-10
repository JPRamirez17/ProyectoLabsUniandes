import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Laboratorio } from './laboratorio';

@Injectable({
  providedIn: 'root'
})
export class LaboratoriosService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  /**
   * Retorna el objeto Observable con la lista de todos los laboratorios del API.
   * @returns lista de laboratorios con toda su información.
   */
  getLaboratoriosList(): Observable<Array<Laboratorio>> {
    return this.http.get<Array<Laboratorio>>(this.baseUrl);
  }
}
