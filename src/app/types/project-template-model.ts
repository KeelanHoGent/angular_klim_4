import { ApplicationDomain } from './applicationDomain.model';
import { ProductTemplate } from './product-template-model';

export class ProjectTemplate {
    _id: number;
    _name: string;
    _descr: string;
    _image: string;
    /*private _applicationDomain: ApplicationDomain;
    private _productsTemplates: ProductTemplate[] = [];
*/


    static fromJSON(json: any): ProjectTemplate {
        const p = new ProjectTemplate();
        p._id = json.projectId;
        p._name = json.projectName;
        p._descr = json.projectDescr;
        p._image = json.projectImage;
        //p._applicationDomain = ApplicationDomain.fromJSON(json.applicationDomain);
        // TODO: products list en groups
        return p;

    }
    // GETTERS AND SETTERS
/*
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
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
    public get applicationDomain(): ApplicationDomain {
        return this._applicationDomain;
    }
    public set applicationDomain(value: ApplicationDomain) {
        this._applicationDomain = value;
    }
    public get productsTemplates(): ProductTemplate[] {
        return this._productsTemplates;
    }
    public set productsTemplates(value: ProductTemplate[]) {
        this._productsTemplates = value;
    }*/
}
