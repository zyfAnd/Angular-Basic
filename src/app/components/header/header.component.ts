import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //接收 父组件传过来的数据
  @Input() title:any
  @Input() msg:any
  constructor() { }

  ngOnInit(): void {
  }

}
