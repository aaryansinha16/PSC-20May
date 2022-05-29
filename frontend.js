
if(window.location.href == 'http://127.0.0.1:5500/PSC-20May/frontend.html'){
    let x = document.querySelector("#userInterface>p>a")
    x.style.color = 'purple'
    x.style.textDecoration = 'overline'
    // x.style.boxShadowBottom= 'rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px';
}

let formDetails = JSON.parse(localStorage.getItem("formList"))

displayData(formDetails)

function displayData(data){
    data.forEach(function(elem, index){
        // document.querySelector("#container").innerHTML = null

        var box = document.createElement("div")

        var img = document.createElement("img")
        img.setAttribute("src", elem.image)
        img.setAttribute("class", "img")

        var name = document.createElement("p")
        name.setAttribute('class', 'name')
        name.innerText = elem.name

        var course = document.createElement('p')
        course.setAttribute('class', 'course')
        course.innerText = `Course: ${elem.course}`

        var unit = document.createElement("p")
        unit.setAttribute('class', 'unit')
        unit.innerText = `Unit-${elem.unit
        }`

        var batch = document.createElement("p")
        batch.setAttribute('class', 'batch')
        batch.innerText = `Batch-${elem.batch}`

        var remove = document.createElement("button")
        remove.addEventListener('click', function(){
            delt(elem, index)
        })
        remove.setAttribute('class', 'remove')
        remove.innerText = 'Delete'

        box.append(img, name, course, unit, batch, remove)

        document.querySelector("#container").append(box)
    })
}

function delt(el, index){
    // formDetails.splice(index,1)
    let data = formDetails.filter(function(el, i){
        if(i === index){
            let trash = JSON.parse(localStorage.getItem("trash")) || []
            trash.push(el)
            localStorage.setItem("trash", JSON.stringify(trash))
        }
        else{
            return i!== index
        }
    })
    console.log(data)
    localStorage.setItem("formList", JSON.stringify(data))
    window.location.reload()
}
