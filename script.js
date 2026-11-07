$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.snuggle-button').click(clickedSnuggleButton);
  

  
    
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Rover", weight:7, happiness:0};
  
    function clickedTreatButton() {
      // Increase pet happiness
      ++pet_info.happiness;
      // Increase pet weight
      ++pet_info.weight;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      ++pet_info.happiness;
      // Decrease pet weight
      pet_info.weight = pet_info.weight > 0 ? pet_info.weight - 1 : 0;
      checkAndUpdatePetInfoInHtml();
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      --pet_info.happiness;
      // Decrease pet weight
      pet_info.weight = pet_info.weight > 0 ? pet_info.weight - 1 : 0;
      checkAndUpdatePetInfoInHtml();
    }

    function clickedSnuggleButton(){
      ++pet_info.happiness;
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      
      updatePetInfoInHtml();
    }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.

    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
    }
  