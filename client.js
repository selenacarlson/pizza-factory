class Pizza {
    constructor ( ingredients = ['cheese'] ){
    this.ingredients = ingredients
    }

    calculateCost() {
        let cost = 1000; 
        cost = cost + (this.ingredients.length - 1 ) * 99;
        this.cost = cost;
    }
}

let deluxe = new Pizza(['cheese', 'pepperoni', 'mushrooms']);
let sausage = new Pizza(['cheese', 'sausage']);
let veggie = new Pizza(['mushrooms', 'spinach', 'tomato']);


class Order {
    constructor ( pizzas = []){
        this.pizzas = pizzas;
    }

    calculateTotal() {
        let total = 0;
        for (let i=0; i<this.pizzas.length; i++){
            let pizza = this.pizzas[i];
            pizza.calculateCost();
            total += pizza.cost;
        }
        this.total = total;
    }
}

let order1 = new Order([deluxe, sausage, veggie]);

order1.calculateTotal();

console.log(order1);
