// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let maxChar = '';
    let maxLength = 0;
    for (i of str) {
        let length = 0;
        for (j of str) {
            if (j === i) {
                length++;
            }
        }
        if (length > maxLength) {
            maxLength = length;
            maxChar = i
        }
    }
    return maxChar;
}

module.exports = maxChar;
