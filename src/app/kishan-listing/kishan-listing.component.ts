import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListingService } from './listingService';

var data = require('../Shared/Config/config.json');


@Component({
  selector: 'app-kishan-listing',
  templateUrl: './kishan-listing.component.html',
  styleUrls: ['./kishan-listing.component.scss']
})
export class KishanListingComponent implements OnInit {
  productId:any;
  stateId:any;
  faramerList:any;
  constructor(private route :ActivatedRoute,private listingService:ListingService) { 
    this.productId = this.route.snapshot.queryParamMap.get('productId');
    this.stateId =this.route.snapshot.queryParamMap.get('stateId');
  
    console.log(this.productId)
  }

  ngOnInit(): void {
    let tempData=data.farmerList;
    console.log(tempData)
    let faramerListArray=[];
    this.faramerList= tempData.filter(item=>item.productId === parseInt( this.productId )&&  item.stateId === parseInt(this.stateId)  );
    console.log(this.faramerList);
   //this.getFarmerList();
  }

  getFarmerList(){
   this.listingService.getFarmersList(this.productId,this.stateId).subscribe((data:any)=>{
    this.faramerList=data;
   }
 
   )
  }

}
