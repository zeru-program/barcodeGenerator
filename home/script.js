// impor index html
// new create load qr
var qrcode = new QRCode(document.getElementById("qrcode"), {
	text : 'https://zeru.netlify.app',
	width : 145,
	height : 145,
	colorDark : "#000000",
	colorLight : "#ffffff"
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
	  const textLabelQr = document.querySelector(".label-qr");
	  textLabelQr.innerText = defaultQr;
	  }, 3000);
	  });
	  return;
	}
	
	qrcode.makeCode(elText.value);
    SwitchColorDarkQr();
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
	
	// switch qr dark color
// switch qr dark color
function SwitchColorDarkQr() {
  const iptColorQr = document.getElementById('valueQrColor').value;

  // Hapus QR code yang sudah ada
  document.getElementById("qrcode").innerHTML = "";

  // Buat QR code baru dengan warna yang diubah
  var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 145,
	height : 145,
  colorDark: iptColorQr
  });

  // Tampilkan QR code baru 
  qrcode.makeCode(document.getElementById("textOrUrl").value);
  const labelQrAppen = document.createElement('label');
  labelQrAppen.className = "label-qr text-center";
  document.getElementById("qrcode").appendChild(labelQrAppen);
  GoLabel();
}

	
	
	// validasi default qr
	function GoLabel() {
	  // min teks 27 teks!
  const iptColorQr = document.getElementById('valueQrColor').value;
	  const iptText = document.getElementById("textOrUrl").value;
	  const textLabelQr = document.querySelector(".label-qr");
	  textLabelQr.innerText = iptText;
	  
	  if (!iptText) {
  document.getElementById("qrcode").innerHTML = "";
	    var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 145,
	height : 145,
  colorDark: iptColorQr
  });
	qrcode.makeCode(defaultQr);
  const labelQrAppen = document.createElement('label');
  labelQrAppen.className = "label-qr text-center";
  labelQrAppen.innerText = defaultQr;
  document.getElementById("qrcode").appendChild(labelQrAppen);
	  } else if (iptText.length > 23) {
	    textLabelQr.innerText = iptText.slice(0, 23) + "...";
	  }
	}
	
	// reset btn form 
	function ResetForm() {
	  const iptText = document.getElementById("textOrUrl").value;
	  const iptOpacity = document.getElementById('rangeOpacity');
	  const textLabelQr = document.querySelector(".label-qr");  document.getElementById("qrcode").innerHTML = "";
	    var qrcode = new QRCode(document.getElementById("qrcode"), {
	width : 145,
	height : 145,
  colorDark: "black"
  });
	qrcode.makeCode(defaultQr);
  const labelQrAppen = document.createElement('label');
  labelQrAppen.className = "label-qr text-center";
  labelQrAppen.innerText = defaultQr;
  document.getElementById("qrcode").appendChild(labelQrAppen);
	   iptOpacity.value = 10;
	}
	
	// color change border
	function CekValueBorder() {
    const qr = document.querySelector(".qr-img");
	  const inputColor = document.getElementById('colorBorderQr');
	  qr.style.border = "3px solid" + inputColor.value;
	}
	function CekValueColorShadow() {
    const qr = document.querySelector(".qr-img");
	  const inputColor = document.getElementById('colorShadowQr');
	  qr.style.boxShadow = "0 0 5px" + inputColor.value;
	}
	
	// opacity change
function OpacityChange() {
    const qr = document.querySelector(".qr-img");
    const labelOpacity = document.querySelector(".label-input-opacity");
  const iptOpacity = document.getElementById('rangeOpacity');
  
  if (parseInt(iptOpacity.value) === 0) {
  qr.style.opacity = "0";
  labelOpacity.innerText = "0";
  }
  else if (parseInt(iptOpacity.value) === 1) {
  qr.style.opacity = ".1";
  labelOpacity.innerText = "0.1";
  }
  else if (parseInt(iptOpacity.value) === 2) {
  qr.style.opacity = ".2";
  labelOpacity.innerText = "0.2";
  }
  else if (parseInt(iptOpacity.value) === 3) {
  qr.style.opacity = ".3";
  labelOpacity.innerText = "0.3";
  }
  else if (parseInt(iptOpacity.value) === 4) {
  qr.style.opacity = ".4";
  labelOpacity.innerText = "0.4";
  }
  else if (parseInt(iptOpacity.value) === 5) {
  qr.style.opacity = ".5";
  labelOpacity.innerText = "0.5";
  }
  else if (parseInt(iptOpacity.value) === 6) {
  qr.style.opacity = ".6";
  labelOpacity.innerText = "0.6";
  }
  else if (parseInt(iptOpacity.value) === 7) {
  qr.style.opacity = ".7";
  labelOpacity.innerText = "0.7";
  }
  else if (parseInt(iptOpacity.value) === 8) {
  labelOpacity.innerText = "0.8";
  qr.style.opacity = ".8";
  }
  else if (parseInt(iptOpacity.value) === 9) {
  qr.style.opacity = ".9";
  labelOpacity.innerText = "0.9";
  }
  else if (parseInt(iptOpacity.value) === 10) {
  qr.style.opacity = "1";
  labelOpacity.innerText = "1.0";
  }
}	
	
// tema change 
const modeTh = document.getElementById('');
modeTh.onclick = function() {
  console.log('mode')
  changeTheme();
}


// 0 = dark mode , 1 = light mode
  var mode = false;
function changeTheme() {
  const body = document.querySelector('body');
  const navbar = document.querySelector('.navbar');
  const modeImg = document.getElementById('modeImg');
  const qrTitleNav = document.getElementById("qrTitleNav");
  const temaInput1 = document.querySelectorAll('.input-text');
  const temaInput2 = document.querySelectorAll('.input-style-qr');
  const labelTitleData = document.querySelector(".label-title");
  const range = document.getElementById('rangeOpacity');
  if (!mode) {
    // mode light or terang
    modeImg.src = "light.png";
    qrTitleNav.style.color = "black";
    body.classList.remove("bg-dark");
    body.classList.remove("text-light");
    body.classList.add("bg-light");
    body.classList.add("text-dark");
    navbar.style.background = " rgba(40,102,255,0.686)";
    labelTitleData.style.borderBottom = "1px solid black";
    range.style.accentColor = "#2866ff";
    temaInput1.forEach(tI1n => {
    tI1n.style.color = "black";
    tI1n.style.border = "2px solid #2866ff";
    });
    temaInput2.forEach(tI2n => {
    tI2n.style.color = "black";
    tI2n.style.border = "2px solid #2866ff";
    });
  } else {
    // mode dark or gelap
    modeImg.src = "dark.png";
    qrTitleNav.style.color = "white";
    body.classList.add("bg-dark");
    body.classList.add("text-light");
    body.classList.remove("bg-light");
    body.classList.remove("text-dark");
    navbar.style.background = " rgba(30,175,238,0.3)";
    labelTitleData.style.borderBottom = "1px solid white";
    range.style.accentColor = "#34fff0";
    temaInput1.forEach(tI1d => {
    tI1d.style.color = "white";
    tI1d.style.border = "2px solid #34fff0";
    });
    temaInput2.forEach(tI2d => {
    tI2d.style.color = "white";
    tI2d.style.border = "2px solid #34fff0";
    });
  }
  mode = !mode;
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
