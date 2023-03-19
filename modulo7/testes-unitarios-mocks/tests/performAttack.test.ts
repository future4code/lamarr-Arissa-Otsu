import { performAttack } from "../src/functions/performAttack";
import { validateCharacter } from "../src/functions/validateCharacter"
import { Character } from "../src/models/character";

// Exercício 4 - a) Deve-se criar o mock da funçaõ validateCharacter

// Exercício 4 - b)
/*     test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return true
            });
    }); */

// Exercício 4 - c)
/*     test("Creating Mocks", () => {
        const validatorMock = jest.fn(() => {
                return false
            });
    }); */

// Exercício 5
describe ("Testing function performAttack", () => {
    
    test("Testing attack", () => {
        const validatorMock = jest.fn(() => {
            return true;
        });

        const attacker: Character = {
            name: "Fulana",
            life: 1000,
            defense: 300,
            strength: 800,
        };

        const defender: Character = {
            name: "Ciclana",
            life: 1000,
            defense: 600,
            strength: 500,
        };
    
        performAttack(attacker, defender, validatorMock as any);
    
        expect(defender.life).toEqual(800);
        expect(validatorMock).toHaveBeenCalled();
        expect(validatorMock).toHaveBeenCalledTimes(2);
        expect(validatorMock).toHaveReturnedTimes(2);
    })

    test("Testing invalid inputs", () => {
        expect.assertions(4);
        const validatorMock = jest.fn(() => {
            return false;
        });

        const attacker: Character = {
            name: "Fulana",
            life: 0,
            defense: 300,
            strength: 800,
        };

        const defender: Character = {
            name: "Ciclana",
            life: 1000,
            defense: 600,
            strength: 500,
        };
    
        try {
            performAttack(attacker, defender, validatorMock as any);
        } catch (error) {
            expect(error.message).toBe("Invalid character");
            expect(validatorMock).toHaveBeenCalled();
            expect(validatorMock).toHaveBeenCalledTimes(1);
            expect(validatorMock).toHaveReturnedTimes(1);
        }
    })

})



