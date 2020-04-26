import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username: string;
  password: string;
  usuario: any;

  constructor(private toastController:ToastController,
    private router: Router,
    private appComponent: AppComponent) {
                
   }

  ngOnInit() {
  }
  /** 
  async proseslogin(){
    if(this.username != '' && this.password != ''){
       console.log(this.username + '-');
       console.log(this.password);
       
       console.log(this.usuario);
       for(let i in this.usuario){
         if(this.usuario[i]['id'] == this.username && this.usuario[i]['password'] == this.password){
           console.log(this.usuario[i]['nombre']);
           const toast = await this.toastController.create({
             message: 'Welcome!',
             duration: 2000
            });
            this.appComponent.appPages = [
              {
                title: 'Home',
                url: '/folder/Inbox',
                icon: 'mail'
              },
              {
                title: 'Registrar Sintomas',
                url: '/folder/Outbox',
                icon: 'paper-plane'
              },
              {
                title: 'Sintomas',
                url: '/folder/Favorites',
                icon: 'heart'
              },
              {
                title: 'Registrar visita',
                url: '/folder/Archived',
                icon: 'archive'
              },
              {
                title: 'Visitas',
                url: '/folder/Trash',
                icon: 'trash'
              }
            ];
            this.router.navigate(['/menu']);
            toast.present();
           
         }else{
           const toast = await this.toastController.create({
             message: 'usuario y password incorrectos',
             duration: 2000
            });
            toast.present();
         }
         this.appComponent.selectedIndex=0;
         this.appComponent.titulo="Menu";
       }
    }else{
     const toast = await this.toastController.create({
       message: 'Error, campos vacios',
       duration: 2000
      });
      toast.present();
   }
   }
   */
  async proceslogin(){
    if(this.username != ' ' && this.password != ' '){
       console.log(this.username + '-');
       console.log(this.password);
       const toast = await this.toastController.create({
        message: 'Welcome!',
        duration: 2000
       });
       this.appComponent.appPages = [
         {
           title: 'Home',
           url: 'home',
           icon: 'home',
           index: 0
         },
         {
           title: 'Registrar Sintomas',
           url: 're-sintomas',
           icon: 'pencil',
           index: 1
         },
         {
           title: 'Sintomas',
           url: 'sintomas',
           icon: 'reader',
           index: 2
         },
         {
           title: 'Registrar Visita',
           url: 're-visita',
           icon: 'qr-code',
           index: 3
         },
         {
           title: 'Visitas',
           url: 'visitas',
           icon: 'reader',
           index: 4
         },
         {
          title: 'Cerrar Sesion',
          url: 'login',
          icon: 'close',
          index: 5

         }
       ];
       this.router.navigate(['/home']);
       toast.present();
      }else{
        const toast = await this.toastController.create({
          message: 'usuario y password incorrectos',
          duration: 2000
         });
         toast.present();
      }
      this.appComponent.selectedIndex=0;
      this.appComponent.titulo="home";
    }
}
