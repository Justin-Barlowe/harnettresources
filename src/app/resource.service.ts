// Resource Service

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResourceService {

  // Define the API endpoint
  private apiUrl = 'http://localhost:3000/api/resources'

  // Inject the HttpClient module
  constructor(private http: HttpClient) { }


  getResources(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}`);
  }

}
