
function NavBar() {
<<<<<<< HEAD
    return (
        <>
            <div className="conteiner navBar" >
                <ul className="nav justify-content">
                    <header><h1 className="text-robo-1 space">Robô 4n69</h1></header>
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/WhoWeAre">Quem somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Control">Robô</a>
                    </li>
                    <div className="box">
                        <Login />
                    </div>
                </ul>
            </div>
        </>
    );
=======
  return (
    <>
    <div className="conteiner navBar" >
    <header><h1 className="text-robo-1 space">Robô 4N69</h1>
      <ul className="nav justify-content-end ">
        <li className="nav-item ">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/quemSomos">Quem somos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/login">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/controle">Robô</a>
        </li>
      </ul>
      </header>
    </div>
    </>
  );
>>>>>>> 2bf534e9b1dbab64bab19681d35c672fd65519a8
}
export default NavBar;