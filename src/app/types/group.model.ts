import { Pupil } from './pupil.model';
import { Order } from './order.model';
import { Evaluation } from './evaluation.model';

export class Group {

  private _id: number = 0;
  private _name: string;
  private _pupils: Pupil[] = [];
  private _evaluations : Evaluation[] = [];
  private _order: Order;

  private _projectBudget: number;

  public showClicked: Boolean;
  

  static fromJSON(json: any): Group {
    const g = new Group();
    g.id = json.groupId
    g.name = json.groupName;
    g._pupils = json.pupils.map(p => Pupil.fromJSON(p));
    g._order = Order.fromJSON(json.order)
    g._evaluations = json.evaluations.map(p => Evaluation.fromJSON(p));

    return g;

  }
  static fromJSONBudget(json: any, budget: number): Group {
    const g = new Group();
    g.id = json.groupId
    g.name = json.groupName;
    g._pupils = json.pupils.map(p => Pupil.fromJSON(p));
    g._evaluations = json.evaluations.map(p => Evaluation.fromJSON(p));
    g._order = Order.fromJSON(json.order)
    g._projectBudget = budget

    return g;

  }


  toJson(): any {
    return {
      groupName: this._name,
      pupils: this._pupils.map((p : Pupil) => p.toJson())
    }
  }


  public overBudget(budget: number) : boolean {
    return this._order.totalOrderPrice > budget
  }

  public addEvaluation(e : Evaluation){
    this._evaluations.push(e);
  }

  public getEvaluationById(id: number) : Evaluation {
    return this.evaluations.find(g => g.evaluationId == id);
  }

  public  setEvaluationAfterEdit(ev : Evaluation)  {
     var evFound = this.evaluations.find(g => g.evaluationId == ev.evaluationId);
     evFound.title = ev.title;
     evFound.descriptionPupil = ev.descriptionPupil;
     evFound.descriptionPrivate = ev.descriptionPrivate;
  }

  public removeEvaluationById(id : number){
    var index = this.evaluations.indexOf(this.evaluations.find(g => g.evaluationId == id));
    this.evaluations.splice(index, 1);
    
  }

  

    /**
     * Getter projectBudget
     * @return {number}
     */
	public get projectBudget(): number {
		return this._projectBudget;
	}

    /**
     * Setter projectBudget
     * @param {number} value
     */
	public set projectBudget(value: number) {
		this._projectBudget = value;
	}


    /**
     * Getter id
     * @return {number}
     */
	public get id(): number {
		return this._id;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}





    /**
     * Getter name
     * @return {string}
     */
	public get name(): string {
		return this._name;
	}

    /**
     * Getter pupils
     * @return {Pupil[] }
     */
	public get pupils(): Pupil[]  {
		return this._pupils;
	}

    /**
     * Getter order
     * @return {Order}
     */
	public get order(): Order {
		return this._order;
	}

    /**
     * Setter name
     * @param {string} value
     */
	public set name(value: string) {
		this._name = value;
	}

    /**
     * Setter pupils
     * @param {Pupil[] } value
     */
	public set pupils(value: Pupil[] ) {
		this._pupils = value;
	}

    /**
     * Setter order
     * @param {Order} value
     */
	public set order(value: Order) {
		this._order = value;
	}


    /**
     * Getter evaluations
     * @return {Evaluation[] }
     */
	public get evaluations(): Evaluation[]  {
		return this._evaluations;
	}

    /**
     * Setter evaluations
     * @param {Evaluation[] } value
     */
	public set evaluations(value: Evaluation[] ) {
		this._evaluations = value;
	}


}
