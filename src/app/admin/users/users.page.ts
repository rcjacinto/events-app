import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdminModalUserComponent } from 'src/app/components/admin-modal-user/admin-modal-user.component';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
 userList:User[];
  constructor(
    private userService:UserService,
    public modal:ModalController
  ) { }
  ngOnInit(){
    this.userService.getUsers().subscribe(res=>{
      this.userList = res;
      console.log(this.userList);
    });
  }
  displayFullName(str:any){
    return str.first + " " +str.last;
  }
  roleLabel(label){
    let result = "";
    if(label === 1){
      result = "Student"
    }else if(label === 2){
      result = "Parent"
    }else if(label===3){
      result = "Teacher"
    }else{
      result = "Admin"
    }
    return result;
  }
  async viewUser(info:User){
    const modal = await this.modal.create({
      component: AdminModalUserComponent,
      cssClass: 'my-custom-class',
      componentProps:{
        'userInfo': info
      }
    });
    return await modal.present();
  }

}
