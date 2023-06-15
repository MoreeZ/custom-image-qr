function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Read the value of imgURL from the URL parameters
var imgURLValue = getUrlParameter('imgURL');
var qrCodeUrl = 'https://api.qrserver.com/v1/create-qr-code/?data=' + encodeURIComponent(imgURLValue);

// Clear previous QR code, if any
var qrCodeContainer = document.getElementById("qrCodeContainer");
console.log(qrCodeContainer)
qrCodeContainer.innerHTML = '';

// Create an img element for the QR code
var qrCodeImg = document.createElement("img");
qrCodeImg.src = qrCodeUrl;

// Append the QR code image to the container
qrCodeContainer.appendChild(qrCodeImg);