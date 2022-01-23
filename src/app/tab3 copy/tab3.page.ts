import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormGroup, FormBuilder, Validators }  from "@angular/forms";
import { InvestService } from '../api/invest.service';

import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';



@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {
  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;

  ionicForm: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;


  dateValue = '';
  dateValue2 = '';
  users: any[] = [
    {
      id: 1,
      first: 'Alice',
      last: 'Smith',
    },
    {
      id: 2,
      first: 'Bob',
      last: 'Davis',
    },
    {
      id: 3,
      first: 'Charlie',
      last: 'Rosenburg',
    }
  ];

  invests: any;

  blabla: any={
    source: "ok",
    user: "ben"
  };


  constructor(public formBuilder: FormBuilder,public investService: InvestService) { }

  ngOnInit() {
    this.ionicForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      source: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  getDate(e) {
    let date = new Date(e.target.value).toISOString().substring(0, 10);
    this.ionicForm.get('dob').setValue(date, {
      onlyself: true
    })
  }

  get errorControl() {
    return this.ionicForm.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm.value)
    }
  }

  ionViewWillEnter() {
    // Used ionViewWillEnter as ngOnInit is not 
    // called due to view persistence in Ionic
    this.getInvests();
    this.investService.createSource(this.blabla).subscribe(response => {
    
    })
  }

  public getInvests(): any{
   this.invests= this.investService.invests;
    
  }

  confirm() {
    this.datetime.confirm();
  }
  
  reset() {
    this.datetime.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

}
