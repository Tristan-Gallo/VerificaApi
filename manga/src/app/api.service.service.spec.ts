import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'https://api.jikan.moe/v4/manga?q=dash kappei';

  constructor(private http: HttpClient) {}

  searchManga(title: string): Observable<any> {
    const url = `${this.apiUrl}/search?title=${title}`;
    return this.http.get(url);
  }

  getMangaDetails(id: number): Observable<any> {
    const url = `${this.apiUrl}/manga/${id}`;
    return this.http.get(url);
  }
}