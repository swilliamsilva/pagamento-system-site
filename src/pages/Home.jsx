import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Users, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-6 py-12">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Sistema de Pagamentos
          <span className="block text-primary">Java 8 + Microserviços</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Uma arquitetura robusta e escalável para sistemas de pagamento, desenvolvida com Java 8 
          e preparada para evolução. Um projeto de código aberto focado em colaboração e aprendizado.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/visao-geral-arquitetura">
              Explorar Arquitetura
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/como-contribuir">
              Como Contribuir
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Microserviços
            </CardTitle>
            <CardDescription>
              Arquitetura desacoplada com serviços independentes
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Cada serviço é responsável por um domínio específico, garantindo 
              modularidade, escalabilidade e facilidade de manutenção.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5 text-primary" />
              Tecnologias Modernas
            </CardTitle>
            <CardDescription>
              Stack completo com Spring Boot, Kafka e AWS
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Utiliza as melhores práticas e tecnologias do mercado para 
              garantir performance, segurança e confiabilidade.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Colaboração
            </CardTitle>
            <CardDescription>
              Projeto aberto para aprendizado e contribuições
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Faça parte da comunidade, contribua com código e aprenda 
              com outros desenvolvedores em um ambiente colaborativo.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Introduction Content */}
      <section className="prose prose-lg max-w-none">
        <h2>Sobre o Projeto</h2>
        <p>
          No cenário atual de transações digitais, a construção de sistemas de pagamento robustos, 
          escaláveis e seguros é um desafio complexo e crucial. Este projeto apresenta o 
          "pagamento-system", uma arquitetura de pagamentos baseada em microserviços desenvolvida 
          em Java 8, com um caminho claro para a evolução para versões mais recentes do Java, 
          como o Java 17.
        </p>
        <p>
          O objetivo deste projeto é não apenas fornecer uma solução funcional, mas também servir 
          como uma plataforma de aprendizado e colaboração para desenvolvedores interessados em 
          aprofundar seus conhecimentos em arquiteturas de pagamento.
        </p>
        
        <h3>Por que Colaborar?</h3>
        <p>
          Este projeto é um convite aberto à comunidade de desenvolvedores. Acreditamos que a 
          colaboração e a troca de conhecimento são fundamentais para o crescimento profissional. 
          Ao fazer um fork deste repositório e contribuir, você não apenas aprimora suas habilidades, 
          mas também ajuda a construir uma solução ainda mais completa e resiliente.
        </p>
      </section>

      {/* Call to Action */}
      <section className="bg-accent rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Pronto para Começar?</h2>
        <p className="text-muted-foreground mb-6">
          Explore a arquitetura, entenda os módulos e descubra como você pode contribuir 
          para este projeto de código aberto.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/estrutura-projeto">
              Ver Estrutura do Projeto
            </Link>
          </Button>
          <Button asChild variant="outline">
            <a
              href="https://github.com/swilliamsilva/pagamento-system"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar GitHub
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

