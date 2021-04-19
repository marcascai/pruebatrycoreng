import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-persona-top',
  templateUrl: './persona-top.component.html',
  styleUrls: ['./persona-top.component.scss']
})
export class PersonaTopComponent implements OnInit {
  personas:any;

  constructor(
    private DataService:DataService
  ) { }

  ngOnInit(): void {
    this.getPersonasdata();
  }

  getPersonasdata(){
    this.DataService.getDataTopPersonas().subscribe(res =>{
      //console.log(res);
      this.personas = res;
    });
  }

}
