console.log('JS OK!!!')

// write a word
const word = prompt('Write a word..');

// is this word palindrome?
const isPalindrome = checkPalindromeWord(word);

console.log('Is palindrome: ', isPalindrome);

// function check. is palindrome? true || false
function checkPalindromeWord(text) {
    console.log(text);

    let palindromeText = '';

    // for loop
    for (let i = 0; i < text.length; i++) {
        const userWord = text.charAt(i);
        palindromeText = userWord + palindromeText;
    }
    console.log(palindromeText);

    const sameWord = palindromeText === text;

    return sameWord;
}