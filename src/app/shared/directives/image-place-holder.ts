import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appImagePlaceHolder]",
})
export class ImagePlaceHolder {
  private readonly element = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);

  ngAfterViewInit(): void {
    const div = this.renderer2.createElement("div") as HTMLElement;
    div.innerHTML = `
    <div
      role="status"
      class="absolute top-0 start-0 bottom-0 end-0 space-y-8 animate-pulse md:space-y-0 md:space-x-8 rtl:space-x-reverse md:flex md:items-center"
    >
      <div
        class="flex items-center justify-center w-full h-full bg-gray-300 rounded-sm sm:w-96 mx-auto"
      >
        <svg
          class="w-10 h-10 text-gray-200 dark:text-gray-600"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path
            d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"
          />
        </svg>
      </div>
    </div>
    `;

    const parentNode = this.renderer2.parentNode(this.element.nativeElement);
    this.renderer2.appendChild(parentNode, div);
    (this.element.nativeElement as HTMLImageElement).onload = (e) => {
      (e.target as HTMLElement).nextElementSibling?.remove();
    };
  }
}
