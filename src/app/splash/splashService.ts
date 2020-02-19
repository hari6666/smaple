import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../Shared/APIService/commonService'


@Injectable({
    providedIn: 'root',
})

export class SplashService {

    constructor(private commonService: CommonService) {

    }

    getProducts() {
        return this.commonService.getObjects('/Products')
    };
    getLocations(){
        return this.commonService.getObjects('/States')
    }


}