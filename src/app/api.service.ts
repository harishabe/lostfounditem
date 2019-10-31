import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './model/model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getConfig(configUrl) {
    return this.http.get(configUrl);
  }

  postData(url, data) {
    return this.http.post(url, data);
  }


}
