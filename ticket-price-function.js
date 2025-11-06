const visitorAge = 12;
const isStudent = true;

function printTicketPrice(age, student){
    if(visitorAge <= 6 && isStudent == false){
    console.log("Ieeja ir bez maksas")
} if(isStudent){
    console.log("Biļetes cena ir 5 EUR")
} else{
    console.log("Biļetes cena ir 10 EUR.")
}
}

printTicketPrice(12, true);