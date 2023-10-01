function changePage(){
    const target = document.getElementById("ratingHere");
    if(target.innerHTML == "")
    {
        document.getElementById("mainContainer1").style.display = "flex";
        document.getElementById("mainContainer2").style.display = "none";
    }

    else{
        document.getElementById("mainContainer1").style.display = "none";
        document.getElementById("mainContainer2").style.display = "flex";
    }
    
}


function numOne(){
  const num = document.getElementById("itemList1");
  document.getElementById("ratingHere").innerHTML = num.innerHTML + " ";

}

function numTwo(){
    const num = document.getElementById("itemList2");
    document.getElementById("ratingHere").innerHTML = num.innerHTML + " ";
  
}

function numThree(){
    const num = document.getElementById("itemList3");
    document.getElementById("ratingHere").innerHTML = num.innerHTML + " ";
  
}

function numFour(){
    const num = document.getElementById("itemList4");
    document.getElementById("ratingHere").innerHTML = num.innerHTML + " ";
  
}

function numFive(){
    const num = document.getElementById("itemList5");
    document.getElementById("ratingHere").innerHTML = num.innerHTML + " ";
  
}
  
  
    
