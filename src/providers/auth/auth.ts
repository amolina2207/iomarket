import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReplaySubject, Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators/tap';
import { SignUp } from '../../models/sign-up';
import { SignIn } from '../../models/sign-in';
import { Token } from '../../models/token';

@Injectable()
export class AuthProvider {

	static jwtTokenName = 'X-Auth-Token';
	server = 'http://localhost:9000';
  authUser = new ReplaySubject<any>(1);

  constructor(private httpClient: HttpClient,
   	private storage: Storage,
    private jwtHelper: JwtHelperService) {
  }

  checkLogin() {
    console.log("checkLogin");
    this.storage.get(AuthProvider.jwtTokenName).then(jwt => {
      if (jwt && !this.jwtHelper.isTokenExpired(jwt.token)){
         this.authUser.next(jwt);
         console.log("token NOT expired");
      }
      else {
        console.log("Deleting Token");
        this.storage.remove(AuthProvider.jwtTokenName)
        .then(() => {
            this.authUser.next(null)
        });
      }
    });
  }

  signup(data: SignUp): Observable<Token> {
    return this.httpClient.post<Token>(this.server + '/api/auth/signup', data)
      .pipe(tap(jwt => {
        if(jwt.token && jwt.token !== ''){
          console.log("signup="+JSON.stringify(jwt));
          this.storage.set(AuthProvider.jwtTokenName, jwt)
            .then(() => this.authUser.next(jwt))
            .then(() => jwt);
        }
      }));
  }

	login(data: SignIn): Observable<Token> {
  	return this.httpClient.post<Token>(this.server + '/api/auth/signin/credentials', data)
      .pipe(tap(jwt => {
        if(jwt.token && jwt.token !== ''){
          console.log("login="+JSON.stringify(jwt));
          this.storage.set(AuthProvider.jwtTokenName, jwt)
            .then(() => this.authUser.next(jwt))
            .then(() => jwt);
        }
      }));
	}
    
	logout(){
  	this.storage.remove(AuthProvider.jwtTokenName).then(() => this.authUser.next(null));
	}
}