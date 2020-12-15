import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeNavegacaoComponent } from './components/template/home-navegacao/home-navegacao.component';



import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgxMaskModule, IConfig } from 'ngx-mask';

//imports do Material Design
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';


import { ClienteComponent } from './components/cliente/cliente.component';
import { ContaComponent } from './components/conta/conta.component';
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';
import { ContaViewComponent } from './components/conta/conta-view/conta-view.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { SaqueComponent } from './components/saque/saque.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { LoginComponent } from './components/login/login.component';
import { recuperarSenhaComponent } from './components/recuperarSenha/recuperarSenha.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DepositoViewComponent } from './components/deposito/deposito-view/deposito-view.component';
import { SaqueViewComponent } from './components/saque/saque-view/saque-view.component';
import { TransferenciaViewComponent } from './components/transferencia/transferencia-view/transferencia-view.component';

const maskConfig: Partial<IConfig> = {
  validation: false,
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeNavegacaoComponent,
    HomeComponent,
    ClienteComponent,
    ContaComponent,
    ClienteViewComponent,
    ContaViewComponent,
    LoginComponent,
    UsuarioComponent,
    recuperarSenhaComponent,
    ExtratoComponent,
    SaqueComponent,
    SaqueViewComponent,
    DepositoComponent,
    DepositoViewComponent,
    TransferenciaComponent,
    TransferenciaViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMaskModule.forRoot(maskConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
