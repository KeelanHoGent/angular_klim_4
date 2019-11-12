export class Evaluation {
    private _evaluationId : number;

    private _descriptionPrivate : number;
    private _descriptionPupil : number;
    private _extra : number;

    private _evaluationCritereaId : number;
    private _title : string;


    static fromJSON(json: any): Evaluation {
        const g = new Evaluation();
        g._evaluationId = json.evaluationId; 

        g._descriptionPrivate = json.descriptionPrivate;
        g._descriptionPupil = json.descriptionPupil; 
        g._title = json.title,
        g._extra = json.extra;
        g._evaluationCritereaId = json.evaluationCritereaId;

        return g; 
      }


      toJson(): any {
        return {
        evaluationId: this._evaluationId,
        evaluationCritereaId : this._evaluationCritereaId,
        descriptionPrivate: this._descriptionPrivate,
        descriptionPupil: this._descriptionPupil,
        extra: this._extra
        }
      }



    /**
     * Getter titel
     * @return {string}
     */
	public get title(): string {
		return this._title;
	}

    /**
     * Setter titel
     * @param {string} value
     */
	public set title(value: string) {
		this._title = value;
	}




    /**
     * Getter evaluationId
     * @return {number}
     */
	public get evaluationId(): number {
		return this._evaluationId;
	}

    /**
     * Getter descriptionPrivate
     * @return {number}
     */
	public get descriptionPrivate(): number {
		return this._descriptionPrivate;
	}

    /**
     * Getter descriptionPupil
     * @return {number}
     */
	public get descriptionPupil(): number {
		return this._descriptionPupil;
	}

    /**
     * Getter extra
     * @return {number}
     */
	public get extra(): number {
		return this._extra;
	}

    /**
     * Setter evaluationId
     * @param {number} value
     */
	public set evaluationId(value: number) {
		this._evaluationId = value;
	}

    /**
     * Setter descriptionPrivate
     * @param {number} value
     */
	public set descriptionPrivate(value: number) {
		this._descriptionPrivate = value;
	}

    /**
     * Setter descriptionPupil
     * @param {number} value
     */
	public set descriptionPupil(value: number) {
		this._descriptionPupil = value;
	}

    /**
     * Setter extra
     * @param {number} value
     */
	public set extra(value: number) {
		this._extra = value;
	}



}