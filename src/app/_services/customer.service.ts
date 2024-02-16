import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as txml from 'txml';


@Injectable({ providedIn: 'root' })
export class CustomerService {
    constructor(private http: HttpClient) { }


    getAll() {


       this.http.get('http://localhost:8081/api/customers/cs')
      .subscribe(data => {
console.log(data);
        return data;

      });    }

 

}

