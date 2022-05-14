import React, { Suspense } from 'react';
import lazy from 'react-lazy-named';

// this is ugly
// const Div = lazy(() =>
//   import(
//     'framer-motion' /* webpackChunkName: "framer", webpackPreload: true */
//   ).then(mod => ({
//     default: mod.motion.div,
//   }))
// );

const MotionDiv = lazy(() => import('framer-motion'), 'motion.div');

export const AnimatedDiv = props => (
  <Suspense fallback={<div className={props.className}>{props.children}</div>}>
    <MotionDiv {...props} />
  </Suspense>
);

const MotionH1 = lazy(() => import('framer-motion'), 'motion.h1');

export const AnimatedH1 = props => (
  <Suspense
    fallback={
      <h1 className={props.className}>
        {props.children}
      </h1>
    }
  >
    <MotionH1 {...props} />
  </Suspense>
);

const MotionH3 = lazy(() => import('framer-motion'), 'motion.h3');

export const AnimatedH3 = props => (
  <Suspense fallback={<h3 className={props.className}>{props.children}</h3>}>
    <MotionH3 {...props} />
  </Suspense>
);
const MotionP = lazy(() => import('framer-motion'), 'motion.p');

export const AnimatedP = props => (
  <Suspense fallback={<p className={props.className}>{props.children}</p>}>
    <MotionP {...props} />
  </Suspense>
);