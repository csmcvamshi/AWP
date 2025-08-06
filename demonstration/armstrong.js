function armstrong(){

    var a = parseInt(document.getElementById("arm").value);
    var b=a;
    var dig =a.toString.length
    var rem=0,sum=0;
    while(b!==0){
        rem=b%10;
        sum+= Math.pow(rem,dig);
        b=Math.floor(b/10);
    }

    if(sum===a){
        document.getElementById("ans").textContent=a+ " is an Armstrong Number";
    }
    else{
        document.getElementById("ans").textContent=a+ " is not an Armstrong Number";
    }
}