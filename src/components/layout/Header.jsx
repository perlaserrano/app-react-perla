
const Header = () => {
    return (

        <nav className="main-nav">
            <div className="container-menu">
                <ul className="menu">
                    <li>
                        Home
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Contacts
                    </li>

                </ul>
            </div>

            <div className="session-info">
                <ul>
                    <li>
                        Perla Serrano
                    </li>
                    <li>
                        <img src="/logo192.png" alt="" width={50} />
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Header;