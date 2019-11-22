
export class ProductVariationTemplate {

  private _productVariationTemplateId: number;
  private _productDescr: string;
  private _eSchoolGrade: string;

  static fromJSON(p: any): ProductVariationTemplate {
    const result = new ProductVariationTemplate();
    result.productVariationTemplateId = p.ProductVariationTemplateId;
    result.eSchoolGrade = p.ESchoolGrade;
    result.productDescr = p.ProductDescr;

    return result;
   }

    toJson(): any {
        return {
            productVariationTemplateId: this._productVariationTemplateId,
            productDescr: this._productDescr,
            eSchoolGrade: this._eSchoolGrade
        };
    }

  get productVariationTemplateId() : number {
    return this._productVariationTemplateId;
  }

  set productVariationTemplateId(v: number) {
    this._productVariationTemplateId = v;
  }

  get eSchoolGrade(): string {
    return this._eSchoolGrade;
  }

  set eSchoolGrade(v: string) {
    this._eSchoolGrade = v;
  }

  get productDescr(): string {
    return this._productDescr;
  }

  set productDescr(v: string) {
    this._productDescr = v;
  }

}
