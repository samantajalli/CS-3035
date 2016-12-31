
var $$ = function(id){
  return document.getElementById(id);
}

var joinList = function(){
  var first_name = $$("first_name").value;
  var last_name = $$("last_name").value;
  var email = $$("email").value;
  var isValid = true;

  if(first_name == ""){
    $$("first_name_error").firstChild.nodeValue ="This field cannot be empty.";
    isValid = false;
  }
  else { $$("first_name_error").firstChild.nodeValue =""; }

  if(last_name == ""){
    $$("last_name_error").firstChild.nodeValue ="This field cannot be empty.";
    isValid = false;
  }
  else { $$("last_name_error").firstChild.nodeValue =""; }

  if(email == ""){
    $$("email_error").firstChild.nodeValue ="This field cannot be empty.";
    isValid = false;
  }
  else { $$("email_error").firstChild.nodeValue =""; }

  if (isValid){
    //$("name_form").submit();
    addTable();
    //addRowToTable();
  }
}

function addTable(){
  var myTableDiv = document.getElementById("myDynamicTable");

  var table = document.createElement('TABLE');
  table.border = '1';

  var tableBody = document.createElement('TBODY');
  table.appendChild(tableBody);

  for (var i = 0; i < 3; i++){
    var tr = document.createElement('TR');
    tableBody.appendChild(tr);

    for (var j = 0; j < 2; j++){
      var td = document.createElement('TD');
      if (i == 0 && j == 0){
        td.appendChild(document.createTextNode("First Name:"))
      }
       if (i == 0 && j == 1){
        td.appendChild(document.getElementById("first_name"));
      }

      if (i == 1 && j == 0){
        td.appendChild(document.createTextNode("Last Name:"));
      }
       if (i == 1 && j == 1){
        td.appendChild(document.getElementById("last_name"));
      }

      if (i == 2 && j == 0){
        td.appendChild(document.createTextNode("Email:"));
      }
       if (i == 2 && j == 1){
        td.appendChild(document.getElementById("email"));
      }
      tr.appendChild(td);
    }
  }

  myTableDiv.appendChild(table);

}
/*
function addRowToTable(){
  var first_name = document.getElementById("first_name");
  var last_name = document.getElementById("last_name");
  var email = document.getElementById("email");
  var table = document.getElementById("myDynamicTable");


}
*/
window.onload = function(){
  $$("join_list").onclick = joinList;
}
