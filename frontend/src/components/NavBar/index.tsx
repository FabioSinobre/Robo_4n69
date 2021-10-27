import Login from "components/Login";

function NavBar() {
  return (
    <>
      <div className="conteiner navBar" >
        <ul className="nav justify-content ">
          <header><h1 className="text-robo-1 space">Robô 4n69</h1></header>
          <li className="nav-item ">
            <a className="nav-link active" aria-current="page" href="pages/WhoWeAre/test.html">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Quem somos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Robô</a>
          </li>
          <Login />
        </ul>
       
      </div>
    </>
  );
}
export default NavBar;