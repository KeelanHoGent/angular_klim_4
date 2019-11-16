import { ProductTemplate } from './product-template-model';

export class ProjectTemplate {
    private _projectTemplateId: number;
    private _productTemplates: ProductTemplate[] = [];
    private _name: string;
    private _descr: string;
    private _image: string;
    private _addedByGO: boolean;
    private _applicationDomainId: number;


    constructor() {

    }

    static fromJSON(json: any): ProjectTemplate {
        const p = new ProjectTemplate();
        p._name = json.projectName;
        p._descr = json.projectDescr;
        p._image = json.projectImage;
        p._addedByGO = json.addedByGO;
        p._applicationDomainId = json.applicationDomainId;
        p._productTemplates = json.productTemplates.map(t => ProductTemplate.fromJSON(t));
        p._projectTemplateId = json.projectId;

        return p;
    }
    toJson(): any {
        return {
          projectId: this._projectTemplateId,
          projectName: this._name,
          projectDescr: this._descr,
          projectImage: this._image,
          applicationDomainId: this._applicationDomainId,
          products: this._productTemplates.map(p => p.toJson())
        };
      }
    get projectTemplateId(): number {
        return this._projectTemplateId;
    }
    set projectTemplateId(value: number) {
        this._projectTemplateId = value;
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        this._name = value;
    }
    get descr(): string {
        return this._descr;
    }
    set descr(value: string) {
        this._descr = value;
    }
    get image(): string {
        return this._image;
    }
    set image(value: string) {
        this._image = value;
    }

    get applicationDomainId(): number {
        return this._applicationDomainId;
    }
    set applicationDomainId(value: number) {
        this._applicationDomainId = value;
    }
    get productTemplates(): ProductTemplate[] {
        return this._productTemplates;
    }
    set productTemplates(value: ProductTemplate[]) {
        this._productTemplates = value;
    }
}
