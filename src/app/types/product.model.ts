export class Product {
    private _price: number;
    private _name: string;
    private _description: string;
    private _image: string;
    

    get price(): number {
        return this._price
    }

    set price(price: number){
        this._price = price;
    }

    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }

    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    public get image(): string {
        return this._image;
    }
    public set image(value: string) {
        this._image = value;
    }

}
