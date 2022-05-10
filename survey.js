const readline = require('readline');
const { stdin: input, stdout: output } = require('process');

const rl = readline.createInterface({ input,output });

rl.question('What is your name?', (answer1) => {
  rl.question('What is an activity you like doing?', (answer2) => {
    rl.question('What do you listen to while doing that?', (answer3) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)?', (answer4) => {
        rl.question('What is your favourite thing to eat for that meal?', (answer5) => {
          rl.question('Which sport is your absolute favourite?', (answer6) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer7) => {
              console.log(`Your Profile - Your name: ${answer1}; Favourite activity: ${answer2}; Favourite music for activity: ${answer3}; Favourite meal: ${answer4}; Favorite food for meal: ${answer5}; Favourite sport: ${answer6}; Your superpower: ${answer7}`)
              rl.close();
            })
          })
        })
      })
    })
  })

});

