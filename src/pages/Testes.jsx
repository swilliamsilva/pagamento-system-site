import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, TestTube, CheckCircle, Target, Zap } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Testes() {
  const testingLevels = [
    {
      title: 'Testes Unitários',
      icon: <TestTube className="h-6 w-6" />,
      description: 'Validação isolada de componentes individuais',
      coverage: '85%',
      tools: ['JUnit 5', 'Mockito', 'AssertJ', 'TestContainers'],
      features: [
        'Testes de unidade para cada serviço',
        'Mocks de dependências externas',
        'Cobertura de código automatizada',
        'Execução rápida e isolada'
      ],
      examples: [
        'PaymentServiceTest',
        'PixServiceTest',
        'AuthServiceTest',
        'GatewayServiceTest'
      ]
    },
    {
      title: 'Testes de Integração',
      icon: <CheckCircle className="h-6 w-6" />,
      description: 'Validação da comunicação entre componentes',
      coverage: '70%',
      tools: ['Spring Boot Test', 'TestContainers', 'WireMock', 'Kafka Test'],
      features: [
        'Testes com banco de dados real',
        'Integração com Kafka',
        'Mocks de APIs externas',
        'Cenários end-to-end'
      ],
      examples: [
        'PaymentIntegrationTest',
        'KafkaIntegrationTest',
        'DatabaseIntegrationTest',
        'ApiIntegrationTest'
      ]
    },
    {
      title: 'Testes de Contrato',
      icon: <Target className="h-6 w-6" />,
      description: 'Garantia de compatibilidade entre serviços',
      coverage: '60%',
      tools: ['Spring Cloud Contract', 'Pact', 'OpenAPI', 'JSON Schema'],
      features: [
        'Contratos entre produtores/consumidores',
        'Validação de APIs',
        'Versionamento de contratos',
        'Testes de compatibilidade'
      ],
      examples: [
        'PaymentApiContract',
        'NotificationContract',
        'AuthContract',
        'GatewayContract'
      ]
    },
    {
      title: 'Testes de Performance',
      icon: <Zap className="h-6 w-6" />,
      description: 'Validação de performance e escalabilidade',
      coverage: '40%',
      tools: ['JMeter', 'Gatling', 'K6', 'Artillery'],
      features: [
        'Testes de carga',
        'Testes de stress',
        'Testes de volume',
        'Análise de bottlenecks'
      ],
      examples: [
        'PaymentLoadTest',
        'GatewayStressTest',
        'DatabaseVolumeTest',
        'KafkaPerformanceTest'
      ]
    }
  ];

  const testingStrategy = [
    {
      phase: 'Desenvolvimento',
      description: 'Testes executados durante o desenvolvimento',
      tests: [
        'Testes unitários automáticos',
        'Testes de integração locais',
        'Validação de contratos',
        'Análise estática de código'
      ],
      frequency: 'A cada commit',
      tools: ['IDE plugins', 'Maven Surefire', 'SonarLint']
    },
    {
      phase: 'CI/CD Pipeline',
      description: 'Testes automatizados no pipeline',
      tests: [
        'Suite completa de testes unitários',
        'Testes de integração com TestContainers',
        'Testes de segurança (SAST/DAST)',
        'Testes de qualidade de código'
      ],
      frequency: 'A cada push/PR',
      tools: ['GitHub Actions', 'SonarQube', 'OWASP ZAP']
    },
    {
      phase: 'Staging',
      description: 'Testes em ambiente similar à produção',
      tests: [
        'Testes end-to-end',
        'Testes de performance',
        'Testes de carga',
        'Testes de recuperação'
      ],
      frequency: 'A cada deploy',
      tools: ['Selenium', 'JMeter', 'Chaos Engineering']
    },
    {
      phase: 'Produção',
      description: 'Monitoramento e testes em produção',
      tests: [
        'Smoke tests',
        'Health checks',
        'Testes de canary',
        'Monitoramento sintético'
      ],
      frequency: 'Contínuo',
      tools: ['Synthetic monitoring', 'APM', 'Alerting']
    }
  ];

  const qualityMetrics = [
    {
      metric: 'Cobertura de Código',
      target: '80%',
      current: '85%',
      status: 'success',
      description: 'Percentual de código coberto por testes'
    },
    {
      metric: 'Tempo de Execução',
      target: '< 5 min',
      current: '3.2 min',
      status: 'success',
      description: 'Tempo total da suite de testes'
    },
    {
      metric: 'Taxa de Falhas',
      target: '< 1%',
      current: '0.3%',
      status: 'success',
      description: 'Percentual de testes que falham'
    },
    {
      metric: 'Complexidade Ciclomática',
      target: '< 10',
      current: '7.2',
      status: 'success',
      description: 'Complexidade média do código'
    },
    {
      metric: 'Duplicação de Código',
      target: '< 3%',
      current: '1.8%',
      status: 'success',
      description: 'Percentual de código duplicado'
    },
    {
      metric: 'Vulnerabilidades',
      target: '0',
      current: '0',
      status: 'success',
      description: 'Número de vulnerabilidades conhecidas'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Testes</h1>
        <p className="text-xl text-muted-foreground">
          Estratégia abrangente de testes para garantir qualidade e confiabilidade.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          A qualidade do software é garantida por uma estratégia de testes abrangente que 
          cobre desde testes unitários até testes de performance. O sistema utiliza as 
          melhores práticas da indústria e ferramentas modernas para automatizar a validação 
          em todos os níveis da aplicação.
        </p>
      </section>

      {/* Testing Levels */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Níveis de Teste</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {testingLevels.map((level, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {level.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      {level.title}
                      <Badge variant="secondary" className="text-xs">
                        {level.coverage}
                      </Badge>
                    </div>
                  </div>
                </CardTitle>
                <CardDescription>{level.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Funcionalidades:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {level.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Ferramentas:</p>
                  <div className="flex flex-wrap gap-1">
                    {level.tools.map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Exemplos:</p>
                  <div className="flex flex-wrap gap-1">
                    {level.examples.map((example, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {example}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Testing Strategy */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Estratégia de Testes</h2>
        <p className="text-muted-foreground">
          Abordagem estruturada que garante qualidade em todas as fases do desenvolvimento 
          e deploy, desde o desenvolvimento local até a produção.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {testingStrategy.map((strategy, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {strategy.phase}
                </CardTitle>
                <CardDescription>{strategy.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Tipos de Teste:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {strategy.tests.map((test, idx) => (
                      <li key={idx}>• {test}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between text-sm">
                  <div>
                    <span className="font-medium">Frequência:</span>
                    <span className="text-muted-foreground ml-1">{strategy.frequency}</span>
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Ferramentas:</p>
                  <div className="flex flex-wrap gap-1">
                    {strategy.tools.map((tool, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quality Metrics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Métricas de Qualidade</h2>
        <p className="text-muted-foreground">
          Indicadores chave para monitorar e manter a qualidade do código e dos testes.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {qualityMetrics.map((metric, index) => (
            <Card key={index}>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center justify-between">
                  {metric.metric}
                  <span className={`w-3 h-3 rounded-full ${
                    metric.status === 'success' ? 'bg-green-500' : 
                    metric.status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'
                  }`}></span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Atual:</span>
                  <span className="text-sm font-medium">{metric.current}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Meta:</span>
                  <span className="text-sm font-medium">{metric.target}</span>
                </div>
                <p className="text-xs text-muted-foreground pt-2">
                  {metric.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Test Automation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Automação de Testes</h2>
        <Card>
          <CardHeader>
            <CardTitle>Pipeline de Testes Automatizados</CardTitle>
            <CardDescription>
              Integração contínua com validação automática de qualidade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p>
                O pipeline CI/CD automatiza a execução de testes em diferentes estágios, 
                garantindo que apenas código de alta qualidade seja integrado e implantado:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Validações Automáticas</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Build e compilação</li>
                  <li>• Execução de testes unitários</li>
                  <li>• Análise de cobertura de código</li>
                  <li>• Verificação de qualidade (SonarQube)</li>
                  <li>• Testes de segurança (SAST)</li>
                  <li>• Validação de dependências</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Critérios de Qualidade</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Cobertura mínima de 80%</li>
                  <li>• Zero vulnerabilidades críticas</li>
                  <li>• Complexidade ciclomática menor que 10</li>
                  <li>• Duplicação de código menor que 3%</li>
                  <li>• Todos os testes passando</li>
                  <li>• Performance dentro dos SLAs</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Best Practices */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Melhores Práticas de Teste</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Estrutura</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Arrange-Act-Assert pattern</li>
              <li>• Testes independentes</li>
              <li>• Nomes descritivos</li>
              <li>• Setup e teardown limpos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Manutenibilidade</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Page Object Model</li>
              <li>• Test Data Builders</li>
              <li>• Reutilização de código</li>
              <li>• Documentação clara</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Performance</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Execução paralela</li>
              <li>• Mocks eficientes</li>
              <li>• Cleanup automático</li>
              <li>• Feedback rápido</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/deploy">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Deploy
          </Link>
        </Button>
        <Button asChild>
          <Link to="/extensibilidade">
            Extensibilidade
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

