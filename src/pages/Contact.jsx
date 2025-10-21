import { BorderComponent } from "../components/HighTechUI/BorderComponent.jsx";

export const Contact = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden bg-black text-gray-200">
      <BorderComponent />
      <div className="relative mx-auto max-w-3xl px-6 py-20">
        <h1 className="mb-4 text-3xl font-bold text-white">Contact</h1>
        <p className="mb-8 text-gray-300">
          Feel free to reach out for collaboration, questions, or just to say hi.
        </p>
        <div className="rounded-lg border border-cyan-500/40 bg-black/40 p-6 shadow-[0_0_30px_rgba(34,211,238,0.15)] backdrop-blur-sm">
          <a
            className="text-cyan-300 hover:text-cyan-200"
            href="mailto:you@example.com"
          >
            you@example.com
          </a>
        </div>
      </div>
    </div>
  );
}
