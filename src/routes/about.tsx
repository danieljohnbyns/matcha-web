import { createFileRoute } from '@tanstack/react-router'
import { Card } from 'antd'
import {
  HeartOutlined,
  SafetyOutlined,
  TeamOutlined,
  ThunderboltOutlined,
} from '@ant-design/icons'

const values = [
  {
    icon: <HeartOutlined className="text-2xl text-matcha" />,
    title: 'Community First',
    description:
      'We believe in the power of genuine connections between service providers and clients.',
  },
  {
    icon: <ThunderboltOutlined className="text-2xl text-matcha" />,
    title: 'Simplicity',
    description:
      'Tools should make your life easier, not more complicated. We keep things intuitive.',
  },
  {
    icon: <SafetyOutlined className="text-2xl text-matcha" />,
    title: 'Trust',
    description:
      'Every interaction on Matcha is built on transparency and reliability.',
  },
  {
    icon: <TeamOutlined className="text-2xl text-matcha" />,
    title: 'Empowerment',
    description:
      'We exist to help independent service providers thrive on their own terms.',
  },
]

export const Route = createFileRoute('/about')({ component: About })

function About() {
  return (
    <div>
      {/* Mission */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-[800px] mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-charcoal">
            About Matcha
          </h1>
          <p className="text-warm-gray text-lg mt-6">
            We noticed that service providers — hairstylists, photographers,
            tutors, fitness coaches, and countless others — were juggling
            multiple apps just to manage their business. Booking here, messaging
            there, showcasing work somewhere else.
          </p>
          <p className="text-warm-gray text-lg mt-4">
            Matcha brings it all together in one beautiful, simple platform.
            Built by people who understand the hustle of running a service
            business, for people who do it every day.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-16">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <Card
                key={value.title}
                bordered={false}
                className="text-center bg-warm-white hover:shadow-md transition-shadow"
              >
                <div className="mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">
                  {value.title}
                </h3>
                <p className="text-warm-gray text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-warm-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal text-center mb-16">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Founder & CEO', 'Lead Designer', 'Lead Engineer'].map((role) => (
              <Card
                key={role}
                bordered={false}
                className="text-center bg-white hover:shadow-md transition-shadow"
              >
                <div className="w-24 h-24 rounded-full bg-matcha-light mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-warm-gray">?</span>
                </div>
                <h3 className="text-lg font-semibold text-charcoal">
                  Team Member
                </h3>
                <p className="text-warm-gray text-sm">{role}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
