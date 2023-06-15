function makePostRequest() {
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

    xhr.open("POST", url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            console.log(response.data.url);

            // Redirect to receipt.html and pass the response data as URL parameters
            var receiptURL = "receipt.html?imgURL=" + response.data.url;
            window.location.href = receiptURL;
        }
    };

    xhr.send(formData);

}