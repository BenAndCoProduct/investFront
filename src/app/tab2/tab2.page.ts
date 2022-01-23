import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { InvestService } from '../api/invest.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  actifInvests:any;
  users:any;
  name:any;

  constructor(public investService: InvestService,private activatedRoute: ActivatedRoute,
    private route: Router ) {
  
 
  }

  ngOnInit(): void {
 
   
  }

  
  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.name= this.activatedRoute.snapshot.paramMap.get('name');
    this.getInvests();
  }

  public getInvests(): any{
    
    this.investService.getInvestforSourceUser(this.name).subscribe(response => {
      this.actifInvests=response.actifInvests;
    })

    
  }

 
  

}
