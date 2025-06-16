import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, MessageSquare, Zap, GitBranch, Clock } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Mensageria() {
  const kafkaTopics = [
    {
      name: 'payment.created',
      description: 'Evento disparado quando um novo pagamento é criado',
      producers: ['Gateway Service'],
      consumers: ['Notification Service', 'Audit Service']
    },
    {
      name: 'payment.approved',
      description: 'Evento disparado quando um pagamento é aprovado',
      producers: ['Pix Service', 'Card Service', 'Boleto Service'],
      consumers: ['Notification Service', 'Reconciliation Service']
    },
    {
      name: 'payment.rejected',
      description: 'Evento disparado quando um pagamento é rejeitado',
      producers: ['Pix Service', 'Card Service', 'Boleto Service'],
      consumers: ['Notification Service', 'Fraud Service']
    },
    {
      name: 'payment.refunded',
      description: 'Evento disparado quando um pagamento é estornado',
      producers: ['Refund Service'],
      consumers: ['Notification Service', 'Accounting Service']
    }
  ];

  const messagingPatterns = [
    {
      title: 'Event Sourcing',
      icon: <GitBranch className="h-5 w-5" />,
      description: 'Armazenamento de eventos como fonte única da verdade',
      benefits: [
        'Auditoria completa',
        'Replay de eventos',
        'Evolução do modelo',
        'Debugging facilitado'
      ]
    },
    {
      title: 'CQRS',
      icon: <MessageSquare className="h-5 w-5" />,
      description: 'Separação entre comandos e consultas',
      benefits: [
        'Escalabilidade independente',
        'Modelos otimizados',
        'Performance melhorada',
        'Flexibilidade arquitetural'
      ]
    },
    {
      title: 'Saga Pattern',
      icon: <Clock className="h-5 w-5" />,
      description: 'Coordenação de transações distribuídas',
      benefits: [
        'Consistência eventual',
        'Compensação automática',
        'Resiliência a falhas',
        'Transações longas'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Mensageria</h1>
        <p className="text-xl text-muted-foreground">
          Comunicação assíncrona e processamento de eventos com Apache Kafka.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          A utilização de um sistema de mensageria assíncrona é um pilar importante para a 
          resiliência e escalabilidade de sistemas de pagamento. O Apache Kafka é empregado 
          para gerenciar eventos e garantir a comunicação desacoplada entre os serviços, 
          permitindo que o sistema seja mais robusto e responsivo.
        </p>
      </section>

      {/* Kafka Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Apache Kafka no Sistema</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Eventos de Pagamento
              </CardTitle>
              <CardDescription>
                Processamento assíncrono de eventos críticos do sistema
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                O Kafka é utilizado para eventos como "Pagamento Criado", "Pagamento Aprovado", 
                "Pagamento Recusado", entre outros. Isso permite que os serviços reajam a 
                mudanças de estado de forma assíncrona e eficiente.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Event-driven</Badge>
                <Badge variant="secondary">Asynchronous</Badge>
                <Badge variant="secondary">Scalable</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-primary" />
                Tópicos Centralizados
              </CardTitle>
              <CardDescription>
                Gestão consistente dos canais de comunicação
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-sm text-muted-foreground">
                Os tópicos do Kafka são definidos centralizadamente na classe KafkaTopics.java, 
                garantindo consistência e facilitando a gestão dos canais de comunicação entre 
                todos os microserviços.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Centralized</Badge>
                <Badge variant="secondary">Consistent</Badge>
                <Badge variant="secondary">Maintainable</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Kafka Topics */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Principais Tópicos</h2>
        <div className="grid gap-4">
          {kafkaTopics.map((topic, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <code className="text-sm bg-muted px-2 py-1 rounded">
                    {topic.name}
                  </code>
                </CardTitle>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-medium mb-2">Produtores:</p>
                    <div className="flex flex-wrap gap-1">
                      {topic.producers.map((producer, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {producer}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm font-medium mb-2">Consumidores:</p>
                    <div className="flex flex-wrap gap-1">
                      {topic.consumers.map((consumer, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {consumer}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Messaging Patterns */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Padrões de Mensageria</h2>
        <p className="text-muted-foreground">
          O sistema implementa padrões avançados de mensageria para garantir consistência, 
          escalabilidade e resiliência em operações distribuídas.
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {messagingPatterns.map((pattern, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {pattern.icon}
                  </div>
                  {pattern.title}
                </CardTitle>
                <CardDescription>{pattern.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Benefícios:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {pattern.benefits.map((benefit, idx) => (
                      <li key={idx}>• {benefit}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Producer/Consumer Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Arquitetura Produtor/Consumidor</h2>
        <Card>
          <CardHeader>
            <CardTitle>Fluxo de Mensagens</CardTitle>
            <CardDescription>
              Como os serviços interagem através do Kafka
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="prose prose-sm max-w-none">
              <p>
                Os serviços atuam como produtores de eventos (publicando mensagens em tópicos) 
                e consumidores (processando mensagens de tópicos relevantes), conforme o contexto 
                de suas responsabilidades. Esta arquitetura permite:
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Produtores</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Gateway</Badge>
                    <span className="text-muted-foreground">→ payment.created</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Pix Service</Badge>
                    <span className="text-muted-foreground">→ payment.approved/rejected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">Card Service</Badge>
                    <span className="text-muted-foreground">→ payment.approved/rejected</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Consumidores</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Notification</Badge>
                    <span className="text-muted-foreground">← todos os eventos</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Audit Service</Badge>
                    <span className="text-muted-foreground">← payment.created</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">Fraud Service</Badge>
                    <span className="text-muted-foreground">← payment.rejected</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Benefits */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Benefícios da Mensageria Assíncrona</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Desacoplamento</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Serviços independentes</li>
              <li>• Evolução isolada</li>
              <li>• Redução de dependências</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Escalabilidade</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Processamento paralelo</li>
              <li>• Balanceamento de carga</li>
              <li>• Elasticidade automática</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Resiliência</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Tolerância a falhas</li>
              <li>• Reprocessamento</li>
              <li>• Durabilidade de mensagens</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/observabilidade">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Observabilidade
          </Link>
        </Button>
        <Button asChild>
          <Link to="/resiliencia">
            Resiliência
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

