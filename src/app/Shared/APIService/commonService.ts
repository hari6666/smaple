import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment'
import { BoundTextAst } from '@angular/compiler';


@Injectable({
    providedIn: 'root',
})

export class CommonService {

    constructor(private http: HttpClient) {

    }

    getObjects(url) {
        return this.http.get(environment.sourceUrl + url);
    };

    postObject(url, objectBody) {
        let body = JSON.stringify(objectBody);
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        };
        return this.http.post(environment.sourceUrl + url, body, httpOptions)
    };

    getObject(url, id) {
        return this.http.get(environment.sourceUrl + url + '/' + `${id}`)
    }


}