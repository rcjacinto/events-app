import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  items:any = [];
  selection:any = 
    { name:"Lorem Ipsum",
      desc: "dolor Set Amet",
      img: null,
      info: "ero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,"};
  
  constructor() { }

  ngOnInit() {
    this.getRandomValues();
  }
  getRandomValues(){
    let i = 0;
    for (let index = 0; index < 5; index++) {
      i = Math.floor((Math.random() * 3) + 1);
      this.selection.img = `../assets/img/random/${i}.jpg`;
        this.items.push(this.selection);
    }
    console.log(this.items);
  }

}
