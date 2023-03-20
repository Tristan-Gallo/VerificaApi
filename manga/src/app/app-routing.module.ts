import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchMangaComponent } from './search-manga/search-manga.component';
import { ItemMangaComponent } from './item-manga/item-manga.component';

const routes: Routes = [
  { path: 'search-manga', component: SearchMangaComponent },
  { path: 'item-manga/:id', component: ItemMangaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
