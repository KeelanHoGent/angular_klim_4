import { Pupil } from './pupil.model';
import { Order } from './order.model';

export class Group {

  private _id: number = 0;
  private _name: string;
  private _pupils: Pupil[] = [];
  private _order: Order;
  

  static fromJSON(json: any): Group {
    const g = new Group();
    g.id = json.groupId
    g.name = json.groupName;
    g._pupils = json.pupils.map(p => Pupil.fromJSON(p));
    g._order = Order.fromJSON(json.order)

    return g;

  }

  toJson(): any {
    return {
      groupName: this._name,
      pupils: this._pupils.map((p : Pupil) => p.toJson())
    }
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


}
