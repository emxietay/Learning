document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  let emailInput = document.querySelector('#email').value;  
  let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;;
  if (emailRegex.test(emailInput)) {    
    document.getElementById('personal-info').style.display = "block";
    document.getElementById('validate').style.display = "none";
  } else {
    message.textContent = 'Invalid email address';
  }
});
let jobInfoContainer = document.querySelectorAll('#job-info > div > div > div');
let jobInfoViewMore = document.querySelectorAll('#job-info .view-more.hidden');
let jobInfoViewLess = document.querySelectorAll('#job-info .view-less.hidden');
let jobDetails = document.querySelectorAll('#job-info .hidden:last-of-type');

console.log(jobInfoViewMore)

// When click "VIEWMORE"
for (let i = 0; i <jobInfoViewMore.length; i++) {
  jobInfoViewMore[i].addEventListener("click" , function() {
    jobInfoViewMore[i].style.display = "none";
    jobDetails[i].classList.remove('hidden');
    jobInfoViewLess[i].classList.remove('hidden');
    
  })
}
// WHEN CLICK "VIEWLESS"
for (let i = 0; i <jobInfoViewLess.length; i++) {
  jobInfoViewLess[i].addEventListener("click" , function() {
    jobDetails[i].classList.add('hidden');
    jobInfoViewLess[i].classList.add('hidden');
    jobInfoViewMore[i].style.display = 'none';
    // jobInfoViewMore[i].classList.add('hidden');
    console.log(jobInfoViewMore)
   
  })
}
// WHEN HOVER-IN CERTAIN CONTAINER
for (let i = 0; i <jobInfoContainer.length; i++) {
  jobInfoContainer[i].addEventListener("mouseover" , function() {
    jobInfoViewMore[i].style.display = "block";
  })
}
// WHEN HOVER-OUT CERTAIN CONTAINER
for (let i = 0; i <jobInfoContainer.length; i++) {
  jobInfoContainer[i].addEventListener("mouseout" , function() {
    jobInfoViewMore[i].style.display = "none";
    
  })
}
console.log(jobDetails)
