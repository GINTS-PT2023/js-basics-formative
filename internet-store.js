
let preces = [
    {
        name: "Elektroniska Zobirste",
        price: 24,
        category: "Elektronika"
    },
     {
        name: "IPhone 20",
        price: 1099,
        category: "Elektronika"
    },
    {
        name: "Poco",
        price: 290,
        category: "Elektronika"
    },
    {
        name: "T-Krekls",
        price: 10,
        category: "Apģerbi"
    },
    {
        name: "Bikses",
        price: 16,
        category: "Apģerbi"
    },
    {
        name: "Zeķes",
        price: 5,
        category: "Apģerbi"
    }
]

function findElectronics(){
    for(let i = 0; i < preces.length; i++){
        if(preces[i].category === "Elektronika"){
            console.log("Nosaukums: " + preces[i].name)
        }
    }
}

function totalPriceSum(){
    let sum = 0
    for(let i = 0; i < preces.length; i++){
        sum += preces[i].price;
    }
    console.log("Kopēja Preču Noliktavu Summa: " + sum)
}

totalPriceSum();
// findElectronics();

