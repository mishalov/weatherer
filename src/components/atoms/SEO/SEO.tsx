import React from "react";
import Head from "next/head";

interface ISeoProps {
  cityName: string | null;
}

const SEO: React.FC<ISeoProps> = ({ cityName }) => (
  <Head>
    <title>{cityName ? `Weather in ${cityName}` : "Current weather"}</title>
    <meta
      name="description"
      content="Something meaningfull and optimized for search engines"
    />
    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
