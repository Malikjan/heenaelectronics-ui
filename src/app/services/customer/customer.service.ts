import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CustomerService {

    url = environment.heenaEleUrl + '/' + 'customer';
    constructor(
        private http: HttpClient
    ) { }

    create(customer: HeenaElectronics.Customer): Observable<HeenaElectronics.Customer> {
        return this.http.post<HeenaElectronics.Customer>(this.url + '/' + 'create', customer);
    }

    update(customer: HeenaElectronics.Customer): Observable<HeenaElectronics.Customer> {
        return this.http.put<HeenaElectronics.Customer>(this.url + '/' + 'update', customer);
    }

    getAllCustomer(): Observable<HeenaElectronics.Customer[]> {
        return this.http.get<HeenaElectronics.Customer[]>(this.url + '/' + 'all');
    }

    deleteCustomerById(id: String): Observable<HeenaElectronics.Customer> {
        return this.http.delete<HeenaElectronics.Customer>(this.url + '/' + 'delete' + '/' + id);
    }

    getAllHistoryByCustomerID(customerID: String): Observable<HeenaElectronics.History[]> {
        return this.http.post<HeenaElectronics.History[]>(this.url + '/' + 'history' + '/' + 'all', customerID);
    }
}
