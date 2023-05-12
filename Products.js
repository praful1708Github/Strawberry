function AddToLS(event) {
    event.preventDefault();
    // alert("worked..!!")

    var ProName = document.getElementById("ProName").value;
    var ProImage = document.getElementById("ProImage").value;
    var ProPrice = document.getElementById("ProPrice").value;
    var Product = {name:ProName, Image:ProImage, price:ProPrice}


    var DataFromLS = JSON.parse(localStorage.getItem(Product)) || [];
    DataFromLS.push(Product);
    localStorage.setItem("Product",JSON.stringify(DataFromLS))
    alert("Product added..!!")

}