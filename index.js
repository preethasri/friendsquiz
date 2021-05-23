const readline=require("readline")
const project = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const quiz=[
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
let questionindex=0
console.log("welcome to FRIENDS quiz" );
function friends()
{
  project.question(quiz[questionindex].question,(answer)=>{
  console.log(`you answered:${answer}`)
  if(answer.toLowerCase()== quiz[questionindex].answer.toLowerCase())
    {
    console.log("right answer")
    questionindex++
    serve()
    }
  else{
    console.log("wrong answer")
    console.log("try again")
    friends();
  }
}) 
}
function serve()
{
  if(isend())
  {
    console.log("thanks for playing")
    project.close()

  }
    else{
     project.question("what do u want to do\n press e to exit,any other key to continue....",
     (choice)=>{
       console.log(`you selected ${choice}`)
    if(choice.toLowerCase()!="e")
      {
         friends()
      }
    else
      {
        console.log("thanks for playing.....")
        project.close()
      }
    });
  }
}
function 
    isend()
{
  if(quiz.length==questionindex)
  {
    return true;

  }
}
serve()