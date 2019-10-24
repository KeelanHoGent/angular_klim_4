import { ApplicationDomain } from "./applicationDomain.model";
import { Product } from "./product.model";
import { Group } from "./group.model";

export class Project {
  private _id: number;
  private _name: string;
  private _descr: string;
  private _code: string;
  private _image: string;
  private _budget: number;
  private _schoolYear: number;
  private _applicationDomain: ApplicationDomain;
  private _products: Product[] = [];
  private _groups: Group[] = [];


  static fromJSON(json: any): Project {
    const p = new Project();
    p._id = json.projectId;
    p._name = json.projectName;
    p._descr = json.projectDescr;
    p._code = json.projectCode;
    p._image = json.projectImage;
    p._budget = json.projectBudget;
    p._schoolYear = json.eSchoolYear;
    p._applicationDomain = ApplicationDomain.fromJSON(json.applicationDomain);
    //TODO: products list en groups
    return p;
  }

  toJson(): any {
    return {
        projectId: this._id,
        projectName: this._name,
        projectDescr: this._descr,
        projectCode: this._code,
        projectImage: this._image,
        projectBudget: this._budget,
        eSchoolYear: this._schoolYear
        //p._applicationDomain = ApplicationDomain.toJSON(json.applicationDomain); NOG TE DOEN
    }
}

  //GETTERS AND SETTERS

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
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

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get budget(): number {
    return this._budget;
  }

  set budget(value: number) {
    this._budget = value;
  }

  get schoolYear(): number {
    return this._schoolYear;
  }

  set schoolYear(value: number) {
    this._schoolYear = value;
  }

  get applicationDomain(): ApplicationDomain {
    return this._applicationDomain;
  }

  set applicationDomain(value: ApplicationDomain) {
    this._applicationDomain = value;
  }

  get products(): Product[] {
    return this._products;
  }

  set products(value: Product[]) {
    this._products = value;
  }

  get groups(): Group[] {
    return this._groups;
  }

  set groups(value: Group[]) {
    this._groups = value;
  }
}
