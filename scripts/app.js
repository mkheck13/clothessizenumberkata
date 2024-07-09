// Description
// You have clothes international size as text (xs, s, xxl).
// Your goal is to return European number size as a number from that size .

// Notice that there is arbitrary amount of modifiers (x), excluding m size, and input can be any string.

// Linearity
// Base size for medium (m) is 38.
// (then, small (s) is 36, and large (l) is 40)

// The scale is linear; modifier x continues that by adding or subtracting 2 from resulting size.

// Invalid cases
// Function should handle wrong/invalid sizes.

// Valid input has any base size (s/m/l) and any amount of modifiers (x) before base size (like xxl).
// Notice that you cannot apply modifier for m size, consider that case as invalid!
// Anything else is disallowed and should be considered as invalid (None for Python, 0, false for Go, null for JavaScript).

// Invalid examples: xxx, sss, xm, other string

// Valid Examples
// xs: 34
// s: 36
// m: 38
// l: 40
// xl: 42

// found this new one to try out
// it seems straight forward
// should just be able to do if else statements to get it to work
// we shall see tho
function sizeToNumbers(size){
    if(size = "xxxs"){
        return 30;
    }
    else if(size = "xxs"){
        return 32;
    }
    else if(size = "xs"){
        return 34;
    }
    else if(size = "s"){
        return 36;
    }
    else if(size = "m"){
        return 38;
    }
    else if(size = "l"){
        return 40;
    }
    else if(size = "xl"){
        return 42;
    }
    else if(size = "xxl"){
        return 44;
    }
    else if(size = "xxxl"){
        return 46;
    }else{
        return 0 ?? null;
    }

}

// so I was half right, an if statement is the way to go, just not how I had it structured
// didn't need to use the {} in it
// I still feel that my original if statement should work, but it wants me to do it a differnt way
// so I need to check to see how maney x there are and adjust it that way rather then just having a if statement to that is xxxl for 46
function sizeToNumber(size){
    if (size == "s") return 36;
    if (size == "m") return 38;
    if (size == "l") return 40;
    const x = size.match(/x/g)?.length;
    if (/^x+s$/.test(size)) return 36 - (x * 2);
    if (/^x+l$/.test(size)) return 40 + (x * 2);
    return null;
}



// test

function sizeToNumbers(size) {
    // Convert input to lowercase for case-insensitive comparison
    size = size.toLowerCase();
    
    // Regular expression to match valid sizes
    const validSizeRegex = /^x*[sl]$/;
    
    // Check if the size is valid
    if (!validSizeRegex.test(size) && size !== 'm') {
      return null;
    }
    
    // Handle 'm' size separately
    if (size === 'm') {
      return 38;
    }
    
    // Count the number of 'x' modifiers
    const xCount = (size.match(/x/g) || []).length;
    
    // Determine the base size
    const baseSize = size.endsWith('s') ? 36 : 40;
    
    // Calculate the final size
    const finalSize = baseSize + (xCount * (size.endsWith('s') ? -2 : 2));
    
    return finalSize;
  }