import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { SidebarModule } from 'ng-sidebar';
import { MatTableModule } from '@angular/material/table';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviecompComponent } from './Restful/moviecomp/moviecomp.component';
import { MovieserviceService } from './Restful/movieservice.service';
import { HttpClientModule } from '@angular/common/http';
import { NotekeeperComponent } from './Restful/notekeeper/notekeeper.component';
import { AddNoteComponent } from './Restful/notekeeper/add-note/add-note.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UpdateNoteComponent } from './Restful/notekeeper/update-note/update-note.component';
import { PostsComponent } from './Assignment1/posts/posts.component';
import { UsersComponent } from './Assignment1/users/users.component';
import { ViewUserPostsComponent } from './Assignment1/view-user-posts/view-user-posts.component';
import { UserIdPipe } from './user-id.pipe';
import { ChildComponent } from './Assignment1/users/child/child.component';
import { PostsService } from './Assignment1/posts.service';
import { NamesComponent } from './Assignment2/names/names.component';
import { StudentsComponent } from './Assignment2/students/students.component';
import { PopDropDownComponent } from './Assignment2/pop-drop-down/pop-drop-down.component';
import { WeatherComponent } from './Weather/weather/weather.component';
import { WeatherService } from './Weather/weather.service';
import { ForecastComponent } from './Weather/weather/forecast/forecast.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { ImageSelectorComponent } from './image-selector/image-selector.component';
import { ContactsComponent } from './Node/contacts/contacts.component';
@NgModule({
  declarations: [
    AppComponent,
    MoviecompComponent,
    NotekeeperComponent,
    AddNoteComponent,
    UpdateNoteComponent,
    PostsComponent,
    UsersComponent,
    ViewUserPostsComponent,
    UserIdPipe,
    ChildComponent,
    NamesComponent,
    StudentsComponent,
    PopDropDownComponent,
    WeatherComponent,
    ForecastComponent,
    ImageSelectorComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    SidebarModule,
    HttpClientModule,
    MatTableModule,
    MatInputModule,
    FormsModule,
    CommonModule,
    ChartsModule,
    MatGridListModule

  ],
  providers: [MovieserviceService, PostsService, WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
