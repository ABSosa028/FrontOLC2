import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import  salida  from 'src/app/models/salida';

@Injectable({
    providedIn: 'root'
  })
  export class AnalisisService {
    //url = 'http://localhost:8000/';
     url = 'http://18.119.104.18:80/';
    constructor(private httpClient: HttpClient) { }

    interpretar(data:any){
      return this.httpClient.post<salida>(this.url+'interpretar', data);
    }


  }
  