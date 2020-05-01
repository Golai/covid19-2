import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../provider/usuario.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-visitas',
  templateUrl: './visitas.page.html',
  styleUrls: ['./visitas.page.scss'],
})
export class VisitasPage implements OnInit {

  public lugaresServiceMock: Array<string>;

  constructor(private dataService: UsuarioService,
              public alertController: AlertController) { 
    this.getLugares();
  }

  ngOnInit() {
  }

  public getLugares(){
    this.dataService.getLugares().subscribe(
      res=>{
        console.log(res.lugare); 
        this.lugaresServiceMock = res.lugare;
        console.log(this.lugaresServiceMock)
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
