import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  icon: string = 'menu-icon.png'
  menuDisplayed: boolean = false

  toggleMenu(): void {
    var links = document.getElementsByClassName("dropdown-link")
    if (this.menuDisplayed) {
      for (let i=0; i<links.length; i++) {
        (links[i] as HTMLElement).style.display = "none"
      }
      this.icon = 'menu-icon.png'
      this.menuDisplayed = false
    } else {
      for (let i=0; i<links.length; i++) {
        (links[i] as HTMLElement).style.display = "block"
      }
      this.icon = 'cancel-icon.png'
      this.menuDisplayed = true
    }
  }
}