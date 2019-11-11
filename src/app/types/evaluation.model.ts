export class Evaluation {
    private _evaluationId : number;

    private _descriptionPrivate : number;
    private _descriptionPupil : number;
    private _extra : number;


    static fromJSON(json: any): Evaluation {
        const g = new Evaluation();
        g._evaluationId = json.evaluationId; 

        g._descriptionPrivate = json.descriptionPrivate;
        g._descriptionPupil = json.descriptionPupil; 
        
        g._extra = json.extra;

        return g; 
      }


      toJson(): any {
        return {
        evaluationId: this._evaluationId,

        descriptionPrivate: this._descriptionPrivate,
        descriptionPupil: this._descriptionPupil,
        extra: this._extra
        }
      }




}