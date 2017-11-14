import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LogInComponent implements OnInit {
  username = '';
  password = '';

  // small function used to disable the log-in button if either input field is not filled.
  isEmptyInputField() {
    return (this.username === '' || this.password === '');
  }

  constructor() { }

  ngOnInit() {
  }

}
