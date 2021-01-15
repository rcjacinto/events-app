import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 userCol: AngularFirestoreCollection<User>;
 userInfo: User = JSON.parse(localStorage.getItem('userInfo'));
  constructor(
    private firestore: AngularFirestore
  ) { 
   this.userCol =  this.firestore.collection<User>('users');
  }
  createUser(payload : User){
    return this.userCol.add(payload);
  }
  updateUser(payload : User){
    return this.userCol.doc(payload.id).update(payload);
  }
  getUser(payload: User){
    return this.userCol.doc<User>(payload.id).valueChanges();
  }
  getUserInfo(email:string){
    return this.firestore.collection<User>('users', ref =>
    ref.where('email', '==', email)).snapshotChanges().pipe(map(actions => {
      return actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, ...data };
      });
    }));
  }
}
