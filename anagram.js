/**
 * Frequency Counter - validAnagram, complexity O(n)
 * @param {string} firstString
 * @param {string} secondString
 */

function validAnagram(firstString, secondString){

    if ( firstString.length !== secondString.length) {
        return false
    }

    let objFirst = {}
    let objSecond = {}

    for(const val of firstString) {
        objFirst[val] = (objFirst[val] || 0) + 1
    }

    for(const val of secondString) {
        objSecond[val] = (objSecond[val] || 0) + 1
    }

    for (let key in objFirst) {
        if (!objSecond[key]) {
            return false
        }

        if (objFirst[key] !== objSecond[key]){
            return false
        }
    }
    return true
}

module.exports = validAnagram;
