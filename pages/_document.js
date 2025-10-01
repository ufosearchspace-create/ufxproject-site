import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Title & Description */}
        <title>UFX Project - UFO Reports on the Blockchain</title>
        <meta
          name="description"
          content="A community-driven platform to submit, verify, and explore UFO sightings with blockchain anchoring and AI analysis."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph (for X, Telegram, Facebook) */}
        <meta property="og:title" content="UFX Project - UFO Reports" />
        <meta
          property="og:description"
          content="Submit UFO reports, explore sightings, and verify them with AI & blockchain anchoring."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ufxproject.com" />
        <meta property="og:image" content="https://ufxproject.com/preview.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="UFX Project - UFO Reports" />
        <meta
          name="twitter:description"
          content="A platform for documenting UFO sightings, anchored on blockchain."
        />
        <meta name="twitter:image" content="https://ufxproject.com/preview.png" />
      </Head>
      <body className="bg-space-900 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
