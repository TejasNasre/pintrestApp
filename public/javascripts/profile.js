function previewImage(event) {
  const gallery = document.getElementById('imageGallery');
  const profileImage = document.getElementById('profileImage');
  const username = document.getElementById('username');
  const imageDescriptionInput = document.getElementById('imageDescription');

  for (const file of event.target.files) {
    const description = imageDescriptionInput.value || 'No description';
    const reader = new FileReader();
    reader.onload = function (e) {
      const card = createCard(e.target.result, description);
      gallery.appendChild(card);
    };
    reader.readAsDataURL(file);
  }

  if (event.target.files.length > 0) {
    const newProfileImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(newProfileImage);
  }
  // Clear the input field after processing
  imageDescriptionInput.value = '';
}

function changeProfileImage(event) {
  const profileImage = document.getElementById('profileImage');

  if (event.target.files.length > 0) {
    const newProfileImage = event.target.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
      profileImage.src = e.target.result;
    };
    reader.readAsDataURL(newProfileImage);
  }
}

function createCard(imageSrc, text) {
  const card = document.createElement('div');
  card.className = 'card';

  const cardImage = document.createElement('img');
  cardImage.src = imageSrc;
  cardImage.alt = 'User Uploaded Image';

  const cardText = document.createElement('p');
  cardText.textContent = text;

  card.appendChild(cardImage);
  card.appendChild(cardText);

  return card;
}