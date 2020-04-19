import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class LoginService {

  url = environment.heenaEleUrl + '/' + 'user';
  constructor(
    private http: HttpClient
  ) { }

  checkCurrentLoggedInUser(user: HeenaElectronics.User): Observable<HeenaElectronics.User> {
    return this.http.post<HeenaElectronics.User>(this.url + '/' + 'current', user);
  }
}
