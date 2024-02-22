// impor index html
// new create load qr
var qrcode = new QRCode(document.getElementById("qrcode"), {
	text : 'https://zeru.netlify.app',
	width : 145,
	height : 145
});
const defaultQr = "https://zeru.netlify.app";


// create qr
function MakeCode () {
  const elText = document.getElementById("textOrUrl");
	const labelEmpty = document.querySelectorAll(".label-empty")
	
	if (!elText.value) {
	  elText.style.border = "2px solid red";
	  labelEmpty.forEach(labelempty => {
	    labelempty.style.opacity = "1";
	  setTimeout(function() {
	    
	    labelempty.style.opacity = "0";
	  elText.style.border = "2px solid #34fff0";
	  }, 3000);
	  });
	  return;
	}
	
	qrcode.makeCode(elText.value);
}

MakeCode();

// switch blur qr
$("#textOrUrl").
	on("blur", function () {
		MakeCode();
	}).
	on("keydown", function (e) {
		if (e.keyCode == 13) {
			MakeCode();
		}
	});
	
	// validasi default qr
	function GoLabel() {
	  const iptText = document.getElementById("textOrUrl").value;
	  const textLabelQr = document.querySelector(".label-qr");
	  textLabelQr.innerText = iptText;
	  
	  if (!iptText) {
	qrcode.makeCode(defaultQr);
	    textLabelQr.innerText = "https://zeru.netlify.app";
	  }
	}
	
	// reset btn form 
	function ResetForm() {
	  const iptText = document.getElementById("textOrUrl").value;
	  const textLabelQr = document.querySelector(".label-qr");
	    textLabelQr.innerText = "https://zeru.netlify.app";
	qrcode.makeCode(defaultQr);
	}
	
	
	// download system
function downloadQr() {
  var element = document.getElementById('qrcode');
  const input = document.getElementById('inputFile').value;
  var arrayFile = ['zydgsjjg12', 'kdbapwkbdb', 'owjdbdhebdbchsn', 'oajfn8rheb', 'iahdiabi8', 'jabvqopd26', 'uwjajciwnwo71', 'kabnzkzoxo', 'jdjeosbxbsjanakls', 'jdjeiejjdni1038', 'bwpodi99', 'owid9eoei'];
  const arrayDownload = arrayFile[Math.floor(Math.random() * arrayFile.length)];

  html2canvas(element)
    .then(function (canvas) {
      var imgData = canvas.toDataURL('image/png');
      
      var a = document.createElement('a');
      a.href = imgData;
      a.download = input + '-qrgeneratorZp.png';
      if (!input) {
      a.download = arrayDownload + '-qrgeneratorZp.png';
      }
      a.click();
    });
}