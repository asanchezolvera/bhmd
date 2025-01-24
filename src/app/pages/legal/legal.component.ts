import { Component, OnInit } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { LegalContentService } from "@src/app/services/legal-content.service";

@Component({
  selector: "app-legal-page",
  imports: [CommonModule],
  templateUrl: "./legal.component.html",
  providers: [DatePipe],
  standalone: true,
})
export class LegalComponent implements OnInit {
  title: string = "";
  publishedOn: string = "";
  content: string = "";

  constructor(
    private route: ActivatedRoute,
    private legalContentService: LegalContentService,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const fileName = params.get("fileName");
      if (fileName) {
        this.legalContentService
          .getLegalContent(`assets/content/legal/${fileName}.mdx`)
          .subscribe(
            (data: { content: string; publishedOn: string; title: string }) => {
              this.content = data.content;
              this.publishedOn = data.publishedOn;
              this.title = data.title;
            },
          );
      }
    });
  }
}
