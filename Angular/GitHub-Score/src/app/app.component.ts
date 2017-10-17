import { Component } from '@angular/core';
import { GithubService } from './github.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: string;
  score: any;

  constructor(private _githubService: GithubService){ }

  onSubmit(){
    this._githubService.retrieveUserInfo(this.username)
    .then(user => {
        if (user.id){
          this.score = user.public_repos + user.followers;
        }
        this.username = null;
      })
      .catch(err => this.score = 'Person not found');
    
  } 
  // End of onSubmit()

}
