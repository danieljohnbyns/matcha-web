import { createFileRoute } from '@tanstack/react-router';
import { Button /*, Input, Form, message */ } from 'antd';
import { AppleOutlined, AndroidOutlined } from '@ant-design/icons';

const Download = () => {
	// const [form] = Form.useForm();

	// const handleSubmit = () => {
	// 	message.success('Thanks! We\'ll notify you when Matcha launches.');
	// 	form.resetFields();
	// };

	return (
		<section className='py-24 bg-warm-white min-h-[80vh] flex items-center'>
			<div className='max-w-600px mx-auto px-6 text-center'>
				<h1 className='text-4xl md:text-5xl font-bold text-charcoal'>
					Get Matcha
				</h1>
				<p className='text-warm-gray text-lg mt-4'>
					Available on iOS and Android. Start growing your service
					business today.
				</p>

				{/* QR Code placeholder */}
				<div className='mt-12'>
					<div className='w-40 h-40 bg-white border border-border rounded-2xl mx-auto flex items-center justify-center'>
						<span className='text-warm-gray text-sm'>QR Code</span>
					</div>
					<p className='text-warm-gray text-sm mt-3'>
						Scan to download
					</p>
				</div>

				{/* Store buttons */}
				<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mt-10'>
					<Button
						type='primary'
						size='large'
						icon={<AppleOutlined />}
						className='bg-charcoal border-charcoal hover:bg-black w-full sm:w-auto h-auto px-6 py-3 text-base font-semibold'
					>
						App Store
					</Button>
					<Button
						type='primary'
						size='large'
						icon={<AndroidOutlined />}
						className='bg-matcha border-matcha hover:bg-matcha-dark w-full sm:w-auto h-auto px-6 py-3 text-base font-semibold'
					>
						Google Play
					</Button>
				</div>

				{/* Email signup */}
				{/* <div className="mt-12">
          <h2 className="text-xl font-semibold text-charcoal mb-2">
            Get notified about updates
          </h2>
          <p className="text-warm-gray text-sm mb-6">
            Be the first to know about new features and launches.
          </p>
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="email"
              rules={[
                { required: true, message: 'Please enter your email' },
                { type: 'email', message: 'Please enter a valid email' },
              ]}
              className="mb-4"
            >
              <Input
                placeholder="you@example.com"
                size="large"
                className="max-w-360px mx-auto"
              />
            </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              size="large"
              className="bg-matcha hover:bg-matcha-dark w-full sm:w-auto max-w-360px"
            >
              Notify Me
            </Button>
          </Form>
        </div> */}
			</div>
		</section>
	);
};

export const Route = createFileRoute('/download')({ component: Download });
