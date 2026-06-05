interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
	return (
		<div className='text-center mb-16'>
			<h2 className='text-3xl md:text-4xl font-bold text-charcoal'>
				{title}
			</h2>
			{subtitle && (
				<p className='text-warm-gray text-lg mt-4 max-w-2xl mx-auto'>
					{subtitle}
				</p>
			)}
		</div>
	);
};
