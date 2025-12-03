<!--
 ██████╗ ██╗  ██╗██╗ █████╗  ██████╗  ██████╗
 ██╔══██╗██║  ██║██║██╔══██╗██╔═══██╗██╔════╝
 ██████╔╝███████║██║███████║██║   ██║██║  ███╗
 ██╔═══╝ ██╔══██║██║██╔══██║██║   ██║██║   ██║
 ██║     ██║  ██║██║██║  ██║╚██████╔╝╚██████╔╝
 ╚═╝     ╚═╝  ╚═╝╚═╝╚═╝  ╚═╝ ╚═════╝  ╚═════╝
-->

<!-- ===========================
     CYBERPUNK README — V4 FINAL
     Copy & paste directly into README.md
     Designed for GitHub profile display
=========================== -->

<!-- HEADER / BANNER -->
<div align="center">
  <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:0B1020,100:7c3aed&height=190&section=header&text=Thiago%20Canali%20Schwartz&fontColor=ffffff&fontSize=40&animation=fadeIn&fontAlignY=40"/>
</div>

<br>

<!-- NAV -->
<p align="center">
  <a href="#sobre-mim">Sobre</a> •
  <a href="#tecnologias--ferramentas">Tecnologias</a> •
  <a href="#projetos-em-destaque">Projetos</a> •
  <a href="#onde-me-encontrar">Contato</a> •
  <a href="#versculo">✟</a>
</p>

---

<!-- STYLES: GitHub permite CSS inlined em tags <style>, embora algumas propriedades sejam filtradas. -->
<style>
:root{
  --neon-1: #7c3aed;
  --neon-2: #06b6d4;
  --bg: #05060a;
  --glass: rgba(255,255,255,0.03);
  --muted: #9ca3af;
}
body { background: var(--bg); color: #d1d5db; }
.neon-card{
  display:inline-block;
  margin:8px;
  padding:12px 18px;
  border-radius:12px;
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  border: 1px solid rgba(124,58,237,0.08);
  box-shadow: 0 6px 18px rgba(124,58,237,0.06), inset 0 1px 0 rgba(255,255,255,0.02);
  transition: transform .26s ease, box-shadow .26s ease, filter .26s ease;
}
.neon-card:hover{
  transform: translateY(-6px) rotate(-0.3deg);
  box-shadow: 0 18px 40px rgba(124,58,237,0.12), 0 6px 18px rgba(6,182,212,0.06);
  filter: saturate(1.08);
}
.kicker {
  font-size:12px;
  color:var(--muted);
  letter-spacing:1px;
  text-transform:uppercase;
  margin-bottom:6px;
}
.header-flicker {
  font-weight:700;
  color: white;
  text-shadow:
    0 0 12px rgba(124,58,237,0.7),
    0 0 24px rgba(6,182,212,0.14);
  animation: flicker 4s linear infinite;
}
@keyframes flicker {
  0% { opacity:1; filter: drop-shadow(0 0 10px rgba(124,58,237,0.6)); }
  5% { opacity:.9; }
  10% { opacity:1; }
  20% { opacity:.98; filter: drop-shadow(0 0 14px rgba(6,182,212,0.14)); }
  100% { opacity:1; }
}
.project-list { text-align:left; margin-left:8px; }
.footer-band {
  margin-top:18px;
  border-radius:10px;
  padding:10px;
  background: linear-gradient(90deg, rgba(124,58,237,0.06), rgba(6,182,212,0.04));
  border: 1px solid rgba(255,255,255,0.02);
}
@media (max-width:640px){
  .neon-card { display:block; width:100%; margin:10px 0; }
  .project-list { font-size:14px; }
}
</style>

---

## 👋 Sobre mim

<div class="neon-card" title="Thiago Canali Schwartz">
  <div class="kicker">Desenvolvedor & Infra</div>
  <div class="header-flicker">Thiago Canali Schwartz</div>
  <div style="margin-top:8px; color:var(--muted); font-size:14px;">
    Desenvolvedor Full Stack — focado em <strong>Web & Mobile</strong>.<br>
    Atuação em soluções práticas, manutenção de ambientes e monitoramento NOC 24x7.
  </div>
</div>

<br>

- 🔭 Atualmente atuo como **Desenvolvedor de Software FullStack**  
- 👨‍💻 Principais stacks: Vue, Angular, Flutter, Node, Firebase, Java  
- 🚀 Experiência com front-end, mobile e infraestrutura (NOC / monitoramento)  
- 📍 Curitiba — Brasil

---

## 🛠 Tecnologias & Ferramentas

<div align="center" class="footer-band">

<!-- LINGUAGENS -->
<div class="neon-card">
  <div class="kicker">Linguagens</div>
  <div>
    <img src="https://img.shields.io/badge/Java-000?logo=openjdk" alt="Java"/>  
    <img src="https://img.shields.io/badge/JavaScript-000?logo=javascript" alt="JavaScript"/>  
    <img src="https://img.shields.io/badge/TypeScript-000?logo=typescript" alt="TypeScript"/>  
    <img src="https://img.shields.io/badge/Python-000?logo=python" alt="Python"/>  
    <img src="https://img.shields.io/badge/PHP-000?logo=php" alt="PHP"/>
  </div>
</div>

<!-- FRONTEND -->
<div class="neon-card">
  <div class="kicker">Front-end</div>
  <div>
    <img src="https://img.shields.io/badge/Vue-35495E?logo=vue.js&logoColor=4FC08D" alt="Vue"/>
    <img src="https://img.shields.io/badge/Angular-20232A?logo=angular&logoColor=DD0031" alt="Angular"/>
    <img src="https://img.shields.io/badge/React-20232A?logo=react&logoColor=61dafb" alt="React"/>
  </div>
</div>

<!-- MOBILE -->
<div class="neon-card">
  <div class="kicker">Mobile</div>
  <div>
    <img src="https://img.shields.io/badge/Flutter-000?logo=flutter&logoColor=55C9F8" alt="Flutter"/>
    <img src="https://img.shields.io/badge/Ionic-222?logo=ionic&logoColor=488AFF" alt="Ionic"/>
  </div>
</div>

<!-- BACKEND & CLOUD -->
<div class="neon-card">
  <div class="kicker">Back-end & Cloud</div>
  <div>
    <img src="https://img.shields.io/badge/Node.js-000?logo=node.js" alt="Node"/>
    <img src="https://img.shields.io/badge/Firebase-000?logo=firebase" alt="Firebase"/>
  </div>
</div>

<!-- DBs -->
<div class="neon-card">
  <div class="kicker">Bancos de Dados</div>
  <div>
    <img src="https://img.shields.io/badge/PostgreSQL-000?logo=postgresql" alt="PostgreSQL"/>
    <img src="https://img.shields.io/badge/MySQL-000?logo=mysql" alt="MySQL"/>
    <img src="https://img.shields.io/badge/MongoDB-000?logo=mongodb" alt="MongoDB"/>
  </div>
</div>

<!-- DEVOPS -->
<div class="neon-card">
  <div class="kicker">DevOps & Ferramentas</div>
  <div>
    <img src="https://img.shields.io/badge/Git-000?logo=git" alt="Git"/>
    <img src="https://img.shields.io/badge/Linux-000?logo=linux" alt="Linux"/>
    <img src="https://img.shields.io/badge/VSCode-000?logo=visual-studio-code" alt="VSCode"/>
  </div>
</div>

</div>

---

## ⚡ Projetos em destaque

<div class="project-list">

- 🗺️ **Mapa NOC 24x7** — https://thiagocanali.github.io/my-noc-map  
- 📊 **Escala NOC 24x7** — https://thiagocanali.github.io/my-schedu/  
- 🌐 **Teste de Velocidade** — https://thiagocanali.github.io/my-speedtest/  
- 🧼 **Clean Air BR** — https://thiagocanali.github.io/cleanairbr  
- 💍 **Anelise Chagas** — https://thiagocanali.github.io/anelisechagas  
- ✝️ **Conectados em Cristo** — https://thiagocanali.github.io/conectados-em-cristo

</div>

---

## 📊 GitHub & Stats (estáveis)

<div align="center" style="margin-top:10px;">
  <img src="https://github-readme-stats-godkingjay.vercel.app/api?username=thiagocanali&show_icons=true&theme=tokyonight&hide_border=true&count_private=true" alt="GitHub Stats"/>
  <img src="https://github-readme-stats-godkingjay.vercel.app/api/top-langs/?username=thiagocanali&layout=compact&theme=tokyonight&hide_border=true" alt="Top Languages"/>
  <img src="https://streak-stats.demolab.com/?user=thiagocanali&theme=tokyonight&hide_border=true" alt="Streak Stats"/>
</div>

---

## 🌐 Onde me encontrar

<div align="center" class="footer-band">
  <a href="https://www.linkedin.com/in/thiagocanali" target="_blank"><img src="https://img.shields.io/badge/LinkedIn-0066c8?logo=linkedin&logoColor=white" alt="LinkedIn"/></a>
  <a href="mailto:thiagocanali@hotmail.com"><img src="https://img.shields.io/badge/Email-6a6a6a?logo=gmail&logoColor=white" alt="Email"/></a>
  <a href="https://github.com/thiagocanali" target="_blank"><img src="https://img.shields.io/badge/GitHub-000?logo=github&logoColor=white" alt="GitHub"/></a>
</div>

---

## ✟ Versículo que me inspira

```python
✟ = ♡ | "Não vim chamar os justos, mas os pecadores, ao arrependimento." | Lc 5:32
```

<div align="center"> <img width="100%" src="https://capsule-render.vercel.app/api?type=waving&color=0:7c3aed,100:0B1020&height=120&section=footer"/> </div> <!-- END -->


