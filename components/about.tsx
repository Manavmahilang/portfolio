'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">Computer Science(B.Tech)</span>, I joined Advertyzment{' '}
        <span className="font-medium">as a backend developer</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        &apos;Eureka&apos; moment which comes after a problem which sometimes pains us for days. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{' '}
        <span className="font-medium">
          Python, C++, Javascript, React, Next.js, and SQL
        </span>
        . I am also familiar with a variety of languages and software. I am always looking to
        learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy playing
        video games, watching movies, and hitting the gym. I also enjoy{' '}
        <span className="font-medium">learning new things</span>. I&apos;m also
        learning how to play the guitar.
      </p>
    </motion.section>
  );
}
