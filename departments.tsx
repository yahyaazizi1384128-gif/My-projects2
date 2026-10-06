import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead, DepartmentsSection } from '@/components/hospic';
export const Route = createFileRoute('/departments')({ head:()=>pageHead('Our Departments','Specialized departments for complete healthcare.'), component:Page });
function Page() {return <ContentPage title="Our Departments" description="Specialized departments for complete healthcare."><DepartmentsSection/></ContentPage>;}
