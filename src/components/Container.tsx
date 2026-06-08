export const Container = ({
	children,
	maxWidth = 1200
}: {
	children: React.ReactNode;
	maxWidth?: number;
}): React.JSX.Element => {
	return (
		<div
			className='mx-auto px-6 lg:px-12 xl:px-16'
			style={{ maxWidth: `${maxWidth}px` }}
		>
			{children}
		</div>
	);
};
