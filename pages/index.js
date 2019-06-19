import Link from 'next/link'
import fetch from 'isomorphic-unfetch'
import { deflateRawSync } from 'zlib';

function Header() {
    return <nav>
        <ul>
            <li>
                <Link href="/submit">
                    <a>Submit</a>
                </Link>
            </li>
        </ul>
    </nav>
}
function HomePage(props) {
    const {data} = props
    return <>
    <Header />
    <h1>Hello , {data.name} </h1>
    <p>{data.name} is {data.height} cms tall & weighs {data.mass} kgs</p>
    <ul>
        {data.films.map((filmUrl) => {
            const filmID = filmUrl.replace('https://swapi.co/api/films/', '').replace('/','')
            return <li key={filmUrl}>
                    <Link href={`/film?filmid=${filmID}`}>
                        <a>{filmID}</a>
                    </Link>
                </li>
        })}
    </ul>
    </>
    
}

HomePage.getInitialProps = async () => {

    const res = await fetch('https://swapi.co/api/people/1/')
    const data = await res.json()

    return {
       data
    }
}

export default HomePage