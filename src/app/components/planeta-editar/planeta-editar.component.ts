import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planetas } from 'src/app/planetas';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-planeta-editar',
  templateUrl: './planeta-editar.component.html',
  styleUrls: ['./planeta-editar.component.scss']
})
export class PlanetaEditarComponent implements OnInit {

  id:any;
  planeta = new Planetas();
  data:any;
  personas:any;
  datap:any;

  constructor(
    private route:ActivatedRoute,
    private dataService: DataService
  ) { }

  // se ejecuta primero, traigo los datos del planeta y las personas del planeta
  // en id se guarda el id del planeta que viene por parametro
  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.getPersonasPlaneta();
  }

  getData(){
    this.dataService.getPlanetaByid(this.id).subscribe( res =>{
      //console.log(res);
      this.data = res;
      this.planeta = this.data;
    });
  }

  updatePlaneta(){
    console.log(this.planeta);
    this.dataService.updatePlanetaData(this.id,this.planeta).subscribe(res =>{
      console.log(res);
    });
  }

  getPersonasPlaneta(){
    this.dataService.getDataPersonasPlaneta(this.id).subscribe( res =>{
      this.datap = res;
      this.personas = this.datap;
      console.log(this.personas);
    });
  }

}
