const buttons = document.querySelectorAll("button")





buttons.forEach(button => {
    button.onclick = function buttonClick() {
        window.open("https://sabuss.com/richarge6/?register")
        
    }
    
});

const liTags = document.querySelectorAll("li")

liTags.forEach(li=>{
    li.onclick = function buttonClick() {
        window.location.href = "https://sabuss.com/richarge6/?register"
        
    }
})

document.querySelector(".login-btn").onclick = function buttonClick() {
    window.location.href = "https://sabuss.com/richarge6/?login"
    
}

const playStore = document.querySelector(".playstore").onclick = function buttonClick() {
    window.location.href = "https://play.google.com/store/apps/details?id=richarge.mobile.app&pli=1"
   
}

const whatsApp = document.querySelector(".whatsapp").onclick = function buttonClick() {
    window.location.href = "https://wa.me/2349160433112"
    
}




