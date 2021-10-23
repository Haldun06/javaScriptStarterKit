console.log("Merhaba Kodlama.io")


let dolarBugun = 9.30

let dolarDun = 9.20

{
    let dolarDun = 9.10
}

console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11  bu hata cons tan sonra böyle yazamıyoruz?
euroDun = 11.0
console.log(euroDun)

//array dizi tanımlama
//camelCasing "kelimelerin ilk harfi kucuk"
//PascalCasing "kelimenin ilk harfi büyük"
let konutKredileri = ["Konut kredisi","Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for(let i = 0;i<konutKredileri.length;i++){
    console.log("<li>"+konutKredileri[i]+"</li>")
}
console.log("</ul>")

{/* <ul>
<li>Konut kredisi</li>
<li>Emlak Konut Kredisi</li>
<li>Kamu Konut kredisi</li>
<ul> */}

console.log(konutKredileri)
