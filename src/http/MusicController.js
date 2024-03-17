export async function buscarMusicaArtista(artista, limite = 0) {
    const formateado = artista.replace(' ', '+')
    let resultado
    if (limite != 0) {
        resultado = await fetch('https://itunes.apple.com/search?entity=song&limit='+ limite +'&attribute=allArtistTerm&term=' + formateado)
    } else {
        resultado = await fetch('https://itunes.apple.com/search?entity=song&attribute=allArtistTerm&term=' + formateado)
    }
    const data = await resultado.json()
    return data
}