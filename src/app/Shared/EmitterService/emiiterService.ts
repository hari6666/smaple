import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class EmitterService {
    headerShow: EventEmitter<any> = new EventEmitter();
    
}