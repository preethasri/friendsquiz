const chalk=require('chalk');
const readline=require('readline');


const rl=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


var score=0;

const quizquestions=[
  {
    question:
  `who is the lobster of ross
  a:phoebe
  b:monica
  c:rachel\n`,
    answer :"c"
  },
  {
    question:
  `who is the roommate of chandler
  a:monica
  b:phoebe
  c:joey\n`,
    answer:"c"
  },
    
  {  
    question:
    `who is brother of monica
    a:ross
    b:joey
    c:chandler\n`,
    answer:"a"
  },
  {
    question:
  `phoebe fav song
  a:twinklestar
  b:smellycat
  c:honeybuny\n`,
    answer:"b"
  },
  {
    
    question:
  `monica and chandler marry in which season
  a:season4
  b:season7
  c:season10\n`,
    answer:"b"
  }
]
console.log(chalk.green("welcome\n"))
console.log(chalk.red("Are you a fan of friends series. take a quiz and have fun"));



let questionindex=0;

function question()
{
  rl.question(quizquestions[questionindex].question,(answer)=>{
  console.log(chalk.yellow(`you answered:${answer}`))
  if(answer.toLowerCase()== quizquestions[questionindex].answer.toLowerCase())
    {
    console.log(chalk.green("right answer"))
    questionindex++
    score++;
    serve()
    }
  else{
    console.log(chalk.red("wrong answer"))
    console.log("try again")
    console.log("your score is:",score)
    question();
  }
}) 
}
function serve()
{
  if(isend())
  {
    console.log("Thanks for playing your final score is",score)
    rl.close()

  }
    else{
     rl.question("what do u want to do\n press e to exit,any other key to continue....\n",
     (choice)=>{
       console.log(`you selected ${choice}`)
    if(choice.toLowerCase()!="e")
      {
         question()
      }
    else
      {
        console.log("thanks for playing.....")
        rl.close()
      }
    });
  }
}
function isend()
{
  if(quizquestions.length==questionindex)
  {
    return true;
     
  }

 
}
serve()
