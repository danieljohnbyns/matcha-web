import { useEffect, useState } from 'react';
import { Modal } from 'antd';

interface Countdown {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
}

const calcCountdown = (): Countdown => {
	const now = new Date();
	const target = new Date('2026-06-30T00:00:00');
	const diff = Math.max(0, target.getTime() - now.getTime());
	return {
		days: Math.floor(diff / 86_400_000),
		hours: Math.floor((diff % 86_400_000) / 3_600_000),
		minutes: Math.floor((diff % 3_600_000) / 60_000),
		seconds: Math.floor((diff % 60_000) / 1000)
	};
};

interface Props {
	open: boolean;
	onClose: () => void;
}

export const LatestUpdateModal = ({
	open,
	onClose
}: Props): React.JSX.Element => {
	const [countdown, setCountdown] = useState<Countdown>(calcCountdown);

	useEffect(() => {
		if (!open) return;
		const id = setInterval(() => setCountdown(calcCountdown()), 1000);
		return () => clearInterval(id);
	}, [open]);

	const boxes = [
		{ value: countdown.days, label: 'Days' },
		{ value: countdown.hours, label: 'Hours' },
		{ value: countdown.minutes, label: 'Minutes' },
		{ value: countdown.seconds, label: 'Seconds' }
	];

	return (
		<Modal
			open={open}
			onCancel={onClose}
			footer={null}
			width={440}
			centered
		>
			<div className='text-center py-6'>
				<div className='text-4xl font-semibold text-matcha mb-6'>
					matcha
				</div>
				<p className='text-warm-gray text-base mb-8'>
					The app is under development. Stay tuned for our launch!
				</p>
				<div className='flex justify-center gap-4'>
					{boxes.map((box) => (
						<div
							key={box.label}
							className='bg-matcha text-white rounded-lg w-16 h-16 flex flex-col items-center justify-center'
						>
							<span className='text-xl font-bold leading-none'>
								{box.value}
							</span>
							<span className='text-[10px] uppercase tracking-wider mt-1'>
								{box.label}
							</span>
						</div>
					))}
				</div>
			</div>
		</Modal>
	);
};
