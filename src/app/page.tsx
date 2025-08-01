import { ContactSection } from '@/components/page/landing/Contact/Contact';
import HeroSection from '@/components/page/landing/HeroSection/HeroSection';
import Projects from '@/components/page/landing/Projects/Projects';
import Services from '@/components/page/landing/Services/Services';
import { Testimonials } from '@/components/page/landing/Testimonials/Testimonials';
import WhyUs from '@/components/page/landing/WhyUs/WhyUs';
import React from 'react';

type Props = {};

function page({}: Props) {
	return (
		<>
			<HeroSection />
			<Services />
			<WhyUs />
			<Projects />
			<Testimonials />
			<ContactSection />
		</>
	);
}

export default page;
