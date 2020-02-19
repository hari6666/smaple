import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../Shared/APIService/commonService';
import {environment} from '../../environments/environment'


@Injectable({
    providedIn: 'root',
})

export class ListingService {

    constructor(private httpClient: HttpClient) {

    }

    getFarmersList(prodictId,locationId) {
        return this.httpClient.get(`http://10.10.0.182:81/api/Common/FarmerList?productid=${prodictId}&locationid=${locationId}`)
    };



}