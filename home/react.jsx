const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


function FormInput() {
  const [selectedOption, setSelectedOption] = React.useState('');
  const [colorShadow, setColorShadow] = React.useState('#ff0000');
  const qrCode = document.getElementById("qrcode");
  const qrBgStyle = document.querySelector(".qr-img");

  const CekValueColorBorder = (event) => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    if (selectedValue === 'On') {
      qrBgStyle.style.animation = "borderRgb 2.5s ease infinite alternate";
    }
    if (selectedValue === 'Off') {
      qrBgStyle.style.animation = "none";
    }
  };
  // const CekValueColorQr = (event) => {
  //   const selectedValue = event.target.value;
  //   setSelectedOption(selectedValue);
  // };
  return (
    <>
      <form>
        <label className="label-title">Input your QR data in here</label>
        <div className="d-flex flex-column">
          <label className="label-input">Text or url</label>
          <input className="input-text" id="textOrUrl" type="text" placeHolder="type in here.." onInput={GoLabel} required />
          <label className="label-input text-danger label-empty">can not be empty!</label>
        </div>
        <div className="d-flex flex-column">
          <label className="label-input">Name QR (for download & optional)</label>
          <input className="input-text" id="inputFile" type="text" placeHolder="type in here.." />
        </div>
        <div className="d-flex flex-column">
          <label className="label-input">Opacity QR</label>
          <input className="input-text" id="rangeOpacity" type="range" min="0" max="10" onChange={OpacityChange} />
          <label className="label-input-opacity text-light">1.0</label>
        </div>
        <div className="con-style">
          <div className="con-style-input d-flex flex-column">
            <label className="label-input">Animation border</label>
            <select className="input-style-qr" onChange={CekValueColorBorder}>
              <option value="On">
                On
              </option>
              <option value="Off">
                Off
              </option>
            </select>
          </div>
          <div className="con-style-input d-flex flex-column">
            <label className="label-input">Color border (if animtion off)</label>
            <input className="input-style-qr" id="colorBorderQr" type="color" onChange={CekValueBorder} />
          </div>
          </div>
          <div className="con-style">  <div className="con-style-input d-flex flex-column">
            <label className="label-input">Color QR</label>
            <select className="input-style-qr" id="valueQrColor">
              <option value="black">
                Default black
              </option>
              <option value="#ff0000">Merah</option>
<option value="#0000ff">Biru</option>
<option value="#ffff00">Kuning</option>
<option value="#ffa500">Orange</option>
<option value="#008000">Hijau</option>
<option value="#800080">Ungu</option>
<option value="#800000">Cokelat</option>
<option value="#808080">Abu-abu</option>
<option value="#ffffff">Putih</option>
<option value="#f00">Merah Terang</option>
<option value="#0f0">Hijau Terang</option>
<option value="#00f">Biru Terang</option>
<option value="#ff0">Kuning Terang</option>
<option value="#ffa07a">Mawar Muda</option>
<option value="#87ceeb">Biru Langit</option>
<option value="#da70d6">Orkid</option>
<option value="#ff69b4">Merah Muda</option>
<option value="#ffd700">Emas</option>

            </select>
          </div>
          <div className="con-style-input d-flex flex-column">
            <label className="label-input">Shadow QR</label>
            <input className="input-style-qr" id="colorShadowQr" type="color" value={colorShadow} onChange={CekValueColorShadow} />
          </div>
        </div>
        <div className="d-flex justify-align-center align-items-center flex-column con-btn mt-3">
          <button type="button" onClick={MakeCode} className="btn-submit bg-primary">Generate !</button>
          <button type="reset" onClick={ResetForm} className="btn-submit bg-danger">Reset</button>
        </div>
      </form>
    </>
  );
}
function Footer() {
  return (
    <>
    <footer className="d-flex align-items-center justify-content-center position-relative">
    <label className="cpright">
    ©2024 zeru || created with react js, bootstrap, javascript
    </label>
    </footer>
    </>
    )
}
function HomePage() {
  return (
    <>
      <FormInput />
      <Footer />
    </>
  );
}

root.render(<HomePage />);