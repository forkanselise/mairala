import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../Service/common.service';

@Component({
  selector: 'app-dialogbox',
  templateUrl: './dialogbox.component.html',
  styleUrls: ['./dialogbox.component.scss']
})
export class DialogboxComponent implements OnInit {

  videoInfo = this.fb.group({
    Title: [''],
    VideoUrl: [''],
    Description: ['']
  });

  constructor(
    private dialogRef: MatDialogRef<DialogboxComponent>,
    private fb: FormBuilder,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }

  saveData() {
    // console.log(this.note.value);
    // alert("Note added to local storage Successfully");
    // this.local.saveData(this.note.value as Note);
    console.log(this.videoInfo.value)
    this.commonService.postData(this.videoInfo.value).subscribe();
    this.dialogRef.close();
  }

}
