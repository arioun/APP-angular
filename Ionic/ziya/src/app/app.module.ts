import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler, ModalController} from 'ionic-angular';
import { MyApp } from './app.component';
import { FormsModule } from '@angular/forms';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { FabuPage } from "../pages/fabu/fabu";
import { MessagePage } from "../pages/message/message";
import { MinePage } from "../pages/mine/mine";
import { LoginPage } from "../pages/login/login";
import { SignupPage } from "../pages/signup/signup";
import { SettingPage } from "../pages/setting/setting";
import { DetailPage } from "../pages/detail/detail";
import { DialoguePage } from "../pages/dialogue/dialogue";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FabuPage,
    MessagePage,
    MinePage,
    LoginPage,
    SignupPage,
    SettingPage,
    DetailPage,
    DialoguePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FabuPage,
    MessagePage,
    MinePage,
    LoginPage,
    SignupPage,
    SettingPage,
    DetailPage,
    DialoguePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
