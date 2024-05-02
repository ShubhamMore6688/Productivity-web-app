import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss']
})
export class EmojiPickerComponent {
  @Output() selectedEmoji = new EventEmitter<string>();
  addEmoji(event: any) {
    this.selectedEmoji.emit(event.emoji.native);
    // console.log(event.emoji.native);
  }
}
