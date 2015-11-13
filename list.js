var todo = document.getElementById('todolist'),
    form = document.getElementById('myform'),
    field = document.getElementById('newitem'),
    dropdown = document.getElementById('dropdown');
    
//under here is where I changed the looks of the words based on the importance of the item//

form.addEventListener( 'submit', function(evt) {
  var text = field.value;
      if(dropdown.value == "tripleb"){
        todo.innerHTML += '<div class="item">' + text +'</div>';
      }
      if(dropdown.value == "bwekfast"){
        todo.innerHTML += '<div class="item" style="color:blue;">' + text +'</div>';
      }
      if(dropdown.value == "mcfallen"){
        todo.innerHTML += '<div class="item" style="color:red;">' + text +'</div>';
      }
      if(dropdown.value == "stawp"){
        todo.innerHTML += '<div class="item" style="color:gray;">' + text +'</div>';
      }
  evt.preventDefault();
}, false);

//with this code under here you can check your items with a line and  1 click, and delete with 2 clicks//

todo.addEventListener( 'click', function(evt) {
  var tar = evt.target;
  if(tar.style.textDecoration === "line-through"){
  tar.parentNode.removeChild(tar);
}
else{
  tar.style.textDecoration = "line-through"
}
  evt.preventDefault();
}, false);