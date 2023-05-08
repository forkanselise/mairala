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
    Description: [''],
    Thumbnail: ['']
  });

  constructor(
    private dialogRef: MatDialogRef<DialogboxComponent>,
    private fb: FormBuilder,
    private commonService: CommonService
  ) { }

  ngOnInit(): void {
  }


  public picked(event:any) {
    // this.currentId = field;
    let fileList: FileList = event.target.files;
    if (fileList.length > 0) {
      const file: File = fileList[0];
      // this.sellersPermitFile = file;
      this.handleInputChange(file); //turn into base64
    }
  }


  handleInputChange(files:any) {
    var file = files;
    var pattern = /image-*/;
    var reader = new FileReader();
    if (!file.type.match(pattern)) {
      alert('invalid format');
      return;
    }
    reader.onloadend = this._handleReaderLoaded.bind(this);
    reader.readAsDataURL(file);
  }
  _handleReaderLoaded(e:any) {
    let reader = e.target;
    var base64result = reader.result.substr(reader.result.indexOf(',') + 1);
    //this.imageSrc = base64result;
    // let id = this.currentId;
    console.log(base64result);

    this.videoInfo.get('Thumbnail')?.setValue(base64result);

    // this.log();
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
