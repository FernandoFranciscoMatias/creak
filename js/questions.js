(function(){
    /*Una funcion autoinvocada para proteger las variables de otros archivos*/
    const titleQuestions = [...document.querySelectorAll('.questions_title')];
    /*los tres puntos se ponen para convertir eso en un Array*/
    console.log(titleQuestions)

    titleQuestions.forEach(question =>{
        question.addEventListener('click', ()=>{
            let height = 0;
            let answer = question.nextElementSibling;
            let addPadding = question.parentElement.parentElement;


            addPadding.classList.toggle('questions_padding--add')
            question.children[0].classList.toggle('questions_arrow--rotate');

            if(answer.clientHeight === 0){
                height = answer.scrollHeight;/*Nos da el alto minimo para que una pregunta se muestre*/
            }

            answer.style.height = `${height}px`;
        });
    });
})();