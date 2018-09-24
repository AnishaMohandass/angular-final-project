import { Component, OnInit } from '@angular/core';
import { College } from '../college';
import { LIST } from '../mock-college';
import { DetailService } from '../detail.service';

@Component({
  selector: 'app-college',
  templateUrl: './college.component.html',
  styleUrls: ['./college.component.css']
})
export class CollegeComponent implements OnInit {

selectedname: College;
onSelect (detail : College) : void {
  this.selectedname=detail;
}

details : College [];

  constructor(private detailservice : DetailService) { }

  getNames(): void {
    this.detailservice.getNames().subscribe(details => this.details = details);
  }

  ngOnInit() {
    this.getNames();
  }

}
