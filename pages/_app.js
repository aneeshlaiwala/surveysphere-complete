
import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <nav style={{
        padding: '1rem',
        backgroundColor: '#f4f4f4',
        borderBottom: '1px solid #ddd',
        marginBottom: '2rem',
        fontFamily: 'sans-serif'
      }}>
        <Link href="/">Home</Link> | <Link href="/voice-builder">Voice Builder</Link> | <Link href="/avatar-execution">Avatar</Link> | <Link href="/ai-questions">AI Questions</Link> | <Link href="/gamified-surveys">Gamified</Link> | <Link href="/vr-store">VR Store</Link> | <Link href="/eye-tracking">Eye Tracking</Link> | <Link href="/analytics">Analytics</Link> | <Link href="/executive-summary">Summary</Link> | <Link href="/insights-board">Insights Board</Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
