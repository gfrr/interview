import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  public data: any[];
  public reversed: boolean = false;
  public status: string = "Sort Descending";
  constructor(
    public api: ApiService
  ) { }

  ngOnInit() {
  }

  get(){
    this.api.getData().subscribe(result=>{
      this.data = result;
    });
  }


  sorting(){
    this.data.reverse();
    this.reversed = !this.reversed;
    this.status = this.reversed ? "Sort Ascending" : "Sort Descending";
  }

  removeMe(i){
    //this.api.deletePost(this.data[i].id).subscribe(response=>{ this.data.splice(i, 1) })
    this.data.splice(i, 1);
  }
}
