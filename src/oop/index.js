class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber =customerNumber;
    }
}

let customer = new Customer(1, "12345");
//prototyping
customer.name ="Murat Kurtbogan"
console.log(customer.name)

Customer.bisey ="Bisey"
console.log(Customer.bisey)

console.log(customer.customerNumber)


class IndividualCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber)
        this.firsName = firstName
    }
}

class CorpareteCustomer extends Customer{
    constructor(companyName,id,customerNumber){
        super(id,customerNumber) 
        this.companyName = companyName
    }  
}
    

