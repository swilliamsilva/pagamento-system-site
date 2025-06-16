import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, GitFork, Users, Code, BookOpen } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function ComoContribuir() {
  const contributionTypes = [
    {
      title: 'Desenvolvimento de Código',
      icon: <Code className="h-6 w-6" />,
      description: 'Contribua com novas funcionalidades, correções de bugs e melhorias',
      skills: ['Java 8+', 'Spring Boot', 'Microserviços', 'Kafka'],
      tasks: [
        'Implementar novos métodos de pagamento',
        'Corrigir bugs reportados',
        'Melhorar performance',
        'Adicionar testes'
      ]
    },
    {
      title: 'Documentação',
      icon: <BookOpen className="h-6 w-6" />,
      description: 'Melhore a documentação técnica e guias de uso',
      skills: ['Markdown', 'Documentação técnica', 'UML', 'OpenAPI'],
      tasks: [
        'Atualizar README.md',
        'Criar tutoriais',
        'Documentar APIs',
        'Traduzir conteúdo'
      ]
    },
    {
      title: 'Testes e QA',
      icon: <Users className="h-6 w-6" />,
      description: 'Ajude a garantir a qualidade através de testes e validações',
      skills: ['JUnit', 'Mockito', 'TestContainers', 'Selenium'],
      tasks: [
        'Escrever testes unitários',
        'Criar testes de integração',
        'Reportar bugs',
        'Validar funcionalidades'
      ]
    }
  ];

  const contributionSteps = [
    {
      step: 1,
      title: 'Fork do Repositório',
      description: 'Faça um fork do repositório para sua conta GitHub',
      details: [
        'Acesse https://github.com/swilliamsilva/pagamento-system',
        'Clique no botão "Fork" no canto superior direito',
        'Aguarde a criação do fork em sua conta',
        'Clone o repositório para sua máquina local'
      ],
      command: 'git clone https://github.com/SEU_USUARIO/pagamento-system.git'
    },
    {
      step: 2,
      title: 'Configuração do Ambiente',
      description: 'Configure o ambiente de desenvolvimento local',
      details: [
        'Instale Java 8+ e Maven',
        'Configure Docker e Docker Compose',
        'Instale sua IDE preferida (IntelliJ, Eclipse, VS Code)',
        'Execute os testes para validar o setup'
      ],
      command: './mvnw clean install -DskipTests && docker-compose up -d'
    },
    {
      step: 3,
      title: 'Escolha uma Tarefa',
      description: 'Selecione uma issue ou proponha uma melhoria',
      details: [
        'Verifique as issues abertas no GitHub',
        'Procure por labels como "good first issue" ou "help wanted"',
        'Comente na issue para manifestar interesse',
        'Discuta a abordagem com os mantenedores'
      ],
      command: 'git checkout -b feature/sua-nova-funcionalidade'
    },
    {
      step: 4,
      title: 'Desenvolvimento',
      description: 'Implemente suas alterações seguindo as boas práticas',
      details: [
        'Siga os padrões de código do projeto',
        'Escreva testes para suas alterações',
        'Mantenha commits pequenos e descritivos',
        'Execute os testes localmente'
      ],
      command: './mvnw test && ./mvnw verify'
    },
    {
      step: 5,
      title: 'Pull Request',
      description: 'Envie suas alterações para revisão',
      details: [
        'Push das alterações para seu fork',
        'Abra um Pull Request no repositório original',
        'Descreva claramente as mudanças realizadas',
        'Aguarde o feedback dos revisores'
      ],
      command: 'git push origin feature/sua-nova-funcionalidade'
    }
  ];

  const learningOpportunities = [
    {
      area: 'Arquitetura de Microserviços',
      topics: [
        'Padrões de comunicação entre serviços',
        'Service discovery e load balancing',
        'Distributed tracing e observabilidade',
        'Circuit breaker e resiliência'
      ]
    },
    {
      area: 'Sistemas de Pagamento',
      topics: [
        'Processamento de transações',
        'Integração com gateways',
        'Compliance e segurança',
        'Reconciliação financeira'
      ]
    },
    {
      area: 'Tecnologias Cloud',
      topics: [
        'Containerização com Docker',
        'Orquestração com Kubernetes',
        'CI/CD com GitHub Actions',
        'Monitoramento e alertas'
      ]
    },
    {
      area: 'Desenvolvimento Java',
      topics: [
        'Spring Boot e Spring Cloud',
        'Apache Kafka e mensageria',
        'Testes automatizados',
        'Migração Java 8 → 17'
      ]
    }
  ];

  const communityGuidelines = [
    {
      title: 'Código de Conduta',
      description: 'Mantenha um ambiente respeitoso e inclusivo',
      rules: [
        'Seja respeitoso com todos os participantes',
        'Use linguagem inclusiva e profissional',
        'Aceite feedback construtivo',
        'Ajude outros desenvolvedores'
      ]
    },
    {
      title: 'Padrões de Código',
      description: 'Siga as convenções estabelecidas no projeto',
      rules: [
        'Use formatação consistente (Google Java Style)',
        'Escreva código auto-documentado',
        'Adicione comentários quando necessário',
        'Mantenha métodos pequenos e focados'
      ]
    },
    {
      title: 'Processo de Review',
      description: 'Colabore no processo de revisão de código',
      rules: [
        'Seja construtivo em seus comentários',
        'Explique o "porquê" das suas sugestões',
        'Teste as alterações localmente',
        'Aprove apenas código que você entende'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Como Contribuir</h1>
        <p className="text-xl text-muted-foreground">
          Junte-se à nossa comunidade e ajude a construir um sistema de pagamentos robusto.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          Este projeto é uma iniciativa de código aberto e convidamos você a fazer parte 
          dessa jornada de aprendizado e colaboração. Sua contribuição é valiosa, seja 
          através de código, documentação, testes ou sugestões. Ao contribuir, você terá 
          a oportunidade de aprofundar seus conhecimentos e trabalhar em um projeto real 
          com uma arquitetura bem definida.
        </p>
      </section>

      {/* Contribution Types */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Tipos de Contribuição</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {contributionTypes.map((type, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {type.icon}
                  </div>
                  {type.title}
                </CardTitle>
                <CardDescription>{type.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Habilidades Úteis:</p>
                  <div className="flex flex-wrap gap-1">
                    {type.skills.map((skill, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Tarefas Típicas:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {type.tasks.map((task, idx) => (
                      <li key={idx}>• {task}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Step by Step Guide */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Guia Passo a Passo</h2>
        <p className="text-muted-foreground">
          Siga este guia detalhado para fazer sua primeira contribuição ao projeto.
        </p>
        <div className="grid gap-6">
          {contributionSteps.map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <span className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {step.step}
                  </span>
                  {step.title}
                </CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="text-sm text-muted-foreground space-y-1">
                  {step.details.map((detail, idx) => (
                    <li key={idx}>• {detail}</li>
                  ))}
                </ul>
                
                {step.command && (
                  <div className="bg-muted p-3 rounded-lg">
                    <p className="text-sm font-medium mb-1">Comando:</p>
                    <code className="text-sm">{step.command}</code>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Learning Opportunities */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Oportunidades de Aprendizado</h2>
        <p className="text-muted-foreground">
          Ao contribuir com este projeto, você terá a oportunidade de aprender e 
          aprimorar suas habilidades em diversas áreas.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {learningOpportunities.map((opportunity, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{opportunity.area}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {opportunity.topics.map((topic, idx) => (
                    <li key={idx}>• {topic}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Guidelines */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Diretrizes da Comunidade</h2>
        <p className="text-muted-foreground">
          Para manter um ambiente colaborativo e produtivo, seguimos algumas diretrizes básicas.
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {communityGuidelines.map((guideline, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{guideline.title}</CardTitle>
                <CardDescription>{guideline.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {guideline.rules.map((rule, idx) => (
                    <li key={idx}>• {rule}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Getting Help */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Obtendo Ajuda</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Canais de Comunicação
            </CardTitle>
            <CardDescription>
              Onde buscar ajuda e interagir com a comunidade
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Para Dúvidas Técnicas</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Abra uma issue no GitHub</li>
                  <li>• Use a tag [QUESTION] no título</li>
                  <li>• Forneça contexto e código relevante</li>
                  <li>• Seja específico sobre o problema</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Para Discussões Gerais</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Use as Discussions do GitHub</li>
                  <li>• Participe de code reviews</li>
                  <li>• Compartilhe ideias e sugestões</li>
                  <li>• Ajude outros desenvolvedores</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Call to Action */}
      <section className="bg-accent rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Pronto para Contribuir?</h2>
        <p className="text-muted-foreground mb-6">
          Sua contribuição pode fazer a diferença! Comece explorando o código e 
          escolhendo uma tarefa que combine com suas habilidades e interesses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a
              href="https://github.com/swilliamsilva/pagamento-system"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GitFork className="h-4 w-4" />
              Fork no GitHub
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a
              href="https://github.com/swilliamsilva/pagamento-system/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver Issues Abertas
            </a>
          </Button>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/extensibilidade">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Extensibilidade
          </Link>
        </Button>
        <Button asChild>
          <Link to="/conclusao">
            Conclusão
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

