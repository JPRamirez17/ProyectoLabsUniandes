import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Laboratorio } from '../laboratorio';
import { LaboratoriosService } from '../laboratorios.service';

@Component({
  selector: 'app-laboratorios-detail',
  templateUrl: './laboratorios-detail.component.html',
  styleUrls: ['./laboratorios-detail.component.css']
})
export class LaboratoriosDetailComponent implements OnInit {

  @Input() laboratorio: Laboratorio;
  labId: number;

  constructor(private route: ActivatedRoute,
              private laboratorioservice: LaboratoriosService) { }

  getLaboratorio(): void {
    this.laboratorioservice.getLaboratoriosList()
        .subscribe(laboratorios => this.laboratorio = laboratorios.find((laboratorio) => laboratorio.id === this.labId));
  }

  scoreColor(score: number): string {
    let color: string = '#298acd';
    if (score < 4.5) {
      color = '#eb5449';
    }
    return color;
  }

  ngOnInit(): void {
    if (this.laboratorio === undefined) {
      console.log('routerLink');
      this.labId = +this.route.snapshot.paramMap.get('id');
      this.getLaboratorio();

    } else {
      console.log('Input');
      console.log(this.laboratorio.id);
    }
  }

}
