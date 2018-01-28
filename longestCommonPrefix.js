/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = function(strs) {
  if (strs == null || strs.length === 0) {
    return ''
  }
  
  if (strs.length === 1) {
    return strs[0]
  }
  
  let prefix = ''
  let firstStr = strs[0]
  
  // find smallest word
  for(let i = 1; i < strs.length; i++) {
    let str = strs[i]
    if(!firstStr && str.length < firstStr) {
      firstStr = str
    }
  }
  
  for(let j = 0; j < firstStr.length; j++) {
    const ch = firstStr[j]
    
    if(strs.every(str => str[j] === ch)) {
      prefix += ch
    } else {
      break
    }
  }
  
  return prefix
};
