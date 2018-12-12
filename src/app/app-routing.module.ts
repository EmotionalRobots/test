import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviecompComponent } from './Restful/moviecomp/moviecomp.component';
import { NotekeeperComponent } from './Restful/notekeeper/notekeeper.component';
import { AddNoteComponent } from './Restful/notekeeper/add-note/add-note.component';
import { UpdateNoteComponent } from './Restful/notekeeper/update-note/update-note.component';
import { UsersComponent } from './Assignment1/users/users.component';
import { PostsComponent } from './Assignment1/posts/posts.component';
import { ViewUserPostsComponent } from './Assignment1/view-user-posts/view-user-posts.component';
import { ChildComponent } from './Assignment1/users/child/child.component';
import { NamesComponent } from './Assignment2/names/names.component';
import { WeatherComponent } from './Weather/weather/weather.component';
import { ForecastComponent } from './Weather/weather/forecast/forecast.component';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { ContactsComponent } from './Node/contacts/contacts.component';

const routes: Routes = [
  {
    path: 'rest',
    component: MoviecompComponent
  },
  {
    path: 'noteKeeperHome',
    component: NotekeeperComponent
  },
  {
    path: 'addNote',
    component: AddNoteComponent
  },
  {
    path: 'updateNote',
    component: UpdateNoteComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }, {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'viewUsersPosts',
    component: ViewUserPostsComponent
  }, {
    path: 'child',
    component: ChildComponent
  }, {
    path: 'assign2',
    component: NamesComponent
  }, {
    path: 'weather',
    component: WeatherComponent
  }, {
    path: 'forecast',
    component: ForecastComponent
  }, {
    path: 'imageSelector',
    component: ImageSelectorComponent
  }, {
    path: 'contacts',
    component: ContactsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
