import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ally';

public scroll() {
  let scroll = document.getElementById('section-2');
  scroll.scrollIntoView({block: 'end', behavior: 'smooth'});
}
displacement() {
  let displace = document.getElementById('section-7');
  displace.scrollIntoView({block: 'end', behavior: 'smooth'});
}
}

