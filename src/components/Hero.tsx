import backgroundImage from '../assets/background.png';

export default function Hero() {
	return (
		<section
			className="relative min-h-[400px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[600px] bg-cover bg-center bg-no-repeat"
			style={{ backgroundImage: `url(${backgroundImage})` }}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/90 via-[#0a1628]/70 to-transparent" />

			{/* Content */}
			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
				<div className="max-w-md sm:max-w-lg md:max-w-xl">
					<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4 animate-slide-in-left opacity-0">
						<span className="text-white">Reliable Plumbing</span>
						<br />
						<span className="text-white">Services</span>
					</h1>

					<p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 animate-fade-in-up opacity-0 animation-delay-200">
						Your Trusted Local Plumber
					</p>

					<div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 animate-fade-in-up opacity-0 animation-delay-400">
						<button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 sm:py-3 px-6 sm:px-8 text-sm sm:text-base rounded transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30 animate-pulse-slow">
							REQUEST SERVICE
						</button>

						<CallNowBadge />
					</div>
				</div>
			</div>
		</section>
	);
}

function CallNowBadge() {
	return (
		<div className="flex items-center bg-white/10 backdrop-blur-sm rounded px-4 py-2 border border-white/20">
			<span className="text-xs text-blue-300 mr-2">CALL NOW</span>
			<svg
				className="w-5 h-5 text-blue-400 mr-2"
				fill="currentColor"
				viewBox="0 0 24 24"
			>
				<path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
			</svg>
			<span className="text-white font-bold text-lg">123-456-7890</span>
		</div>
	);
}
