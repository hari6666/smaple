import { Component, OnInit, OnDestroy } from '@angular/core';
import { SplashService } from './splashService'
import { Subscription, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';



@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.scss']
})
export class SplashComponent implements OnInit, OnDestroy {

  constructor(private splashService: SplashService) { }
  private unsubscribe: Subject<void> = new Subject();

  ngOnInit(): void {
    this.getProducts()
  }


  getProducts() {
    this.splashService.getProducts().pipe(takeUntil(this.unsubscribe)).subscribe((data: any) => {
      console.log("hi")
    })
  };

  getLocations() {
    this.splashService.getLocations().subscribe((data: any) => {
      console.log("hi")
    })
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
