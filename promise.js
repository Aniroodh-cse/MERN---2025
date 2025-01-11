/*function promiseEg(flag){
    return new Promise(function(resolve,reject){
        if(flag ===1){
            resolve("This is a promise Example")
        }
        else if (flag === 0){
            reject("This is a reject Example")
        }
    })
}
promiseEg(1).then((res)=>{
    console.log(res);
}).catch((rej)=>{
    console.log(rej);
})
console.log(promiseEg(1))*/


//real time Example

locationFinder("Melboune",2000)
locationFinder = (location,time) =>{
    return new Promise((locFound,locNotFound)=>{
        if(islocationValid(location,time)){
            locFound(location,"Found in", time, "sece")
        }
        else{
            locNotFound(location,"not found in",time,"sece")
        }
    })
}
function islocationValid(loc,time){
    location = "Melbourne"
    t = 2000
    if(loc === location && time <= t){
        return true
    }
    else{
        return false
    }
}