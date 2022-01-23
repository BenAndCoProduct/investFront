import { Component, OnInit, ViewChild } from '@angular/core';
import {  FormGroup, FormBuilder, Validators }  from "@angular/forms";
import { InvestService } from '../api/invest.service';


@Component({
  selector: 'source',
  templateUrl: './source.page.html',
  styleUrls: ['./source.page.scss'],
})
export class SourcePage implements OnInit {

  ionicForm2: FormGroup;
  defaultDate = "1987-06-30";
  isSubmitted = false;



  source:any;

  constructor(public formBuilder: FormBuilder,public investService: InvestService) { }
  ngOnInit() {
    this.ionicForm2 = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      source: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      dob: [this.defaultDate],
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }


  get errorControl() {
    return this.ionicForm2.controls;
  }

  submitForm() {
    this.isSubmitted = true;
    if (!this.ionicForm2.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log(this.ionicForm2.value)
    }
  }

}
