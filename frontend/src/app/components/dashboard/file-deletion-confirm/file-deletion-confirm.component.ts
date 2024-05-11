import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-deletion-confirm',
  templateUrl: './file-deletion-confirm.component.html',
  styleUrl: './file-deletion-confirm.component.scss'
})
export class FileDeletionConfirmComponent {
  constructor(private router: Router){

  }
  @Output() confirmFileDeletion = new EventEmitter<boolean>();
  @Output() cancelFileDeletion = new EventEmitter<boolean>();

  confirmDelete(){
    this.confirmFileDeletion.emit(true);
  }

  cancelDelete(){
    this.cancelFileDeletion.emit(true);
  }

}
