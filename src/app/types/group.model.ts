export class Group {

  private readonly _id: number;
  private _name: string;
  private _groupCode: string;

  static fromJSON(json: any): Group {
    const g = new Group();
    g.name = json.groupName;

    return g;

  }

  toJson(): any {
    return {
      groupName: this._name
    }
  }

  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get groupCode(): string {
    return this._groupCode;
  }

  set groupCode(value: string) {
    this._groupCode = value;
  }
}
