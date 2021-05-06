import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:44349/api/rentals/"

  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + "getrentaldetails"
    return this.httpClient.get<ListResponseModel<Rental>>(newPath);
  }
  addRental(rental:Rental):Observable<ListResponseModel<Rental>>{
    let newPath = this.apiUrl + 'add';
    return this.httpClient.post<ListResponseModel<Rental>>(newPath,rental)
  }
}
