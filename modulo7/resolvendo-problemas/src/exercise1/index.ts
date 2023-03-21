function isOneEdit(s1: string, s2: string): boolean {
    if (Math.abs(s1.length - s2.length) > 1) {
        return false;
    }

    if (s1.length > s2.length) {
        return s1.includes(s2)
    }
    
    if (s2.length > s1.length) {
        return s2.includes(s1)
    }

    if (s1.length === s2.length) {
        let count = 0
        for (let i = 0; i < s1.length; i++) {
            if (s1[i] === s2[i]) {
                count++
            }
        }
        if (count === s1.length - 1) {
            return true
        }
    }

    return false
}

// testes

console.log("Test 1", "expected true", isOneEdit("banan", "banana"));
console.log("Test 2", "expected true", isOneEdit("bananak", "banana"));
console.log("Test 3", "expected true", isOneEdit("panana", "banana"));
console.log("Test 4", "expected false", isOneEdit("bananaaa", "banana"));
console.log("Test 5", "expected false", isOneEdit("panava", "banana"));
console.log("Test 6", "expected true", isOneEdit("bynana", "banana"));