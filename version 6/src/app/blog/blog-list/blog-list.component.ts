import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {

  // The list of articles displayed on this page
  @Input() contentList: any[] = [];
  @Input() currentPage: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

}
