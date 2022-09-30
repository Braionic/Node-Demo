let eba_recipe = {
    "ingredients": ["Garri", "Water"],
    "tools": ["Ugbeba", "Plastic rubber", "Kettle"]
}

console.log("lets make Eba");
let shop_open = false;
const time = function(ms){
    return new Promise(function(resolve, reject){
        if(shop_open){
            setTimeout(function(){
                resolve()
            }, ms)
        }else{
            reject(console.log(`sorry, shop is closed for today`))
        }
    })
}
async function kitchen(){
    try{
        await time(3000);
        console.log(`Weldone boss, you're doing well`);
        await time(1000);
        console.log(`twale baba`)
    }
    catch(error){
        console.log("customer left", error);
    }
    finally{
        console.log('Done for the day, shop close for now')
    }

}
kitchen();