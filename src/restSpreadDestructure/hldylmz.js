//console.log("Merhaba Kodlama.io")

//rest paremetre geriye kalan paremetreler virgullerle paremetre gönderilir
//params
//varArgs
let showProducts = function (id,...products){
     console.log(id)
     console.log(products[0])
}

// console.log(typeof showProducts)
//showProducts(10,["Elma","Armut","Karpuz"])

//spread alttaki konumuz elimizdeki aray'i ayrıştırarak yazıyoruz.
let points = [1,2,3,4,50,60,14]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC","D",..."EFG","H")

//Destructuring (parcalamak) Elimizdeki aray'in degerlerini degişkenlere atamaktır.
let populations = [10000,20000,30000,[40000,10000]]
let[small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

//Redux yapıda kullanılan mimari assagıda örnek olarak verilmiştir. 
let category = {id:1, name:"İçecek"}
console.log(category.id)
console.log(category["name"])

let {id,name} = category
console.log(id)
console.log(name)





