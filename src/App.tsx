import Header from './components/Header';
import Hero from './components/Hero';
import ServicesBar from './components/ServicesBar';

function App() {
	return (
		<div className="min-h-screen bg-[#0a1628] text-white overflow-x-hidden">
			<Header />
			<Hero />
			<ServicesBar />
			{/* Footer gradient */}
			<div className="h-16 bg-gradient-to-b from-[#0a1628] to-[#061020]" />
		</div>
	);
}

export default App;
