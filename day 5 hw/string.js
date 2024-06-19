const firstname="govinda";
const lastname="sahoo";
const bio="I just graduated from ucsd with a cs degree";

//split
const words=bio.split(" ");
console.log(words);

//toUpperCase
const upper=lastname.toUpperCase();
console.log(upper);

//toLowerCase
const lower=upper.toLowerCase();
console.log(lower);

//includes
console.log(bio.includes("ucsd"));
console.log(bio.includes("cow"));

//charAt
console.log(firstname.charAt(0).toUpperCase());

//slice
console.log(bio.slice(0,26));

//replace
console.log(bio.replace("ucsd","UC San Diego"));

//substring
console.log(bio.substring(0,6));

//trim
const white_spacebio=" I just graduated from ucsd  with a cs degree ";
console.log(white_spacebio.trim());
