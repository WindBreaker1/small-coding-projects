// ========================= GET CURRENT YEAR ============================ //

// Returns the current year in the copyright, in the footer.
document.getElementById("year").innerText = new Date().getFullYear();

// ========================= LIGHT/DARK MODE ============================= //

// HTML Dom elements
const changeLightButton = document.querySelector(".change-light-button");

// Change from light mode to dark and reverse.
let darkMode = localStorage.getItem('darkMode'); 

// If the user already visited and enabled darkMode start things off with it on.
if (darkMode === 'enabled') {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode', 'enabled');
  changeLightButton.innerText = "🌙";
}

// Click the button and change the light.
changeLightButton.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode'); 
  
  if (darkMode !== 'enabled') {
    document.body.classList.add('darkmode');
    localStorage.setItem('darkMode', 'enabled');
    changeLightButton.innerText = "🌙";
  } else {  
  document.body.classList.remove('darkmode'); 
  localStorage.setItem('darkMode', null);
  changeLightButton.innerText = "🌞";
  }
});

// ========================= 365 QUOTES ============================ //

// HTML DOM elements
const quotesText = document.querySelector(".quotes-text");

// initialize quotes array
// Mabye turn each quote into an object in this array (quote, author, etc). 
let quotes = [
  `"Reading is faster than listening. Doing is faster than watching." -Naval Ravikant`,
  `"Things that are unknown and things that don't exist are not the same." -Unknown`,
  `"I must not fear. Fear is the mind-killer. 
  Fear is the little-death that brings total obliteration.
  I will face my fear.
  I will permit it to pass over me and through me.
  And when it has gone past I will turn the inner eye to see its path.
  Where the fear has gone there will be nothing.
  Only I will remain." -Frank Herbert`,
  `"The harder you work, the harder it is to surrender." - Vince Lombardi`,
];

function cycleQuotes() {
  // Get the current day of the year
  const currentDate = new Date();
  const startOfYear = new Date(currentDate.getFullYear(), 0, 0);
  const diff = currentDate - startOfYear;
  const dayOfYear = Math.floor(diff / (1000 * 60 * 60 * 24));
  // Check if the day is correct.
  console.log("Day of the year:", dayOfYear);
  // Change quote based on current day.
  let currentIndex = dayOfYear;
  quotesText.innerHTML = quotes[currentIndex];
}
//cycleQuotes();