import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.scss']
})
export class PersonasComponent implements OnInit {
  personas:any;
  persona = new Persona();
  planetas:any;

  constructor(
    private DataService:DataService
  ) { }

  ngOnInit(): void {
    this.getPersonasdata();
    this.getPlanetasdata();
  }

  getPersonasdata(){
    this.DataService.getData().subscribe(res =>{
      //console.log(res);
      this.personas = res;
    });
  }

  insertData(){
    this.persona.visitas = 0;
    this.DataService.insertData(this.persona).subscribe(res =>{
      this.getPersonasdata();
    });    
  }

  deleteData(id){
    this.DataService.deleteData(id).subscribe(res =>{
      //console.log(res);
      this.getPersonasdata();
    });
  }

  // Planetas para el select
  getPlanetasdata(){
    this.DataService.getPlanetasData().subscribe(res =>{
      //console.log(res);
      this.planetas = res;
    });
  }
  

}
