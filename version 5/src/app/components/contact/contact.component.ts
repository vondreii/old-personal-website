import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  users: any;

  constructor(private db: AngularFirestore
  ) { }

  ngOnInit() {
    this.users = this.db.collection('users').valueChanges({ idField: 'id' });
  }
}