import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Getting To Know Angular Routing!';
  constructor(private _router: Router){}
  goToUsers() {
    this._router.navigate(['/userlist']);
  }
}
