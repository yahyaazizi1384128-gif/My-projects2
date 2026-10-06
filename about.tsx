import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead, AboutSection, ServicesSection, WhySection } from '@/components/hospic';
export const Route = createFileRoute('/about')({ head:()=>pageHead('About Us','Compassionate care. Experienced specialists. A healthier tomorrow.'), component:Page });
function Page() {return <ContentPage title="About Us" description="Compassionate care. Experienced specialists. A healthier tomorrow."><AboutSection/><ServicesSection/><WhySection/></ContentPage>;}
