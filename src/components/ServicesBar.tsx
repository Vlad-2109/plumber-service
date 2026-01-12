import type { ReactNode } from 'react';

interface Service {
	icon: ReactNode;
	title: string;
}

const services: Service[] = [
	{
		icon: <PipesIcon />,
		title: 'Emergency Repairs',
	},
	{
		icon: <ShowerIcon />,
		title: 'Drain Cleaning',
	},
	{
		icon: <WaterHeaterIcon />,
		title: 'Water Heaters',
	},
	{
		icon: <WrenchIcon />,
		title: 'Leak Detection & More',
	},
];

export default function ServicesBar() {
	return (
		<section className="bg-gradient-to-r from-[#21344f] via-[#0a1628] to-[#0d2240] border-t border-b border-blue-900/50 py-6 sm:py-8 md:py-10 lg:py-12">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
					{services.map((service, index) => (
						<ServiceCard
							key={service.title}
							service={service}
							delay={index * 200}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

function ServiceCard({ service, delay }: { service: Service; delay: number }) {
	const delayClass =
		delay === 0
			? ''
			: delay === 200
			? 'animation-delay-200'
			: delay === 400
			? 'animation-delay-400'
			: 'animation-delay-600';

	return (
		<div
			className={`flex flex-col items-center text-center group cursor-pointer animate-fade-in-up opacity-0 ${delayClass}`}
		>
			<div className="mb-3 transform group-hover:scale-110 transition-transform duration-300 group-hover:drop-shadow-[0_0_15px_rgba(74,144,217,0.5)]">
				{service.icon}
			</div>
			<h3 className="text-xs sm:text-sm md:text-base font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-300">
				{service.title}
			</h3>
		</div>
	);
}

function PipesIcon() {
	return (
		<svg
			className="w-12 h-12 md:w-16 md:h-16"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="8" y="24" width="20" height="8" rx="1" fill="#6B7B8C" />
			<rect x="8" y="24" width="20" height="4" rx="1" fill="#8899AA" />
			<rect x="24" y="20" width="8" height="28" rx="1" fill="#6B7B8C" />
			<rect x="24" y="20" width="4" height="28" rx="1" fill="#8899AA" />
			<rect x="28" y="40" width="20" height="8" rx="1" fill="#6B7B8C" />
			<rect x="28" y="40" width="20" height="4" rx="1" fill="#8899AA" />
			<circle cx="28" cy="28" r="6" fill="#5A6A7A" />
			<circle cx="28" cy="28" r="4" fill="#7A8A9A" />
			<circle cx="28" cy="44" r="6" fill="#5A6A7A" />
			<circle cx="28" cy="44" r="4" fill="#7A8A9A" />
		</svg>
	);
}

function ShowerIcon() {
	return (
		<svg
			className="w-12 h-12 md:w-16 md:h-16"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<ellipse cx="32" cy="16" rx="14" ry="6" fill="#8899AA" />
			<ellipse cx="32" cy="16" rx="10" ry="4" fill="#6B7B8C" />
			<rect x="30" y="4" width="4" height="12" fill="#6B7B8C" />
			<path
				d="M20 22v4M26 22v6M32 22v8M38 22v6M44 22v4"
				stroke="#5BA3D9"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M23 30v4M29 32v6M35 32v6M41 30v4"
				stroke="#5BA3D9"
				strokeWidth="2"
				strokeLinecap="round"
			/>
			<path
				d="M26 40v4M32 42v6M38 40v4"
				stroke="#5BA3D9"
				strokeWidth="2"
				strokeLinecap="round"
			/>
		</svg>
	);
}

function WaterHeaterIcon() {
	return (
		<svg
			className="w-12 h-12 md:w-16 md:h-16"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<rect x="18" y="12" width="28" height="44" rx="4" fill="#E8E8E8" />
			<rect x="20" y="12" width="24" height="44" rx="3" fill="#D0D0D0" />
			<rect x="22" y="16" width="20" height="6" rx="1" fill="#B8B8B8" />
			<rect x="22" y="50" width="20" height="4" rx="1" fill="#B8B8B8" />
			<circle cx="32" cy="36" r="8" fill="#A0A0A0" />
			<circle cx="32" cy="36" r="5" fill="#888888" />
			<rect x="14" y="8" width="4" height="8" rx="1" fill="#6B7B8C" />
			<rect x="46" y="8" width="4" height="8" rx="1" fill="#6B7B8C" />
		</svg>
	);
}

function WrenchIcon() {
	return (
		<svg
			className="w-12 h-12 md:w-16 md:h-16"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path d="M18 12c-4 0-8 3-9 7l6 4 4-2 2-4-3-5z" fill="#8899AA" />
			<path
				d="M21 21l20 20 6 6c2 2 5 2 7 0s2-5 0-7l-6-6-20-20"
				fill="#6B7B8C"
			/>
			<path
				d="M21 21l20 20 4 4"
				stroke="#8899AA"
				strokeWidth="4"
				strokeLinecap="round"
			/>
			<rect x="36" y="8" width="16" height="6" rx="1" fill="#6B7B8C" />
			<rect x="36" y="8" width="16" height="3" rx="1" fill="#8899AA" />
			<rect x="48" y="8" width="6" height="20" rx="1" fill="#6B7B8C" />
			<rect x="48" y="8" width="3" height="20" rx="1" fill="#8899AA" />
		</svg>
	);
}
