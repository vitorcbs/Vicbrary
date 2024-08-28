import { Component, Input } from '@angular/core';

@Component({
  selector: 'vby-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {

  @Input() label: string = ''
  @Input() color: string = 'primary';
  @Input() shape: 'rounded' | 'square' = 'rounded';   @Input() outlined: boolean = false;
}
