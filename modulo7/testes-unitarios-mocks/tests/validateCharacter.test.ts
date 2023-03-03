import { validateCharacter } from "../src/functions/validateCharacter"

// Exercício 2
describe ("Testing function validateCharacter", () => {
    
    test("Testing empty name", () => {
        const result = validateCharacter({
            name: "",
            life: 100,
            strength: 40,
            defense: 60,
        })
        
        expect(result).toBe(false)
    })

    test("Testing life equal to 0", () => {
        const result = validateCharacter({
            name: "Lu",
            life: 0,
            strength: 40,
            defense: 60,
        })
        
        expect(result).toBe(false)
    })

    test("Testing strength equal to 0", () => {
        const result = validateCharacter({
            name: "Lu",
            life: 100,
            strength: 0,
            defense: 60,
        })
        
        expect(result).toBe(false)
    })

    test("Testing defense equal to 0", () => {
        const result = validateCharacter({
            name: "Lu",
            life: 100,
            strength: 40,
            defense: 0,
        })
        
        expect(result).toBe(false)
    })

    test("Testing defense < 0", () => {
        const result = validateCharacter({
            name: "Lu",
            life: 100,
            strength: 40,
            defense: -5,
        })
        
        expect(result).toBe(false)
    })

    test("Testing all valid inputs", () => {
        const result = validateCharacter({
            name: "Lu",
            life: 100,
            strength: 40,
            defense: 60,
        })
        
        expect(result).toBe(true)
    })
})



