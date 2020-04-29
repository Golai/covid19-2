import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../provider/usuario.service';
import { Router } from '@angular/router';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { LoadingController } from '@ionic/angular';

//firebase
import { AngularFireAuth } from '@angular/fire/auth';

import { Platform } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  picture;
  username: string;
  email: string;
  usuario: any;

  user: any;
  userReady: boolean = false;

  constructor(private router: Router,
              private googlePlus: GooglePlus,
              private nativeStorage: NativeStorage,
              public loadingController: LoadingController) { 
  }

  async ngOnInit() {
    const loading = await this.loadingController.create({
      message: 'Please wait...'
    });
     await loading.present();
     this.nativeStorage.getItem('google_user')
    .then(data => {
      this.user = {
        name: data.name,
        email: data.email,
        picture: data.picture,
      };
      this.userReady = true;
      loading.dismiss();
    }, error =>{
      console.log(error);
      loading.dismiss();
    });
   }

  googleLogout(){
    this.googlePlus.logout()
    .then(res => {
      this.nativeStorage.remove('google_user');
      this.router.navigate(["/login"]);
    }, err => {
      console.log(err);
    });
  }

}
