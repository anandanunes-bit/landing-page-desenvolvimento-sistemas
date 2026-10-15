import { useState } from 'react'
import './App.css'

function App() {
  const [email, setEmail] = useState('')

  return (
    <div className="landing">
      <header className="header">
        <div className="logo">SENAI<span>TEC</span></div>
        <nav>
          <a href="#grade">Grade</a>
          <a href="#contato" className="btn-small">Inscreva-se</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-text">
          <span className="tag">VESTIBULAR 2026 ABERTO</span>
          <h1>Desenvolvimento de <span>Sistemas</span></h1>
          <p>Torne-se um dev full-stack em 2 anos. Aprenda React, Node, Banco de Dados e projetos reais com professores do mercado.</p>
          <div className="hero-actions">
            <a href="#contato" className="btn-primary">Garantir minha vaga</a>
            <span>✓ 95% de empregabilidade</span>
          </div>
        </div>
        <div className="hero-card">
          <div className="card-top">💻</div>
          <h3>O que você vai criar:</h3>
          <ul>
            <li>✓ Sites e Landing Pages</li>
            <li>✓ Apps e Sistemas Web</li>
            <li>✓ APIs e Banco de Dados</li>
            <li>✓ Portfólio Profissional</li>
          </ul>
        </div>
      </section>

      <section id="grade" className="features">
        <div className="feature"><h3>⚛️ Front-end</h3><p>React, HTML, CSS, JavaScript</p></div>
        <div className="feature"><h3>🟢 Back-end</h3><p>Node.js, APIs, Git/GitHub</p></div>
        <div className="feature"><h3>🗄️ Dados</h3><p>SQL, Modelagem, Deploy</p></div>
      </section>

      <section id="contato" className="cta">
        <h2>Pronto para começar?</h2>
        <p>Deixe seu email e te avisamos da próxima turma.</p>
        <div className="form">
          <input type="email" placeholder="seu@email.com" value={email} onChange={e=>setEmail(e.target.value)} />
          <button onClick={()=>alert(`Obrigado! Vamos avisar em: ${email}`)}>Quero me inscrever</button>
        </div>
      </section>

      <footer>Feito por Ananda Nunes • SENAI Desenvolvimento de Sistemas • 2026</footer>
    </div>
  )
}

export default App