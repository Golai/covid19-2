import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-re-sintomas',
  templateUrl: './re-sintomas.page.html',
  styleUrls: ['./re-sintomas.page.scss'],
})
export class ReSintomasPage implements OnInit {

  qrData = null;
  createdCode = null;
  scanedCode= null;

  public form = [
    { val: 'Fiebre alta', isChecked: false },
    { val: 'Dolor de garganta', isChecked: false },
    { val: 'Tos', isChecked: false },
    { val: 'Dificultad para respirar', isChecked: false },
    { val: 'Fatiga', isChecked: false },
    { val: 'Escalofrio', isChecked: false },
    { val: 'Fatiga', isChecked: false },
    { val: 'Ninguno de los anteriores', isChecked: false },
    { val: 'Fatiga', isChecked: false },
    { val: 'Escalofrio', isChecked: false },
    { val: 'Fatiga', isChecked: false },
    { val: 'Ninguno de los anteriores', isChecked: false },
  ];

  constructor(public alertController: AlertController,
              private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  presentAlert() {
    const alert = this.alertController.create({
    message: 'Se regristraron sus datos',
    subHeader: 'Exitoso',
    buttons: ['Aceptar']}).then(alert=> alert.present());
  }


  // escanea el codigo qr
  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scanedCode = barcodeData.text;
    })
  }

}
