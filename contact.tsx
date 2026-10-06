import { createFileRoute } from '@tanstack/react-router';
import { ContentPage, AppointmentForm, FAQSection, pageHead } from '@/components/hospic';
export const Route=createFileRoute('/contact')({head:()=>pageHead('Book an Appointment','Contact Hospic and find the right medical specialist for your care.'),component:Contact});
function Contact(){return <ContentPage title="Book an Appointment" description="Your health is our priority."><section className="section"><div className="container"><div className="contact-intro"><h2>Get in touch with us</h2><p><a href="tel:+18005550123">+1 (800) 555-0123</a><br/><a href="mailto:hello@hospic.com">hello@hospic.com</a><br/>2450 Market Street, New York, NY 10001</p></div><AppointmentForm/></div></section><FAQSection/></ContentPage>;}
