function differenzia(trash){
    let obj = {carta: [], multimateriale: [], indifferenziato: []}
    for(let i of trash){
        switch(i.categoria){
            case "carta":
                obj.carta.push(i);
                break;
            case "multimateriale":
                obj.multimateriale.push(i);
                break;
            case "indifferenziato":
                obj.indifferenziato.push(i);
                break;
            default:
                obj.indifferenziato.push(i);
                break;
        }
    }
    return obj;
}

let input = [
    {'nome': 'tonno', 'categoria': 'multimateriale'},
    {'nome': 'quaderno', 'categoria': 'carta'},
    {'nome': 'tonno', 'categoria': 'multinateriale'}
]
let riciclata = {
    'carta': [{'nome': 'quaderno', 'categoria': 'carta'}], 
    'multimateriale': [{'nome': 'tonno', 'categoria': 'multimateriale'}], 
    'indifferenziato': [{'nome': 'tonno', 'categoria': 'multinateriale'}]
}

console.log(differenzia(input), riciclata);