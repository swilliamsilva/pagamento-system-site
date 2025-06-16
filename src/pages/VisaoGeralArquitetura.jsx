import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Server, Database, Cloud, Shield } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import architectureDiagram from '../assets/architecture_diagram.png';

export function VisaoGeralArquitetura() {
  const technologies = [
    { name: 'Java 8+', description: 'Base do projeto com transição para versões mais recentes' },
    { name: 'Spring Boot', description: 'Framework para desenvolvimento de microserviços' },
    { name: 'Apache Kafka', description: 'Comunicação assíncrona e processamento de eventos' },
    { name: 'AWS', description: 'Serviços de nuvem (S3, SNS, SQS)' },
    { name: 'Docker', description: 'Conteinerização dos serviços' },
    { name: 'Kubernetes', description: 'Orquestração e escalabilidade' },
    { name: 'GitHub Actions', description: 'Automação de CI/CD' }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Visão Geral da Arquitetura</h1>
        <p className="text-xl text-muted-foreground">
          Uma arquitetura de microserviços desacoplados para sistemas de pagamento robustos e escaláveis.
        </p>
      </div>

      {/* Architecture Diagram */}
      <Card>
        <CardHeader>
          <CardTitle>Diagrama da Arquitetura</CardTitle>
          <CardDescription>
            Visão geral dos componentes e suas interações no sistema de pagamentos
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center">
            <img 
              src={architectureDiagram} 
              alt="Diagrama de Arquitetura do Sistema de Pagamentos"
              className="max-w-full h-auto rounded-lg border"
            />
          </div>
        </CardContent>
      </Card>

      {/* Architecture Overview */}
      <section className="prose prose-lg max-w-none">
        <h2>Conceitos Fundamentais</h2>
        <p>
          O "pagamento-system" é uma solução de pagamentos que adota uma arquitetura de microserviços 
          desacoplados. Cada serviço é responsável por um domínio específico, garantindo modularidade, 
          escalabilidade e facilidade de manutenção. A comunicação entre os serviços é realizada via 
          REST e mensageria assíncrona (Apache Kafka), conforme a necessidade de cada interação.
        </p>
        
        <h3>Benefícios da Arquitetura</h3>
        <ul>
          <li><strong>Escalabilidade:</strong> Cada serviço pode ser escalado independentemente</li>
          <li><strong>Manutenibilidade:</strong> Mudanças em um serviço não afetam outros</li>
          <li><strong>Resiliência:</strong> Falhas isoladas não comprometem todo o sistema</li>
          <li><strong>Flexibilidade:</strong> Tecnologias diferentes podem ser usadas por serviço</li>
        </ul>
      </section>

      {/* Technologies Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Principais Tecnologias</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {technologies.map((tech, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{tech.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Architecture Principles */}
      <section className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Server className="h-5 w-5 text-primary" />
              Microserviços
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Cada serviço é independente e responsável por uma funcionalidade específica, 
              permitindo desenvolvimento, teste e deploy isolados.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Pix Service</Badge>
              <Badge variant="secondary">Boleto Service</Badge>
              <Badge variant="secondary">Card Service</Badge>
              <Badge variant="secondary">Gateway Service</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="h-5 w-5 text-primary" />
              Comunicação
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Comunicação híbrida usando REST para operações síncronas e Kafka para 
              eventos assíncronos e processamento de mensagens.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">REST APIs</Badge>
              <Badge variant="secondary">Apache Kafka</Badge>
              <Badge variant="secondary">Event Sourcing</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              Cloud Native
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Projetado para ambientes de nuvem com suporte completo a containers 
              e orquestração via Kubernetes.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Docker</Badge>
              <Badge variant="secondary">Kubernetes</Badge>
              <Badge variant="secondary">AWS Services</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Segurança
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm text-muted-foreground">
              Múltiplas camadas de segurança incluindo TLS, OAuth2, JWT e 
              gerenciamento seguro de credenciais.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">TLS</Badge>
              <Badge variant="secondary">OAuth2</Badge>
              <Badge variant="secondary">JWT</Badge>
              <Badge variant="secondary">HashiCorp Vault</Badge>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/">
            ← Voltar para Introdução
          </Link>
        </Button>
        <Button asChild>
          <Link to="/estrutura-projeto">
            Estrutura do Projeto
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

