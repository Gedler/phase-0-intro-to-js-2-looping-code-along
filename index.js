// Code your solutions in this file

let nameList = [];
function writeCards(name, party) {
    for (let x= 0; x<name.length; x++) {
        nameList.push(`Thank you, ${name[x]}, for the wonderful ${party} gift!`)
               
    } 
    return nameList;
} 
function countDown(number) {
    for (let z = number; z>=0; z-- ) { 
        console.log(z)

    }
}





writeCards();