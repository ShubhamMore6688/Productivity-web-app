import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import axios from 'axios';
import { FolderService } from 'src/app/Services/folder-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private folderservice: FolderService){}
  // username and role
  name:string = 'shubham'
  role: string = 'devops'
  HtmlContent = ''

   // text: string = ''
   sidebarEmoji: string = '🏠'
   seeProfile: boolean = false
   editorContent: string = '';
   banner: boolean = true;
  
    changeEmj = false;
    changeEmoji(){
      this.changeEmj = !this.changeEmj;
    }

    selectedEmoji: string = '💻'
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
   onFileSelect(event: any, name: string, emoji: any){
    console.log(emoji)
    this.perticularFileContent(name);
    this.trashFileContent(name);
    const parts = event.target.textContent.trim().split(' ');
    this.secondPart = name;
    this.selectedEmoji = emoji;
    const divId = event.target.id; // Get the ID of the clicked div
    
    if (divId) {
      parts[0] = this.selectedEmoji; // Update the emoji inside the clicked div
    }
  }

  viewProfile(){
    this.seeProfile = !this.seeProfile
  }

 
  ngOnInit(): void {
      this.getAllfiles()
  }

  fileName: string  = ''
  fileContent: string = ''
  createFile: boolean = false;
  Files: any = []
  fileCreation(){
    this.createFile = !this.createFile;

    if(this.createFile===false){
      this.getAllfiles()
    }
  }

  getAllfiles(){
    axios.get<any>("http://localhost:3000/file")
    .then(Response => {
      
      this.Files = Response.data.files;
      
    })
    .catch(Error => {
      console.error("error", Error)
    })
  }
  filecreateToast = false
  updateFileName(filename: string){
    this.filecreateToast = true;
    this.fileName = filename;
    this.fileContent = this.HtmlContent
    // this.Files.push(this.fileName)
    // console.log(this.fileContent)
    this.getAllfiles()
    const data = {filename, filecontent: this.HtmlContent}

    axios.post("http://localhost:3000/file", data, {withCredentials: true})
    .then(Response => {
      console.log(Response.data)
    })
    .catch(Error => {
      console.error("error", Error)
    })

   
   
  }

  updateFileContent(){
    const data = {filename: this.secondPart , filecontent: this.HtmlContent}
   

    axios.put(`http://localhost:3000/file/${this.secondPart}`, data)
    .then(Response => {
      console.log(Response.data);
    })
    .catch(Error => {
      console.error("error", Error)
    })
  }

  // after clicking the file we get that file content
  perticularFileContent(name:string){

    axios.get(`http://localhost:3000/file/${name}`)
    .then(Response => {

      // get the file content
      // this.fileContent = Response.data.message[0].filecontent
      this.HtmlContent = Response.data.message[0].filecontent

      
      // console.log("getFilecontent", this.fileContent)
    })
    .catch(Error => {
      console.error("error", Error)
    })

  }

  trashFileContent(name: string){

    axios.get(`http://localhost:3000/trash/${name}`)
    .then(Response => {

      // get the file content
      // this.fileContent = Response.data.message[0].filecontent
      this.HtmlContent = Response.data.message[0].filecontent

      
      // console.log("getFilecontent", this.fileContent)
    })
    .catch(Error => {
      console.error("error", Error)
    })
  }

  // text-editor configuaration 

  
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    
   
  };
  deletefileToast = false;
  confirmFileDeletion = false;

  handleCancelFileDeletion(value: boolean){
    this.confirmFileDeletion = !value;
  }

  fileId: string = ''
  clickOnTrash(fileid: string){
    this.confirmFileDeletion = !this.confirmFileDeletion
    this.fileId = fileid;
    
  }
  
  handleConfirmFileDeletion(value: boolean){
    this.deleteFile(value, this.fileId);
    // this.getAllfiles()
    this.confirmFileDeletion = !value;
  }
  deleteFile(value: boolean, fileId: string){

    axios.delete(`http://localhost:3000/file/${fileId}`)
    .then(Response => {
      console.log(Response.data.message);
      if(value){
        this.getAllfiles();
      }
    })
    .catch(Error => {
      console.error("error",Error);
    })
  }


  // show trash files
  trashFiles = false
  TrashFiles: any = []
  showTrashFiles(){
    console.log("show trash files")
    axios.get<any>("http://localhost:3000/trash")
    .then(Response => {
      
      this.TrashFiles = Response.data.trashfiles;
      
    })
    .catch(Error => {
      console.error("error", Error)
    })

    this.trashFiles = !this.trashFiles
  }


  // delete the files from trash permenantly

  deleteFromTrash(fileId: string){
    
    axios.delete(`http://localhost:3000/trash/${fileId}`)
    .then(Response => {
      console.log(Response.data.message);
      this.showTrashFiles();
    })
    .catch(Error => {
      console.error("error",Error);
    })
  }
 

  // logout

  logoutFunc(){
    axios.get("http://localhost:3000/logout" , {withCredentials: true})
    .then(Response => {
      console.log(Response.data.message);
    })
    .catch(Error => {
      console.error("error", Error);
    })
  }

  getFilecontent(value: string){
    // this.fileContent = value;
  }

}
