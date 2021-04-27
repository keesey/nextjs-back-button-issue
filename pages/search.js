import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
export const getServerSideProps = async (context) => {
    return {
        props: {
            q: context.query.q || ""
        }
    }
}
export default function Search({ q }) {
    const router = useRouter()
    return (
        <>
            <Head>
                <title>Search Page</title>
            </Head>
            <main>
                <header>
                    <h1>Search Page</h1>
                </header>
                <ol>
                    <li value={2}>
                        <button
                            onClick={() => router.push(router.pathname, `${router.asPath.replace(/#.*$/, "")}#anchor`, { shallow: true })}
                        >
                            Go to Anchor
                        </button>
                    </li>
                    <li id="anchor" value={3}>
                        <Link href="/">
                            <button>
                                Go to Home Page
                            </button>
                        </Link>
                    </li>
                </ol>
                <section>
                    {q && (
                        <dl>
                            <dt>Query:</dt>
                            <dd><code>{q}</code></dd>
                        </dl>
                    )}
                    {!q && (
                        <p>No query value!</p>
                    )}
                </section>
            </main>
        </>
    )
}
