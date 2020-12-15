
import { Component, OnInit } from '@angular/core';
import { Saque } from 'src/app/model/saque.model';

@Component({
  selector: 'app-saque-view',
  templateUrl: './saque-view.component.html',
  styleUrls: ['./saque-view.component.css']
})
export class SaqueViewComponent implements OnInit {

  mock_saque:Saque ={
    data: new Date().toLocaleString(),
    valor: 20.00,
    conta: {
      hcode: '12rt1534mf5r67yt33b4r58578ut8643cfd4b40e',
      cliente:{
        nome:'TERRY LEE MACLEITE',
        cpf:'130.126.859-75'
      },
      saldo:1250000
    }
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
