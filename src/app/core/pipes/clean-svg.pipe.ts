import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cleanSvg",
  standalone: true,
})
export class CleanSvgPipe implements PipeTransform {
  transform(svgString: string): string {
    // Remove <svg> tags
    let cleanedSvg = svgString.replace(/<\/?svg[^>]*>/g, "");

    // Remove specified attributes
    cleanedSvg = cleanedSvg.replace(/stroke="[^"]*"/g, "");
    cleanedSvg = cleanedSvg.replace(/stroke-width="[^"]*"/g, "");
    cleanedSvg = cleanedSvg.replace(/stroke-linecap="[^"]*"/g, "");
    cleanedSvg = cleanedSvg.replace(/stroke-linejoin="[^"]*"/g, "");

    return cleanedSvg;
  }
}
