const receivingEmailAddress = 'busybeeflorist@busybeemail.com.au';
const phpEmailFormPath = '../assets/vendor/php-email-form/php-email-form.php';

async function handleFormSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);
    const response = await fetch(phpEmailFormPath, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Your booking request has been sent successfully!');
      event.target.reset();
    } else {
      throw new Error('Failed to send booking request!');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while sending your booking request. Please try again later.');
  }
}

const form = document.querySelector('#book-a-flower-form');
form.addEventListener('submit', handleFormSubmit);
