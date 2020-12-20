import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TerrainService {
  private url = 'http://localhost:8080/pi/api/terrain/terrains';
  private url1 = 'http://localhost:8080/pi/api/terrain/terrains/user';
private url2='http://localhost:8080/pi/api/terrain/terrains/reservations';
private url3='http://localhost:8080/pi/api/terrain/terrains/reservations/like';

  constructor(private http: HttpClient) {

  }

  createTerrain(terrain: Object): Observable<Object> {
    return this.http.post(`${this.url}`, terrain);
  }

  getTerrains(): Observable<any> {
    return this.http.get(`${this.url}`);
  }

  getTerrainById(id: number): Observable<any> {
    return this.http.get(`${this.url}/${id}`);
  }
  getTerrainUser(id: number): Observable<any> {
    return this.http.get(`${this.url1}/${id}`);
  }
  update(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url}/${id}`, value);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.url}/${id}`, { responseType: 'text' });
  }

  createReservation(reservation: Object): Observable<Object> {
    return this.http.post(`${this.url2}`, reservation);
  }
    incrementLike(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.url3}/${id}`, value);
  }

}
