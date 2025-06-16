import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Container, Cloud, Settings, Rocket } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Deploy() {
  const deploymentOptions = [
    {
      title: 'Docker Containers',
      icon: <Container className="h-6 w-6" />,
      description: 'Cada serviço possui seu próprio Dockerfile para conteinerização',
      features: [
        'Multi-stage builds para otimização',
        'Imagens baseadas em Alpine Linux',
        'Health checks configurados',
        'Non-root user para segurança'
      ],
      files: [
        'Dockerfile por serviço',
        'docker-compose.yml',
        'docker-compose.override.yml',
        '.dockerignore'
      ]
    },
    {
      title: 'Kubernetes',
      icon: <Cloud className="h-6 w-6" />,
      description: 'Manifestos YAML prontos para orquestração em clusters',
      features: [
        'Deployments com rolling updates',
        'Services para descoberta',
        'ConfigMaps e Secrets',
        'Horizontal Pod Autoscaler'
      ],
      files: [
        'deployment.yaml',
        'service.yaml',
        'configmap.yaml',
        'ingress.yaml'
      ]
    },
    {
      title: 'Helm Charts',
      icon: <Settings className="h-6 w-6" />,
      description: 'Templates parametrizáveis para deploy automatizado',
      features: [
        'Templates reutilizáveis',
        'Valores por ambiente',
        'Hooks de lifecycle',
        'Rollback automático'
      ],
      files: [
        'Chart.yaml',
        'values.yaml',
        'templates/',
        'charts/'
      ]
    }
  ];

  const environments = [
    {
      name: 'Development',
      config: 'application-dev.yml',
      features: [
        'Logs em nível DEBUG',
        'H2 database em memória',
        'Hot reload habilitado',
        'Swagger UI ativo'
      ],
      infrastructure: [
        'Docker Compose local',
        'Kafka single-node',
        'Redis standalone',
        'Vault dev mode'
      ]
    },
    {
      name: 'Staging',
      config: 'application-staging.yml',
      features: [
        'Logs em nível INFO',
        'PostgreSQL dedicado',
        'Cache distribuído',
        'Testes automatizados'
      ],
      infrastructure: [
        'Kubernetes cluster',
        'Kafka cluster (3 nodes)',
        'Redis cluster',
        'Vault HA'
      ]
    },
    {
      name: 'Production',
      config: 'application-prod.yml',
      features: [
        'Logs em nível WARN/ERROR',
        'PostgreSQL HA',
        'Observabilidade completa',
        'Backup automático'
      ],
      infrastructure: [
        'Kubernetes multi-zone',
        'Kafka cluster (5+ nodes)',
        'Redis Sentinel',
        'Vault Enterprise'
      ]
    }
  ];

  const cicdPipeline = [
    {
      stage: 'Build',
      description: 'Compilação e empacotamento dos artefatos',
      steps: [
        'Checkout do código',
        'Cache de dependências',
        'Compilação Maven',
        'Execução de testes unitários'
      ]
    },
    {
      stage: 'Test',
      description: 'Execução de testes e análise de qualidade',
      steps: [
        'Testes de integração',
        'Análise SonarQube',
        'Verificação de segurança',
        'Testes de contrato'
      ]
    },
    {
      stage: 'Package',
      description: 'Criação de imagens Docker e artefatos',
      steps: [
        'Build de imagens Docker',
        'Scan de vulnerabilidades',
        'Push para registry',
        'Assinatura de imagens'
      ]
    },
    {
      stage: 'Deploy',
      description: 'Implantação nos ambientes de destino',
      steps: [
        'Deploy em staging',
        'Testes de smoke',
        'Aprovação manual',
        'Deploy em produção'
      ]
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Deploy</h1>
        <p className="text-xl text-muted-foreground">
          Implantação e orquestração com Docker, Kubernetes e automação CI/CD.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          A implantação e orquestração dos microserviços são facilitadas pelo uso de Docker 
          e Kubernetes, com suporte completo a diferentes ambientes e automação através de 
          pipelines CI/CD. O sistema foi projetado para ser cloud-native e facilmente 
          escalável.
        </p>
      </section>

      {/* Deployment Options */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Opções de Deploy</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          {deploymentOptions.map((option, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {option.icon}
                  </div>
                  {option.title}
                </CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Funcionalidades:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {option.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Arquivos:</p>
                  <div className="flex flex-wrap gap-1">
                    {option.files.map((file, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
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

      {/* Environment Configuration */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Configuração por Ambiente</h2>
        <p className="text-muted-foreground">
          Separação clara de configurações para diferentes ambientes, permitindo 
          otimizações específicas para cada contexto de uso.
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {environments.map((env, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  {env.name}
                  <Badge variant="outline" className="text-xs">
                    {env.config}
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Configurações:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {env.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Infraestrutura:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {env.infrastructure.map((infra, idx) => (
                      <li key={idx}>• {infra}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CI/CD Pipeline */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Pipeline CI/CD</h2>
        <p className="text-muted-foreground">
          Automação completa do processo de build, teste e deploy usando GitHub Actions.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {cicdPipeline.map((stage, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </span>
                  {stage.stage}
                </CardTitle>
                <CardDescription>{stage.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-muted-foreground space-y-1">
                  {stage.steps.map((step, idx) => (
                    <li key={idx}>• {step}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Referência Rápida</h2>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Rocket className="h-5 w-5 text-primary" />
              Comandos Essenciais
            </CardTitle>
            <CardDescription>
              Comandos para build, teste e execução local do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Desenvolvimento Local</h4>
                <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-1">
                  <div># Build do projeto</div>
                  <div>./mvnw clean install -DskipTests</div>
                  <div></div>
                  <div># Subir ambiente local</div>
                  <div>docker-compose up -d</div>
                  <div></div>
                  <div># Executar testes</div>
                  <div>./mvnw test</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Deploy Kubernetes</h4>
                <div className="bg-muted p-3 rounded-lg text-sm font-mono space-y-1">
                  <div># Deploy com Helm</div>
                  <div>helm install payment-system ./helm</div>
                  <div></div>
                  <div># Verificar status</div>
                  <div>kubectl get pods -l app=payment-system</div>
                  <div></div>
                  <div># Ver logs</div>
                  <div>kubectl logs -f deployment/gateway-service</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Monitoring and Health Checks */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Monitoramento e Health Checks</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Endpoints de Saúde</CardTitle>
              <CardDescription>
                Verificações automáticas de saúde dos serviços
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">GET</Badge>
                  <code>/actuator/health</code>
                  <span className="text-muted-foreground">Status geral</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">GET</Badge>
                  <code>/actuator/metrics</code>
                  <span className="text-muted-foreground">Métricas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">GET</Badge>
                  <code>/actuator/info</code>
                  <span className="text-muted-foreground">Informações</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">GET</Badge>
                  <code>/swagger-ui.html</code>
                  <span className="text-muted-foreground">API docs</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Estratégias de Deploy</CardTitle>
              <CardDescription>
                Diferentes abordagens para implantação segura
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm space-y-2">
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Rolling</Badge>
                  <span className="text-muted-foreground">Atualização gradual sem downtime</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Blue-Green</Badge>
                  <span className="text-muted-foreground">Troca instantânea entre ambientes</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">Canary</Badge>
                  <span className="text-muted-foreground">Deploy gradual com validação</span>
                </li>
                <li className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">A/B Testing</Badge>
                  <span className="text-muted-foreground">Testes com usuários reais</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Best Practices */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Melhores Práticas de Deploy</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Segurança</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Imagens assinadas</li>
              <li>• Scan de vulnerabilidades</li>
              <li>• Secrets management</li>
              <li>• Least privilege</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Confiabilidade</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Health checks</li>
              <li>• Graceful shutdown</li>
              <li>• Rollback automático</li>
              <li>• Circuit breakers</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Performance</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Resource limits</li>
              <li>• Auto-scaling</li>
              <li>• Load balancing</li>
              <li>• Caching strategies</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/seguranca">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Segurança
          </Link>
        </Button>
        <Button asChild>
          <Link to="/testes">
            Testes
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

