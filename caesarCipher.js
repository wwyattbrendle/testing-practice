function caesarCipher(string, key) {
    const alphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    const alphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let stringIn = string.split("");
    /* stringIn.forEach((element) => {
        if(alphabetLower.includes(element)){
            element = alphabetLower.indexOf(element);
        } else if (alphabetUpper.includes(element)){
            element = alphabetUpper.indexOf(element);
        }
    });  */


    // got rid of forEach method, because I couldnt get it to work
    //I now realize I needed to say stringIn.element to make it work
    //Will keep using the for loop because the function is already written
    for(let i = 0; i < stringIn.length; i++){
        if(alphabetLower.includes(stringIn[i])){
            let index = alphabetLower.indexOf(stringIn[i]);
            if(index + key < 26){
                stringIn[i] = alphabetLower[index + key];
            } else {
                stringIn[i] = alphabetLower[index + key - 26];
            }
        } else if (alphabetUpper.includes(stringIn[i])){
            let index = alphabetUpper.indexOf(stringIn[i]);
            if(index + key < 26){
                stringIn[i] = alphabetUpper[index + key];
            } else {
                stringIn[i] = alphabetUpper[index + key - 26];
            }
        }
    }
    let stringOut = "";
    stringIn.forEach((element) => {
        stringOut += element;
    });

    return stringOut;
}


module.exports = caesarCipher;