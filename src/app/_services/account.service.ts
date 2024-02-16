import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@environments/environment';
import { User } from '@app/_models';
import { createNgModule } from '@angular/compiler/src/core';

@Injectable({ providedIn: 'root' })
export class AccountService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    createacccount(data: object) {
        return this.http.post<any>(`${environment.apiUrl}/api/accounts`, { data })
            .pipe(map(result => {

                return result;
            }));
    }
    getaccountlistAccounts() {
        return this.http.get<any>(`${environment.apiUrl}/api/vendors/cs`)
            .pipe(map(result => {
             
                return result.methodResponseJson.customers;
            }));
    }

    getaccountAccountInfo(i_account: any) {
        return this.http.get<any>(`${environment.apiUrl}/api/accounts/la?${i_account}`)
            .pipe(map(result => {

                return result;
            }));
    }

    getaccountRegistrationStatus(i_account: any) {
        return this.http.get<any>(`${environment.apiUrl}/api/accounts/la?${i_account}`)
            .pipe(map(result => {

                return result;
            }));
    }

    getaccountAccountMinutePlans(i_account: any) {
        return this.http.get<any>(`${environment.apiUrl}/api/accounts/la?${i_account}`)
            .pipe(map(result => {

                return result;
            }));
    }


    getaccountAccountRates(i_account: any) {
        return this.http.get<any>(`${environment.apiUrl}/api/accounts/la?${i_account}`)
            .pipe(map(result => {

                return result;
            }));
    }

    unBlock(i_account: any) {
        return this.http.get<any>(`${environment.apiUrl}/api/accounts/unblock?${i_account}`)
            .pipe(map(result => {

                return result;
            }));
    }

    block(i_account: any) {
        return this.http.get<any>(`${environment.apiUrl}/api/accounts/block?${i_account}`)
            .pipe(map(result => {

                return result;
            }));
    }

    delete(i_account: any) {
        return this.http.get<any>(`${environment.apiUrl}/api/accounts/delete?${i_account}`)
            .pipe(map(result => {

                return result;
            }));
    }



};
