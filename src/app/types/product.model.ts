export class Product {
  private _productId: number;
  private _productName: string;
  private _description: string;
  private _image: string;
  private _project: number;
  private _price: number;
  private _category: number;

  static fromJSON(p: any): Product {
    const result = new Product();
    result.productId = p.productId;
    result.productName = p.productName;
    result.description = p.description;
    result.image = p.productImage;
    result.project = p.projectId;
    result.price = p.price;
    result.category = p.categoryId;

    return result;
  }

  get productId(): number {
    return this._productId;
  }

  set productId(value: number) {
    this._productId = value;
  }

  get productName(): string {
    return this._productName;
  }

  set productName(value: string) {
    this._productName = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get project(): number {
    return this._project;
  }

  set project(value: number) {
    this._project = value;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    this._price = value;
  }

  get category(): number {
    return this._category;
  }

  set category(value: number) {
    this._category = value;
  }
}
