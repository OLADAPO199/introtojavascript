//A javascript function to calculate the quadaractic equation
//formula x = -b +sqrt(b**2 -4ac)/2a
// a = 1, b = -7, c = 12

function quad (a, b, c){
    let quadEq = (-b + (b**2 -4 * a * c)**1/2)/2 * a
    return quadEq
}

result = quad(1, -7, 12);
console.log("The root of the equation is: " + result)
