import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://www.bikezona.com/ionic/crud_tiendas.php'; // Cambia esta URL a la dirección de tu API

  constructor(private http: HttpClient) {}

  getUsers(): Observable<any> {
  
    console.log ("service: ");
    return this.http.get(`${this.apiUrl}`);
  

  }

  getUser(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}?id=${id}`);
  }

  addUser(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  updateUser(id: number, user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}?id=${id}`, user, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    });
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}?id=${id}`);
  }
}
