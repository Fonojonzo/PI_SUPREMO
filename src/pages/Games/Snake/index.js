import '../games.css'
function Snake() {
    return (
        <main className='game_display'>
            <iframe className='jogos' src="../cobra/cobra.html" loading="lazy" allowFullScreen={true} referrerPolicy="no-referrer-when-downgrade" title="Snake"></iframe>
        </main>
    )
}

export default Snake;