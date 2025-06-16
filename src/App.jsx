import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './pages/Home';
import { VisaoGeralArquitetura } from './pages/VisaoGeralArquitetura';
import { EstruturaProjeto } from './pages/EstruturaProjeto';
import { Observabilidade } from './pages/Observabilidade';
import { Mensageria } from './pages/Mensageria';
import { Resiliencia } from './pages/Resiliencia';
import { Seguranca } from './pages/Seguranca';
import { Deploy } from './pages/Deploy';
import { Testes } from './pages/Testes';
import { Extensibilidade } from './pages/Extensibilidade';
import { ComoContribuir } from './pages/ComoContribuir';
import { Conclusao } from './pages/Conclusao';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Navigation />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/visao-geral-arquitetura" element={<VisaoGeralArquitetura />} />
            <Route path="/estrutura-projeto" element={<EstruturaProjeto />} />
            <Route path="/observabilidade" element={<Observabilidade />} />
            <Route path="/mensageria" element={<Mensageria />} />
            <Route path="/resiliencia" element={<Resiliencia />} />
            <Route path="/seguranca" element={<Seguranca />} />
            <Route path="/deploy" element={<Deploy />} />
            <Route path="/testes" element={<Testes />} />
            <Route path="/extensibilidade" element={<Extensibilidade />} />
            <Route path="/como-contribuir" element={<ComoContribuir />} />
            <Route path="/conclusao" element={<Conclusao />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;

