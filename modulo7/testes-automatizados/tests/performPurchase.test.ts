import { performPurchase } from "../src/functions/performPurchase"
import { User } from "../src/models/user"

describe ("Testing function performPurchase", () => {
    const user: User = {
		name: "Lu",
		balance: 100
	}

    test("Testing balance greater than value", () => {
        const result = performPurchase(user, 10)
        
        expect(result).toEqual({
            name: "Lu",
            balance: 90
        })
    })

    test("Testing balance equal to value", () => {
        const result = performPurchase(user, 100)
        
        expect(result).toEqual({
            ...user,
            balance: 0
        })
    })
    
    test("Testing value greater than balance", () => {
    
        const result = performPurchase(user, 150)
        
        expect(result).not.toBeDefined()
    })
})



