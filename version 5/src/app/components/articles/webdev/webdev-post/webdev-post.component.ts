import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-webdev-post',
  templateUrl: './webdev-post.component.html',
  styleUrls: ['./webdev-post.component.css']
})
export class WebdevPostComponent implements OnInit {

  post: string; 
  href: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.href = window.location.href;
    this.post = './assets/articles/web-dev-posts/' +  articleName + '.md';
  }
}
