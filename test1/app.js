var SHA256 = require('js-sha256').sha256;


var data =new Date();

solvePuzzle(data,"0");
solvePuzzle(data,"00");
solvePuzzle(data,"000");
solvePuzzle(data,"0000");
solvePuzzle(data,"00000");
solvePuzzle(data,"000000");
solvePuzzle(data,"00000000");

function solvePuzzle(blockdata, difficltyPrefix){

var nonce ="NOT-Found"
var start =Date.now();
var end =start;

for(tryNonce =0; tryNonce<100000000000000000; tryNonce++){
    var y =blockdata +tryNonce;
    var sha = SHA256(y);

    if(sha.startsWith(difficltyPrefix)){

        var end =Date.now();
        nonce =tryNonce;
        console.log(SHA256(blockdata + tryNonce));
        break;
    }
}

var timeTaken =end -start;
if(timeTaken == 0){
   console.log("deifficulty", difficltyPrefix,"not fount!!")

}else
{
    console.log("deifficulty", difficltyPrefix,"Nonce", nonce,"time",timeTaken,"Hash",SHA256(blockdata +nonce))
}
}