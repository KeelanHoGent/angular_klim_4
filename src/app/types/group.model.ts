import { Pupil } from './pupil.model';
import { Order } from './order.model';
import { Evaluation } from './evaluation.model';

export class Group {

  private _id = 0;
  private _name: string;
  private _pupils: Pupil[] = [];
  private _evaluations: Evaluation[] = [];
  private _order: Order;
  private _code: string;

  private _projectBudget: number;

  public showClicked: boolean;

  static fromJSON(json: any): Group {
    const g = new Group();
    g.id = json.groupId;
    g.name = json.groupName;
    g._pupils = json.pupils.map(p => Pupil.fromJSON(p));
    g._order = Order.fromJSON(json.order);
    g._evaluations = json.evaluations.map(p => Evaluation.fromJSON(p));
    g._code = json.uniqueGroupCode;

    return g;

  }

  static fromJSONBudget(json: any, budget: number): Group {
    const g = this.fromJSON(json);
    g._projectBudget = budget;

    return g;
  }

  toJson(): any {
    return {
      id: this._id,
      groupName: this._name,
      pupils: this._pupils.map(pu => pu.toJson())
    };
  }

  public overBudget(): boolean {
    if (this.projectBudget) {
      return this._order.totalOrderPrice > this.projectBudget;
    }
    return false;
  }

  public addEvaluation(e: Evaluation) {
    this._evaluations.push(e);
  }

  public getEvaluationById(id: number): Evaluation {
    return this.evaluations.find(g => g.evaluationId === id);
  }

  public  setEvaluationAfterEdit(ev: Evaluation)  {
     const evFound = this.evaluations.find(g => g.evaluationId === ev.evaluationId);
     evFound.title = ev.title;
     evFound.descriptionPupil = ev.descriptionPupil;
     evFound.descriptionPrivate = ev.descriptionPrivate;
  }

  public removeEvaluationById(id: number) {
    const index = this.evaluations.indexOf(this.evaluations.find(g => g.evaluationId === id));
    this.evaluations.splice(index, 1);

  }

  /**
   * Getter projectBudget
   */
  public get projectBudget(): number {
    return this._projectBudget;
  }

    /**
     * Setter projectBudget
     */
  public set projectBudget(value: number) {
    this._projectBudget = value;
  }


    /**
     * Getter id
     */
  public get id(): number {
    return this._id;
  }

    /**
     * Setter id
     */
  public set id(value: number) {
    this._id = value;
  }

  /**
   * Setter id
   */
  public get code() {
    return this._code;
  }

  /**
   * Setter id
   */
  public set code(value: string) {
    this._code = value;
  }

    /**
     * Getter name
     */
  public get name(): string {
    return this._name;
  }

  /**
   * Setter name
   */
  public set name(value: string) {
    this._name = value;
  }

    /**
     * Getter pupils
     */
  public get pupils(): Pupil[]  {
    return this._pupils;
  }

  /**
   * Setter pupils
   */
  public set pupils(value: Pupil[] ) {
    this._pupils = value;
  }

    /**
     * Setter order
     */
  public set order(value: Order) {
    this._order = value;
  }

  /**
   * Getter order
   */
  public get order(): Order {
    return this._order;
  }

  /**
   * Getter evaluations
   */
  public get evaluations(): Evaluation[]  {
    return this._evaluations;
  }

  /**
   * Setter evaluations
   */
  public set evaluations(value: Evaluation[] ) {
    this._evaluations = value;
  }
}
