// Function to divide an array into subarrays of a given size
export default function splitArray(array, subarraySize) {

    const subarrays = [];
    
    for (let i = 0; i < array.length; i += subarraySize) {

    // Use the slice method to extract the subarray of size subarraySize
    subarrays.push(array.slice(i, i + subarraySize));
}
    return subarrays;
}