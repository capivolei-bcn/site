import { CheckIcon, MessageCircleIcon } from "lucide-react";
import { useState } from "react";

interface JoinSectionProps {
  // content: ContentData["join"];
}

const content = {
  title: "Junte-se ao Capybara Club no WhatsApp!",
  description:
    "Participe do nosso grupo exclusivo no WhatsApp para se conectar com outros entusiastas do vôlei em Barcelona. Compartilhe dicas, organize jogos e fique por dentro dos eventos locais.",
  rulesTitle: "Regras do Grupo",
  rules: [
    "Respeito mútuo entre todos os membros.",
    "Proibido spam ou promoções não autorizadas.",
    "Mantenha as conversas relevantes ao vôlei e à comunidade.",
    "Evite discussões políticas ou religiosas.",
    "Use linguagem apropriada e evite ofensas.",
  ],
  consentLabel: "Eu concordo em seguir as regras do grupo.",
  buttonInitial: "Quero Participar!",
  buttonFinal: "Entrar no Grupo WhatsApp",
  whatsappLink: "https://chat.whatsapp.com/YOUR_GROUP_LINK", // Replace with actual link
};

export function JoinSection() {
  const [agreed, setAgreed] = useState<boolean>(false);
  const [step, setStep] = useState<"consent" | "link">("consent");

  const handleMainClick = () => {
    if (agreed) {
      setStep("link");
    }
  };

  return (
    <section id="join-section" className="py-24 bg-[#f8fafc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            {content.title}
          </h2>
          <p className="text-lg text-slate-600 font-medium max-w-xl mx-auto">
            {content.description}
          </p>
        </div>

        {/* Clipboard Card */}
        <div className="relative bg-white border-2 border-slate-900 rounded-2xl shadow-hard-lg overflow-hidden">
          {/* Header strip */}
          <div className="bg-brand-500 border-b-2 border-slate-900 p-6 flex justify-between items-center">
            <h3 className="font-display font-bold text-2xl text-slate-900">
              {content.rulesTitle}
            </h3>
            <div className="w-3 h-3 rounded-full bg-slate-900"></div>
          </div>

          <div className="p-8 sm:p-10">
            <div className="space-y-1 mb-10">
              {content.rules.map((rule, idx) => (
                <div
                  key={idx}
                  className="flex items-start py-3 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors -mx-4 px-4 rounded-lg"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded border-2 border-slate-900 text-brand-600 flex items-center justify-center mr-4 bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] mt-0.5">
                    <CheckIcon className="w-4 h-4 text-slate-900" />
                  </div>
                  <span className="text-slate-800 font-semibold">{rule}</span>
                </div>
              ))}
            </div>

            <div className="bg-slate-50 border-2 border-slate-200 border-dashed rounded-xl p-6">
              {step === "consent" ? (
                <div className="space-y-6">
                  <label className="flex items-center cursor-pointer group select-none">
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="peer sr-only"
                        checked={agreed}
                        onChange={(e) => setAgreed(e.target.checked)}
                      />
                      <div className="w-6 h-6 bg-white border-2 border-slate-900 rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] peer-checked:bg-brand-500 peer-checked:shadow-none peer-checked:translate-x-[1px] peer-checked:translate-y-[1px] transition-all flex items-center justify-center">
                        {agreed && (
                          <CheckIcon className="w-4 h-4 text-slate-900" />
                        )}
                      </div>
                    </div>
                    <span className="ml-3 text-sm sm:text-base font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
                      {content.consentLabel}
                    </span>
                  </label>

                  <button
                    onClick={handleMainClick}
                    disabled={!agreed}
                    className={`w-full py-4 rounded-xl font-display font-bold text-lg border-2 border-slate-900 transition-all duration-200 ${
                      agreed
                        ? "bg-slate-900 text-white shadow-hard hover:bg-slate-800 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none cursor-pointer"
                        : "bg-slate-100 text-slate-400 cursor-not-allowed opacity-50"
                    }`}
                  >
                    {content.buttonInitial}
                  </button>
                </div>
              ) : (
                <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#25D366] border-2 border-slate-900 rounded-full mb-4 shadow-hard-sm">
                    <MessageCircleIcon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-bold text-xl mb-4 text-slate-900">
                    Welcome to the Club!
                  </h4>
                  <a
                    href={content.whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 bg-[#25D366] border-2 border-slate-900 text-white rounded-xl font-bold text-lg shadow-hard hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none transition-all"
                  >
                    {content.buttonFinal}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
