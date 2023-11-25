const receivingEmailAddress = 'busybeeflorist@busybeemail.com.au';
const jsEmailFormPath = '../assets/vendor/js-email-form/js-email-form.js';

async function handleFormSubmit(event) {
  event.preventDefault();

  try {
    const formData = new FormData(event.target);
    const response = await fetch(jsEmailFormPath, {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      alert('Your message has been sent successfully!');
      event.target.reset();
    } else {
      throw new Error('Failed to send message!');
    }
  } catch (error) {
    console.error(error);
    alert('An error occurred while sending your message. Please try again later.');
  }
}

const form = document.querySelector('#contact-form');
form.addEventListener('submit', handleFormSubmit);
