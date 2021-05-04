import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[loop]",
})
export class LoopDirective implements OnInit {
  @Input("loopInto") items: number[];
  @Input("loopUsing") text: string;
  constructor(
    private container: ViewContainerRef,
    private template: TemplateRef<any>
  ) {}

  /**
   * Usamos o método createEmbeddedView dentro do for
   * e definimos como chave o $implicit e passamos o item como valor
   * com isso, conseguimos exibir o valor passado no array para a diretiva loop
   */
  ngOnInit(): void {
    for (let item of this.items) {
      this.container.createEmbeddedView(this.template, { $implicit: item });
    }
  }
}
