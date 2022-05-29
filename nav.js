let data = JSON.parse(localStorage.getItem("formList")) || []

function calculate(){
    var obj = {}

    for(var i = 0; i<data.length; i++){
        if(obj[data[i].batch] == undefined){
            obj[data[i].batch] = 1
        }
        else{
            obj[data[i].batch]++
        }
    }

    var b1 = document.querySelector("#batches>p:nth-child(1)")
    var b2 = document.querySelector("#batches>p:nth-child(2)")

    console.log(obj)
    
    if(obj[18]==undefined){
        b1.innerText = `FT-Web-18: 0`
    }
    if(obj[19] == undefined){
        b2.innerText = `FT-Web-19: 0`
    }
    if(obj[18] != undefined){
        b1.innerText = `FT-Web-18: ${obj[18]}`
    }
    if(obj[19] != undefined){
        b2.innerText = `FT-Web-19: ${obj[19]}`
    }
}

calculate()