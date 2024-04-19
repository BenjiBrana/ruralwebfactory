'use client';

import Section from '@/components/Section/Section';
import MySlider from '@/components/Slider/Slider';
import ParagrapheAccueil from '@/components/ParagrapheAccueil/ParagrapheAccueil';
import Faq from '@/components/Faq/Faq';
import CookieBanner from '@/components/Cookies/Cookies';

export default function Page({ children }) {
  return (
    <main>
      <Section className="flex gap-2 relative">
        <MySlider />
        {children}
        <ParagrapheAccueil />
        <Faq />
      </Section>
      <CookieBanner />
    </main>
  );
}
