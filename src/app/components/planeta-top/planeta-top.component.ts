import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-planeta-top',
  templateUrl: './planeta-top.component.html',
  styleUrls: ['./planeta-top.component.scss']
})
export class PlanetaTopComponent implements OnInit {
  planetas:any;

  constructor(
    private DataService:DataService
  ) { }

  ngOnInit(): void {
    this.getPlanetasdata();
  }

  getPlanetasdata(){
    this.DataService.getDataTopPlanetas().subscribe(res =>{
      //console.log(res);
      this.planetas = res;
    });
  }

}
