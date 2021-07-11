const chalk=require("chalk")
const readline=require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
console.log(chalk.red("Hii!! Welcome to friends quiz"))
console.log(chalk.green("Take this quiz and know more about Friends series"))
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
  c:joey/n`,
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
]
let questionindex=0;

function question()
{
  rl.question(quizquestions[questionindex].question,(answer)=>{
  console.log(chalk.yellow(`you answered:${answer}`))
  if(answer.toLowerCase()== quizquestions[questionindex].answer.toLowerCase())
    {
    console.log(chalk.green("right answer"))
    questionindex++
    serve()
    }
  else{
    console.log(chalk.red("wrong answer"))
    console.log("try again")
    question();
  }
}) 
}
function serve()
{
  if(isend())
  {
    console.log("thanks for playing")
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