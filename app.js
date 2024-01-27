let title = document.querySelector("#title")
let author = document.querySelector("#author")
let year = document.querySelector("#year")

let btn = document.querySelector(".btn-block")
let book_list = document.querySelector("#book-list")

let i = 1

btn.onclick = (e) =>{
    e.preventDefault();
    if(title.value == ""){        
        
    }else if(author.value == ""){

    }else if(year.value == ""){

    }else{
    let tr = document.createElement("tr")
    
    let td = document.createElement("td")
    td.innerText = i++
    tr.appendChild(td)
        
    let td1 = document.createElement("td")
    td1.innerText = title.value
    tr.appendChild(td1)

    let td2 = document.createElement("td")
    td2.innerText = author.value
    tr.appendChild(td2)

    let td3 = document.createElement("td")
    td3.innerText = year.value
    tr.appendChild(td3)

    book_list.appendChild(tr)    

    title.value = ""
    author.value = ""
    year.value = ""
    }
    
}