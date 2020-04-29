import { Component, OnInit } from '@angular/core';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';

@Component({
  selector: 'app-re-visita',
  templateUrl: './re-visita.page.html',
  styleUrls: ['./re-visita.page.scss'],
})
export class ReVisitaPage implements OnInit {

  qrData = null;
	createdCode = null;
	scanedCode= null;

  constructor(private barcodeScanner: BarcodeScanner) { }

  ngOnInit() {
  }

  createCode(){
    this.createdCode = this.qrData;
  }

  scanCode(){
    this.barcodeScanner.scan().then(barcodeData => {
      this.scanedCode = barcodeData.text;
    })
  }
}

