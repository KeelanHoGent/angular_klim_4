export class EvaluationCriterea{
    private _evaluationCritereaId : number;
    private _title : number;



    static fromJSON(json: any): EvaluationCriterea {
        const g = new EvaluationCriterea();
        g._evaluationCritereaId = json.evaluationCritereaId; 
        g._title = json.title;

        return g; 
      }


      toJson(): any {
        return {
          evaluationCritereaId: this._evaluationCritereaId,
          title: this._title
        }
      }
    



    /**
     * Getter evaluationCritereaId
     * @return {number}
     */
	public get evaluationCritereaId(): number {
		return this._evaluationCritereaId;
	}

    /**
     * Getter title
     * @return {number}
     */
	public get title(): number {
		return this._title;
	}

    /**
     * Setter evaluationCritereaId
     * @param {number} value
     */
	public set evaluationCritereaId(value: number) {
		this._evaluationCritereaId = value;
	}

    /**
     * Setter title
     * @param {number} value
     */
	public set title(value: number) {
		this._title = value;
	}



}