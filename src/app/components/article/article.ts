import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-article',
  imports: [NgClass],
  templateUrl: './article.html',
  styleUrl: './article.css',
})
export class Article {
  count=0;
   toggleNegatif(){
    this.count--;
  }
  togglePositif(){
    this.count++;
  }
}
