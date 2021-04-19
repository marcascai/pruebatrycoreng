import { Component, OnInit } from '@angular/core';
import { Planetas } from 'src/app/planetas';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-planetas',
  templateUrl: './planetas.component.html',
  styleUrls: ['./planetas.component.scss']
})
export class PlanetasComponent implements OnInit {
  planetas:any;
  planeta = new Planetas();

  constructor(
    private DataService:DataService
  ) { }

  ngOnInit(): void {
    this.getPlanetasdata();
  }

  getPlanetasdata(){
    this.DataService.getPlanetasData().subscribe(res =>{
      //console.log(res);
      this.planetas = res;
    });
  }

  insertData(){
    this.planeta.visitas = 0;
    this.DataService.insertPlanetaData(this.planeta).subscribe(res =>{
      this.getPlanetasdata();
    });    
  }

  deleteData(id){
    this.DataService.deletePlanetasData(id).subscribe(res =>{
      //console.log(res);
      this.getPlanetasdata();
    });
  }

}
