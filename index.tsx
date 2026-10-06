import { createFileRoute } from '@tanstack/react-router';
import { Hero, AboutSection, ServicesSection, WhySection, DepartmentsSection, PricingSection, TestimonialsSection, DoctorsSection, FAQSection, BlogSection, Footer, pageHead } from '@/components/hospic';
export const Route = createFileRoute('/')({head:()=>pageHead('Exceptional care, Better health','Experience trusted healthcare delivered by skilled physicians and advanced diagnostic technology at Hospic.'),component:Index});
function Index() {return <><Hero/><AboutSection/><ServicesSection/><WhySection/><DepartmentsSection/><PricingSection/><TestimonialsSection/><DoctorsSection/><FAQSection/><BlogSection/><Footer/></>;}
