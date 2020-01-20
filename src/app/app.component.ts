import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  username = '';
  message = '';

  ngOnInit() {
  }

  onChangeSubmit() {
    this.message = 'Welcome, ' + this.username + '!';
    this.username = '';
  }

  onUpdateDataBound(event: Event) {
    this.username = (event.target as HTMLInputElement).value;
  }
}
