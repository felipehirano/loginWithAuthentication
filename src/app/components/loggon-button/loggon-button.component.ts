import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-loggon-button',
  templateUrl: './loggon-button.component.html',
  styles: [
  ]
})
export class LoggonButtonComponent implements OnInit {

  constructor(
    public auth: AuthService,
    @Inject(DOCUMENT) private doc: Document
  ) {}

  ngOnInit(): void {
  }

  logOut(): void {
    console.log("Oi")
    this.auth.logout({ returnTo: this.doc.location.origin})
  }

}
