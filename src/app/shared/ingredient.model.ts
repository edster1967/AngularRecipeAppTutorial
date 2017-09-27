// export class Ingredient{
//     public name: String;
//     public amount: number;

//     constructor(name: string, amount: number){
//         this.amount = amount;
//         this.name = name;
//     }
// }

// this is another way to reflect what you see above. 
export class Ingredient{
    constructor(public name: string, public amount: number){};
}