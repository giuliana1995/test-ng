import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map } from 'rxjs';
import { call } from '../interface/interface';
@Injectable({
  providedIn: 'root'
})
export class CallService {
  form_params_call: Array<call>  = []
  url!:string; 
  api_data: Array<call> = []

  dati_dettagli_call: any = [];
 
  constructor(private http: HttpClient) { }
  
  
  getData() {
    return this.http.get(this.url);
  
  }

  apiData(){
    this.getData().pipe(
      map((data:any) => this.api_data.push(data))
    ).subscribe(),(err:HttpErrorResponse)=>{console.log(err)}
    }
  
  }