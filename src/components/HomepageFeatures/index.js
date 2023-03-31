import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  
  
  {
    title: 'HTML',
    Svg: require('@site/static/img/HTML5_logo_and_wordmark.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'CSS',
    Svg: require('@site/static/img/CSS3_logo_and_wordmark.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },
  {
    title: 'JS',
    Svg: require('@site/static/img/Unofficial_JavaScript_logo_2.svg').default,
    description: (
      <>
        ...
      </>
    ),
  },

];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
