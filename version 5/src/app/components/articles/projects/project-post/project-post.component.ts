import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-post',
  templateUrl: './project-post.component.html',
  styleUrls: ['./project-post.component.css']
})
export class ProjectPostComponent implements OnInit {

  post: string; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/articles/projects-posts/' +  articleName + '.md';
  }

}
