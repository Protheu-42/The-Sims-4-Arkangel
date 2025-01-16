import { randomPìcker } from "./index"

test("There is 5 in total", () => {
    expect(randomPìcker().length).toBe(5)
})

test("No duplication in result", () => {
    let list = randomPìcker();
    let listCopy = randomPìcker();
    function testDuplication(array1, array2) {
        let isDuplicated = true
        for (let i = 0; i < array1.length; i++) {
            for (let j = 0; j < array2.length; j++) {
                if (array1[i] === array2[j]) {
                    isDuplicated = true;
                } else {
                    isDuplicated = false
                }
            }        
        }
        return isDuplicated;
    }
    expect(testDuplication(list, listCopy)).toBeFalsy();
})

