async1(function(exito){
  console.log("async1", exito);
async2(function(exito){
    console.log("async2", exito);
  }, function(error){
    return console.log("Error async2", error);
  });
}, function(error){
return console.log("Error async1", error);
});
