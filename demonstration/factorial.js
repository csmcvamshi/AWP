function factorial(){

    var a = parseInt(document.getElementById("fac").value);
    var i=0,ans=1;
    if(a==0 || a==1){
        document.getElementById("factorialRes").textContent="1";
        return;
    }
    for( i=2;i<=a;i++){
        ans*=i
    }
    document.getElementById("factorialRes").textContent="factorial of "+a+" is "+ans;
}
module.exports="factorial";