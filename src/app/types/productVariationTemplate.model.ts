
export class ProductVariationTemplate {
    
    private _id: number;
    private _grade: string;
    private _description: string;

    toJson(): any {
        return {
            ProductVariationTemplateId: this._id,
            ProductDescr: this._description,
            ESchoolGrade: this._grade
        }
    }

    static fromJSON(p: any): ProductVariationTemplate {
        const result = new ProductVariationTemplate();
        result.id = p.ProductVariationTemplateId;
        result.grade = p.ESchoolGrade;
        result.description = p.ProductDescr;

        return result;
    }
    public get id() : number {
        return this._id;
    }

    public get grade() : string {
        return this._grade;
    }

    public get description() : string {
        return this._description;
    }

    public set id(v : number) {
        this._id = v;
    }
    
    public set description(v : string) {
        this._description = v;
    }
    
    public set grade(v : string) {
        this._grade = v;
    }
}
