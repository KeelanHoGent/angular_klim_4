
export class Pupil {

    private _pupilId : number;
    private _firstName: string;
    private _surName: string;

    static fromJSON(json: any): Pupil {
        const pupil = new Pupil();
        pupil.firstName = json.firstName;
        pupil.surName = json.surname;
        pupil.id = json.pupilId;

        return pupil;

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
