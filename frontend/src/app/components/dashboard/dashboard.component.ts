import { Component, OnInit } from '@angular/core';
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
  }

  getAllfiles(){
    axios.get<any>("http://localhost:3000/file")
    .then(Response => {
      
      this.Files = Response.data.files;
      console.log(this.Files)
    })
    .catch(Error => {
      console.error("error", Error)
    })
  }

  updateFileName(filename: string, filecontent: string){
    this.fileName = filename;
    this.fileContent = filecontent
    // this.Files.push(this.fileName)
    console.log(this.fileContent)
    this.getAllfiles()
    const data = {filename, filecontent}

    axios.post("http://localhost:3000/file", data)
    .then(Response => {
      console.log(Response.data)
    })
    .catch(Error => {
      console.error("error", Error)
    })

   
   
  }

  updateFileContent(filecontent: string){
    const data = {filename: this.secondPart , filecontent}
   

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
      this.fileContent = Response.data.message[0].filecontent
      
      console.log("getFilecontent", this.fileContent)
    })
    .catch(Error => {
      console.error("error", Error)
    })

  }
 

  getFilecontent(value: string){
    // this.fileContent = value;
  }

}
