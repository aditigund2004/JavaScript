let person = {
    'name': 'ram',
    'ridefare' : 1200,
    'prinuser': false,
    'originalpromocode': 'RIDE500',
    'enterdpromocode':'RIDE500',
    'driverrating': 4.7,
    
}
// object store key value paire data

// let oldlocation = ['pune', 'mumbai'];
// let newlocation = ['nashik', 'nagapur'];

function discountcalculate(amount){
    let discount = amount > 2000 ? 40 :
                   amount > 1000 ? 30 :
                   amount > 500 ? 20 : 0;

                   return discount
}

let discountpercentag = discountcalculate(person.ridefare)

console.log(discountpercentag)

let ridetype  = person.prinuser ? 

                (person.originalpromocode === person.enterdpromocode) ? 

                'free ride': 'promo code not match' : 'no free ride';

console.log(ridetype)