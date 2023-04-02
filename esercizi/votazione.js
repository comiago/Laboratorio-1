function fSort(a, b) {
    if(a.candidato > b.candidato) return 1;
    else if(a.candidato < b.candidato) return -1;
    return 0;
}

function votazione(q){
    let winner = [];
    for(let i of q) if(i.votanti.includes("Bacci") || i.votanti.includes("Gervasio") || i.votanti.includes("Principe")) winner.push(i);
    winner.sort(fSort);
    console.log(winner);
    return (winner.length > 0) ? winner[0].candidato : undefined;
}


let Q=[{candidato: "pippo", votanti: ["qui", "quo", "qua", "Principe"]}, {candidato: "pluto", votanti: []}, {candidato: "paperino", votanti: ["Gervasio", "qui", "quo", "qua", "Principe", "Gervasio"]}];
console.log(votazione(Q));