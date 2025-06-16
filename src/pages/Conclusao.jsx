import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Rocket, Users, Star } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

export function Conclusao() {
  const projectImpact = [
    {
      title: 'Aprendizado Colaborativo',
      icon: <Users className="h-6 w-6" />,
      description: 'Uma plataforma onde desenvolvedores podem aprender uns com os outros',
      benefits: [
        'Troca de experiências práticas',
        'Mentoria entre pares',
        'Networking profissional',
        'Crescimento conjunto'
      ]
    },
    {
      title: 'Tecnologia de Ponta',
      icon: <Rocket className="h-6 w-6" />,
      description: 'Implementação de práticas modernas em sistemas de pagamento',
      benefits: [
        'Arquitetura de microserviços',
        'Observabilidade completa',
        'Segurança robusta',
        'Escalabilidade horizontal'
      ]
    },
    {
      title: 'Impacto Real',
      icon: <Star className="h-6 w-6" />,
      description: 'Um projeto que pode ser usado como referência na indústria',
      benefits: [
        'Código de produção',
        'Boas práticas documentadas',
        'Casos de uso reais',
        'Evolução contínua'
      ]
    }
  ];

  const futureRoadmap = [
    {
      phase: 'Curto Prazo (3-6 meses)',
      goals: [
        'Migração para Java 11',
        'Implementação de novos métodos de pagamento',
        'Melhoria da documentação',
        'Expansão da suite de testes'
      ]
    },
    {
      phase: 'Médio Prazo (6-12 meses)',
      goals: [
        'Migração para Java 17',
        'Implementação de machine learning para antifraude',
        'Dashboard de monitoramento',
        'API GraphQL'
      ]
    },
    {
      phase: 'Longo Prazo (1-2 anos)',
      goals: [
        'Suporte a criptomoedas',
        'Integração com Open Banking',
        'Compliance internacional',
        'Plataforma multi-tenant'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Conclusão</h1>
        <p className="text-xl text-muted-foreground">
          Uma jornada de colaboração, aprendizado e inovação em sistemas de pagamento.
        </p>
      </div>

      {/* Project Vision */}
      <section className="prose prose-lg max-w-none">
        <p>
          O projeto "pagamento-system" é mais do que um sistema de pagamentos; é uma 
          plataforma para o desenvolvimento de habilidades, a troca de conhecimento e 
          a construção de uma comunidade colaborativa. Através desta iniciativa, buscamos 
          não apenas criar uma solução técnica robusta, mas também fomentar o crescimento 
          profissional e pessoal de todos os envolvidos.
        </p>
        
        <p>
          A arquitetura baseada em microserviços, as tecnologias modernas e as práticas 
          de desenvolvimento adotadas fazem deste projeto uma excelente oportunidade para 
          desenvolvedores que desejam aprofundar seus conhecimentos em sistemas distribuídos, 
          segurança, observabilidade e muito mais.
        </p>
      </section>

      {/* Project Impact */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Impacto do Projeto</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {projectImpact.map((impact, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {impact.icon}
                  </div>
                  {impact.title}
                </CardTitle>
                <CardDescription>{impact.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {impact.benefits.map((benefit, idx) => (
                    <li key={idx}>• {benefit}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Roadmap Futuro</h2>
        <p className="text-muted-foreground">
          Nossa visão para a evolução contínua do projeto, sempre mantendo o foco 
          na colaboração e no aprendizado.
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {futureRoadmap.map((roadmap, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{roadmap.phase}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {roadmap.goals.map((goal, idx) => (
                    <li key={idx}>• {goal}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Key Learnings */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Principais Aprendizados</h2>
        <Card>
          <CardHeader>
            <CardTitle>O que Você Pode Aprender</CardTitle>
            <CardDescription>
              Conhecimentos e habilidades que você desenvolverá participando deste projeto
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Habilidades Técnicas</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Arquitetura de microserviços</li>
                  <li>• Desenvolvimento com Spring Boot</li>
                  <li>• Mensageria com Apache Kafka</li>
                  <li>• Containerização e orquestração</li>
                  <li>• Observabilidade e monitoramento</li>
                  <li>• Segurança em sistemas distribuídos</li>
                  <li>• Testes automatizados</li>
                  <li>• CI/CD e DevOps</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Habilidades Profissionais</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Colaboração em equipe</li>
                  <li>• Code review e feedback</li>
                  <li>• Documentação técnica</li>
                  <li>• Resolução de problemas</li>
                  <li>• Comunicação técnica</li>
                  <li>• Gestão de projetos</li>
                  <li>• Mentoria e ensino</li>
                  <li>• Contribuição open source</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Community Values */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Valores da Comunidade</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Colaboração</CardTitle>
              <CardDescription>
                Trabalhamos juntos para alcançar objetivos comuns
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Acreditamos que o conhecimento compartilhado é multiplicado. Cada contribuição, 
                por menor que seja, agrega valor ao projeto e à comunidade como um todo.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Aprendizado Contínuo</CardTitle>
              <CardDescription>
                Sempre há algo novo para aprender e ensinar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Promovemos um ambiente onde erros são oportunidades de aprendizado e onde 
                todos podem contribuir, independentemente do nível de experiência.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Qualidade</CardTitle>
              <CardDescription>
                Buscamos excelência em tudo que fazemos
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mantemos altos padrões de qualidade no código, documentação e processos, 
                sempre com foco na melhoria contínua.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Inclusão</CardTitle>
              <CardDescription>
                Todos são bem-vindos em nossa comunidade
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Valorizamos a diversidade de perspectivas e experiências, criando um 
                ambiente acolhedor para desenvolvedores de todos os backgrounds.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-8 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="flex justify-center">
            <Heart className="h-12 w-12 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Junte-se à Nossa Jornada</h2>
          <p className="text-lg text-muted-foreground">
            Convidamos você a se juntar a nós nesta jornada de construção de um sistema 
            de pagamentos robusto e escalável. Sua participação é fundamental para o 
            sucesso e o aprendizado contínuo de todos os envolvidos.
          </p>
          <p className="text-muted-foreground">
            Seja você um desenvolvedor experiente ou alguém que está começando, há espaço 
            para todos em nossa comunidade. Venha aprender, ensinar, colaborar e crescer 
            conosco!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg">
              <a
                href="https://github.com/swilliamsilva/pagamento-system"
                target="_blank"
                rel="noopener noreferrer"
              >
                Começar Agora
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/como-contribuir">
                Guia de Contribuição
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="text-center py-8">
        <p className="text-muted-foreground italic">
          "O conhecimento compartilhado é o único que se multiplica quando dividido."
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Obrigado por fazer parte desta jornada!
        </p>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/como-contribuir">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Como Contribuir
          </Link>
        </Button>
        <Button asChild>
          <Link to="/">
            Voltar ao Início
          </Link>
        </Button>
      </div>
    </div>
  );
}

