import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public user: any;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private angFireAuth: AngularFireAuth,
    private router: Router
  ) {
    this.initializeApp();
    this.checkAuthState();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  checkAuthState(){
    this.angFireAuth.authState.subscribe( (user) => {
      if(user){
        this.user = user;
        this.router.navigate(['']);

      }
      else{
        this.user = null;
        this.router.navigate(['/login']);

      }
    });

  }
}
