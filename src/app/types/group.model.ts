import { Pupil } from './pupil.model';
import { Order } from './order.model';

export class Group {

  private readonly _id: number;
  private _name: string;
  private _pupils: Pupil[] = [];
  private _order: Order
  

  static fromJSON(json: any): Group {
    const g = new Group();
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
     * Getter pupils
     * @return {Pupil[] }
     */
	public get pupils(): Pupil[]  {
		return this._pupils;
	}

  
    /**
     * Setter pupils
     * @param {Pupil[] } value
     */
	public set pupils(value: Pupil[] ) {
		this._pupils = value;
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

}
