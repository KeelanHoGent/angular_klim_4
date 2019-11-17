
export class Variation {
    
    private _id: number;
    private _graad: string;
    private _description: string;

    toJson(): any {
        return {
            ProductVariationTemplateId: this._id,
            ProductDescr: this._description,
            ESchoolGrade: this._graad
        }
    }

    static fromJSON(p: any): Variation {
        const result = new Variation();
        result.id = p.ProductVariationTemplateId;
        result.graad = p.ProductDescr;
        result.description = p.ESchoolGrade;

        return result;
    }
    public get id() : number {
        return this._id;
    }

    public get graad() : string {
        return this._graad;
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
    
    public set graad(v : string) {
        this._graad = v;
    }
}
