import { Component } from '@angular/core';
import { EmitterService } from './Shared/EmitterService/emiiterService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'Hackathon';
  headerShow : string;
  param1: any;

  constructor(private emitterService:EmitterService,private route:ActivatedRoute ,private router:Router ){
    this.param1 = this.route.snapshot.params.param1;
  
  }

  ngOnInit(): void {
    this.headerShow=window.location.pathname;
  }
}
