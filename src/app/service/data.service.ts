import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private datafromDS = new BehaviorSubject("Data from data Service")
  currentDataInDataService = this.datafromDS.asObservable();
  constructor() { }

  updateData(data:any){
    this.datafromDS.next(data);
  }

 
}


