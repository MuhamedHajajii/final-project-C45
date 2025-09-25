import {
  Component,
  EventEmitter,
  HostListener,
  input,
  Input,
  output,
  Output,
} from "@angular/core";

@Component({
  selector: "app-brands-child",
  imports: [],
  templateUrl: "./brands-child.component.html",
  styleUrl: "./brands-child.component.css",
})
export class BrandsChildComponent {
  // @Input({
  //   required: true,
  //   alias: "toto",
  //   transform: (value: string) => {
  //     return value.toLocaleUpperCase();
  //   },
  // })
  // dataFromParentToChild: string = "";

  dataFromParentToChild = input<string>();

  // @Output() dataFromChildToParent = new EventEmitter<string>();
  dataFromChildToParent = output<string>();

  onClicked(): void {
    console.log("Hello world");
    this.dataFromChildToParent.emit("Hello ya shabab");
  }
}
