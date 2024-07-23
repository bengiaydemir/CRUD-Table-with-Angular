import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from './customer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseURL = "http://localhost:8080/bengisu";

  constructor(private httpClient: HttpClient) { }

  getCustomersList(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(`${this.baseURL}`);
  }

  deleteCustomer(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);
  }

  fetchData(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseURL}/${id}`);
  }

  updateCustomer(updatedCustomer: Customer, id: number): Observable<Customer> {
    return this.httpClient.put<Customer>(`${this.baseURL}/update/${id}`, updatedCustomer);
  }
  addCustomer(newCustomer: Customer): Observable<Customer> {
  return this.httpClient.post<Customer>(`${this.baseURL}/add`, newCustomer);
}
}




 

