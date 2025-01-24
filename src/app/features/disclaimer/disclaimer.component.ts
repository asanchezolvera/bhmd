import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-disclaimer",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./disclaimer.component.html",
})
export class DisclaimerComponent implements OnInit {
  disclaimer: string =
    "These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure, or prevent any disease. Use only as directed. Consult your healthcare provider before using supplements. The information provided herein is intended for your general knowledge only and is not intended to be, nor is it, medical advice or a substitute for medical advice. If you have or suspect you have, a specific medical condition or disease, please consult your healthcare provider.";

  ngOnInit(): void {}
}
