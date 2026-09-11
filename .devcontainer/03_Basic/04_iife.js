// Imidiately invoke function Expression (IIFE)

// (function chai (){
//     console.log(`DB Connected`);
    
// })();

// (function chai (){
//     console.log(`DB Connected two`);
    
// })();

(  (name) => {
    console.log(`DB Connected two ${name}`);
    
})("Bittu")

