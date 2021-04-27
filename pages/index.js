import Head from 'next/head'
import Link from 'next/link'
export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page</title>
      </Head>
      <main>
        <header>
          <h1>Home Page</h1>
        </header>
        <ol>
          <li value={1}>
            <Link
              as="/search?q=foo"
              href="/search"
            >
              <button>
                Open Search Page with Query
              </button>
            </Link>
          </li>
          <li value={4}>
            Press the "Back" Button.
          </li>
        </ol>
      </main>
    </>
  )
}
