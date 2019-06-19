import fetch from 'isomorphic-unfetch'

function FilmPage(props) {
    const {data} = props
    return <>
        <p></p>
        <h1>{data.title}</h1>
        <p>Directed by - {data.director}</p>
    </>
}

FilmPage.getInitialProps = async({query}) => {
    const {filmID} = query
    console.log("logging here")
    const res = await fetch(`https://swapi.co/api/films/${filmID}`)
    const data = await res.json()
    return {
        data
    }
}

export default FilmPage