import { Component, OnInit } from '@angular/core';
import { Cliente } from './../../model/cliente.model';

@Component({
  selector: 'app-cliente-view',
  templateUrl: './cliente-view.component.html',
  styleUrls: ['./cliente-view.component.css']
})
export class ClienteViewComponent implements OnInit {

  mock_cliente: Cliente = {
    cpf: '341.000.658-44', 
    nome: "Sophie"
  }

  constructor() { }

  ngOnInit(): void {
  }

  teste(): void{
    
  }

}
