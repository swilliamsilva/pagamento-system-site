import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Github, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const navigationItems = [
  { id: 'home', title: 'Introdução', path: '/' },
  { id: 'visao-geral-arquitetura', title: 'Visão Geral', path: '/visao-geral-arquitetura' },
  { id: 'estrutura-projeto', title: 'Estrutura', path: '/estrutura-projeto' },
  { id: 'observabilidade', title: 'Observabilidade', path: '/observabilidade' },
  { id: 'mensageria', title: 'Mensageria', path: '/mensageria' },
  { id: 'resiliencia', title: 'Resiliência', path: '/resiliencia' },
  { id: 'seguranca', title: 'Segurança', path: '/seguranca' },
  { id: 'deploy', title: 'Deploy', path: '/deploy' },
  { id: 'testes', title: 'Testes', path: '/testes' },
  { id: 'extensibilidade', title: 'Extensibilidade', path: '/extensibilidade' },
  { id: 'como-contribuir', title: 'Como Contribuir', path: '/como-contribuir' },
  { id: 'conclusao', title: 'Conclusão', path: '/conclusao' }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-primary">
            Sistema de Pagamentos
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-4">
              {navigationItems.slice(0, 6).map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary'
                      : 'text-muted-foreground'
                  }`}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            
            <Button asChild variant="outline" size="sm">
              <a
                href="https://github.com/swilliamsilva/pagamento-system"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                GitHub
                <ExternalLink className="h-3 w-3" />
              </a>
            </Button>
          </div>

          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-3 py-2 text-sm font-medium transition-colors hover:text-primary ${
                    location.pathname === item.path
                      ? 'text-primary bg-accent'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <div className="pt-2 border-t border-border">
                <a
                  href="https://github.com/swilliamsilva/pagamento-system"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

