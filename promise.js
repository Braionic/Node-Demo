let iceCream = {
    "fruits": ["Apple", "Orange", "mango"],
    "Others": ["water", "Milk"]
}

let shop_open = true;

let order = function(time, work){
    return new Promise(function(resolve, reject){
        if(shop_open){
            setTimeout(function(){
                resolve(work());
            }, time)
        }else{
            reject(console.log(`sorry shop is clossed`));
        };
    });
}
order(1000, function(){
    console.log(`i added ${iceCream.fruits[0]}`)
})
.then(function(){
    order(3000, function(){
        console.log(`i added ${iceCream.fruits[2]}`)
  })}
)
.catch(function(){
    console.log("customer left")
})
