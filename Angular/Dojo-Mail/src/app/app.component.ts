import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  emails = [
    {email: 'NATHAN@email.com', importance: true, subject: 'First Email', content: 'This is your first email ever!'},
    {email: 'tyler@email.com', importance: false, subject: 'Whatever', content: "Don't worry about this email"},
    {email: 'Lauren@email.com', importance: true, subject: 'Important Email', content: 'This is IMPORTANT!'},
    {email: 'Sam123@email.com', importance: false, subject: 'Test', content: 'Did you get this email?'},
  ];
}
