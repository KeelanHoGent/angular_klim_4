
export class Pupil {

    private _pupilId: number;
    private _firstName: string;
    private _surName: string;


    constructor(firstName: string, surName: string) {
        this._firstName = firstName;
        this._surName = surName;
    }



    static fromJSON(json: any): Pupil {
        const g = new Pupil(
            json.firstName,
            json.surName
        );
        g._pupilId = json.pupilId;

        return g;

    }

    toJson(): any {
        return {
            pupilId: this._pupilId,
            firstName: this._firstName,
            surname: this._surName
        }
    }


    /**
     * Getter id
     * @return {number}
     */
    public get id(): number {
        return this._pupilId;
    }

    /**
     * Getter firstName
     * @return {string}
     */
    public get firstName(): string {
        return this._firstName;
    }

    /**
     * Getter surName
     * @return {string}
     */
    public get surName(): string {
        return this._surName;
    }

    /**
     * Setter id
     * @param {number} value
     */
    public set id(value: number) {
        this._pupilId = value;
    }

    /**
     * Setter firstName
     * @param {string} value
     */
    public set firstName(value: string) {
        this._firstName = value;
    }

    /**
     * Setter surName
     * @param {string} value
     */
    public set surName(value: string) {
        this._surName = value;
    }





}
