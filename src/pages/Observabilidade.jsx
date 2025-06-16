import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Eye, BarChart3, Activity, FileText } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Observabilidade() {
  const observabilityPillars = [
    {
      title: 'Logs Estruturados',
      icon: <FileText className="h-6 w-6" />,
      description: 'Implementação com SLF4J e logs estruturados em formato JSON',
      features: [
        'Formato JSON padronizado',
        'Correlação de requests',
        'Níveis de log configuráveis',
        'Coleta centralizada'
      ],
      tools: ['SLF4J', 'Logback', 'ELK Stack', 'Fluentd']
    },
    {
      title: 'Tracing Distribuído',
      icon: <Activity className="h-6 w-6" />,
      description: 'Rastreamento de chamadas entre microserviços com OpenTelemetry',
      features: [
        'Trace de requests completos',
        'Identificação de gargalos',
        'Mapeamento de dependências',
        'Análise de latência'
      ],
      tools: ['OpenTelemetry', 'Jaeger', 'Zipkin', 'Spring Cloud Sleuth']
    },
    {
      title: 'Métricas',
      icon: <BarChart3 className="h-6 w-6" />,
      description: 'Métricas de desempenho expostas via Actuator e coletadas pelo Prometheus',
      features: [
        'Métricas de aplicação',
        'Métricas de infraestrutura',
        'Alertas automáticos',
        'Dashboards visuais'
      ],
      tools: ['Micrometer', 'Prometheus', 'Grafana', 'Spring Boot Actuator']
    }
  ];

  const implementationDetails = [
    {
      category: 'Configuração de Logs',
      items: [
        'Configuração centralizada via application.yml',
        'Padrões de log estruturado com campos obrigatórios',
        'Rotação automática de arquivos de log',
        'Integração com sistemas de coleta (Filebeat, Fluentd)'
      ]
    },
    {
      category: 'Instrumentação',
      items: [
        'Auto-instrumentação com OpenTelemetry Java Agent',
        'Spans customizados para operações críticas',
        'Baggage para propagação de contexto',
        'Sampling configurável por ambiente'
      ]
    },
    {
      category: 'Métricas Customizadas',
      items: [
        'Contadores de transações por tipo de pagamento',
        'Histogramas de tempo de resposta',
        'Gauges para recursos do sistema',
        'Métricas de negócio (taxa de aprovação, volume)'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Observabilidade</h1>
        <p className="text-xl text-muted-foreground">
          Monitoramento completo do sistema através dos três pilares da observabilidade.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          Em uma arquitetura de microserviços, a observabilidade é fundamental para monitorar 
          o comportamento do sistema, identificar problemas e garantir a saúde das aplicações. 
          O "pagamento-system" incorpora diversas ferramentas e práticas para garantir uma 
          observabilidade robusta através dos três pilares fundamentais: logs, traces e métricas.
        </p>
      </section>

      {/* Three Pillars */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Os Três Pilares da Observabilidade</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {observabilityPillars.map((pillar, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {pillar.icon}
                  </div>
                  {pillar.title}
                </CardTitle>
                <CardDescription>{pillar.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Funcionalidades:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {pillar.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Ferramentas:</p>
                  <div className="flex flex-wrap gap-1">
                    {pillar.tools.map((tool, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
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

      {/* Implementation Details */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Detalhes de Implementação</h2>
        <div className="grid md:grid-cols-1 gap-6">
          {implementationDetails.map((detail, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{detail.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {detail.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Benefits */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Benefícios da Observabilidade</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Eye className="h-5 w-5 text-primary" />
                Visibilidade Completa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Visão end-to-end de todas as transações, desde a requisição inicial 
                até a resposta final, passando por todos os microserviços envolvidos.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Logs:</span> Contexto detalhado de cada operação
                </div>
                <div className="text-sm">
                  <span className="font-medium">Traces:</span> Fluxo completo entre serviços
                </div>
                <div className="text-sm">
                  <span className="font-medium">Métricas:</span> Performance em tempo real
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-primary" />
                Detecção Proativa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Identificação automática de problemas antes que afetem os usuários, 
                com alertas inteligentes baseados em thresholds e anomalias.
              </p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-medium">Alertas:</span> Notificações automáticas
                </div>
                <div className="text-sm">
                  <span className="font-medium">Dashboards:</span> Visualização em tempo real
                </div>
                <div className="text-sm">
                  <span className="font-medium">SLAs:</span> Monitoramento de objetivos
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Melhores Práticas Implementadas</h3>
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h4 className="font-medium mb-2">Estruturação</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Logs estruturados em JSON</li>
              <li>• Correlation IDs únicos</li>
              <li>• Contexto de negócio nos traces</li>
              <li>• Métricas com labels consistentes</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Performance</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Sampling inteligente de traces</li>
              <li>• Agregação eficiente de métricas</li>
              <li>• Retenção otimizada de dados</li>
              <li>• Compressão de logs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/estrutura-projeto">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Estrutura do Projeto
          </Link>
        </Button>
        <Button asChild>
          <Link to="/mensageria">
            Mensageria
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

