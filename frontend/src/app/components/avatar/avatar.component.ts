import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {
  @Input() name!:string;
  @Input() role!:string;
  @Input() imageUrl!: string;
  @Input() altText!: string;
  constructor(){

  }
}
