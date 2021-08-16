import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api=environment.api;
  constructor(private http:HttpClient) { }

postresponse(message):Observable<any>{
  return this.http.post(this.api+'chat',message)
}
}
