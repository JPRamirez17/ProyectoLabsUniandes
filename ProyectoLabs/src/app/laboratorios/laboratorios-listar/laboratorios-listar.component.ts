import { Component, OnInit } from '@angular/core';

import { Laboratorio } from '../laboratorio';
import { LaboratoriosService } from '../laboratorios.service';

@Component({
  selector: 'app-laboratorios-listar',
  templateUrl: './laboratorios-listar.component.html',
  styleUrls: ['./laboratorios-listar.component.css']
})
export class LaboratoriosListarComponent implements OnInit {

  constructor(private laboratoriosService: LaboratoriosService) { }
  laboratorios: Array<Laboratorio>;

  getLaboratoriosList(): void {
    this.laboratoriosService.getLaboratoriosList()
        .subscribe(laboratorios => this.laboratorios = laboratorios);
  }

  ngOnInit(): void {
    this.getLaboratoriosList();
  }

}
