import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { postData, respData} from './postdataObj';
import {Observable, throwError, of} from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class DataService {
  //baseUrl:string = "https://jobs.github.com/positions.json?description=angular&location=new+york";
  baseUrl:string = "http://jobs.github.com/positions.json?description=python&location=new+york";
  postUrl: string = "https://jsonplaceholder.typicode.com/posts";
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };
  constructor(private httpClient : HttpClient) { 

  }
  
  get_jobs(){
    return this.httpClient.get(this.baseUrl);
  }

  addPost (postD: postData) {
    return this.httpClient.post(this.postUrl, postD, this.httpOptions);
    //return this.httpClient.post<postData>(this.postUrl, postD, this.httpOptions);
    /*return this.httpClient.post<postData>(this.postUrl, postD, this.httpOptions)
      .pipe(
        catchError(err => {
          return of(null);
        })
      );
      */
  }
 
 
  

}