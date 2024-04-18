// Function to redact text based on user input
function redactText() {
	// Get the original text and words to redact from the form
	const originalText = document.getElementById('originalText').value;
	const wordsToRedact = document.getElementById('wordsToRedact').value.split(' ');

	// Initialize a variable to store the redacted text
	let redactedText = originalText;

	// Loop through each word to redact
	wordsToRedact.forEach(word => {
	  // Create a regular expression to match the word globally and case-insensitively
	  const regex = new RegExp(word, 'gi');

	  // Replace the matched word with asterisks (*) of the same length
	  redactedText = redactedText.replace(regex, '*'.repeat(word.length));
	});

	// Display the redacted text in the designated area
	document.getElementById('redactedText').innerText = redactedText;
  }