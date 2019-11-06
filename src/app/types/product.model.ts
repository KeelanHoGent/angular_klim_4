export class Product {
    private _id: number;
    private _price: number;
    private _name: string;
    private _description: string;
    private _image: string;
    private _categoryId: number;
    private _projectId: number;

    toJson(): any {
        return {
            productId: this._id,
            productName: this._name,
            description: this._description,
            productImage: this._image,
            projectId: this._projectId,
            price: this._price,
            categoryId: this._categoryId
        }
    }
    

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

    public set categoryId(value: number){
        this._categoryId = value;
    } 

    public set projectId (value: number) {
        this._projectId = value;
    }

  static fromJSON(p: any): Product {
    const result = new Product();
    result.productId = p.productId;
    result.productName = p.productName;
    result.description = p.description;
    result.image = p.productImage;
    result.project = p.projectId;
    result.price = p.price;
    result.category = p.categoryId;

    return result;
  }

 
  get productName(): string {
    return this._productName;
  }

  set productName(value: string) {
    this._productName = value;
  }

  

  get image(): string {
    return this._image;
  }

  set image(value: string) {
    this._image = value;
  }

  get project(): number {
    return this._project;
  }

  set project(value: number) {
    this._project = value;
  }


  get category(): number {
    return this._category;
  }

  set category(value: number) {
    this._category = value;
  }
}
