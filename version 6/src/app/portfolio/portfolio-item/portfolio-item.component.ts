import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styleUrls: ['./portfolio-item.component.scss']
})
export class PortfolioItemComponent implements OnInit {

  post: string;
  href: string;

  constructor(private route: ActivatedRoute) { }

  // Opens the content for that individual page (located in ./assets/portfolio/articles/articleName)
  ngOnInit(): void {
    let articleName = this.route.snapshot.paramMap.get('project'); 
    this.href = window.location.href; 
    this.post = './assets/portfolio/articles/' +  articleName + '.md';
  }

}
