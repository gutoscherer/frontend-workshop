import DomAdapter from "../adapter/Dom.adapter";

export abstract class BaseComponent {
  protected id: string;
  protected domAdapter: DomAdapter;
  protected rootId: string;
  protected el: HTMLElement;

  constructor(dom: DomAdapter, id: string) {
    this.domAdapter = dom;
    this.rootId = id;
    this.el = null;
  }

  private createElementBase(
    tag: string,
    content: string = null,
    classList: string[] = null,
    id: string = null,
    children: HTMLElement[] = null
  ): HTMLElement {
    const el = this.domAdapter.createElement(tag);

    if (content) {
      el.innerHTML = content;
    }

    if (classList) {
      classList.forEach(className => el.classList.add(className));
    }

    if (id) {
      classList.forEach(className => el.classList.add(className));
    }

    if (children) {
      children.forEach(child => el.appendChild(child));
    }

    return el;
  }

  public createElement(
    tag: string,
    content: string = null,
    classList: string[] = null,
    id: string = null,
    children: HTMLElement[] = null
  ): HTMLElement {
    const el = this.createElementBase(tag, content, classList, id, children);
    this.el = el;
    return el;
  }

  public createChildElement(
    tag: string,
    content: string = null,
    classList: string[] = null,
    id: string = null,
    children: HTMLElement[] = null
  ): HTMLElement {
    return this.createElementBase(tag, content, classList, id, children);
  }

  public get htmlNode() {
    return this.el;
  }

  abstract render(props: any): HTMLElement;
}
