import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  authId:any;
  authPassword:any;
  constructor(
    public router:Router,
    public auth:AuthService,
    private user: UserService,
    public loadingController: LoadingController,
    public alertController: AlertController
  ) { }

  ngOnInit() {
    this.auth.user.subscribe(async res=>{
      const loading = await this.loadingController.create({
        message: 'Please wait...',
        duration: 2000,
      });
      loading.present();
      if(res){
        let userInfo = this.user.getUserInfo(res.email);
        userInfo.subscribe(async res=>{
          if(res){
            await loading.onDidDismiss();
            this.redirectToDashboard(res[0]);
          }
        });
      }else{
        this.auth.logOut();
      }
    });
  }
  authLogin(){
    this.auth.loginUser(this.authId,this.authPassword).then(res=>{
      console.log(res);
    }).catch(async err=>{
      console.log(err);
      const alert = await this.alertController.create({
        subHeader: 'Login Failed',
        message: err.message,
        buttons: ['Confirm']
      });
      await alert.present();
    });
    // if(this.authId === "student" || this.authId === "parent" || this.authId === "admin"){
    //   this.router.navigate([this.authId]);
    // }
  }
  redirectToDashboard(info:any){
    console.log(info);
    localStorage.setItem('userInfo',JSON.stringify(info));
    if(info.role === 1){
      this.router.navigate(['student']);
    } else if(info.role === 2){
      this.router.navigate(['teacher']);
    } else if(info.role === 3){
      this.router.navigate(['parent']);
    } else{
      this.router.navigate(['admin']);
    }
  }

}
