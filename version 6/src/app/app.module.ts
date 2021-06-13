import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext  } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { ContactComponent } from './contact/contact.component';

// Imports for Markdown
import { MarkdownModule } from 'ngx-markdown';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BlogPostComponent } from './blog/blog-post/blog-post.component';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { PageManagerComponent } from './page-manager/page-manager.component';
import { PortfolioListComponent } from './portfolio/portfolio-list/portfolio-list.component';
import { PortfolioItemComponent } from './portfolio/portfolio-item/portfolio-item.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    ContactComponent,
    BlogPostComponent,
    BlogListComponent,
    PageManagerComponent,
    PortfolioListComponent,
    PortfolioItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({ loader: HttpClient, sanitize: SecurityContext.NONE })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
