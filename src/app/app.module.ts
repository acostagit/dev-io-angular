import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProdutoComponent } from './pasta/produto/produto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProdutoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
      //ServicoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
