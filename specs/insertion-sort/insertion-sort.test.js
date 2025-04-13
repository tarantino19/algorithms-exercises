/*
  Insertion sort!
  
  Be sure to call your function insertionSort!
  
  The idea here is that the beginning of your list is sorted and the everything else is assumed to be an unsorted mess.
  The outer loop goes over the whole list, the index of which signifies where the "sorted" part of the list is. The inner
  loop goes over the sorted part of the list and inserts it into the correct position in the array.
  
  Like bubble sort, there's a visualization mechanism available to you. Just call snapshot(myArray) at the beginning of
  your inner loop and it should handle the rest for you!
  
  And you put xdescribe instead of describe if you want to suspend running the unit tests.  
*/

function insertionSort(nums) {
	// code goes here
	for (let i = 1; i < nums.length; i++) {
		let numberToInsert = nums[i];
		let j;
		for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {
			nums[j + 1] = nums[j];
		}
		nums[j + 1] = numberToInsert;
	}
	return nums;
}

// unit tests
// do not modify the below code
test('insertion sort', function () {
	const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
	insertionSort(nums);
	expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

// function insertionSort(nums) {: This defines a function called insertionSort that takes an array of numbers (nums) as input. This is the array you want to sort.

// code goes here: This is a comment indicating where the sorting logic is implemented.

// for (let i = 1; i < nums.length; i++) {: This is the outer loop. It iterates through the array starting from the second element (index 1) up to the end of the array.

// i = 1: The loop starts at index 1 because the first element (index 0) is considered to be already sorted (as it's the only element in a hypothetical sorted subarray).
// i < nums.length: The loop continues as long as i is less than the length of the array.
// i++: Increments i in each iteration.
// This loop picks an element from the unsorted part of the array and inserts it into the correct position in the sorted part.
// let numberToInsert = nums[i];: Inside the outer loop, this line stores the value of the current element (at index i) into the numberToInsert variable. This is the element we're going to insert into its correct sorted position.

// let j;: This declares a variable j. This will be used in the inner loop to iterate backward through the sorted part of the array.

// for (j = i - 1; nums[j] > numberToInsert && j >= 0; j--) {: This is the inner loop. It iterates backward through the sorted portion of the array (elements before index i).

// j = i - 1: The inner loop starts at the element immediately before the current element (i - 1).
// nums[j] > numberToInsert && j >= 0: This is the loop condition. The inner loop continues as long as both of these conditions are true:
// nums[j] > numberToInsert: The element at index j in the sorted portion is greater than numberToInsert. This means numberToInsert needs to be inserted before nums[j].
// j >= 0: We haven't reached the beginning of the array (index 0).
// j--: Decrements j in each iteration (moving backward).
// This inner loop shifts elements in the sorted part of the array to the right to make space for numberToInsert.
// nums[j + 1] = nums[j];: Inside the inner loop, this line shifts the element at index j to the right, placing it at index j + 1. This makes space for inserting the numberToInsert. We're effectively moving larger elements one position up to the right.

// nums[j + 1] = numberToInsert;: After the inner loop finishes (either because we've found the correct position or reached the beginning of the array), this line inserts numberToInsert into its sorted position at index j + 1.

// return nums;: After the outer loop has finished processing all elements, the function returns the now-sorted nums array.
