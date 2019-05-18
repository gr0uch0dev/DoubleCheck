const inquirer   = require('inquirer');

module.exports = {
  printMessage: (msg) =>{
    console.log(msg);
    return inquirer.prompt("Press any key to continue!")
  },

askCredentials: () => {
    const questions = [
      {
        name: 'password',
        type: 'password',
        message: 'Enter your private key:',
        validate: function(value) {
          if (value === 'pswd') {
            return true;
          } else {
            return 'Please enter your password.';
          }
        }
      }
    ];
    return inquirer.prompt(questions);
  },

askQuestionsNewArt: () => {
   const questions = [
     {
       name: 'title',
       type: 'input',
       message: 'Insert the title of the artwork:',
       validate: function( value ) {
         if (value.length) {
           return true;
         } else {
           return 'This field cannot be empty!';
         }
       }
     },
     {
       name: 'author',
       type: 'input',
       message: 'Insert the author of the artwork:',
       validate: function( value ) {
         if (value.length) {
           return true;
         } else {
           return 'This field cannot be empty!';
         }
       }
     },
     {
       name: 'date',
       type: 'input',
       message: 'Insert the date of the artwork:',
       validate: function( value ) {
         if (value.length) {
           return true;
         } else {
           return 'This field cannot be empty!';
         }
       }
     },
   ];
   return inquirer.prompt(questions);
 }
}
