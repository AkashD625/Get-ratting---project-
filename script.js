
// document.getElementById("submit").addEventListener((onclick),()=>{

  


// })

function onclick1(){
    console.log("Clicked");
    var ob=document.getElementById("ob").value;
    var tot=document.getElementById("to").value;
    if(ob==null||tot==null){
        document.getElementById("final_per").innerText='Please enter your obtained marks and total marks';

    }
    var result=(ob/tot)*100;
    document.getElementById("final_per").innerText=`Congratulations your percentage is ${result}%`;
}
