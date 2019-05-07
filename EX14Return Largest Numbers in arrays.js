/*14. Return Largest Numbers in Arrays
Write a function that receives an array with four nested array. The function returns an array consisting of the largest number from each provided sub-array.

function largest_of_four(arr) {

}

largest_of_four([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]) // [27,5,39,1001]
*/
function largest_of_four(arr){
    // step 1. creat an array that will host the result of the 4-subarrays
    var largestNumber=[0,0,0,0]
    
        // you can declare the array like this largestNumber=[]
    
    //step 2. creat the first FOR loop that will iterate through the arrays
    for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
        //the starting point, index 0 ===the firs array

        //step 3. create the second for loop that will iterate through the nested array
        for(var subArrayIndex = 0; subArrayIndex<arr[arrayIndex].length; subArrayIndex++ ){
                                    // ^ I dont get what you did here
            
     // you are now inside each array, my advice is to investigate an easier way of getting the biggest number inside an array.
            
            // the starting point, index 0 === first subarry
        }
        if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]){
            largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
        }
    }
    return largestNumber;
}

console.log(largest_of_four([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
