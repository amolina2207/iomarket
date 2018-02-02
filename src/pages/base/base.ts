import { AuthProvider } from '../../providers/auth/auth';

export class BasePage {

  constructor(public authProvider: AuthProvider) {}

  logout(){
    this.authProvider.logout();
  }

}