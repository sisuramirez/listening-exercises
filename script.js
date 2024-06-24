document.addEventListener("DOMContentLoaded", function() {
  const exercises = [
    { id: "form1", correctAnswer: "David Anderson" },
    { id: "form2", correctAnswer: "James Brown" },
    { id: "form3", correctAnswer: "John Martinez" },
    { id: "form4", correctAnswer: "Michael Johnson" },
    { id: "form5", correctAnswer: "Robert Williams" },
    { id: "form6", correctAnswer: "techinnovator2024@example.com" },
    { id: "form7", correctAnswer: "fitandstrongdaily@example.com" },
    { id: "form8", correctAnswer: "bookwormreviews@example.com" },
    { id: "form9", correctAnswer: "tunes4life@example.com" },
    { id: "form10", correctAnswer: "wanderlustadventures@example.com" },
    { id: "form11", correctAnswer: "Amelia Parker" },
    { id: "form12", correctAnswer: "Gabriella Santos" },
    { id: "form13", correctAnswer: "Isabella Russo" },
    { id: "form14", correctAnswer: "Felicity Nguyen" },
    { id: "form15", correctAnswer: "Penelope Singh" },
    { id: "form16", correctAnswer: "serena.bookworm@themail.com" },
    { id: "form17", correctAnswer: "emilygardeningqueen@themail.com" },
    { id: "form18", correctAnswer: "zoefashionista@themail.com" },
    { id: "form19", correctAnswer: "oliveafitnessguru@themail.com" },
    { id: "form20", correctAnswer: "meganmusiclover@themail.com" },
    { id: "form21", correctAnswer: "Isabella Chen" },
    { id: "form22", correctAnswer: "Orion Darby" },
    { id: "form23", correctAnswer: "Thalia Mertz" },
    { id: "form24", correctAnswer: "Victoria Alvarez" },
    { id: "form25", correctAnswer: "Alexander Johnson" },
    { id: "form26", correctAnswer: "alexanderbooklover@readmail.com" },
    { id: "form27", correctAnswer: "ajphotographyenthusiast@picmail.com" },
    { id: "form28", correctAnswer: "bhsciencegeek@sciencemail.com" },
    { id: "form29", correctAnswer: "dmmusician@tunemail.com" },
    { id: "form30", correctAnswer: "chrisgamerpro@playmail.com" }
  ];

  exercises.forEach(exercise => {
    const form = document.getElementById(exercise.id);
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      const userInput = form.querySelector("input[type='text']").value.trim();
      const result = form.querySelector(".result-message");
      if (userInput.toLowerCase() === exercise.correctAnswer.toLowerCase()) {
        result.textContent = "Correcto!";
        result.style.color = "green";
      } else {
        result.textContent = "Incorrecto!";
        result.style.color = "red";
      }
    });
  });
});