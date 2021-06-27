import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coding-post',
  templateUrl: './coding-post.component.html',
  styleUrls: ['./coding-post.component.css']
})
export class CodingPostComponent implements OnInit {

  post: string; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/articles/coding-posts/' +  articleName + '.md';
  }

}
