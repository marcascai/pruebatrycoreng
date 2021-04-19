import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private httpClient:HttpClient
  ) { }

  getData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/personas');
  }

  insertData(data) {
    return this.httpClient.post('http://127.0.0.1:8000/api/addpersona',data);
  }

  deleteData(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deletepersona/'+id);
  }

  getPersonaByid(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/personas/'+id);
  }

  updateData(id, data) {
    return this.httpClient.put('http://127.0.0.1:8000/api/updatepersona/'+id, data);
  }

  getDataTopPersonas() {
    return this.httpClient.get('http://127.0.0.1:8000/api/personastop');
  }

  //Planetas
  getPlanetasData() {
    return this.httpClient.get('http://127.0.0.1:8000/api/planetas');
  }

  insertPlanetaData(data){
    return this.httpClient.post('http://127.0.0.1:8000/api/addplaneta',data);
  }

  getPlanetaByid(id) {
    return this.httpClient.get('http://127.0.0.1:8000/api/planetas/'+id);
  }

  updatePlanetaData(id, data) {
    return this.httpClient.put('http://127.0.0.1:8000/api/updateplaneta/'+id, data);
  }

  deletePlanetasData(id) {
    return this.httpClient.delete('http://127.0.0.1:8000/api/deleteplaneta/'+id);
  }

  getDataTopPlanetas() {
    return this.httpClient.get('http://127.0.0.1:8000/api/planetastop');
  }
}
