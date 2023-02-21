import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import FileService from '../service/fileService.service';
@Component({
  selector: 'app-save-details',
  templateUrl: './save-details.component.html',
  styleUrls: ['./save-details.component.scss']
})
export class SaveDetailsComponent implements OnInit {

  constructor(public fileService: FileService) { }
  data: Data;
  save() {
    console.log(this.file);
    this.fileService.sendExcelFile(this.file).subscribe(succ => {this.data = succ; this.flag=true});
  }
  arrayBuffer: any;
  file: File;
  flag: boolean = false;
  incomingfile(event) {
    this.file = event.target.files[0];
  }
  ngOnInit(): void {
  }

}


