function Header(){
    return (
        <header>
            <h1>Its my first react app</h1>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
// react component only returns only one element so we can embed many elements in one like header