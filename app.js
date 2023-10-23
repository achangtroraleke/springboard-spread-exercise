// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//       return num % 2 === 0
//     });
//   }

const filterOutOdds = (...nums) => nums.filter(num=>num%2===0)

const findMin = (...nums) => nums.reduce((min, currVal)=>{
    if(min>currVal){
        min = currVal
    }
    return min
})

const mergeObjects = (...objects) =>objects.reduce((obj, currObj)=>({...obj, ...currObj}))

const doubleAndReturnArgs =  (array, ...args) =>[...array, ...args.map((arg)=>arg*2)]

const removeRandom = (...items) => {
    items.splice(Math.floor(Math.random()*items.length),1);
    return [...items]
}

const extend = (...arrays) => arrays.reduce((newArr, currArr)=>[...newArr, ...currArr])

const addKeyVal = (obj, key, val) => ({...obj, [key] : val})

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj
}

const combine = (obj1, obj2) => ({...obj1, ...obj2})

const update = (obj, key, val) =>{
    let updatedObj = {...obj};
    updatedObj[key] = val;
    return updatedObj;
}