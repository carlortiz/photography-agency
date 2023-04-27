function Navbar(props) {
    function handleClick() {
        props.onGetUsersClick();
    }

    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#"><h3>Barnes & Nobles</h3></a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#" onClick={handleClick}><h5>Get Users</h5></a>
            </li>   
        </ul>
        <h5 class="nav-item active text-white">Welcome, enjoy your visit! </h5>

        </nav>
    );
}

export default Navbar;
