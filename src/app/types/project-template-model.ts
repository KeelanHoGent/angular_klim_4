import { ProductTemplate } from './product-template-model';

export class ProjectTemplate {
    private _projectTemplateId: number;
    private _productTemplates: ProductTemplate[];


    constructor(private _name: string, private _descr: string, private _image: string, private _addedByGO: boolean,
                private _applicationDomainId: number) {

    }

    static fromJSON(json: any): ProjectTemplate {
        const p = new ProjectTemplate(json.projectName, json.projectDescr, json.projectImage, json.addedByGO, json.applicationDomainId);
        p._productTemplates = json.producttemplatess.map(t => ProductTemplate.fromJSON(t));
        p._projectTemplateId = json.projectId;

        return p;

    }

    public get projectTemplateId(): number {
        return this._projectTemplateId;
    }
    public set projectTemplateId(value: number) {
        this._projectTemplateId = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    public get descr(): string {
        return this._descr;
    }
    public set descr(value: string) {
        this._descr = value;
    }
    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }

    public get applicationDomainId(): number {
        return this._applicationDomainId;
    }
    public set applicationDomainId(value: number) {
        this._applicationDomainId = value;
    }
    public get productTemplates(): ProductTemplate[] {
        return this._productTemplates;
    }
    public set productTemplates(value: ProductTemplate[]) {
        this._productTemplates = value;
    }
}
