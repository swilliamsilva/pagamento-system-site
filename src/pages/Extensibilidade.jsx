import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Puzzle, Plus, Layers, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Extensibilidade() {
  const extensibilityFeatures = [
    {
      title: 'Arquitetura Plugável',
      icon: <Puzzle className="h-6 w-6" />,
      description: 'Sistema permite adicionar novos métodos de pagamento sem impactar o core',
      benefits: [
        'Novos métodos de pagamento',
        'Integrações com terceiros',
        'Funcionalidades customizadas',
        'Adaptação a regulamentações'
      ],
      implementation: [
        'Interface PaymentProcessor',
        'Factory Pattern',
        'Dependency Injection',
        'Configuration Properties'
      ]
    },
    {
      title: 'APIs REST Padronizadas',
      icon: <Layers className="h-6 w-6" />,
      description: 'Interfaces consistentes facilitam integração e adição de funcionalidades',
      benefits: [
        'Integração simplificada',
        'Documentação automática',
        'Versionamento de APIs',
        'Contratos bem definidos'
      ],
      implementation: [
        'OpenAPI 3.0',
        'Spring Boot Starter Web',
        'Richardson Maturity Model',
        'HATEOAS'
      ]
    },
    {
      title: 'Integrações Centralizadas',
      icon: <Plus className="h-6 w-6" />,
      description: 'Integrações com terceiros isoladas em serviços específicos',
      benefits: [
        'Manutenção simplificada',
        'Evolução independente',
        'Testes isolados',
        'Reutilização de código'
      ],
      implementation: [
        'Adapter Pattern',
        'Circuit Breaker',
        'Retry Mechanisms',
        'Configuration Management'
      ]
    },
    {
      title: 'Event-Driven Architecture',
      icon: <Zap className="h-6 w-6" />,
      description: 'Eventos permitem extensão sem modificar código existente',
      benefits: [
        'Baixo acoplamento',
        'Extensão por eventos',
        'Processamento assíncrono',
        'Escalabilidade horizontal'
      ],
      implementation: [
        'Apache Kafka',
        'Event Sourcing',
        'CQRS Pattern',
        'Saga Pattern'
      ]
    }
  ];

  const extensionExamples = [
    {
      scenario: 'Novo Método de Pagamento',
      description: 'Adicionando suporte ao Apple Pay',
      steps: [
        'Criar ApplePayService implementando PaymentProcessor',
        'Configurar propriedades específicas do Apple Pay',
        'Adicionar validações e transformações necessárias',
        'Registrar o serviço no PaymentFactory',
        'Implementar testes unitários e de integração'
      ],
      files: [
        'ApplePayService.java',
        'ApplePayConfig.java',
        'ApplePayValidator.java',
        'ApplePayServiceTest.java'
      ]
    },
    {
      scenario: 'Nova Integração Externa',
      description: 'Integrando com gateway PagSeguro',
      steps: [
        'Criar PagSeguroIntegrationService',
        'Implementar cliente HTTP com Feign',
        'Configurar circuit breaker e retry',
        'Mapear DTOs de request/response',
        'Adicionar monitoramento e logs'
      ],
      files: [
        'PagSeguroClient.java',
        'PagSeguroService.java',
        'PagSeguroConfig.java',
        'PagSeguroDTO.java'
      ]
    },
    {
      scenario: 'Funcionalidade de Negócio',
      description: 'Implementando cashback automático',
      steps: [
        'Criar CashbackService como consumidor de eventos',
        'Definir regras de negócio para cashback',
        'Implementar cálculo e aplicação do cashback',
        'Adicionar eventos de cashback aplicado',
        'Criar endpoints para consulta de cashback'
      ],
      files: [
        'CashbackService.java',
        'CashbackRules.java',
        'CashbackController.java',
        'CashbackEvent.java'
      ]
    }
  ];

  const designPatterns = [
    {
      pattern: 'Factory Pattern',
      usage: 'Criação de processadores de pagamento',
      benefit: 'Permite adicionar novos tipos sem modificar código existente'
    },
    {
      pattern: 'Strategy Pattern',
      usage: 'Diferentes algoritmos de cálculo de taxas',
      benefit: 'Facilita a troca e adição de novas estratégias'
    },
    {
      pattern: 'Adapter Pattern',
      usage: 'Integração com APIs de terceiros',
      benefit: 'Isola mudanças em APIs externas'
    },
    {
      pattern: 'Observer Pattern',
      usage: 'Sistema de eventos e notificações',
      benefit: 'Permite extensão por meio de listeners'
    },
    {
      pattern: 'Template Method',
      usage: 'Fluxo padrão de processamento de pagamentos',
      benefit: 'Define estrutura comum com pontos de extensão'
    },
    {
      pattern: 'Decorator Pattern',
      usage: 'Adição de funcionalidades a serviços existentes',
      benefit: 'Extensão sem modificação do código original'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Extensibilidade</h1>
        <p className="text-xl text-muted-foreground">
          Arquitetura flexível que permite evolução e adaptação a novas necessidades.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          A arquitetura do "pagamento-system" foi projetada com a extensibilidade em mente, 
          permitindo que o sistema se adapte a novas necessidades e tecnologias sem grandes 
          refatorações. Através de padrões de design bem estabelecidos e uma arquitetura 
          modular, é possível adicionar novas funcionalidades de forma segura e eficiente.
        </p>
      </section>

      {/* Extensibility Features */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Características de Extensibilidade</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {extensibilityFeatures.map((feature, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  {feature.title}
                </CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Benefícios:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Implementação:</p>
                  <div className="flex flex-wrap gap-1">
                    {feature.implementation.map((impl, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {impl}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Extension Examples */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Exemplos de Extensão</h2>
        <p className="text-muted-foreground">
          Cenários práticos demonstrando como adicionar novas funcionalidades ao sistema 
          sem impactar o código existente.
        </p>
        <div className="grid gap-6">
          {extensionExamples.map((example, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{example.scenario}</CardTitle>
                <CardDescription>{example.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Passos de Implementação:</p>
                  <ol className="text-sm text-muted-foreground space-y-1">
                    {example.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-primary font-medium">{idx + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Arquivos Criados:</p>
                  <div className="flex flex-wrap gap-1">
                    {example.files.map((file, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {file}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Design Patterns */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Padrões de Design</h2>
        <p className="text-muted-foreground">
          Padrões utilizados para garantir flexibilidade e facilitar a extensão do sistema.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {designPatterns.map((pattern, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{pattern.pattern}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-primary">Uso:</p>
                  <p className="text-sm text-muted-foreground">{pattern.usage}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-green-600">Benefício:</p>
                  <p className="text-sm text-muted-foreground">{pattern.benefit}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Configuration Management */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Gerenciamento de Configuração</h2>
        <Card>
          <CardHeader>
            <CardTitle>Configuração Flexível</CardTitle>
            <CardDescription>
              Sistema de configuração que permite personalização sem alteração de código
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Configuração por Ambiente</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Profiles do Spring Boot</li>
                  <li>• Variáveis de ambiente</li>
                  <li>• ConfigMaps do Kubernetes</li>
                  <li>• Secrets management</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Configuração Dinâmica</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Spring Cloud Config</li>
                  <li>• Refresh automático</li>
                  <li>• Feature flags</li>
                  <li>• A/B testing</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-muted p-4 rounded-lg">
              <h4 className="font-medium mb-2">Exemplo de Configuração</h4>
              <div className="text-sm font-mono space-y-1">
                <div>payment:</div>
                <div>&nbsp;&nbsp;processors:</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;pix:</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled: true</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;timeout: 30s</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;card:</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;enabled: true</div>
                <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;providers: [visa, mastercard]</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Migration Strategy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Estratégia de Migração</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Java 8 → Java 17</CardTitle>
              <CardDescription>
                Caminho de migração planejado para versões mais recentes
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Fase 1</Badge>
                  <span className="text-muted-foreground">Atualização de dependências</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Fase 2</Badge>
                  <span className="text-muted-foreground">Migração para Java 11</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Fase 3</Badge>
                  <span className="text-muted-foreground">Adoção de novos recursos</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Fase 4</Badge>
                  <span className="text-muted-foreground">Migração para Java 17</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Modernização Contínua</CardTitle>
              <CardDescription>
                Estratégias para manter o sistema atualizado
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-muted-foreground">Dependabot para atualizações</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span className="text-muted-foreground">Testes de compatibilidade</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-muted-foreground">Refatoração incremental</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                  <span className="text-muted-foreground">Documentação atualizada</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Benefícios da Extensibilidade</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Desenvolvimento</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Adição de features sem impacto</li>
              <li>• Reutilização de componentes</li>
              <li>• Testes isolados</li>
              <li>• Desenvolvimento paralelo</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Negócio</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Time-to-market reduzido</li>
              <li>• Adaptação a regulamentações</li>
              <li>• Novos mercados</li>
              <li>• Vantagem competitiva</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Operação</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Deploy independente</li>
              <li>• Rollback granular</li>
              <li>• Monitoramento específico</li>
              <li>• Escalabilidade seletiva</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/testes">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Testes
          </Link>
        </Button>
        <Button asChild>
          <Link to="/como-contribuir">
            Como Contribuir
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

