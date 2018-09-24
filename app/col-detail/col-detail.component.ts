import { Component, OnInit, Input } from '@angular/core';
import { College } from '../college';

@Component({
  selector: 'app-col-detail',
  templateUrl: './col-detail.component.html',
  styleUrls: ['./col-detail.component.css']
})
export class ColDetailComponent implements OnInit {

  @Input() detail : College;
  constructor() { }

  ngOnInit() {
  }

}
