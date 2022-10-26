import './Navbar.css';
function Navbar(){
    return(
        <div className="navbar">
            <div className="brand">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-emoji-laughing laughemo" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M12.331 9.5a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zM7 6.5c0 .828-.448 0-1 0s-1 .828-1 0S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 0-1 0s-1 .828-1 0S9.448 5 10 5s1 .672 1 1.5z"/>
</svg>
                <h3 className="title">MemeGenerator</h3>
            </div>
            <div>
                <p>React Course - Project 3</p>
            </div>
        </div>
    )
}
export default Navbar;