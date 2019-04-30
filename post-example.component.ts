import { Component,  OnInit} from '@angular/core';
import { DataService } from './data.service';
import { postData, respData} from './postdataObj';
@Component({
  selector: 'post-example',
  templateUrl: './post-example.html'
})
export class postExampleComponent implements  OnInit {
    data:string;
    posData:postData;
    resultData: respData;
  constructor( private dataService: DataService){
  }
  ngOnInit() {
    
    }
    sendData() {
        this.posData = new postData();
        this.posData.body = "test data2";
        this.posData.title = "Some Title";
        this.posData.userId = 13;
        this.dataService.addPost(this.posData).subscribe((res : respData)=>{
            this.resultData = res;
            console.log(this.resultData.id);
            this.data =this.resultData.id + "-" + this.resultData.title;
          });
  }
}