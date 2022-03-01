// Primary function with 3 parameters and boolean
function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
//   Arrow functions as children of primary
  ask(
    //   question
      "Do you agree?",
    //   yes
      () => alert("You agreed."),
    //   no
      () => alert("You canceled the execution.")
  )
  ask();