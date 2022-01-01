import { Component,OnInit } from '@angular/core';
import { InvestService } from '../api/invest.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  invests:any;
  users:any;
  constructor(public investService: InvestService ) {
   

  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getInvests();
  }

  public getInvests(): any{
    this.investService.getList().subscribe(response => {
      this.users = response;
      this.invests=this.users[0].investments;
    })
    
  }
 
  ngOnInit() {
    // this.getAllStudents();
  
  }
  names = [{ name:'Real T', price:2000},
  { name:'lofty', price:3000}];

}
