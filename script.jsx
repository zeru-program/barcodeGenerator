const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);


function HeadTitle() {
  return (
    <>
    <h1 className="title">Generate your barcode!</h1>
    </>
    )
}

function BtnStart() {
  return (
    <>
    <button className="start-btn rounded rounded-3 bg-warning font-weight-bolder" onClick={GoBarcode}>START</button>
    </>
    );
}
function GoBarcode() {
  window.location.href = "/home/index.html";
}
function DeskPgmLaunge() {
  return (<>
  <div className="con-pmg">
  </div>
  <div className="con-pmg-atas">
  </div>
  </>)
}
function CopyRight() {
  return (
    <>
    <div className="con-copyright">
    <label className="label-cp">Created by zeru with</label>
    <div>
    <img src="react.png" className="img-cp" />
    <img src="bootstrap.png" className="img-cp" />
    <img src="js.png" className="img-cp" />
    </div>
    </div>
    </>
    );
}

function HomePage() {
  return (
    <>
    <HeadTitle />
    <BtnStart />
    <DeskPgmLaunge />
    <CopyRight />
    </>
    );
}

  root.render(<HomePage />);