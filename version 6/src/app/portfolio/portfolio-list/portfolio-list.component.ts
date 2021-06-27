import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-list',
  templateUrl: './portfolio-list.component.html',
  styleUrls: ['./portfolio-list.component.scss']
})
export class PortfolioListComponent implements OnInit {

  // The list of articles displayed on this page
  @Input() contentList: any[] = [];

  numRows: number = 0;
  sortedRowsWithItems: Array<Array<Content>> = [];

  constructor() { }

  // number of items per row and array of items. result = [['a','b'], ['c','d'], ['e']]
  ngOnInit(): void {
    this.numRows = Math.ceil(this.contentList.length/3);
    this.sortedRowsWithItems = this.createRows();
  }

  // Determines the number of rows, splits it into 3 projects per row (sub-array)  
  createRows() {
    var perChunk = 3
    var inputArray = this.contentList;
    // compile data structure
    var result = inputArray.reduce((resultArray, item, index) => { 
      // index of sub-array (chunk)
      const chunkIndex = Math.floor(index/perChunk)
      // start a new chunk
      if(!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] 
      }
      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])

    return result;
  }

}
