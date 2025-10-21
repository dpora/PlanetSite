import { Link } from "react-router-dom";
import { RoutePaths } from "../general/RoutePaths.jsx";
import { CursorPet } from "../components/CursorPet.jsx";

export const About = () => {
	return (
		<div className="relative min-h-screen w-screen overflow-hidden bg-black text-gray-200">
			<CursorPet />

			{/* Content wrapper */}
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

