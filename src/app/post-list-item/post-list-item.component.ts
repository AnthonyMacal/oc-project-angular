import { Component, OnInit, Input} from '@angular/core';
import { DatePipe } from '@angular/common';



@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
   }

  ngOnInit() {
  }

  public getLoveIts() {
    return this.loveIts
  };

  public doNotLoveIt() {
    this.loveIts--; 
  };

  public addLoveIt(){
    this.loveIts ++;
  };
}
