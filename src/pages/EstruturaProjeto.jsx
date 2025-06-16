import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Package, Settings, Shield, Database } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function EstruturaProjeto() {
  const paymentServices = [
    {
      name: 'pix-service',
      description: 'Serviço específico para processamento de pagamentos via Pix',
      icon: <Package className="h-5 w-5" />,
      features: ['Integração com BACEN', 'QR Code dinâmico', 'Webhook de confirmação']
    },
    {
      name: 'boleto-service', 
      description: 'Serviço para geração e processamento de boletos bancários',
      icon: <Package className="h-5 w-5" />,
      features: ['Geração de boletos', 'Integração bancária', 'Controle de vencimento']
    },
    {
      name: 'card-service',
      description: 'Processamento de pagamentos com cartão de crédito e débito',
      icon: <Package className="h-5 w-5" />,
      features: ['Tokenização', 'Antifraude', 'Processamento 3DS']
    }
  ];

  const coreServices = [
    {
      name: 'gateway-service',
      description: 'Ponto de entrada unificado que roteia e orquestra chamadas entre serviços',
      icon: <Settings className="h-5 w-5" />,
      features: ['Roteamento inteligente', 'Load balancing', 'Rate limiting']
    },
    {
      name: 'auth-service',
      description: 'Responsável pela autenticação e autorização com tokens JWT',
      icon: <Shield className="h-5 w-5" />,
      features: ['OAuth2', 'JWT tokens', 'RBAC']
    },
    {
      name: 'asaas-service',
      description: 'Integração dedicada com a API da plataforma Asaas',
      icon: <Database className="h-5 w-5" />,
      features: ['API wrapper', 'Webhook handling', 'Sync de dados']
    }
  ];

  const sharedModules = [
    {
      name: 'common',
      description: 'Módulos compartilhados como DTOs, utilitários e validações',
      components: ['DTOs', 'Validators', 'Utils', 'Exceptions']
    },
    {
      name: 'observability',
      description: 'Funcionalidades de monitoramento e rastreamento',
      components: ['Logging', 'Metrics', 'Tracing', 'Health checks']
    },
    {
      name: 'security',
      description: 'Componentes de segurança transversais',
      components: ['Encryption', 'Key management', 'Audit', 'CORS']
    },
    {
      name: 'messaging',
      description: 'Gerenciamento de mensageria e eventos',
      components: ['Kafka producers', 'Consumers', 'Event schemas', 'Dead letter queues']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Estrutura do Projeto</h1>
        <p className="text-xl text-muted-foreground">
          Organização modular em microserviços independentes e componentes compartilhados.
        </p>
      </div>

      {/* Overview */}
      <section className="prose prose-lg max-w-none">
        <p>
          O projeto "pagamento-system" é organizado em módulos independentes, cada um representando 
          um microserviço ou um componente compartilhado. Essa estrutura facilita o desenvolvimento, 
          teste e implantação de cada parte do sistema de forma isolada.
        </p>
      </section>

      {/* Payment Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Serviços de Pagamento</h2>
        <p className="text-muted-foreground">
          Cada método de pagamento possui seu próprio serviço especializado, encapsulando 
          toda a lógica de negócio e integrações específicas.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {paymentServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.icon}
                  <code className="text-sm">{service.name}</code>
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Funcionalidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Core Services */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Serviços Principais</h2>
        <p className="text-muted-foreground">
          Serviços fundamentais que fornecem funcionalidades essenciais para todo o sistema.
        </p>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
          {coreServices.map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {service.icon}
                  <code className="text-sm">{service.name}</code>
                </CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Funcionalidades:</p>
                  <div className="flex flex-wrap gap-1">
                    {service.features.map((feature, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Shared Modules */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Módulos Compartilhados</h2>
        <p className="text-muted-foreground">
          Componentes transversais que são utilizados por múltiplos serviços para evitar 
          duplicação de código e promover consistência.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {sharedModules.map((module, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>
                  <code className="text-sm">{module.name}</code>
                </CardTitle>
                <CardDescription>{module.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Componentes:</p>
                  <div className="flex flex-wrap gap-1">
                    {module.components.map((component, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {component}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Deployment Structure */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Estrutura de Deploy</h2>
        <Card>
          <CardHeader>
            <CardTitle>
              <code className="text-sm">deployment/</code>
            </CardTitle>
            <CardDescription>
              Arquivos de configuração para Docker e Kubernetes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p>
                Este diretório armazena arquivos de configuração essenciais para a implantação 
                e orquestração dos microserviços em ambientes de produção:
              </p>
              <ul>
                <li><strong>Dockerfiles:</strong> Cada serviço possui seu próprio Dockerfile</li>
                <li><strong>docker-compose.yml:</strong> Para execução local de desenvolvimento</li>
                <li><strong>k8s/:</strong> Manifestos YAML prontos para Kubernetes</li>
                <li><strong>helm/:</strong> Charts para deploy automatizado</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Benefits */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Benefícios da Estrutura Modular</h3>
        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Desenvolvimento</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Equipes podem trabalhar independentemente</li>
              <li>• Facilita testes isolados</li>
              <li>• Reduz conflitos de merge</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Operação</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Deploy independente por serviço</li>
              <li>• Escalabilidade granular</li>
              <li>• Isolamento de falhas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/visao-geral-arquitetura">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Visão Geral
          </Link>
        </Button>
        <Button asChild>
          <Link to="/observabilidade">
            Observabilidade
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

