export class Group {

  private readonly _id: number;
  private _name: string;
  private _groupCode: string;

  constructor(id: number, name: string, code: string) {
    this._id = id;
    this._name = name;
    this._groupCode = code;
  }

  static fromJSON(json: any): Group {
    return new Group(
      json.groupId,
      json.groupName,
      json.uniqueGroupCode
    );
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
