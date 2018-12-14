import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const PostLink = (props) => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?id=${props.id}&name=${props.name}&summary=${props.summary}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

const Index = (props) => (
    <Layout>
        <h1>Batman TV Shows</h1>
        <ul>
            {props.shows.map(({show}) => (
                <PostLink key={show.id} id={show.id} title={show.name}/>
            ))}
            
            
            
        </ul>
    </Layout>
)

Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(`Shows data fetched. Count: ${data.length}`)
    return {
        shows:data
    }
}

export default Index