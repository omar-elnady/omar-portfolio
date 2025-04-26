import HomePage from '../components/Home'
import Head from 'next/head'
import '@fortawesome/fontawesome-svg-core/styles.css';


export default function Home() {
    return (
        <div>
            <Head>
                <meta name="google-site-verification" content="VJs2G3ynvYQ1KG06ciOhdPdklC1gIUEkJ2KcplrnfWU" />
                <meta name="description" content="Omar Ahmed portfolio. I am web developer, data analyst and web appliaction. OmarAhmed, Omarahmed, Omar Ahmed" />
                <title>Omar Ahmed</title>
            </Head>
            <HomePage />
        </div>
    )
}
