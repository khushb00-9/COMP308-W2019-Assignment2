//File Name: footer.component.ts
//Name: Khushboo Sakervala
//Student ID: 300984318
//Date: March 28, 2019

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.css"]
})
export class FooterComponent implements OnInit {
  year: number;

  constructor() {}

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }
}
