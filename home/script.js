// impor index html
        function generateQRCode() {
            var inputData = document.getElementById('inputData').value;
            var qrcode = new QRCode(document.getElementById("qrcode"), {
                text: inputData,
                width: 128,
                height: 128
            });
        }