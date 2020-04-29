import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AppComponent } from '../app.component';
import {UsuarioService} from '../provider/usuario.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController, AlertController } from '@ionic/angular';

//firebase
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';

import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //user: Observable<firebase.User>;
  picture;
  username: string;
  email: string;
  res: any;

  constructor(private toastController:ToastController,
              private router: Router,
              private appComponent: AppComponent,
              private afAuth: AngularFireAuth,
              private platform: Platform,
              private googlePlus: GooglePlus,
              private usuarioService:UsuarioService,
              private nativeStorage: NativeStorage,
              public loadingController: LoadingController,
              public alertController: AlertController) {   
      //this.user = this.afAuth.authState;
   }

  ngOnInit() { }

  async doGoogleLogin(){
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
    this.presentLoading(loading);
    this.googlePlus.login({
      'scopes': '', // optional - space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': '873989763369-u4gvq52jpgvs0ea4ngn8h4ajf5j92teu.apps.googleusercontent.com', // optional - clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true, // Optional, but requires the webClientId - if set to true the plugin will also return a serverAuthCode, which can be used to grant offline access to a non-Google server
      })
      .then(user => {
        //save user data on the native storage
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
        if(!this.platform.is('cordova')){
          this.presentAlert();
        }
        loading.dismiss();
      })
  }

  
  async presentAlert() {
    const alert = await this.alertController.create({
       message: 'Cordova is not available on desktop. Please try this in a real device or in an emulator.',
       buttons: ['OK']
     });

    await alert.present();
  }
  
  async presentLoading(loading) {
    return await loading.present();
  }

  async menu(){
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
   this.appComponent.selectedIndex=0;
   this.appComponent.titulo="Home";
 }

  /*
  loginGoogle() {
    if (this.platform.is('cordova')) {
      this.loginGoogleAndroid();
    } else {
      this.loginGoogleWeb();
    }
  }

  async loginGoogleAndroid() {
    this.res = await this.googlePlus.login({
      'webClientId': '873989763369-u4gvq52jpgvs0ea4ngn8h4ajf5j92teu.apps.googleusercontent.com',
      'offline': true,
      'scopes':'profile email'
    });
    const resConfirmed = await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(this.res.idToken));
    const user = resConfirmed.user;
    this.picture = user.photoURL;
    this.username = user.displayName;
    this.email = user.email;
    let usuario = {
      username:this.username,
      email:this.email,
      picture:this.picture
    };
    this.usuarioService.setUsuario(usuario);
    console.log(usuario);
    this.proceslogin();
  }

  async loginGoogleWeb() {
    this.res = await this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const user = this.res.user;
    console.log(user);
    this.picture = user.photoURL;
    this.username = user.displayName;
    this.email = user.email;
    let usuario = {
      username:this.username,
      email:this.email,
      picture:this.picture
    };
    this.usuarioService.setUsuario(usuario);
    console.log(usuario);
    this.proceslogin();
  }

   async proceslogin(){
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
      this.appComponent.selectedIndex=0;
      this.appComponent.titulo="Home";
    }
*/


}
