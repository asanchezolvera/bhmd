import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-home",
  imports: [CommonModule],
  templateUrl: "./home.component.html",
  standalone: true,
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
