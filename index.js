
if(window.location.href == 'http://127.0.0.1:5500/PSC-20May/index.html'){
    let x = document.querySelector("#home>p>a")
    x.style.color = 'purple'
    x.style.textDecoration = 'overline'
}

document.querySelector("#form").addEventListener("submit", formFun)

var formArr = JSON.parse(localStorage.getItem("formList")) || []

function formFun(event){
    event.preventDefault()

    function formObj(){
        this.image = form.image.value
        this.name = form.name.value 
        this.course = form.course.value
        this.unit = form.unit.value
        this.batch = form.batch.value
    }

    let myObj = new formObj()

    // console.log(myObj)
    
    formArr.push(myObj)
    console.log(formArr)

    localStorage.setItem("formList", JSON.stringify(formArr))

    window.location.reload()
}