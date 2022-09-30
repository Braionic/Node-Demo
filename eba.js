let eba_recipe = {
    "ingredients": ["Garri", "Water"],
    "tools": ["Ugbeba", "Plastic rubber", "Kettle"]
}

console.log("lets make Eba");
let shop_open = true;
const order = function(time, work){
    return new Promise(function(resolve, reject){
        if(shop_open){
            setTimeout(function(){
                resolve(work())
            }, time)
        }else{
            reject(console.log(`sorry, shop is closed for today`))
        }
    })
}
order(1000, function(){
    console.log(`A clean ${eba_recipe.tools[2]} containing clean ${eba_recipe.ingredients[1]} has been placed on open fire to boil
    `);
})
.then(function(){
    order(3000, function(){
        console.log(`${eba_recipe.ingredients[1]} has reached boiling point and ready to use
        `);
    })
})
.then(function(){
    order(6000, function(){
        console.log(`pouring ${eba_recipe.ingredients[0]} in a ${eba_recipe.tools[1]} containing the boiling water for stiring to begin
        `);
    })
})
.then(function(){
    order(8000, function(){
        console.log(`Steering with ${eba_recipe.tools[0]}...
        `);
    })
})
.then(function(){
    order(10000, function(){
        console.log(`Your Eba is ready!`);
    })
})
.then(function(){
    order(11000, function(){
        console.log(`Get your banga or Ogbonor lets make it rain!`);
    })
})
.catch(function(){
    console.log(`visitor leaves`);
})
 