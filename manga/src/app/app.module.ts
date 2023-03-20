import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMangaComponent } from './search-manga/search-manga.component';
import { ItemMangaComponent } from './item-manga/item-manga.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchMangaComponent,
    ItemMangaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
