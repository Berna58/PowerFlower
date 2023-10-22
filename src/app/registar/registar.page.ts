import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registar',
  templateUrl: './registar.page.html',
  styleUrls: ['./registar.page.scss'],
})
export class RegistarPage implements OnInit {
  public email:any;
  public password:any;
  public nome:any;
  public confirmpassword:any;

  constructor() { }

  ngOnInit() {
  }

}
