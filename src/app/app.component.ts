import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'stn-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    MatToolbarModule,
    RouterLink,
    RouterOutlet,
    UpperCasePipe,
    DatePipe,
  ]
})
export class AppComponent {
  heute = new Date();
  title = 'stones';
}
