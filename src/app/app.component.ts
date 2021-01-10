import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'boton-like';
  public likes = 100;
  public isLiked = false;

  LikesBoton() {
    if (this.isLiked == true) {
      this.likes--;
      this.isLiked=false;
    }
    else {
      this.likes++;
      this.isLiked=true;
    }
  }
}
