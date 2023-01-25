const VOWEL_STRING = "aeiou";

const isVowel = (char) => {
  return VOWEL_STRING.includes(char);
};

const getVowelsMap = (str) => {
  const strMap = new Map();
  lowerCaseStr = str.toLowerCase();
  for (char of str) {
    if (isVowel(char)) {
      strMap.has(char)
        ? strMap.set(char, strMap.get(char) + 1)
        : strMap.set(char, 1);
    }
  }
  return strMap;
};
const str1 = "Hello World!";
const str2 = "My name is Hakim.";
const str3 = "How are you doing?";
console.log(getVowelsMap(str1));
console.log(getVowelsMap(str2));
console.log(getVowelsMap(str3));
