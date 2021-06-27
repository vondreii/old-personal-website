// General Imports and Routing
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
// Imports for Components
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { PageManagerComponent } from './page-manager/page-manager.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';

const routes: Routes = [
  { path: '', component: PageManagerComponent },
  // Portfolio and Blog lists
  { path: 'portfolio', component: PageManagerComponent },
  { path: 'blog', component: PageManagerComponent },
  // Individual pages
  { path: 'portfolio/:project', component: PortfolioItemComponent },
  { path: 'blog/:article', component: BlogPostComponent },
  // About and contact
  { path: 'about-me', component: AboutMeComponent },
  { path: 'contact', component: ContactComponent },
  
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
