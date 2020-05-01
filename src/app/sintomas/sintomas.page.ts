import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { UsuarioService } from '../provider/usuario.service';

@Component({
  selector: 'app-sintomas',
  templateUrl: './sintomas.page.html',
  styleUrls: ['./sintomas.page.scss'],
})
export class SintomasPage implements OnInit {

  public sintomasServiceMock: Array<string>;

  constructor(private dataService: UsuarioService,
              public alertController: AlertController) { 
      this.getSintomas();
    }

  ngOnInit() {
  }

  public getSintomas(){
    this.dataService.getSintomas().subscribe(
      res => {
        console.log(res.sintomas); 
        this.sintomasServiceMock = res.sintomas;
        console.log(this.sintomasServiceMock)
      },
      error=>{
        console.log('error');
        const alert = this.alertController.create({
          header: 'Alert',
          subHeader: 'Subtitle',
          message:'Error con la consulta'
        });
        alert.then(x=>x.present());
      }
    );

   }

}
