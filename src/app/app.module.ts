import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-footer/nav-bar/nav-bar.component';
import { FooterComponent } from './nav-footer/footer/footer.component';
import { RegisterComponent } from './register-login/register/register.component';
import {MatCardModule} from "@angular/material/card";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import { LoginComponent } from './register-login/login/login.component';
import { UserAccountComponent } from './register-login/user-account/user-account.component';
import {AngularFireStorageModule} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire";
import {environment} from "../environments/environment.prod";
import { UploadAvatarComponent } from './upload/upload-avatar/upload-avatar.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatToolbarModule} from "@angular/material/toolbar";
import { ChangeAvatarComponent } from './register-login/change-avatar/change-avatar.component';
import {httpInterceptorProviders} from "./security/auth.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    UserAccountComponent,
    UploadAvatarComponent,
    ChangeAvatarComponent
  ],
  imports: [
    HttpClientModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    //thêm 2 thư viện của uploadFirebase;
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    ///
    MatIconModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatToolbarModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
