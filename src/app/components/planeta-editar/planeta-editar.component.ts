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

  constructor(
    private route:ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
   // console.log(this.route.snapshot.params.id);
   this.id = this.route.snapshot.params.id;
   this.getData();
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

}
