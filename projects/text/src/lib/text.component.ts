import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'ui-text',
  template: `
    <h1 *ngIf="type === 'primary'">
      {{text}}
    </h1>
    <h2 *ngIf="type === 'secondary'">
      {{text}}
    </h2>
  `,
  styles: [
  ]
})
export class TextComponent implements OnInit {
  
  @Input() text: string;
  @Input() type: string;

  constructor() { }

  ngOnInit(): void {
  }

}
