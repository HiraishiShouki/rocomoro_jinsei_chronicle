// This is a JavaScript file
async function userStatus(){
   var users = ncmb.DataStore("users");
   var user_id = Number(localStorage.getItem("user_id"));
   var status = [];

   await users.equalTo("user_id",1111).fetch().then(function(results){
     var object = results;
     status.push(object.get("user_name"));
     status.push(object.get("all_money"));
     status.push(object.get("max_money"));
     status.push(object.get("min_money"));
   });
  return status;
}
