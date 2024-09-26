let btnSearch =document.querySelector('#btnSearch');
function search(){
    alert("sorry not available");
}
let read =document.querySelector('#read');
let mywindow =false;
function readMore(){
    if(!mywindow){
        mywindow =window.open("home.html");
    }
    else{
        mywindow =window.close();
    }
}