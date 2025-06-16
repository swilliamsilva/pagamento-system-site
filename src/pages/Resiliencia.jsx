import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, RotateCcw, Gauge, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Resiliencia() {
  const resiliencePatterns = [
    {
      title: 'Circuit Breaker',
      icon: <Shield className="h-6 w-6" />,
      description: 'Previne cascata de falhas isolando serviços com problemas',
      states: ['Closed', 'Open', 'Half-Open'],
      benefits: [
        'Isolamento de falhas',
        'Recuperação automática',
        'Proteção contra sobrecarga',
        'Feedback rápido'
      ],
      configuration: [
        'Threshold de falhas: 50%',
        'Timeout: 60 segundos',
        'Tentativas no half-open: 3',
        'Janela de medição: 10 requests'
      ]
    },
    {
      title: 'Retry',
      icon: <RotateCcw className="h-6 w-6" />,
      description: 'Reexecução automática de operações que falharam temporariamente',
      states: ['Immediate', 'Fixed Delay', 'Exponential Backoff'],
      benefits: [
        'Recuperação de falhas temporárias',
        'Melhoria da disponibilidade',
        'Transparência para o cliente',
        'Configuração flexível'
      ],
      configuration: [
        'Máximo de tentativas: 3',
        'Delay inicial: 1 segundo',
        'Multiplicador: 2x',
        'Jitter: 10%'
      ]
    },
    {
      title: 'Rate Limiter',
      icon: <Gauge className="h-6 w-6" />,
      description: 'Controla a taxa de requisições para proteger contra sobrecarga',
      states: ['Token Bucket', 'Fixed Window', 'Sliding Window'],
      benefits: [
        'Proteção contra DDoS',
        'Garantia de SLA',
        'Distribuição justa de recursos',
        'Prevenção de sobrecarga'
      ],
      configuration: [
        'Limite: 100 req/min',
        'Burst: 10 requests',
        'Timeout: 5 segundos',
        'Scope: por usuário'
      ]
    },
    {
      title: 'Timeout',
      icon: <Clock className="h-6 w-6" />,
      description: 'Define limites de tempo para operações evitando travamentos',
      states: ['Connection', 'Read', 'Write'],
      benefits: [
        'Prevenção de travamentos',
        'Liberação de recursos',
        'Experiência previsível',
        'Detecção de problemas'
      ],
      configuration: [
        'Connection: 5 segundos',
        'Read: 30 segundos',
        'Write: 10 segundos',
        'Total: 60 segundos'
      ]
    }
  ];

  const fallbackStrategies = [
    {
      scenario: 'Serviço de Notificação Indisponível',
      fallback: 'Armazenar notificação em fila para reprocessamento',
      impact: 'Usuário não recebe notificação imediata, mas será notificado posteriormente'
    },
    {
      scenario: 'Gateway de Pagamento Fora do Ar',
      fallback: 'Redirecionar para gateway alternativo ou modo degradado',
      impact: 'Transação processada com método alternativo'
    },
    {
      scenario: 'Serviço de Antifraude Lento',
      fallback: 'Aprovar transação com análise posterior',
      impact: 'Experiência mais rápida com verificação assíncrona'
    },
    {
      scenario: 'Base de Dados Indisponível',
      fallback: 'Utilizar cache ou réplica read-only',
      impact: 'Funcionalidade limitada mas sistema operacional'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Resiliência</h1>
        <p className="text-xl text-muted-foreground">
          Padrões de resiliência com Resilience4j para garantir alta disponibilidade.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          A resiliência é um aspecto crítico em sistemas de pagamento, onde a falha de um 
          componente não deve derrubar todo o sistema. O projeto utiliza o Resilience4j para 
          implementar padrões de resiliência que garantem que o sistema continue operacional 
          mesmo diante de falhas parciais ou temporárias.
        </p>
      </section>

      {/* Resilience Patterns */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Padrões de Resiliência</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {resiliencePatterns.map((pattern, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {pattern.icon}
                  </div>
                  {pattern.title}
                </CardTitle>
                <CardDescription>{pattern.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Estados/Tipos:</p>
                  <div className="flex flex-wrap gap-1">
                    {pattern.states.map((state, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {state}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Benefícios:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {pattern.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Configuração:</p>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {pattern.configuration.map((config, idx) => (
                      <li key={idx}>• {config}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Fallback Strategies */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Estratégias de Fallback</h2>
        <p className="text-muted-foreground">
          Configurações de fallback permitem que o sistema forneça uma resposta alternativa 
          em caso de falha, mantendo a funcionalidade mesmo em cenários adversos.
        </p>
        <div className="grid gap-4">
          {fallbackStrategies.map((strategy, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{strategy.scenario}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-primary">Estratégia de Fallback:</p>
                  <p className="text-sm text-muted-foreground">{strategy.fallback}</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-orange-600">Impacto no Usuário:</p>
                  <p className="text-sm text-muted-foreground">{strategy.impact}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Implementation Details */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Implementação com Resilience4j</h2>
        <Card>
          <CardHeader>
            <CardTitle>Configuração e Uso</CardTitle>
            <CardDescription>
              Como os padrões de resiliência são implementados no sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p>
                O Resilience4j é integrado ao Spring Boot através de anotações e configurações 
                declarativas, permitindo aplicar padrões de resiliência de forma transparente:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Configuração Declarativa</h4>
                <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                  <div>@CircuitBreaker(name = "payment")</div>
                  <div>@Retry(name = "payment")</div>
                  <div>@RateLimiter(name = "payment")</div>
                  <div>@TimeLimiter(name = "payment")</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Configuração YAML</h4>
                <div className="bg-muted p-3 rounded-lg text-sm font-mono">
                  <div>resilience4j:</div>
                  <div>&nbsp;&nbsp;circuitbreaker:</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;instances:</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;payment:</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;failure-rate: 50</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Monitoring and Metrics */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Monitoramento de Resiliência</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Métricas Expostas</CardTitle>
              <CardDescription>
                Métricas automáticas para monitoramento dos padrões
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Circuit Breaker</Badge>
                  <span className="text-muted-foreground">Estado, taxa de falhas, chamadas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Retry</Badge>
                  <span className="text-muted-foreground">Tentativas, sucessos, falhas</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Rate Limiter</Badge>
                  <span className="text-muted-foreground">Requests permitidos, rejeitados</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">Timeout</Badge>
                  <span className="text-muted-foreground">Timeouts, latência média</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Alertas Automáticos</CardTitle>
              <CardDescription>
                Notificações baseadas em thresholds de resiliência
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-muted-foreground">Circuit breaker aberto</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  <span className="text-muted-foreground">Taxa de retry alta</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                  <span className="text-muted-foreground">Rate limit atingido</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  <span className="text-muted-foreground">Timeouts frequentes</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Benefícios da Resiliência</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Disponibilidade</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Sistema sempre operacional</li>
              <li>• Degradação controlada</li>
              <li>• Recuperação automática</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Performance</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Resposta rápida a falhas</li>
              <li>• Prevenção de sobrecarga</li>
              <li>• Otimização de recursos</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Experiência</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Transparência para usuários</li>
              <li>• Funcionalidade alternativa</li>
              <li>• Confiabilidade percebida</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/mensageria">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Mensageria
          </Link>
        </Button>
        <Button asChild>
          <Link to="/seguranca">
            Segurança
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

