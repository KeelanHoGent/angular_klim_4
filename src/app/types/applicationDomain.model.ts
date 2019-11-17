export class ApplicationDomain {

    private _id: number;
    private _name: string;
    private _descr: string;

    

    static fromJSON(json: any): ApplicationDomain {
      const domain = new ApplicationDomain();
      domain._id = json.applicationDomainId;
      domain._name = json.applicationDomainName;
      domain._descr = json.applicationDomainDescr;

      return domain;
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
