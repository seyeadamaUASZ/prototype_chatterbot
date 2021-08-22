import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChatbotComponent } from './chatbot/chatbot.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 constructor(private dialog: MatDialog){

 }

  ngOnInit(): void {

  }
  title = 'angchat';

  openChatbot(){
      const dialog1 = this.dialog.open(ChatbotComponent, {
        disableClose: true,
        width:'500px',
        height:'600px'

      }).afterClosed().subscribe(data => {

      });
    }
  }

