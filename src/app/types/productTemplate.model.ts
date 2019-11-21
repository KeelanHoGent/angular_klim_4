import { ProductVariationTemplate } from './productVariationTemplate.model';

export class ProductTemplate {
    private _id: number;
    private _name: string;
    private _description: string;
    private _score: number;
    private _image: string;
    private _categoryTemplateId: number;
    private _variations = new Array<ProductVariationTemplate>();
    private _hasMultipleDisplayVariations: boolean;


    toJson(): any {
        return {
            productId: this._id,
            productName: this._name,
            description: this._description,
            productImage: this._image,
            categoryTemplateId: this._categoryTemplateId,
            score: this._score,
            hasMultipleDisplayVariations: this._hasMultipleDisplayVariations,
            productVariationTemplates: this.variations.map(va => va.toJson())
        }
    }

    static fromJSON(p: any): ProductTemplate {
        const result = new ProductTemplate();
        result.id = p.productId;
        result.name = p.productName;
        result.description = p.description;
        result.image = p.productImage;
        result.score = p.score;
        result.categoryTemplateId = p.categoryTemplateId;
        result.hasMultipleDisplayVariations = p.hasMultipleDisplayVariations;
        p.variations.map(ProductVariationTemplate.fromJSON);
        
        return result;
    }

    get id (): number {
        return this._id;
    }

    set id(id: number) {
        this._id = id;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
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

    public get categoryTemplateId(): number {
        return this._categoryTemplateId;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get variations(): ProductVariationTemplate[] {
        return this._variations;
    }

    set variations(v: ProductVariationTemplate[]){
        this._variations = v;
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
}
