function criarFrase (nome:string, data: string): string {
    let dia = data.split("/",3)[0]
    let mes = data.split("/",3)[1]
    let ano = data.split("/",3)[2]


    switch (mes) {
        case "01": 
            mes = "janeiro"
            break;
        case "02": 
            mes = "fevereiro"
            break;
        case "03": 
            mes = "março"
            break;
        case "04": 
            mes = "abril"
            break;
        case "05": 
            mes = "maio"
            break;
        case "06": 
            mes = "junho"
            break;
        case "07": 
            mes = "julho"
            break;
        case "08": 
            mes = "agosto"
            break;
        case "09": 
            mes = "setembro"
            break;
        case "10": 
            mes = "outubro"
            break;
        case "11": 
            mes = "novembro"
            break;
        case "12": 
            mes = "dezembro"
            break;
    }

    return `Olá, meu nome é ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}.`
}

console.log (criarFrase("Arissa", "18/04/1998"))