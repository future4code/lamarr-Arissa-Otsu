// Conversor de Temperatura

const convertToCelsius = (temperature, scale) => {
    let convertedTemperature
    if (typeof temperature === "number" && typeof scale === "string") {
        if (scale==="K") {
            convertedTemperature = temperature + 273.15
            console.log (`${temperature}° Celsius é equivalente a ${convertedTemperature} Kelvin`)
        } else if (scale==="F") {
            convertedTemperature = (temperature * 1.8) + 32
            console.log (`${temperature}° Celsius é equivalente a ${convertedTemperature}° Fahrenheit`)
        } else {
            console.log ("Erro, o parâmetro inserido é inválido. Por favor, corrigir a escala para K ou F.")
        }
    } else if (typeof temperature !== "number" && typeof scale === "string") {
        console.log ("Erro. Inserir uma variável do tipo número")
    } else {
        console.log ("Erro. Inserir um variável do tipo string")
    }
}

convertToCelsius(10,"K")