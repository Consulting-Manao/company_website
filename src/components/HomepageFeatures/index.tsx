import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React from "react";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Scientific computing',
    Svg: require('@site/static/img/scientific-python.svg').default,
    description: (
      <>
        Translating research into software. We are actively contributing to the Scientific Python Ecosystem itself and can help you connect the dots.
      </>
    ),
  },
  {
    title: 'Real engineering',
    Svg: require('@site/static/img/simple.svg').default,
    description: (
      <>
        Building simple solutions for complex problems. From REST APIs to smart contracts, we leverage modern technologies to suit your specific needs.
      </>
    ),
  },
  {
    title: 'Open Source',
    Svg: require('@site/static/img/open_source_initiative.svg').default,
    description: (
      <>
        Open source at its core. We not only leverage open source technologies but also give back to the community by maintaining critical components.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
