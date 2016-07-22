var prompt = require('prompt');

prompt.start();
 
  // 
  // Get two properties from the user: username and email 
  // 
prompt.get(['name', 'age'], function (err, result) {
  eligible(result.name, result.age);
});
  
function eligible(name, age){
  if (age >= 18){
    console.log("Hello Mr. " + name + ". You may vote :)\n");
  } else {
    console.log("Hey Kiddo! WTF you are doing here? Go back home and play Pokemon Go!\n");
  }
  }


