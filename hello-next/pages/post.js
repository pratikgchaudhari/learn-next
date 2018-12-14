import { withRouter } from 'next/router'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';

const Content = withRouter((props) => (
    <div>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary}</p>
    </div>
))

const Page = (props) => (
    <Layout>
        <Content show={props.show} />
    </Layout>
)

Page.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`)
    const show = await res.json()

    console.log(`Fetched show: ${show.name}`)
    return { show }
}

export default Page