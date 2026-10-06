import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead, DoctorsSection } from '@/components/hospic';
export const Route = createFileRoute('/doctors')({ head:()=>pageHead('Our Doctors','Meet our experienced doctors for care.'), component:Page });
function Page() {return <ContentPage title="Our Doctors" description="Meet our experienced doctors for care."><DoctorsSection/></ContentPage>;}
