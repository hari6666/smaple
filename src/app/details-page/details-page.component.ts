import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

let data = require('../Shared/Config/config.json');

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss']
})
export class DetailsPageComponent implements OnInit {
  farmerId: any;
  detailsData: any;
  farmerDetails: any;
  present: boolean = true;
  past: boolean = false;
  constructor(private route: ActivatedRoute) {
    this.farmerId = this.route.snapshot.queryParamMap.get('productId');
  }

  ngOnInit(): void {
    this.detailsData = data.detailPage[0];
    console.log(this.presentCultivation)
  }

  presentCultivation() {
    console.log("present")
    this.present = true;
    this.past = false
  };
  pastCultivation() { 
    console.log("past")
    this.present = false;
    this.past = true
  }
  getDetails() {
  
  }

}
