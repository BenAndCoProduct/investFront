import { Component,OnInit } from '@angular/core';
import { InvestService } from '../api/invest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  invests:any;
  constructor(public investService: InvestService ) {
   

  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getInvests();
  }

  public getInvests(): any{
   this.invests= this.investService.invests;
    
  }
 
  ngOnInit() {}  
  

}
