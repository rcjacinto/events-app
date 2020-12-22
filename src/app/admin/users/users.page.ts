import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  newsItems:any = [];
  constructor() { }
  ngOnInit(){
  }

  ionViewDidEnter() {
    this.newsItems = [];
    this.newPost();
  }
  displayFullName(str:any){
    return str.firstName + " " +str.lastName;
  }
  newPost(){
    for (let index = 10; index > 1; index--) {
      let i = Math.floor((Math.random() * 3) + 1);
      this.newsItems.push(
        {
          fullName: {
            firstName: "Juan",
            lastName: "Dela Cruz",
          },
          type: "Student",
          date: Date(),
          featuredImage:`../assets/img/random/${i}.jpg`
        });
    }
  }

}
