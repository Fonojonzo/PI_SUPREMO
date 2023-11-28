import '../games.css'
function Pacman() {
    return (
        <main className='game_display'>
            <iframe className='jogos' src="../pacman/index.html" loading="lazy" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade" title="Pac-Man"></iframe>
        </main>
    )
}

export default Pacman;