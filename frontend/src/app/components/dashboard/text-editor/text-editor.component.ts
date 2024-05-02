import { Component, OnInit } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent implements OnInit {
  editor !: Editor;
  html !: '';

  constructor(){}
  ngOnInit(): void {
    this.editor = new Editor();
  }

}
