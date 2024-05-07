import { Component, ElementRef, EventEmitter, OnInit, Output } from '@angular/core';
import { Editor } from 'ngx-editor';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrl: './text-editor.component.scss'
})
export class TextEditorComponent implements OnInit {
  editor !: Editor;
  html: string = '<p>This is initial HTML content</p>'
  @Output() fileContent = new EventEmitter<string>();

  

  constructor(){}
  ngOnInit(): void {
    this.editor = new Editor();
  }

  fileContentStore(content: any){
    console.log(content)
  }

 

}
