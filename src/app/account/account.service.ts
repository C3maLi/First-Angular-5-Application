import { Injectable, Inject } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AccountService {
  private loggedIn: boolean = false;
  constructor(@Inject('apiUrl') private apiUrl, private http: Http) {}

  login(username, password): Observable<boolean> {
    const url: string = this.apiUrl + '/account/login';
    const headers = new Headers();
    headers.append('Authorization', btoa(username + ':' + password));

    const requestOptions = new RequestOptions({ headers: headers });
    return this.http.post(url, JSON.stringify({ username, password }), requestOptions)
      .map(res => res.json())
      .map(res => {
        if (res) {
          localStorage.setItem('isLogged', res);
          this.loggedIn = true;
        }
        return res;
      });
  }

  logOut() {
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }
}
