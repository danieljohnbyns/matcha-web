import { Collapse } from 'antd'
import { SectionHeading } from './SectionHeading'

const faqs = [
  {
    key: '1',
    label: 'What is Matcha?',
    children:
      'Matcha is a social media platform built specifically for service providers. It helps you showcase your work, manage bookings, and communicate with clients — all in one place.',
  },
  {
    key: '2',
    label: 'Who is Matcha for?',
    children:
      'Matcha is designed for any service provider — from hairstylists and photographers to tutors, fitness coaches, and consultants.',
  },
  {
    key: '3',
    label: 'How do I get started?',
    children:
      'Download the app, create your profile, add your services and availability, and you\'re ready to connect with clients.',
  },
  {
    key: '4',
    label: 'Is Matcha free?',
    children:
      'Matcha offers a free tier with all essential features. Premium plans with advanced tools are available for growing businesses.',
  },
  {
    key: '5',
    label: 'How do clients find me?',
    children:
      'Clients discover service providers through our discovery feed, category browsing, and search. A complete profile with photos and reviews helps you stand out.',
  },
]

export function FAQ() {
  return (
    <section className="py-24 bg-warm-white">
      <div className="max-w-[800px] mx-auto px-6">
        <SectionHeading
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about Matcha."
        />
        <Collapse
          accordion
          bordered={false}
          className="bg-transparent"
          items={faqs.map((faq) => ({
            key: faq.key,
            label: <span className="text-base font-medium text-charcoal py-2">{faq.label}</span>,
            children: <p className="text-warm-gray">{faq.children}</p>,
          }))}
        />
      </div>
    </section>
  )
}
