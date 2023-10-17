import { Component } from '@angular/core';


@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent  {

  showMore:boolean=false;
  
  btnShowMore = [
    {
      text: 'ver mais'
    }
  ]


  toogleTag()
  {
    this.showMore=!this.showMore
    
    this.btnShowMore = [
      {
        text: 'ver menos'
      }
    ]
  }
}

