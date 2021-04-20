const atBoxPositioning = function(atBox, container){
    window.addEventListener("resize", function(){
        atBox.style.left = `${container.offsetLeft - 100}px`;
    })
}

const activeBoxToggle = function(question, arrow, answer, questions){
    if (answer.style.display === ""){
        for (let q of questions){
            if (q.style.fontWeight === "bold"){
                q.style.fontWeight = "normal";
                q.querySelector(".arrow").style.transform = "rotate(0deg)";
                q.nextElementSibling.style.display = "";
                console.log("BAZINGA!")
            }
        }
        question.style.fontWeight = "bold";
        answer.style.display = "initial";
        answer.style.maxHeight = "40px";
        arrow.style.transform = "rotate(180deg)"
    } else {
        answer.style.display = "";
        answer.style.maxHeight = "";
        question.style.fontWeight = "normal";
        arrow.style.transform = "rotate(0deg)"
    };  
};

const main = () =>{
    const faqBoxes = document.querySelectorAll(".faq-box");
    const questions = document.querySelectorAll(".question");
    const container = document.querySelector(".container");
    let atBox = document.querySelector(".box");
    atBox.style.left = `${container.offsetLeft - 100}px`

    atBoxPositioning(atBox, container);
    for (let box of faqBoxes){
        box.addEventListener("click", function(){
            const question = box.querySelector(".question");
            const arrow = question.querySelector(".arrow");
            const answer = box.querySelector(".answer");  
            activeBoxToggle(question, arrow, answer, questions);
        })
    }
}

main();