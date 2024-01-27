
// document.getElementById("submit").addEventListener((onclick),()=>{

  


// })

function onclick1(){
    console.log("Clicked");
    var ob=document.getElementById("ob").value;
    var tot=document.getElementById("to").value;
    var result=(ob/tot)*100;
    document.getElementById("final_per").innerText=`Congratulations your percentage is ${result}%`;
}
