var function_two=(function(){
    //console.log("hello world");
    var counter=0;
    var newAdd=function(){
        counter+=1;
        return counter;
    }
    return newAdd;
})();

console.log(function_two());
console.log(function_two());
console.log(function_two());


var a=()=>45;
console.log(a());

/* var cat = {
    lives: 9,
    jumps: () => {
      this.lives--;
    }
  }

  console.log(cat.jumps())
 */
function callme(){
    console.log (greeter);
}
var greeter = "say hello"

callme();


