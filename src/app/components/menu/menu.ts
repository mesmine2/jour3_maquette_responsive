import { Component } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
   imports: [NgClass],
  templateUrl: './menu.html',
  styleUrls: ['./menu.css']
})
export class Menu {
  couleur=true;
  count=0;
  liens = ['Home','Products','Blog','Contact','About'];

  clique=true;
  togglebutton(){
    this.clique=!this.clique;
  }
  toggleNegatif(){
    this.count--;
  }
  togglePositif(){
    this.count++;
  }
}
