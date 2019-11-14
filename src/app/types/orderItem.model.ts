import { Product } from './product.model';

export class OrderItem{
    private _id : number;
    private _amount : number;
    private _product : Product;

    

	constructor( amount: number, product: Product) {
		this._amount = amount;
		this._product = product;
    }
    
    static fromJSON(json: any): OrderItem {
        const g = new OrderItem(
            json.amount,
            Product.fromJSON(json.product)
        );
        g._id = json.orderItemId;
    
        return g;
    
      }
    
      toJson(): any {
        return {
            orderItemId: this._id,
            amount: this._amount,
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
     * Getter amount
     * @return {number}
     */
	public get amount(): number {
		return this._amount;
	}

    /**
     * Getter product
     * @return {Product}
     */
	public get product(): Product {
		return this._product;
	}

    /**
     * Setter id
     * @param {number} value
     */
	public set id(value: number) {
		this._id = value;
	}

    /**
     * Setter amount
     * @param {number} value
     */
	public set amount(value: number) {
		this._amount = value;
	}

    /**
     * Setter product
     * @param {Product} value
     */
	public set product(value: Product) {
		this._product = value;
	}








}