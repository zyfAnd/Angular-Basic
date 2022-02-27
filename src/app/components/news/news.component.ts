import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  @Input() content:any
  constructor() { }

  ngOnInit(): void {
  }

}
