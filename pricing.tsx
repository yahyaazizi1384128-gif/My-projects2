import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead, PricingSection, FAQSection } from '@/components/hospic';
export const Route = createFileRoute('/pricing')({ head:()=>pageHead('Health Packages','Affordable health packages for every need.'), component:Page });
function Page() {return <ContentPage title="Health Packages" description="Affordable health packages for every need."><PricingSection/><FAQSection/></ContentPage>;}
