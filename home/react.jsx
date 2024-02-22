const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


function FormInput() {
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
        <label className="label-input">Name QR (for download)</label>
        <input className="input-text" id="inputFile" type="text" placeHolder="type in here.." />
        <label className="label-input text-danger label-empty">can not be empty!</label>
        </div>
        <div className="d-flex flex-column">
        <label className="label-input">Lorem ipsum</label>
        <input className="input-text" id="" type="text" placeHolder="type in here.." />
        <label className="label-input text-danger label-empty">can not be empty!</label>
        </div>
        <div className="d-flex justify-align-center align-items-center flex-column con-btn mt-3">
        <button type="button" onClick={MakeCode} className="btn-submit bg-primary">Generate !</button>
        <button type="reset" onClick={ResetForm} className="btn-submit bg-danger">Reset</button>
        </div>
      </form>
    </>
  );
}

function HomePage() {
  return (
    <>
      <FormInput />
    </>
  );
}

root.render(<HomePage />);