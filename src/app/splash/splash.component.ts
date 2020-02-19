import { Component, OnInit, OnDestroy } from '@angular/core';
import { SplashService } from './splashService'
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmitterService } from '../Shared/EmitterService/emiiterService';
import { FormGroup, FormBuilder } from '@angular/forms';
//import  *  as  data  from  '../Shared/Config/config.json';

var data = require('../Shared/Config/config.json');



@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, OnDestroy {

  constructor(private splashService: SplashService, private router: Router, private emitterService: EmitterService, private _fb: FormBuilder) { }
  private unsubscribe: Subject<void> = new Subject()

  productsData: any;
  statesData: any;
  productForm: FormGroup;
  productId: any;
  stateId: any;

  ngOnInit(): void {
    this.productsData=data.products;
    this.statesData=data.states;
    // this.getProducts();
    // this.getLocations();
    this.setFormControls()
  };


  setFormControls() {
    this.productForm = this._fb.group({
      product: [''],
      state: ['']
    })
  }


  getProducts() {
    this.splashService.getProducts().pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
      this.productsData = data;
    })
  };

  getLocations() {
    this.splashService.getLocations().pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
      this.statesData = data;
    })
  };

  productList(e) {
    this.productId = this.productForm.get('product').value;
    this.stateId = this.productForm.get('state').value;
  }
  stateList(e) {

  }

  search() {
    this.emitterService.headerShow.emit(true);
    this.router.navigate(['/listing'], { queryParams: { 'productId': this.productId,'stateId':this.stateId } });
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
