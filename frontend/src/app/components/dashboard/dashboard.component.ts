import { Component } from '@angular/core';
import { FolderService } from 'src/app/Services/folder-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(private folderservice: FolderService){}
  // username and role
  name:string = 'shubham'
  role: string = 'devops'

   // text: string = ''
   sidebarEmoji: string = '🏠'
   seeProfile: boolean = false
   editorContent: string = '';
   banner: boolean = true;
  
    changeEmj = false;
    changeEmoji(){
      this.changeEmj = !this.changeEmj;
    }

    selectedEmoji: string = '🏠'
   getSelectedEmoji(value: any){
    this.selectedEmoji = value;
    this.sidebarEmoji = value;
   }
 
   handleBanner(){
     this.banner = !this.banner;
   }

   
 
   removeBanner(){
     if(this.banner){
       this.banner = false;
     }
   }


   // on file select from the left sidebar
   secondPart: string = ' '
   onFileSelect(event: any){
    const parts = event.target.textContent.trim().split(' ');
    this.secondPart = parts[1];
    this.selectedEmoji = parts[0];
    const divId = event.target.id; // Get the ID of the clicked div
    
    if (divId) {
      parts[0] = this.selectedEmoji; // Update the emoji inside the clicked div
    }
    console.log(this.secondPart);
  }

  viewProfile(){
    this.seeProfile = !this.seeProfile
  }

  fileName:string = ''
  fileContent: string = ''
  folderName: string = ''
  Files:any = []
  Folders:any = [];

  fileCreation(fileName: string, fileContent: string){
    this.folderservice.createFile(this.folderservice.rootFolder, fileName, fileContent );
    this.Files = this.folderservice.rootFolder.files
    console.log(this.Files)
   
  }

  folderCreation(folderName: string){
    this.folderservice.createFolder(this.folderservice.rootFolder, folderName);
    this.Folders = this.folderservice.rootFolder.folders
  }


}
