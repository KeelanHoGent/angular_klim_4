export class ProductVariationTemplate {

    get productVariationTemplateId(): number {
        return this._productVariationTemplateId;
    }

    set productVariationTemplateId(id: number) {
        this._productVariationTemplateId = id;
    }
    public get productDescr(): string {
        return this._productDescr;
    }

    public set productDescr(value: string) {
        this._productDescr = value;
    }
    public get eSchoolGrade(): number {
        return this._eSchoolGrade;
    }
    public set eSchoolGrade(value: number) {
        this._eSchoolGrade = value;
    }

    private _productVariationTemplateId: number;
    private _productDescr: string;
    private _eSchoolGrade: number;

    static fromJSON(p: any): ProductVariationTemplate {
      const result = new ProductVariationTemplate();
      result.productVariationTemplateId = p.productVariationTemplateId;
      result.productDescr = p.productDescr;
      result.eSchoolGrade = p.eSchoolGrade;
      return result;
    }

    toJson(): any {
        return {
            productVariationTemplateId: this._productVariationTemplateId,
            productDescr: this._productDescr,
            eSchoolGrade: this._eSchoolGrade
        };
    }
  }
