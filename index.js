const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  return tutorials.map(function (tutorials){
    let spltArray = tutorials.split(" ")
    for(let i = 0; i < spltArray.length; i++){
      spltArray[i] = spltArray[i].charAt(0).toUpperCase() + spltArray[i].slice(1);
    }
    return spltArray.join(' ')
  } )
}

// return tutorials.map(function (string){
//   string.titlecase
// })


// spltArray = tutorials.split(" ")
// for(let i = 0; i < spltArray.length; i++){
//   spltArray[i] = spltArray[i].charAt(0).toUpperCase() + spltArray[i].slice(1);
// }
// return spltArray.join(' ')
