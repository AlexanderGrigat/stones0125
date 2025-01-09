import { Component } from '@angular/core';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  heute = new Date();
  title = 'stones';
}
