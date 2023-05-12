function register(event) {
    // alert("worked..!!")
    event.preventDefault();
    var UserName = document.getElementById("UserName").value;
    var UserEmail = document.getElementById("UserEmail").value;
    var UserPassword = document.getElementById("UserPassword").value;
    var UserData = {name:UserName, email:UserEmail , password:UserPassword}

    var DataFromLS = JSON.parse(localStorage.getItem("UserData")) || [];

   var flag=false;
    for(var i=0; i<DataFromLS.length; i++){
        if(DataFromLS[i].email===UserEmail){
            flag=true;
        }

    }
    if(flag===true){
        alert("Email Already Present in our DataBase...please use Anathor Email")
    }
    else if(UserName.length<1 && UserEmail.length<1){
        alert("Must fill all the fields..!!")
    }
    else{
        DataFromLS.push(UserData)
        localStorage.setItem("UserData", JSON.stringify(DataFromLS));
        var UserName = document.getElementById("UserName").value='';
        var UserEmail = document.getElementById("UserEmail").value='';
        var UserPassword = document.getElementById("UserPassword").value='';
        alert("Registration is Successfull..!!")
        window.location.href='/Login.html'
    }
    }

    function login(event){
        // alert("worked..!!")
        event.preventDefault();
        var UserEmail = document.getElementById("UserEmail").value;
        var UserPassword = document.getElementById("UserPassword").value;

        var DataFromLS = JSON.parse(localStorage.getItem("UserData")) 

        var flag = false;
        for(var i=0; i<DataFromLS.length; i++){
            if(DataFromLS[i].email===UserEmail && DataFromLS[i].password===UserPassword){
                    var flag= true;
            }
        }
        if(flag===true){
               
                localStorage.setItem("UserData",JSON.stringify(DataFromLS));
                alert("Login is SuccessFull..!!!");
                window.location.href='/Strawberry.html'
        }
        else{
            alert("Please Check Your Email and Password Again...!!")
        }

    }

