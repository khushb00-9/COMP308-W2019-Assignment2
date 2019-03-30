//File Name: base-page.component.ts
//Name: Khushboo Sakervala
//Student ID: 300984318
//Date: March 28, 2019

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-base-page",
  templateUrl: "./base-page.component.html",
  styleUrls: ["./base-page.component.css"]
})
export class BasePageComponent implements OnInit {
  title: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.data.title;
  }
}
