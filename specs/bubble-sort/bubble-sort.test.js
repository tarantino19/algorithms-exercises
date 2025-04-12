/*
  Write a bubble sort here
  Name the function bubbleSort
  Return the sorted array at the end
  
  To run the tests, change the `test.skip(…)` below to `test(…)`
  
  Bubble sort works by comparing two adjacent numbers next to each other and then
  swapping their places if the smaller index's value is larger than the larger
  index's. Continue looping through until all values are in ascending order
*/

function bubbleSort(nums) {
	// code goes here
	let swapped = false;
	do {
		swapped = false;
		for (let i = 0; i < nums.length; i++) {
			// snapshot(nums);
			if (nums[i] > nums[i + 1]) {
				//is the current element greater than the next element
				const temp = nums[i]; //this line creates a temporary variable temp and stores the value of nums[i] in it
				nums[i] = nums[i + 1]; //This line assigns the value of nums[i + 1] (the next element) to nums[i].
				nums[i + 1] = temp; //This line assigns the value that was originally stored in nums[i] (now stored in temp) to nums[i + 1]. This completes the swap of the two elements.
				swapped = true;
			}
		}
	} while (swapped);
	// snapshot(nums);
	return nums;
}

// unit tests
// do not modify the below code
test('bubble sort', function () {
	const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
	bubbleSort(nums);
	expect(nums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});
