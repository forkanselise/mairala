import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { CommonService } from './Service/common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mairala';

  constructor(
    private dialog:MatDialog,
    private commonService: CommonService
  ){
    this.dataLoad();
  }

  name = 'Video events';
  videoSource = [
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      Url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    }
  ]

myVideos: any;

@ViewChild('videoPlayer') videoplayer: any;
public startedPlay:boolean = false;
public show:boolean = false;
pauseVideo(videoplayer: any)
{
  videoplayer.nativeElement.play();
  // this.startedPlay = true;
  // if(this.startedPlay == true)
  // {
     setTimeout(() =>
     {
      videoplayer.nativeElement.pause();
       if(videoplayer.nativeElement.paused)
      {
        this.show = !this.show;
      }
     }, 5000);
  // }
}

closebutton(videoplayer : any){
  this.show = !this.show;
  videoplayer.nativeElement.play();
}

dataLoad(){
  this.commonService.getData().subscribe(res => {
    this.myVideos = res;

    console.log(this.myVideos);
  })
}

openDialog() {
  const dialogRef = this.dialog.open(DialogboxComponent)

  dialogRef.afterClosed().subscribe(()=>{
    this.dataLoad();
  })
}


}
