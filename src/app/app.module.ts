import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';

import { MatInputModule } from '@angular/material/input';

// Services
import { AuthorizationService } from './components/authorization/authorization.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthorizationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
