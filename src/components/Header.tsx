import { useState } from 'react';

interface NavLink {
	name: string;
	href: string;
}

const navLinks: NavLink[] = [
	{ name: 'Home', href: '#' },
	{ name: 'About Us', href: '#about' },
	{ name: 'Services', href: '#services' },
	{ name: 'Pricing', href: '#pricing' },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<header className="bg-gradient-to-r from-[#0a1628] via-[#0d2240] to-[#0a1628] border-b border-blue-900/50 animate-fade-in">
			<div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16 md:h-20">
					{/* Logo */}
					<Logo />

					{/* Desktop Navigation */}
					<DesktopNav links={navLinks} />

					{/* Phone & CTA */}
					<PhoneCTA />

					{/* Mobile Menu Button */}
					<MobileMenuButton
						isOpen={mobileMenuOpen}
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
					/>
				</div>

				{/* Mobile Menu */}
				<MobileMenu isOpen={mobileMenuOpen} links={navLinks} />
			</div>
		</header>
	);
}

function Logo() {
	return (
		<div className="flex items-center space-x-2 group cursor-pointer">
			<div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
				<svg
					className="w-6 h-6 md:w-8 md:h-8 text-white"
					fill="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M12 2C10.5 5.5 6 9 6 13c0 3.31 2.69 6 6 6s6-2.69 6-6c0-4-4.5-7.5-6-11z" />
				</svg>
			</div>
			<div className="flex items-baseline gap-1">
				<span className="text-xl md:text-2xl font-bold text-white">
					PLUMBING
				</span>
				<span className="text-xl md:text-2xl font-light text-blue-400">
					SERVICES
				</span>
			</div>
		</div>
	);
}

function DesktopNav({ links }: { links: NavLink[] }) {
	return (
		<nav className="hidden lg:flex items-center space-x-4 xl:space-x-8">
			{links.map((link) => (
				<a
					key={link.name}
					href={link.href}
					className="text-sm lg:text-base text-gray-300 hover:text-white transition-colors duration-300 relative group"
				>
					{link.name}
					<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300" />
				</a>
			))}
		</nav>
	);
}

function PhoneCTA() {
	return (
		<div className="hidden lg:flex items-center space-x-2 xl:space-x-4">
			<div className="text-right">
				<p className="text-xs text-gray-400">24/7 Emergency Call</p>
				<a
					href="tel:123-456-7890"
					className="flex items-center text-sm lg:text-base text-white font-semibold hover:text-blue-400 transition-colors"
				>
					<PhoneIcon className="w-4 h-4 mr-1 text-blue-400" />
					123-456-7890
				</a>
			</div>
			<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 lg:px-6 text-sm lg:text-base rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/30">
				GET A QUOTE
			</button>
		</div>
	);
}

function MobileMenuButton({
	isOpen,
	onClick,
}: {
	isOpen: boolean;
	onClick: () => void;
}) {
	return (
		<button className="lg:hidden p-2 text-white" onClick={onClick}>
			<svg
				className="w-6 h-6"
				fill="none"
				stroke="currentColor"
				viewBox="0 0 24 24"
			>
				{isOpen ? (
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M6 18L18 6M6 6l12 12"
					/>
				) : (
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth={2}
						d="M4 6h16M4 12h16M4 18h16"
					/>
				)}
			</svg>
		</button>
	);
}

function MobileMenu({ isOpen, links }: { isOpen: boolean; links: NavLink[] }) {
	return (
		<div
			className={`lg:hidden overflow-hidden transition-all duration-300 ${
				isOpen ? 'max-h-96 pb-4' : 'max-h-0'
			}`}
		>
			<nav className="flex flex-col space-y-3">
				{links.map((link) => (
					<a
						key={link.name}
						href={link.href}
						className="text-gray-300 hover:text-white transition-colors py-2 border-b border-blue-900/30"
					>
						{link.name}
					</a>
				))}
				<a
					href="tel:123-456-7890"
					className="flex items-center text-white font-semibold py-2"
				>
					<PhoneIcon className="w-4 h-4 mr-2 text-blue-400" />
					123-456-7890
				</a>
				<button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded transition-all duration-300 w-full">
					GET A QUOTE
				</button>
			</nav>
		</div>
	);
}

function PhoneIcon({ className }: { className?: string }) {
	return (
		<svg className={className} fill="currentColor" viewBox="0 0 24 24">
			<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
		</svg>
	);
}
