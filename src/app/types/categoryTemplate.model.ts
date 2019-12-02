export class CategoryTemplate {
    private _categoryTemplateId: number;
    private _categoryName: string;
    private _categoryDescr: string;

    toJson(): any {
        return {
            categoryTemplateId: this._categoryTemplateId,
            categoryName: this._categoryName,
            categoryDescr: this._categoryDescr
        };
    }

    static fromJSON(p: any): CategoryTemplate {
        const result = new CategoryTemplate();
        result.categoryTemplateId = p.categoryTemplateId;
        result.categoryName = p.categoryName;
        result.categoryDescr = p.categoryDescr;

        return result;
    }

    get categoryTemplateId(): number {
        return this._categoryTemplateId;
    }

    set categoryTemplateId(v: number) {
        this._categoryTemplateId = v;
    }

    get categoryName(): string {
        return this._categoryName;
    }

    set categoryName(v: string) {
        this._categoryName = v;
    }

    get categoryDescr(): string {
        return this._categoryDescr;
    }

    set categoryDescr(v: string) {
        this._categoryDescr = v;
    }
}
