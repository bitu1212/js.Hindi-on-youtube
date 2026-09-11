const useremail = "bitu&123"
if(useremail){
    console.log("got user email");
    
} else{
    console.log("do'nt have account");
    
}

//falsy
//false ,0 ,-0 , BigInt 0n, "", null , undefined ,NaN

//truthy

//truth "0" , 'false' , " " , [], {}, function()

// Nulish colescing operator 

let vall1;
vall1 = 5 ?? 10
vall1 = null ?? 10
vall1 = undefined ?? 10
vall1 = null ?? 10 ?? 20


console.log(vall1);
