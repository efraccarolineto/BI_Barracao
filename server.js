const express        = require("express");
const session        = require("express-session");
const passport       = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const path           = require("path");
require("dotenv").config();

const app = express();

// ── Servir o index.html (pasta public) ────────────────────────────────
app.use(express.static(path.join(__dirname, "public")));

// ── Sessão ────────────────────────────────────────────────────────────
app.use(session({
  secret: process.env.SESSION_SECRET || "troque-este-segredo",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: process.env.NODE_ENV === "production" }
}));

// ── Passport ──────────────────────────────────────────────────────────
app.use(passport.initialize());
app.use(passport.session());

passport.use(new GoogleStrategy(
  {
    clientID:     process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL:  process.env.GOOGLE_CALLBACK_URL || "http://localhost:3000/auth/google/callback",
  },
  (accessToken, refreshToken, profile, done) => {
    // Aqui você pode salvar o usuário no banco de dados
    // Exemplo simples: apenas passa o perfil adiante
    const user = {
      id:     profile.id,
      name:   profile.displayName,
      email:  profile.emails?.[0]?.value,
      avatar: profile.photos?.[0]?.value,
    };
    return done(null, user);
  }
));

passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

// ── Middleware: verificar autenticação ────────────────────────────────
function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/");
}

// ── Rotas OAuth Google ────────────────────────────────────────────────

// 1. Inicia o fluxo OAuth → redireciona ao Google
app.get("/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

// 2. Callback que o Google chama após autenticação
app.get("/auth/google/callback",
  passport.authenticate("google", { failureRedirect: "/?erro=auth" }),
  (req, res) => {
    // Autenticado com sucesso → redireciona para o dashboard
    res.redirect("/dashboard");
  }
);

// ── Logout ────────────────────────────────────────────────────────────
app.get("/logout", (req, res) => {
  req.logout(() => res.redirect("/"));
});

// ── Rota protegida: Dashboard ─────────────────────────────────────────
app.get("/dashboard", isAuthenticated, (req, res) => {
  const { name, email, avatar } = req.user;
  res.send(`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <title>Dashboard — Lojas Barracão</title>
      <style>
        body { font-family: sans-serif; display: flex; align-items: center;
               justify-content: center; min-height: 100vh; background: #f3f4f6; margin: 0; }
        .card { background: #fff; border-radius: 16px; padding: 40px; text-align: center;
                box-shadow: 0 4px 24px rgba(0,0,0,0.08); max-width: 360px; width: 100%; }
        img { width: 72px; height: 72px; border-radius: 50%; margin-bottom: 16px; }
        h1 { font-size: 20px; margin: 0 0 4px; color: #111; }
        p  { color: #6b7280; font-size: 14px; margin: 0 0 24px; }
        a  { display: inline-block; padding: 10px 24px; background: #ef4444;
             color: #fff; border-radius: 8px; text-decoration: none; font-size: 14px; }
      </style>
    </head>
    <body>
      <div class="card">
        <img src="${avatar}" alt="Avatar" />
        <h1>Olá, ${name}!</h1>
        <p>${email}</p>
        <a href="/logout">Sair</a>
      </div>
    </body>
    </html>
  `);
});

// ── API: dados do usuário logado (opcional, para SPAs) ─────────────────
app.get("/api/me", isAuthenticated, (req, res) => {
  res.json(req.user);
});

// ── Iniciar servidor ──────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
