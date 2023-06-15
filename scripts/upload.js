function makePostRequest() {
  console.log("test");
  var xhr = new XMLHttpRequest();
  var url = "https://api.imgbb.com/1/upload"; // API endpoint
  // Yes, my API key is completely exposed. Please don't be a dick and get my account suspended. :)
  var apiKey = "30281f3c7c52985a0bee49bd899526c3";

  var fileInput = document.getElementById("file");
  var file = fileInput.files[0];

  var formData = new FormData();
  formData.append("expiration", "600");
  formData.append("key", apiKey);
  formData.append("image", file);

  // button and loader elements
  var uploadButton = document.getElementById("uploadButton");
  var loader = document.getElementById("loader");
  var buttonText = document.getElementById("button-text");

  xhr.open("POST", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      console.log(response.data.url);

      // Redirect to receipt.html and pass the response data as URL parameters
      var receiptURL = "receipt.html?imgURL=" + response.data.url;
      window.location.href = receiptURL;
    }

    // Re-enable the button after the function exits
    uploadButton.disabled = false;
    loader.style.display = "none";
    buttonText.style.display = "inline-block";
  };

  // Disable the button and show the loader while the function is running
  uploadButton.disabled = true;
  loader.style.display = "flex";
  buttonText.style.display = "none";

  xhr.send(formData);
}
