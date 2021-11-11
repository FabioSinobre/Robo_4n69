function NavBar() {
    return (
  <>
            <div className="conteiner navBar" >
                <ul className="nav justify-content-end ">
                    <header><h1 className="text-robo-1 space">Robô 4N69</h1></header>
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Login">Login</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/WhoWeAre">Quem somos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Control">Robô</a>
                    </li>
                  
                </ul>
            </div>
        </>
    );
}
export default NavBar;