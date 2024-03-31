// var x = 10;
// var y = 20;
// var z = 30;
// exports = x;//{} ==> exports.urName = value
// exports.x = x;//{x: 10}
// exports.y = y;//{x: 10, y: 20}
// module.exports.z = z; //{x: 10, y: 20, z: 30}

// module.exports = {userName:"KOKO"} //{userName: "KOKO"}

// console.log(exports)
// console.log(module.exports)
// module.exports = {x, y, z};// {x: x, y: y, z: z};

//Array - function addItem(name, price){} - function getSum(){}

// var Items = [];

// function AddItem(name, price){
//     let newItem = {name, price};
//     Items.push(newItem);
// }

// function GetSum(){
//     var sum = 0;
//     //code
//     for(let i = 0; i<Items.length; i++){
//         sum += Items[i].price;
//     }
//     return sum;
// }

// module.exports = {AddItem, GetSum}


class Orders{
    #Items = [];
    AddItem(name, price){
        let newItem = {name, price};
        this.#Items.push(newItem);
    }
    GetSum(){
        var sum = 0;
        for(let i = 0; i < this.#Items.length; i++){
            sum += this.#Items[i].price;
        }
        return sum;
    }
}

module.exports = {Orders};