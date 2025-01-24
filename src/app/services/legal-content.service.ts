import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { marked } from "marked";
import matter from "front-matter";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class LegalContentService {
  constructor(
    private http: HttpClient,
    private datePipe: DatePipe,
  ) {}

  getLegalContent(
    filePath: string,
  ): Observable<{ content: string; publishedOn: string; title: string }> {
    return this.http.get(filePath, { responseType: "text" }).pipe(
      map((data: string) => {
        const parsed = matter(data) as {
          attributes: { publishedOn: string; title: string };
          body: string;
        };
        const publishedOn =
          this.datePipe.transform(parsed.attributes.publishedOn, "MMMM d, y") ||
          "";
        const content = marked(parsed.body) as string;
        const title = parsed.attributes.title;
        return { content, publishedOn, title };
      }),
    );
  }
}
