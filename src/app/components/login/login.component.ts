import { Component, OnInit, OnDestroy } from '@angular/core';
import { } from 'jquery';
import { } from 'icheck';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  bodyClasses = 'skin-blue sidebar-mini';
  body: HTMLBodyElement = document.getElementsByTagName('body')[0];
  checkbox_icheck: HTMLElement = document.getElementById('checkbox_icheck');

  constructor() { }

  ngOnInit() {
    // add the the body classes
    this.body.classList.add('hold-transition');
    this.body.classList.add('login-page');

    // jQuery(this.checkbox_icheck).iCheck({
    //   checkboxClass: 'icheckbox_square-blue',
    //   radioClass: 'iradio_square-blue',
    //   increaseArea: '20%' /* optional */
    // });
  }

   ngOnDestroy() {
    // remove the the body classes
    this.body.classList.remove('hold-transition');
    this.body.classList.remove('login-page');
  }

}
