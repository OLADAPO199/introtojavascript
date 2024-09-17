// A function to find palidrome of word


function pali(word) {
    let split_word = word.split("")
    let reversed_word = split_word.reversed()
    let split_word_joined = reversed_word.split_word_join("")

    if (split_word_joined == word){
        console.log("The word is a palidrome!!")
    }else{
        console.log("sorry that word isn't a palindrome!!!")
    }
}

pali(mud)
pali(racecar)
pali(nitin)