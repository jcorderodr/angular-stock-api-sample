export class StockModel {
    code: string;
    name: string;
    type: string;
    price: number;
    diff: number = 0.0;
    volume: number = 0.0;

     constructor(code: string, name: string, type: string, price: number) {
        this.code = code;
        this.name = name;
        this.type = type;
        this.price = price;
    }
}
