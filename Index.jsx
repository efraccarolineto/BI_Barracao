import { useState } from "react";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
    <path fill="#EA4335" d="M24 9.5c3.18 0 5.67 1.09 7.55 2.82l5.62-5.62C33.83 3.54 29.28 1.5 24 1.5 14.97 1.5 7.3 7.12 4.22 15.12l6.54 5.08C12.3 13.54 17.64 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.1 24.5c0-1.64-.15-3.22-.41-4.74H24v9h12.44c-.54 2.9-2.18 5.36-4.65 7.01l7.18 5.57C43.1 37.13 46.1 31.27 46.1 24.5z"/>
    <path fill="#FBBC05" d="M10.76 28.2A14.63 14.63 0 0 1 9.5 24c0-1.46.25-2.88.7-4.2L3.66 14.72A23.44 23.44 0 0 0 1.5 24c0 3.79.91 7.37 2.52 10.53l6.74-6.33z"/>
    <path fill="#34A853" d="M24 46.5c5.28 0 9.72-1.74 12.97-4.73l-7.18-5.57C27.98 37.9 26.07 38.5 24 38.5c-6.36 0-11.7-4.04-13.24-9.7l-6.74 6.33C6.98 42.94 14.85 46.5 24 46.5z"/>
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg">
    <path fill="currentColor" d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105-57.8-155.5-127.4C46 376.8 38 282.4 38 243.5c0-192.8 125.5-294.5 250.8-294.5 66.1 0 121.2 43.4 162.7 43.4 39.5 0 101.1-46 176.3-46 28.5 0 130.9 2.6 198.3 99.2zm-234-181.5c31.1-36.9 53.1-88.1 53.1-139.3 0-7.1-.6-14.3-1.9-20.1-50.6 1.9-110.8 33.7-147.1 75.8-28.5 32.4-55.1 83.6-55.1 135.5 0 7.8 1.3 15.6 1.9 18.1 3.2.6 8.4 1.3 13.6 1.3 45.4 0 102.5-30.4 135.5-71.3z"/>
  </svg>
);

const MicrosoftIcon = () => (
  <svg width="20" height="20" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="9" height="9" fill="#F25022"/>
    <rect x="11" y="1" width="9" height="9" fill="#7FBA00"/>
    <rect x="1" y="11" width="9" height="9" fill="#00A4EF"/>
    <rect x="11" y="11" width="9" height="9" fill="#FFB900"/>
  </svg>
);

const BoltIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

function SocialButton({ icon, label, badge, primary, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`
        flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-medium
        transition-all duration-150 hover:-translate-y-px active:translate-y-0
        ${primary
          ? "border border-indigo-500/50 bg-indigo-500/5 hover:bg-indigo-500/10 text-gray-900 dark:text-gray-100"
          : "border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 text-gray-900 dark:text-gray-100"
        }
      `}
    >
      <span className="w-5 h-5 flex items-center justify-center shrink-0">{icon}</span>
      <span className="flex-1 text-left">{label}</span>
      {badge && (
        <span className="text-[10px] font-semibold px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-500/20 text-indigo-600 dark:text-indigo-400 tracking-wide">
          {badge}
        </span>
      )}
    </button>
  );
}

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);

  const handleEmailLogin = (e) => {
    e.preventDefault();
    // TODO: implement email/password authentication
    console.log("Login:", { email, password, remember });
  };

  const handleGoogleLogin = () => {
    // TODO: implement Google OAuth
    console.log("Google OAuth");
  };

  const handleAppleLogin = () => {
    // TODO: implement Apple Sign In
    console.log("Apple Sign In");
  };

  const handleMicrosoftLogin = () => {
    // TODO: implement Microsoft OAuth
    console.log("Microsoft OAuth");
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 flex items-center justify-center p-4">
      <div className="flex w-full max-w-3xl rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-xl">

        {/* Brand panel */}
        <div className="hidden md:flex flex-col justify-between w-64 shrink-0 bg-[#0F0F1A] p-8 relative overflow-hidden">
          {/* Glow */}
          <div className="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

          {/* Logo */}
          <div className="flex items-center gap-2.5 relative z-10">
            <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center">
              <BoltIcon />
            </div>
            <span className="text-white font-semibold text-sm tracking-tight">Nexus</span>
          </div>

          {/* Copy */}
          <div className="relative z-10">
            <h2 className="text-white text-xl font-semibold leading-snug tracking-tight mb-2.5">
              Acesso simples,{" "}
              <span className="text-indigo-400">sem complicação</span>
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed">
              Entre com sua conta social em poucos segundos e comece a usar.
            </p>
          </div>

          {/* Avatars */}
          <div className="flex items-center relative z-10">
            {["MR", "JC", "LS", "+"].map((initials, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-[#1E1E2E] border-2 border-[#0F0F1A] flex items-center justify-center text-[10px] font-semibold text-gray-400 -mr-2 last:mr-0"
              >
                {initials}
              </div>
            ))}
            <span className="ml-5 text-[11px] text-gray-600">+2.400 usuários</span>
          </div>
        </div>

        {/* Form area */}
        <div className="flex-1 bg-white dark:bg-gray-900 flex flex-col justify-center px-8 py-10">
          <div className="mb-7">
            <h1 className="text-gray-900 dark:text-gray-100 text-xl font-semibold tracking-tight mb-1">
              Bem-vindo de volta
            </h1>
            <p className="text-gray-400 text-sm">Escolha como deseja entrar</p>
          </div>

          {/* Social buttons */}
          <div className="flex flex-col gap-2.5 mb-5">
            <SocialButton
              icon={<GoogleIcon />}
              label="Entrar com Google"
              badge="Recomendado"
              primary
              onClick={handleGoogleLogin}
            />
            <SocialButton
              icon={<AppleIcon />}
              label="Entrar com Apple"
              onClick={handleAppleLogin}
            />
            <SocialButton
              icon={<MicrosoftIcon />}
              label="Entrar com Microsoft"
              onClick={handleMicrosoftLogin}
            />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3 mb-5 text-xs text-gray-400">
            <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
            ou entre com e-mail
            <span className="flex-1 h-px bg-gray-200 dark:bg-white/10" />
          </div>

          {/* Email form */}
          <form onSubmit={handleEmailLogin} className="flex flex-col gap-3.5">
            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                E-mail
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="voce@exemplo.com.br"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-gray-600 dark:text-gray-400 mb-1.5">
                Senha
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full px-3 py-2.5 rounded-lg border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-white/5 text-sm text-gray-900 dark:text-gray-100 placeholder-gray-400 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all"
              />
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                  className="accent-indigo-500 w-3.5 h-3.5"
                />
                Lembrar de mim
              </label>
              <a href="#" className="text-xs text-indigo-500 hover:underline">
                Esqueci a senha
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-indigo-500 hover:bg-indigo-600 active:scale-[0.99] text-white text-sm font-semibold tracking-tight transition-all duration-150 mt-1"
            >
              Entrar
            </button>
          </form>

          <p className="text-center mt-5 text-xs text-gray-400">
            Não tem conta?{" "}
            <a href="#" className="text-indigo-500 font-medium hover:underline">
              Criar conta grátis
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
