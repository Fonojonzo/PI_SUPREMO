import '../games.css'
function Asteroids() {
    return (
        <main className='game_display'>
            <iframe className='jogos' src="../asteroid/index.html" loading="lazy" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade" title="Asteroid"></iframe>
        </main>
    )
}

export default Asteroids;