export class ApplicationDomain {

    private _id: number;
    private _name: string;
    private _descr: string;

    constructor(id: number, name: string, descr: string) {
      this._id = id;
      this._name = name;
      this._descr = descr;
    }

    static fromJSON(json: any): ApplicationDomain {
      return new ApplicationDomain(
        json.applicationDomainId,
        json.applicationDomainName,
        json.applicationDomainDescr
      );
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
}
