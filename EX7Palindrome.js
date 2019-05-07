// Write a method that takes a string and returns true if it is a palindrome.
// A palindrome is a string that is the same whether written backward or forward. 
// Assume that there are no spaces; only lowercase letters will be given.

    function palindrome(string) {
        var newString = string.lowerCase()
        // inside the if, the variables we use wont be used outside
        if (string.length % 2 === 0) {
            var size = string.length / 2
            var half1 = newString.substring(0, size)
            var half2 = newString.substring(size, size + size)
            for (var i = half2.length; i > 0; i--) {
                reversedHalf2 += half2[i] 	// this adds each half2 item to the variable reversedHalf2
            } 
            if (half1 === reversedHalf2) {
                return true;
            } else {
                return false;
            }
        } else {
            var size = Math.floor(string.length/2)
            var oddHalf1 = newString.substring(0, size-1)
            var oddHalf2 = newString.substring(size+1, size + size)
            for (var i = half2.length; i > 0; i--) {
                reversedOddHalf2 += OddHalf2[i] 
            }
                if (oddHalf1 === reversedOddHalf2) {
                    return true;
                } else {
                    return false;
                }
        }
    }
    palindrome("abcba");