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
    console.log(query)
    const {filmid} = query
    const res = await fetch(`https://swapi.co/api/films/${filmid}`)
    const data = await res.json()
    console.log(filmid)
    console.log("data: ", data)
    return {
        data
    }
}

export default FilmPage