import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) { }

  searchItems(query: string) {
    const url = `https://api.jikan.moe/v4/manga?q=dash kappei${query}`
    return this.http.get(url)
    

  }
}