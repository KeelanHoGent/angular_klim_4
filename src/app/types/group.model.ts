export class Group {
    private _id: number;
    private _name: string;
    private _projectId: number;
    private _groupCode: string;
    

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

    public get groupCode(): string {
        return this._groupCode;
    }
    public set groupCode(value: string) {
        this._groupCode = value;
    }

    public get projectId(): number {
        return this._projectId;
    }
    public set projectId(value: number) {
        this._projectId = value;
    }
}
