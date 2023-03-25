const form = document.querySelector('#my_form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the default form submission

  const formData = new FormData(form); // get the form data
  const requestData = Object.fromEntries(formData.entries()); // convert the form data to a JSON object

  // make an AJAX POST request to your backend API endpoint
  fetch('/your-backend-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestData)
  })
  .then(response => {
    if (response.ok) {
      window.location.replace('/pending.html'); // redirect to the pending.html page if the request is successful
    } else {
      throw new Error('Network response was not ok');
    }
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });
});
