import { Component, OnInit, OnDestroy } from '@angular/core';
import { SplashService } from './splashService'
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Router } from '@angular/router';
import { EmitterService } from '../Shared/EmitterService/emiiterService';



@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, OnDestroy {

  constructor(private splashService: SplashService, private router: Router, private emitterService: EmitterService) { }
  private unsubscribe: Subject<void> = new Subject();

  productsData: any;
  statesData: any

  ngOnInit(): void {
    this.getProducts();
    this.getLocations();
  }


  getProducts() {
    this.splashService.getProducts().pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
      this.productsData = data;
    })
  };

  getLocations() {
    this.splashService.getLocations().subscribe((data: any) => {
      this.statesData = data;
    })
  };

  search() {
    this.emitterService.headerShow.emit(true);
    this.router.navigate(['/listing'])
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
