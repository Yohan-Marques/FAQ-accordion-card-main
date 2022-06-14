
this.addEventListener("DOMContentLoaded", () =>{
    var questions = document.querySelectorAll(".cont-p")
    questions.forEach((question) => question.addEventListener("click", () =>{
  
        if(question.parentNode.classList.contains("active")){
            question.parentNode.classList.toggle("active")
        }
    else{
    questions.forEach(question => question.parentNode.classList.remove("active"))
    question.parentNode.classList.add("active")
        }

    }))
}) 