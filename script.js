function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = [];
	for(let i = 0; i<str.length() ; i++){
		arr[str.charAt(i)]++;
	}

	for(let i=0; i<str.length; i++){
        if(arr[str.charCodeAt(i)] == 1)return i.toString();
    } 
} 
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input));  
