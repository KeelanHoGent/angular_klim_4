import { OrderItem } from './orderItem.model';

export class Order{
    private _id : number;
    private _submitted : number; // by pupil
    private _approved : number; // by teacher
    private _totalOrderPrice : number;
    private _orderItems : OrderItem[] = []



	constructor(submitted: number, approved: number, totalOrderPrice: number, orderItems : OrderItem[] =  []) {
		this._submitted = submitted;
		this._approved = approved;
        this._totalOrderPrice = totalOrderPrice;
        this._orderItems = orderItems;
    }
    

    static fromJSON(json: any): Order {
        const g = new Order(
            json.submitted,
            json.approved,
            json.totalOrderPrice,
            json.orderItems.map(p => OrderItem.fromJSON(p))
        );
        g._id = json.orderId;
    
        return g;
    
      }
    
      toJson(): any {
        return {

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
     * Getter submitted
     * @return {number}
     */
	public get submitted(): number {
		return this._submitted;
	}

    /**
     * Getter approved
     * @return {number}
     */
	public get approved(): number {
		return this._approved;
	}

    /**
     * Getter totalOrderPrice
     * @return {number}
     */
	public get totalOrderPrice(): number {
		return this._totalOrderPrice;
	}

    /**
     * Getter orderItems
     * @return {OrderItem[] }
     */
	public get orderItems(): OrderItem[]  {
		return this._orderItems;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter submitted
     * @param {number} value
     */
	public set submitted(value: number) {
		this._submitted = value;
	}

    /**
     * Setter approved
     * @param {number} value
     */
	public set approved(value: number) {
		this._approved = value;
	}

    /**
     * Setter totalOrderPrice
     * @param {number} value
     */
	public set totalOrderPrice(value: number) {
		this._totalOrderPrice = value;
	}

    /**
     * Setter orderItems
     * @param {OrderItem[] } value
     */
	public set orderItems(value: OrderItem[] ) {
		this._orderItems = value;
	}


    


}