const accordians = document.querySelectorAll(".accordians");
function showContent(){

    accordians.forEach(accordian =>{
        const answer = accordian.querySelector(".answer");
        const icon = accordian.querySelector(".icon");
        let plusIcon = true;
        accordian.addEventListener("click" ,()=>{
            answer.classList.toggle("active")
            if(plusIcon){
                icon.src = "/assets/images/icon-minus.svg";
                plusIcon = false;
            }
            else{
                icon.src = "/assets/images/icon-plus.svg";
                
                plusIcon = false;
            }
        })
    })
}
showContent()