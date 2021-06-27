import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';

// Markdown Files
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http'; 

// Angular Fire Modules
import { AngularFireModule } from "@angular/fire";
import { AngularFireAnalyticsModule } from "@angular/fire/analytics";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from "@angular/fire/storage";

// Environment Files
import { environment } from "../environments/environment"; 

// App Files
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/articles/projects/projects.component';
import { ProjectPostComponent } from './components/articles/projects/project-post/project-post.component';
import { PhotographyComponent } from './components/photography/photography.component';
import { PhotographyLocationComponent } from './components/photography/photography-location/photography-location.component';
import { WebdevComponent } from './components/articles/webdev/webdev.component';
import { WebdevPostComponent } from './components/articles/webdev/webdev-post/webdev-post.component';
import { CodingComponent } from './components/articles/coding/coding.component';
import { CodingPostComponent } from './components/articles/coding/coding-post/coding-post.component';
import { StudentsComponent } from './components/articles/students/students.component';
import { StudentsPostComponent } from './components/articles/students/students-post/students-post.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ContactComponent,
    AboutComponent,
    ProjectsComponent,
    ProjectPostComponent,
    PhotographyComponent,
    PhotographyLocationComponent,
    WebdevComponent,
    WebdevPostComponent,
    CodingComponent,
    CodingPostComponent,
    StudentsComponent,
    StudentsPostComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  exports: [NavbarComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }