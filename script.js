
// document.getElementById("submit").addEventListener((onclick),()=>{

  


// })

function onclick1(){
    console.log("Clicked");
    var ob=document.getElementById("ob").value;
    var tot=document.getElementById("to").value;
    if(ob>tot){
        alert("Obtained marks should be smaller then or equal to total marks");
        return;
    }
    var result=(ob/tot)*100;
    document.getElementById("final_per").innerText=`Congratulations your percentage is ${result}%`;
}
