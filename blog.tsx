import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, pageHead, BlogSection } from '@/components/hospic';
export const Route = createFileRoute('/blog')({ head:()=>pageHead('Blog & News','Latest health insights and wellness tips.'), component:Page });
function Page() {return <ContentPage title="Blog & News" description="Latest health insights and wellness tips."><BlogSection/></ContentPage>;}
