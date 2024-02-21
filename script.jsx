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
    <button className="start-btn rounded rounded-3 bg-warning font-weight-bolder">START</button>
    </>
    );
}
function DeskPgmLaunge() {
  return (<>
  <div className="con-pmg">
  </div>
  <div className="con-pmg-atas">
  </div>
  </>)
}

function HomePage() {
  return (
    <>
    <HeadTitle />
    <BtnStart />
    <DeskPgmLaunge />
    </>
    );
}

  root.render(<HomePage />);