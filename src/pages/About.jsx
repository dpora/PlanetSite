import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths.jsx";
import { CursorPet } from "../components/CursorPet.jsx";
import { useEffect, useState } from "react";

export const About = () => {
	const [showCursorPet, setShowCursorPet] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			// Show cursor pet only when at the very top (no scrolling)
			const scrollPosition = window.scrollY;
			setShowCursorPet(scrollPosition === 0);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className="relative w-screen overflow-x-hidden bg-black text-gray-200" style={{ scrollBehavior: 'smooth' }}>
			

			{/* Full-screen Hero Section with SVG */}
			<section className="relative flex h-screen w-screen items-center justify-center overflow-hidden">
				{showCursorPet && <CursorPet />}
				<svg 
					width="1639" 
					height="805" 
					viewBox="0 0 1639 805" 
					fill="none" 
					xmlns="http://www.w3.org/2000/svg"
					className="max-h-[80vh] w-auto"
					style={{ filter: 'drop-shadow(0 0 20px rgba(255, 255, 255, 0.3))' }}
				>
					<path 
						d="M1148.28 767.047C1832.28 832.047 1736.78 38.0468 1238.78 24.5473C1163.29 22.5008 996.18 40.0468 929.78 38.0468C846.78 35.5468 663.78 0.54685 489.28 2.04685C349.68 3.24685 231.114 63.8802 189.28 94.0469C131.114 128.047 12.3802 235.747 2.78018 394.547C-9.21982 593.047 117.78 741.047 344.28 797.047C388.28 810.5 563.354 795.548 586.28 793.047C723.78 778.047 854.28 531.547 597.78 427.547C549.28 413.047 520.183 427.547 388.28 427.547C344.28 427.547 379.111 371.675 411.28 367.047C480.78 357.047 570.28 339.047 696.28 422.047C822.28 505.047 944.245 747.658 1148.28 767.047Z" 
						stroke="white" 
						strokeWidth="3"
					/>
					<path 
						d="M541.78 646.047C594.28 637.047 597.78 588.547 541.78 579.047C497.28 579.047 420.68 597.847 340.28 575.047C239.78 546.547 213.28 484.547 213.28 416.047C213.28 347.547 240.28 199.047 482.78 199.047C676.78 199.047 791.28 284.38 824.28 327.047C932.78 407.047 1105.78 621.547 1256.78 621.547C1553.28 606.047 1550.28 249.047 1256.78 183.547C1170.28 168.547 981.28 221.547 764.28 183.547C552.68 138.347 396.114 171.38 344.28 193.547C63.7803 297.547 155.28 580.047 294.28 618.547C405.48 649.347 505.614 649.714 541.78 646.047Z" 
						stroke="white" 
						strokeWidth="3"
					/>
				</svg>
				
				{/* Scroll indicator */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
					<div className="flex flex-col items-center gap-2 text-white/60">
						<span className="text-sm">Scroll Down</span>
						<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
						</svg>
					</div>
				</div>
			</section>

			{/* About Me Content Section */}
			<div className="relative mx-auto flex min-h-screen max-w-5xl flex-col gap-10 px-6 py-16 lg:px-10">
				{/* Hero */}
				<header className="mt-8">
					<p className="mb-2 text-sm uppercase tracking-widest text-cyan-400">About Me</p>
					<h1 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">
						Hi, I’m <span className="text-cyan-400">Your Name</span>
					</h1>
					<p className="mt-3 max-w-2xl text-base text-gray-300 sm:text-lg">
						Full‑stack developer with a love for 3D, interactive UIs, and performant web apps.
						I enjoy shipping polished experiences powered by React, Three.js, and modern tooling.
					</p>
				</header>

				{/* Bio */}
				<section className="grid gap-6 md:grid-cols-2">
					<div className="rounded-lg border border-cyan-500/40 bg-black/40 p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-sm">
						<h2 className="mb-3 text-xl font-semibold text-cyan-300">A little background</h2>
						<p className="leading-relaxed text-gray-300">
							I build immersive frontends and thoughtful backends. On the UI side I work with React 19,
							@react-three/fiber, and Tailwind. On the server side I’m comfortable with Node/APIs and
							cloud deployments. I care about DX, reliability, and accessible, responsive design.
						</p>
					</div>

					{/* Skills */}
					<div className="rounded-lg border border-cyan-500/40 bg-black/40 p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-sm">
						<h2 className="mb-3 text-xl font-semibold text-cyan-300">Skills & Tools</h2>
						<ul className="flex flex-wrap gap-2 text-sm">
							{[
								"React 19",
								"Three.js",
								"@react-three/fiber",
								"GSAP",
								"Tailwind CSS",
								"TypeScript",
								"Node.js",
								"Vite",
							].map((tag) => (
								<li
									key={tag}
									className="rounded border border-cyan-500/40 px-2 py-1 text-cyan-300/90"
								>
									{tag}
								</li>
							))}
						</ul>
					</div>
				</section>

				{/* Timeline */}
				<section className="rounded-lg border border-cyan-500/40 bg-black/40 p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-sm">
					<h2 className="mb-4 text-xl font-semibold text-cyan-300">Recent Work</h2>
					<ol className="relative ml-3 border-l border-cyan-500/30">
						{[
							{
								title: "Planet exploration UI",
								period: "2025",
								desc:
									"Built a real‑time 3D solar system explorer with smooth camera transitions and info panels.",
							},
							{
								title: "Interactive data viz",
								period: "2024",
								desc:
									"Delivered animated dashboards with performant WebGL overlays and accessible controls.",
							},
							{
								title: "Design‑system lift",
								period: "2023",
								desc:
									"Introduced a Tailwind‑based system, reducing CSS-by-hand and speeding UI delivery.",
							},
						].map((item, idx) => (
							<li key={idx} className="mb-6 ml-4">
								<div className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-cyan-400 bg-cyan-400/40" />
								<time className="text-xs uppercase tracking-widest text-cyan-400/90">
									{item.period}
								</time>
								<h3 className="text-lg font-semibold text-white">{item.title}</h3>
								<p className="text-gray-300">{item.desc}</p>
							</li>
						))}
					</ol>
				</section>

				{/* CTA */}
				<section className="mb-6 flex flex-wrap items-center gap-3">
					<Link
						to={RoutePaths.CONTACT}
						className="rounded-md border border-cyan-400 bg-gradient-to-r from-cyan-700 to-cyan-600 px-4 py-2 font-medium text-white shadow-lg shadow-cyan-400/30 transition-colors hover:from-cyan-600 hover:to-cyan-500"
					>
						Get in touch
					</Link>
					<a
						href="https://github.com/your-handle"
						target="_blank"
						rel="noreferrer"
						className="rounded-md border border-cyan-500/40 px-4 py-2 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200"
					>
						GitHub
					</a>
					<a
						href="https://www.linkedin.com/in/your-handle"
						target="_blank"
						rel="noreferrer"
						className="rounded-md border border-cyan-500/40 px-4 py-2 text-cyan-300 hover:border-cyan-400 hover:text-cyan-200"
					>
						LinkedIn
					</a>
				</section>
			</div>
		</div>
	);
};

