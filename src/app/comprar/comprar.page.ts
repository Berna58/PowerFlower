import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-comprar',
  templateUrl: './comprar.page.html',
  styleUrls: ['./comprar.page.scss'],
})
export class ComprarPage implements OnInit {
  public nome:any;
  public apelido:any;
  public morada:any;
  public email:any;
  public telefone:any;
  public codigopostal:any;


  customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];
  customDayShortNames = ['s\u00f8n', 'man', 'tir', 'ons', 'tor', 'fre', 'l\u00f8r'];
  customPickerOptions: any;
  

  constructor(public toastController: ToastController) {
    
   }
   async presentToast() {
    const toast = await this.toastController.create({
      message: 'Encomenda Feita!',
      duration: 2000
    });
    toast.present();
  }

  ngOnInit() {
  }

  

}
