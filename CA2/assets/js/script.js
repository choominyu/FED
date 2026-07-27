
// document.getElementById("recipe").addEventListener( , function() {
        
// });

function myFunction() {
  document.getElementById("recipeList").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.recipebtn')) {
    var recipe = document.getElementsByClassName("recipe-menu-content");
    var i;
    for (i = 0; i < recipe.length; i++) {
      var openRecipe = recipe[i];
      if (openRecipe.classList.contains('show')) {
        openRecipe.classList.remove('show');
      }
    }
  }
}

function thisFunction() {
  document.getElementById("menuList").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.menubtn')) {
    var recipe = document.getElementsByClassName("menu-list-content");
    var i;
    for (i = 0; i < recipe.length; i++) {
      var openMenu = menu[i];
      if (openMenu.classList.contains('show')) {
        openMenu.classList.remove('show');
      }
    }
  }
}



document.addEventListener('DOMContentLoaded', function(){
    document.getElementById("(form)")
            .addEventListener("submit", submitform);

    var btnSubmit= document.getElementById('btnSubmit');

    btnSubmit.disabled = true;
    //the one below is required in order to submit
    state.addEventListener('change', function(){
        if(state.value===""){
            btnSubmit.disabled = true;
        } else {
            btnSubmit.disabled = false;
        }

    })

})



    function submitform(event){
        event.preventDefault();    //stops page form reloading after submission

        var state= getElementById("option");
        if(state.value===""){
            alert("Please choose one of the options");

            state.focus();
            return;
        }

    };



