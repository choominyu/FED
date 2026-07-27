console.log("Hello Dynamic Web!");

document.getElementById("myButton").addEventListener("click", function() {

    document.getElementById("result").textContent = "Button clicked!";
    const newParagraph = document.createElement('p');

    newParagraph.textContent = "New paragraph";
    document.getElementById("para").textContent = "";

    // const para= document.getElementById("para");
    // para.remove() //does the same thing as above but this is better



    document.body.style.backgroundColor="lightblue";
    myButton.style.backgroundColor="lightblue";

    
    
   
    
});

// document.body.style.backgroundColor="lightgreen";    //probably don't need cuz got css


