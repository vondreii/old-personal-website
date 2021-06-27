import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-students-post',
  templateUrl: './students-post.component.html',
  styleUrls: ['./students-post.component.css']
})
export class StudentsPostComponent implements OnInit {

  post: string; 

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    let articleName = this.route.snapshot.paramMap.get('article');
    this.post = './assets/articles/students-posts/' +  articleName + '.md';
  }

}
