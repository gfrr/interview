import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ApiService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com';
  constructor(
    private http: Http
  ) { }

  getData(){
    return this.http.get(`${this.BASE_URL}/posts`)
        .map((res: Response)=>{
          return res.json();
        })
  }

  //this would be the delete call for the api
  // deletePost(id){
  //   return this.http.delete(`${this.BASE_URL}/posts/${id}`)
  //     .map((res: Response)=>{
  //       return res.json();
  //     })
  // }


}
