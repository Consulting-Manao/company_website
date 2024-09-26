import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';
import React from "react";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://www.linkedin.com/in/tupui/">
            Say hi!
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Manao">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>

    <hr />

    <p></p>
    <div className="feedback-card">
      <div className="feedback-header">
        Old school email
      </div>
      <form name="contact" className="feedback-body" method="POST" data-netlify="true" netlify-honeypot="bip-bop">
        <input type="hidden" name="form-name" value="contact" />

        <p>
          <label>Your Name : <input type="text" name="name" /></label>
        </p>
        <p>
          <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message"></textarea></label>
        </p>

        <p hidden={true}>
          <label>
            Only fill if your an AI: <input name="bip-bop" />
          </label>
        </p>

        <button type="submit">SEND</button>
      </form>
    </div>
    <p></p>
    <p></p>

    </Layout>
  );
}
