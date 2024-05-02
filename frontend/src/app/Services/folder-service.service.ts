import { Injectable } from '@angular/core';

interface File {
  name: string;
  content: string;
}

interface Folder {
  name: string;
  files: File[];
  folders: Folder[];
}

@Injectable({
  providedIn: 'root'
})
export class FolderService {
  rootFolder: Folder = {
    name: 'Root',
    files: [],
    folders: [],
  }
  constructor() { }
  createFile(folder: Folder, name: string, content: string){
    const newFile: File = {
      name, 
      content
    }

    folder.files.push(newFile);
  }

  createFolder(folder: Folder, name: string){
    const newFolder: Folder = {
      name, 
      files: [],
      folders: []
    }

    folder.folders.push(newFolder);
  }

  printFiles(files: any){
   files = this.rootFolder.files;
    
  }
  printFolder(folder: any){
    folder = this.rootFolder.folders;
  }
}
