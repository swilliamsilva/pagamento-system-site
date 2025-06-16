import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Shield, Lock, Key, Eye } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';

export function Seguranca() {
  const securityLayers = [
    {
      title: 'Comunicação TLS',
      icon: <Lock className="h-6 w-6" />,
      description: 'Criptografia de dados em trânsito entre todos os serviços',
      features: [
        'TLS 1.3 para todas as comunicações',
        'Certificados gerenciados automaticamente',
        'Keystore e Truststore configurados',
        'Mutual TLS (mTLS) entre serviços'
      ],
      implementation: [
        'Spring Boot SSL configuration',
        'Certificados Let\'s Encrypt',
        'Renovação automática',
        'Cipher suites seguros'
      ]
    },
    {
      title: 'Gerenciamento de Segredos',
      icon: <Key className="h-6 w-6" />,
      description: 'HashiCorp Vault para armazenamento seguro de credenciais',
      features: [
        'Credenciais de banco de dados',
        'Chaves de API de terceiros',
        'Certificados e chaves privadas',
        'Rotação automática de segredos'
      ],
      implementation: [
        'Vault Agent para injeção',
        'Dynamic secrets',
        'Lease management',
        'Audit logging'
      ]
    },
    {
      title: 'Autenticação OAuth2/JWT',
      icon: <Shield className="h-6 w-6" />,
      description: 'Sistema robusto de autenticação e autorização',
      features: [
        'OAuth2 Authorization Code Flow',
        'JWT tokens com assinatura',
        'Refresh tokens seguros',
        'Scopes granulares'
      ],
      implementation: [
        'Spring Security OAuth2',
        'JWT com RS256',
        'Token introspection',
        'RBAC (Role-Based Access Control)'
      ]
    },
    {
      title: 'Auditoria e Monitoramento',
      icon: <Eye className="h-6 w-6" />,
      description: 'Rastreamento completo de atividades de segurança',
      features: [
        'Logs de auditoria estruturados',
        'Rastreamento de acessos',
        'Detecção de anomalias',
        'Alertas de segurança'
      ],
      implementation: [
        'Spring Boot Actuator',
        'Custom audit events',
        'SIEM integration',
        'Real-time monitoring'
      ]
    }
  ];

  const securityStandards = [
    {
      standard: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      requirements: [
        'Criptografia de dados de cartão',
        'Rede segura e protegida',
        'Controle de acesso rigoroso',
        'Monitoramento contínuo'
      ]
    },
    {
      standard: 'LGPD',
      description: 'Lei Geral de Proteção de Dados',
      requirements: [
        'Consentimento explícito',
        'Minimização de dados',
        'Direito ao esquecimento',
        'Notificação de incidentes'
      ]
    },
    {
      standard: 'OWASP Top 10',
      description: 'Principais riscos de segurança em aplicações web',
      requirements: [
        'Injection prevention',
        'Broken authentication',
        'Sensitive data exposure',
        'Security misconfiguration'
      ]
    }
  ];

  const threatMitigation = [
    {
      threat: 'SQL Injection',
      mitigation: 'Prepared statements e validação de entrada',
      tools: ['JPA/Hibernate', 'Input validation', 'Parameterized queries']
    },
    {
      threat: 'Cross-Site Scripting (XSS)',
      mitigation: 'Sanitização de dados e Content Security Policy',
      tools: ['OWASP Java Encoder', 'CSP headers', 'Input sanitization']
    },
    {
      threat: 'Cross-Site Request Forgery (CSRF)',
      mitigation: 'CSRF tokens e validação de origem',
      tools: ['Spring Security CSRF', 'SameSite cookies', 'Origin validation']
    },
    {
      threat: 'Man-in-the-Middle',
      mitigation: 'TLS obrigatório e certificate pinning',
      tools: ['TLS 1.3', 'HSTS headers', 'Certificate transparency']
    },
    {
      threat: 'Brute Force',
      mitigation: 'Rate limiting e account lockout',
      tools: ['Resilience4j', 'Account lockout', 'CAPTCHA']
    },
    {
      threat: 'Data Breach',
      mitigation: 'Criptografia em repouso e controle de acesso',
      tools: ['Database encryption', 'Field-level encryption', 'Access controls']
    }
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Segurança</h1>
        <p className="text-xl text-muted-foreground">
          Múltiplas camadas de segurança para proteger transações financeiras.
        </p>
      </div>

      {/* Introduction */}
      <section className="prose prose-lg max-w-none">
        <p>
          A segurança é primordial em qualquer sistema que lida com transações financeiras. 
          O "pagamento-system" implementa diversas camadas de segurança seguindo as melhores 
          práticas da indústria e padrões de compliance como PCI DSS e LGPD.
        </p>
      </section>

      {/* Security Layers */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Camadas de Segurança</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {securityLayers.map((layer, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {layer.icon}
                  </div>
                  {layer.title}
                </CardTitle>
                <CardDescription>{layer.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-sm font-medium mb-2">Funcionalidades:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {layer.features.map((feature, idx) => (
                      <li key={idx}>• {feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <p className="text-sm font-medium mb-2">Implementação:</p>
                  <div className="flex flex-wrap gap-1">
                    {layer.implementation.map((impl, idx) => (
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

      {/* Security Standards */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Padrões de Compliance</h2>
        <p className="text-muted-foreground">
          O sistema foi projetado para atender aos principais padrões de segurança 
          e compliance da indústria financeira.
        </p>
        <div className="grid lg:grid-cols-3 gap-6">
          {securityStandards.map((standard, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{standard.standard}</CardTitle>
                <CardDescription>{standard.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium">Principais Requisitos:</p>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    {standard.requirements.map((req, idx) => (
                      <li key={idx}>• {req}</li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Threat Mitigation */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold">Mitigação de Ameaças</h2>
        <p className="text-muted-foreground">
          Estratégias implementadas para proteger contra as principais ameaças de segurança.
        </p>
        <div className="grid gap-4">
          {threatMitigation.map((item, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <span className="text-red-600">⚠️</span>
                  {item.threat}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-primary">Estratégia de Mitigação:</p>
                  <p className="text-sm text-muted-foreground">{item.mitigation}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-2">Ferramentas e Técnicas:</p>
                  <div className="flex flex-wrap gap-1">
                    {item.tools.map((tool, idx) => (
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

      {/* Security Architecture */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold">Arquitetura de Segurança</h2>
        <Card>
          <CardHeader>
            <CardTitle>Fluxo de Autenticação e Autorização</CardTitle>
            <CardDescription>
              Como a segurança é aplicada em cada camada do sistema
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium">Camada de Aplicação</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Validação de entrada rigorosa</li>
                  <li>• Sanitização de dados</li>
                  <li>• Rate limiting por endpoint</li>
                  <li>• Logs de auditoria detalhados</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Camada de Rede</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• TLS 1.3 obrigatório</li>
                  <li>• Firewall de aplicação (WAF)</li>
                  <li>• VPN para acesso administrativo</li>
                  <li>• Segmentação de rede</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Camada de Dados</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Criptografia em repouso</li>
                  <li>• Backup criptografado</li>
                  <li>• Controle de acesso granular</li>
                  <li>• Mascaramento de dados sensíveis</li>
                </ul>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-medium">Camada de Infraestrutura</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Containers com imagens assinadas</li>
                  <li>• Secrets management</li>
                  <li>• Monitoramento de integridade</li>
                  <li>• Patches automáticos</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Security Monitoring */}
      <section className="bg-accent rounded-lg p-6">
        <h3 className="text-lg font-semibold mb-4">Monitoramento de Segurança</h3>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-medium mb-2">Detecção</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Análise comportamental</li>
              <li>• Detecção de anomalias</li>
              <li>• Correlação de eventos</li>
              <li>• Machine learning</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Resposta</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Alertas em tempo real</li>
              <li>• Bloqueio automático</li>
              <li>• Escalação de incidentes</li>
              <li>• Forensics digitais</li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-2">Recuperação</h4>
            <ul className="space-y-1 text-muted-foreground">
              <li>• Plano de continuidade</li>
              <li>• Backup e restore</li>
              <li>• Comunicação de incidentes</li>
              <li>• Lições aprendidas</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <div className="flex justify-between pt-8 border-t">
        <Button asChild variant="outline">
          <Link to="/resiliencia">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Resiliência
          </Link>
        </Button>
        <Button asChild>
          <Link to="/deploy">
            Deploy
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}

