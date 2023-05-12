window.onload= function(){
    var divFromHtml =document.getElementById("Product");
    var DataFromLs = JSON.parse(localStorage.getItem("Product"));
    var array=[];

    array +=`<div><img src="${Product[i].Image}" alt=""> <h2>${Product[i].name}</h2> <p>${Product[i].name}</p> </div>`
    divFromHtml.innerHTML = array;
    localStorage.setItem("Product",JSON.stringify(DataFromLs));
}