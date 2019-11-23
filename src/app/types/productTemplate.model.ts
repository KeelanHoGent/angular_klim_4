import { ProductVariationTemplate } from './productVariationTemplate.model';

export class ProductTemplate {
    private _productTemplateId: number;
    private _productName: string;
    private _description: string;
    private _score: number;
    private _image: string;
    private _projectId: number;
    private _categoryTemplateId: number;
    private _productVariationTemplates = new Array<ProductVariationTemplate>();
    private _hasMultipleDisplayVariations: boolean;
    private _addedByGO: boolean;

  static fromJSON(p: any): ProductTemplate {
    console.log(p.addedByGo);
    const result = new ProductTemplate();
    result.productTemplateId = p.productTemplateId;
    result.productName = p.productName;
    result.description = p.description;
    result.image = p.productImage;
    result.score = p.score;
    result.categoryTemplateId = p.categoryTemplateId;
    result.hasMultipleDisplayVariations = p.hasMultipleDisplayVariations;
    result.addedByGo = p.addedByGO;
    p.productVariationTemplates.map(ProductVariationTemplate.fromJSON);

    return result;
  }


  toJson(): any {
        return {
            productTemplateId: this._productTemplateId,
            productName: this._productName,
            description: this._description,
            productImage: this._image,
            categoryTemplateId: this._categoryTemplateId,
            score: this._score,
            projectId: this._projectId,
            hasMultipleDisplayVariations: this._hasMultipleDisplayVariations,
            addedByGo: this._addedByGO,
            productVariationTemplates: this.productVariationTemplates.map(va => va.toJson())
        };
    }

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

    public set categoryTemplateId(value: number) {
        this._categoryTemplateId = value;
    }

    public get categoryId(): number {
        return this._categoryTemplateId;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get productVariationTemplates(): ProductVariationTemplate[] {
        return this._productVariationTemplates;
    }

    set productVariationTemplates(v: ProductVariationTemplate[]){
        this._productVariationTemplates = v;
    }

    get hasMultipleDisplayVariations(): boolean {
        return this._hasMultipleDisplayVariations;
    }

    set hasMultipleDisplayVariations(v: boolean) {
        this._hasMultipleDisplayVariations = v;
    }

    get score(): number{
        return this._score;
    }

    set score(v: number) {
        this._score = v;
    }

    set projectId(value: number) {
      this._projectId = value;
    }

    get projectId(): number {
      return this._projectId;
    }

    set addedByGo(v: boolean) {
      this._addedByGO = v;
    }

    get addedByGo(): boolean {
    return this._addedByGO;
    }
}
