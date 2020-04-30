import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController } from '@ionic/angular';


//firebase
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  picture;
  username: string;
  email: string;
  res: any;

  constructor(private toastController: ToastController,
    private router: Router,
    private appComponent: AppComponent,
    private platform: Platform,
    private googlePlus: GooglePlus,
    private nativeStorage: NativeStorage,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private afAuth: AngularFireAuth) {


    this.platform.ready().then(() => {
      document.addEventListener("backbutton", () => { 
        console.log("TEST");
        if (window.location.pathname == "/login") {
          navigator['app'].exitApp();
        }
      });
    });    
  }

  ngOnInit() { }

  async googleLogin() {
    const loading = await this.loadingController.create({
      message: 'Espera por favor...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', 
      'webClientId': '873989763369-u4gvq52jpgvs0ea4ngn8h4ajf5j92teu.apps.googleusercontent.com', 
      'offline': true, 
    })
      .then(user => {
        //guarda los datos del usuario en native storage
        this.nativeStorage.setItem('google_user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
          .then(() => {
            this.router.navigate(["/perfil"]);
            this.menu();
          }, (error) => {
            console.log(error);
          })
        loading.dismiss();
      }, err => {
        console.log(err);
        if (!this.platform.is('cordova')) {
          //this.presentAlert();
          this.loginGoogleWeb();
        }
        loading.dismiss();
      })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      message: 'Cordova no está disponible en escritorio. Por favor, intente esto en un dispositivo movil o en un emulador.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentLoading(loading) {
    return await loading.present();
  }

  async loginGoogleWeb() {
    this.res = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = this.res.user;
    console.log(user);
    this.picture = user.photoURL;
    this.username = user.displayName;
    this.email = user.email;
    let usuario = {
      username: this.username,
      email: this.email,
      picture: this.picture
    };

    console.log(usuario);
    this.menu();
  }

  async menu() {
    const toast = await this.toastController.create({
      message: 'Welcome!',
      duration: 2000
    });
    this.appComponent.appPages = [
      {
        title: 'Perfil',
        url: 'perfil',
        icon: 'person',
        index: 0
      },
      {
        title: 'Home',
        url: 'home',
        icon: 'home',
        index: 1
      },
      {
        title: 'Registrar Sintomas',
        url: 're-sintomas',
        icon: 'pencil',
        index: 2
      },
      {
        title: 'Sintomas',
        url: 'sintomas',
        icon: 'reader',
        index: 3
      },
      {
        title: 'Registrar Visita',
        url: 're-visita',
        icon: 'qr-code',
        index: 4
      },
      {
        title: 'Visitas',
        url: 'visitas',
        icon: 'reader',
        index: 5
      }
    ];
    this.router.navigate(['/home']);
    toast.present();
    this.appComponent.selectedIndex = 0;
    this.appComponent.titulo = "Home";
  }


}
 