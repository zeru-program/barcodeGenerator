const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


function HeadTitle() {
  return (
    <>
      <h1>Welcome !</h1>
    </>
  )
}
function FormInput() {
  return (
    <>
      <form>
        <label className="label-title"></label>
        <label className="label-input"></label>
        <input className="input-text" id="textOrUrl" type="text" placeHolder="type in here" />
        <label className="label-input"></label>
        <input className="input-text" id="" type="text" placeHolder="type in here" />
        <label className="label-input"></label>
        <input className="input-text" id="" type="text" placeHolder="type in here" />
        <button type="button" onClick={GenerateQr} className="btn-submit bg-primary">Generate !</button>
      </form>

    </>
  );
}
function GenerateQr() {
  const inputData = document.getElementById('textOrUrl').value;
  const qrcode = new QRCode(document.getElementById("qrcode"), {
    text: inputData,
    width: 128,
    height: 128
  });
  console.log('succes');

}
function QrDisplay() {
  return (
    <div id="qrcode"></div>
  );
}
function HomePage() {
  return (
    <>
      <HeadTitle />
      <FormInput />
      <QrDisplay />
    </>
  );
}

root.render(<HomePage />);