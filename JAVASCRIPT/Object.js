var product={
    pname:'SUMAN',
    pid:'P1',
    pqty:12,
    price:45000.00
}
console.log(product);
console.log(product.pname,product.price);
//ADD A ELEMENT IN EXIXTING OBJECT
product.company='HP';
console.log(product);
//DELETE THE ELEMENT
delete product.company;
console.log(product);
//NESTED OBJECT
var employee={
    eid:101,
    nm:'ARUP',
    desig:'MANAGER',
    address:{
        plotno:'AD1',
        streetnm:'SALTLAKE',
        pincode:'700064',
        area:{
            ps:'BIDHANNAGAR',
            dist:'24PGS NORTH'
        }
    }
}
console.log(employee.nm,employee.desig,employee.address.plotno,employee.address.pincode,employee.address.area.dist);