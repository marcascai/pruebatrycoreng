import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Persona } from 'src/app/persona';
import { DataService } from 'src/app/service/data.service';


@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.scss']
})
export class PersonaEditarComponent implements OnInit {
  id:any;
  persona = new Persona();
  data:any;
  planetas:any;
  constructor(
    private route:ActivatedRoute,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.getPlanetasdata();
  }

  getData(){
    this.dataService.getPersonaByid(this.id).subscribe( res =>{
      this.data = res;
      this.persona = this.data;
    });
  }

  updatePersona(){
    this.dataService.updateData(this.id,this.persona).subscribe(res =>{
      console.log(res);
    });
    console.log("editar");
  }

  // Planetas para el select
  getPlanetasdata(){
    this.dataService.getPlanetasData().subscribe(res =>{
      //console.log(res);
      this.planetas = res;
    });
  }

}
