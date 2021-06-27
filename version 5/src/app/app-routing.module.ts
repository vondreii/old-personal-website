import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, Router } from '@angular/router';
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

const routes: Routes = [
  { path: '', component: WebdevComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },

  // Webdev posts
  { path: 'webdev', component: WebdevComponent },
  { path: 'webdev/post/:article', component: WebdevPostComponent },

  // Coding posts
  { path: 'coding', component: CodingComponent },
  { path: 'coding/post/:article', component: CodingPostComponent },

  // Students posts
  { path: 'students', component: StudentsComponent },
  { path: 'students/post/:article', component: StudentsPostComponent },

  // Projects
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/post/:article', component: ProjectPostComponent },

  // Photography pages
  { path: 'photography', component: PhotographyComponent },
  { path: 'photography/blue-mountains', component: PhotographyLocationComponent },
  { path: 'photography/central-coast', component: PhotographyLocationComponent },
  { path: 'photography/hobart', component: PhotographyLocationComponent },
  { path: 'photography/hunter-valley', component: PhotographyLocationComponent },
  { path: 'photography/manila', component: PhotographyLocationComponent },
  { path: 'photography/melbourne', component: PhotographyLocationComponent },
  { path: 'photography/newcastle', component: PhotographyLocationComponent },
  { path: 'photography/rural-philippines', component: PhotographyLocationComponent },
  { path: 'photography/sydney', component: PhotographyLocationComponent },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
