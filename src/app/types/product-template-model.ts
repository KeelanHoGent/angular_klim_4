import { ProductVariationTemplate } from './product-variation-template';

export class ProductTemplate {

  get productTemplateId(): number {
      return this._productTemplateId;
  }

  set productTemplateId(id: number) {
      this._productTemplateId = id;
  }

  public get productName(): string {
      return this._productName;
  }

  public set productName(value: string) {
      this._productName = value;
  }

  public get description(): string {
      return this._description;
  }

  public set description(value: string) {
      this._description = value;
  }

  public set categoryId(value: number) {
      this._categoryId = value;
  }

  public set projectId(value: number) {
      this._projectId = value;
  }

  get image(): string {
      return this._image;
  }

  set image(value: string) {
      this._image = value;
  }
  get addedByGo(): boolean {
    return this._addedByGo;
  }
  set addedByGo(value: boolean) {
    this._addedByGo = value;
  }
  get productVariationTemplates(): ProductVariationTemplate[] {
    return this._productVariationTemplates;
  }
  set productVariationTemplates(value: ProductVariationTemplate[]) {
    this._productVariationTemplates = value;
  }
  private _productTemplateId: number;
  private _productName: string;
  private _description: string;
  private _image: string;
  private _categoryId: number;
  private _projectId: number;
  private _addedByGo: boolean;
  private _productVariationTemplates: ProductVariationTemplate[] = [];

  static fromJSON(p: any): ProductTemplate {
    const result = new ProductTemplate();
    result.productTemplateId = p.productTemplateId;
    result.productName = p.productName;
    result.description = p.description;
    result.image = p.productImage;
    result.projectId = p.projectId;
    result.categoryId = p.categoryId;
    result.addedByGo = p.addedByGo;
    result.productVariationTemplates = p.productVariationTemplates.map(pv => ProductVariationTemplate.fromJSON(pv));
    return result;
  }

  toJson(): any {
      return {
          productTemplateId: this._productTemplateId,
          productName: this._productName,
          description: this._description,
          productImage: this._image,
          projectId: this._projectId,
          categoryId: this._categoryId,
          addedByGo: this._addedByGo,
          productVariationTemplates: this._productVariationTemplates.map(pv => pv.toJson())
      };
  }
}
