import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Users, BookOpen, Rocket, Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Brain, Heart, Shield, Zap } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header - Modern Navbar with Yellow Accent */}
      <header className="fixed top-4 left-1/2 z-50 w-auto -translate-x-1/2">
        <nav className="flex items-center gap-1 rounded-full border border-amber-200/50 bg-gradient-to-r from-amber-50 to-yellow-50 px-2 py-2 shadow-lg backdrop-blur-md md:gap-2 md:px-4">
          <Link 
            href="#home" 
            className="rounded-full px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground md:px-5"
          >
            Inicio
          </Link>
          <Link 
            href="#objetivos" 
            className="rounded-full px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground md:px-5"
          >
            Objetivos
          </Link>
          <Link 
            href="#projetos" 
            className="rounded-full px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground md:px-5"
          >
            Projetos
          </Link>
          <Link 
            href="#estrategias" 
            className="rounded-full px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary hover:text-primary-foreground md:px-5"
          >
            Estratégias
          </Link>
        </nav>
      </header>

      {/* Hero Section - Modern with Background Image */}
      <section id="home" className="relative min-h-screen overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.jpg"
            alt="Meninas estudando ciencias"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay with subtle color gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-50/90 via-white/85 to-teal-50/80" />
        </div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 h-32 w-32 rounded-full bg-amber-200/30 blur-3xl" />
        <div className="absolute bottom-40 right-10 h-40 w-40 rounded-full bg-teal-200/30 blur-3xl" />
        
        <div className="container relative mx-auto flex min-h-screen items-center justify-center px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-10 text-center">
            {/* Logo centralizada com destaque */}
            <div className="relative rounded-3xl border border-amber-100 bg-white/70 p-6 shadow-2xl backdrop-blur-sm md:p-10 lg:p-12">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Horizontal%201-A9MhAPcqNlyVmPeVup0FnnC6rR8QKM.png"
                alt="Meninas e Mulheres Inovadoras"
                width={600}
                height={240}
                className="h-auto w-72 md:w-96 lg:w-[500px]"
                priority
              />
            </div>
            
            <div className="max-w-2xl space-y-8">
              <p className="text-pretty text-xl font-medium text-primary md:text-2xl lg:text-3xl">
                Incentivando meninas nas areas de Ciencia, Tecnologia, Engenharia e Matematica
              </p>
              
              <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-teal-600 px-10 py-6 text-base shadow-lg transition-all hover:scale-105 hover:shadow-xl">
                Conheca o projeto
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-primary/40 p-2">
            <div className="h-3 w-1.5 rounded-full bg-primary/60" />
          </div>
        </div>
      </section>

      {/* About Section - Yellow Background */}
      <section className="bg-secondary py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {/* Text Content - Left Side */}
              <div className="space-y-8">
                <h2 className="text-balance text-3xl font-bold tracking-tight text-secondary-foreground md:text-4xl lg:text-5xl">
                  Sobre o Projeto
                </h2>
                <div className="space-y-5 text-pretty text-base leading-relaxed text-secondary-foreground/90 md:text-lg">
                  <p>
                    O projeto <strong>Meninas e Mulheres Inovadoras</strong> tem como objetivo incentivar a participacao feminina nas areas de Ciencia, 
                    Tecnologia, Engenharia e Matematica (STEM), promovendo igualdade de genero e ampliando oportunidades para que meninas 
                    e mulheres desenvolvam seus potenciais criativos e inovadores.
                  </p>
                  <p>
                    De acordo com dados da UNESCO (2024), as mulheres representam apenas <strong>33,3%</strong> das pesquisadoras no mundo e cerca de <strong>35%</strong> dos estudantes nas areas de STEM, evidenciando a persistencia de desigualdades e baixa representatividade feminina nesses campos.
                  </p>
                  <p>
                    Diante desse cenario, o projeto busca promover reflexoes sobre os desafios enfrentados pelas mulheres na ciencia e 
                    na inovacao, incentivando maior visibilidade, reconhecimento e apoio as suas contribuicoes.
                  </p>
                  <p>
                    A iniciativa envolve a comunidade academica da Unitins e estudantes da rede publica estadual do Tocantins em atividades 
                    extensionistas voltadas a valorizacao da presenca feminina na ciencia, na inovacao e no empreendedorismo.
                  </p>
                </div>
              </div>

              {/* Women in STEM Gallery - Right Side */}
              <div className="relative">
                {/* Central Brazilian Scientist - Main Focus */}
                <div className="relative mx-auto w-64 md:w-72 lg:w-80">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border-4 border-white shadow-2xl">
                    <Image
                      src="/women/carolinadejesus.png"
                      alt="Carolina de Jesus - Cientista brasileira"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1.5 text-xs font-medium text-primary-foreground shadow-lg">
                    Brasil
                  </div>
                </div>

                {/* Supporting Scientists - Smaller, Around the Main */}
                <div className="absolute -left-4 top-8 h-20 w-20 overflow-hidden rounded-2xl border-2 border-white shadow-lg md:h-24 md:w-24 lg:-left-8">
                  <Image
                    src="/women/ed.png"
                    alt="Ed - Cientista"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -right-4 top-16 h-18 w-18 overflow-hidden rounded-2xl border-2 border-white shadow-lg md:h-22 md:w-22 lg:-right-8">
                  <Image
                    src="/women/marie.png"
                    alt="Marie - Engenheira"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -left-2 bottom-20 h-16 w-16 overflow-hidden rounded-xl border-2 border-white shadow-lg md:h-20 md:w-20 lg:-left-6">
                  <Image
                    src="/women/mariele.png"
                    alt="Mariele - Matemática"
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="absolute -right-2 bottom-12 h-18 w-18 overflow-hidden rounded-xl border-2 border-white shadow-lg md:h-20 md:w-20 lg:-right-4">
                  <Image
                    src="/women/rosa.png"
                    alt="Rosa - Empreendedora"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 right-1/4 h-8 w-8 rounded-full bg-primary/20" />
                <div className="absolute bottom-8 left-1/4 h-6 w-6 rounded-full bg-amber-400/30" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Objectives Section - White Background */}
      <section id="objetivos" className="bg-background py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Nossos Objetivos
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Construindo um futuro mais inclusivo e diverso nas ciencias
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-balance">Incentivar meninas nas áreas STEM</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty leading-relaxed">
                    Despertar o interesse e paixão por ciência, tecnologia, engenharia e matemática desde cedo
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-balance">Promover igualdade de gênero</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty leading-relaxed">
                    Combater estereótipos e criar oportunidades iguais para todas as pessoas
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-balance">Fortalecer relação universidade-comunidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty leading-relaxed">
                    Conectar o conhecimento acadêmico com as necessidades da sociedade
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-2 transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                    <Lightbulb className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-balance">Estimular inovação e criatividade</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-pretty leading-relaxed">
                    Desenvolver habilidades criativas e pensamento inovador para o futuro
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section - Green Background */}
      <section id="projetos" className="bg-primary/5 py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Projetos e Acoes
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Iniciativas que transformam vidas e inspiram mudancas
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden border-2 transition-all hover:shadow-xl hover:border-primary">
                <div className="aspect-video bg-gray-200"></div>
              </Card>

              <Card className="overflow-hidden border-2 transition-all hover:shadow-xl hover:border-primary">
                <div className="aspect-video bg-gray-200"></div>
              </Card>

              <Card className="overflow-hidden border-2 transition-all hover:shadow-xl hover:border-primary">
                <div className="aspect-video bg-gray-200"></div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section - Modern with Gradients and School Background */}
      <section id="estrategias" className="relative bg-background py-24 md:py-36 overflow-hidden">
        {/* Subtle School Pattern Background */}
        <div className="absolute inset-0 opacity-[0.02] pointer-events-none bg-gradient-to-b from-transparent via-blue-100/10 to-transparent"></div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Estratégias para Incluir Meninas em STEAM
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Ações intencionais para quebrar estereótipos e criar oportunidades
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {/* Strategy 1 */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-blue-50 to-cyan-50 p-8 transition-all hover:border-blue-300 hover:shadow-xl">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-blue-100/50 blur-2xl group-hover:bg-blue-100/70 transition-colors" />
                <div className="relative space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-500/20">
                    <Brain className="h-8 w-8 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Estímulo desde a Infância</h3>
                    <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span><strong>Quebrar estereótipos:</strong> Incentivar meninas a explorar blocos de montar, jogos de lógica e robótica</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span><strong>Clubes de ciências:</strong> Criar espaços focados em meninas com metodologias como Aprendizagem Baseada em Projetos (ABP)</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span><strong>Projetos práticos:</strong> Mostrar aplicações reais da tecnologia e inovação</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Strategy 2 */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-amber-50 to-orange-50 p-8 transition-all hover:border-amber-300 hover:shadow-xl">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-amber-100/50 blur-2xl group-hover:bg-amber-100/70 transition-colors" />
                <div className="relative space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-amber-500/20">
                    <Heart className="h-8 w-8 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Mentoria e Representatividade</h3>
                    <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span><strong>Conexão com referências:</strong> Promover encontros com mulheres que atuam em STEM para inspirar</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span><strong>Visibilidade de modelos:</strong> Destacar cientistas e engenheiras mulheres, históricas e atuais</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-amber-500 font-bold">•</span>
                        <span><strong>Senso de pertencimento:</strong> Mostrar que existem carreiras possíveis e seguras para meninas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Strategy 3 */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-teal-50 to-emerald-50 p-8 transition-all hover:border-teal-300 hover:shadow-xl">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-teal-100/50 blur-2xl group-hover:bg-teal-100/70 transition-colors" />
                <div className="relative space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-teal-500/20">
                    <Shield className="h-8 w-8 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Ambientes Seguros e Acolhedores</h3>
                    <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-teal-500 font-bold">•</span>
                        <span><strong>Inclusão e respeito:</strong> Garantir locais que protejam e façam meninas se sentirem confortáveis</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-500 font-bold">•</span>
                        <span><strong>Liberdade para errar:</strong> Permitir que aprendam através de tentativa e erro em ambiente seguro</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-teal-500 font-bold">•</span>
                        <span><strong>Foco na colaboração:</strong> Incentivar trabalho em equipe e resolução de problemas sociais</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Strategy 4 */}
              <div className="group relative overflow-hidden rounded-2xl border-2 border-transparent bg-gradient-to-br from-purple-50 to-pink-50 p-8 transition-all hover:border-purple-300 hover:shadow-xl">
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-purple-100/50 blur-2xl group-hover:bg-purple-100/70 transition-colors" />
                <div className="relative space-y-6">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-purple-500/20">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">Iniciativas Específicas e Políticas Públicas</h3>
                    <ul className="space-y-3 text-sm text-foreground/80 leading-relaxed">
                      <li className="flex gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span><strong>Programas dedicados:</strong> Apoiar bolsas, olimpíadas e eventos para público feminino</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span><strong>Propriedade Intelectual:</strong> Desenvolver projetos que despertam criatividade e inovação</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-purple-500 font-bold">•</span>
                        <span><strong>Engajamento em redes:</strong> Utilizar mídias sociais para divulgar perfis e carreiras em STEM</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-20">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* About */}
            <div className="space-y-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <span className="text-lg font-bold">MMI</span>
              </div>
              <h3 className="font-semibold">Meninas e Mulheres Inovadoras</h3>
              <p className="text-pretty text-sm text-muted-foreground leading-relaxed">
                Um projeto da Unitins para promover a participação feminina nas áreas de STEM
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="font-semibold">Contato</h3>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>contato@mmi.unitins.br</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>(63) 3232-8000</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  <span>Universidade Estadual do Tocantins - Unitins<br />Palmas, TO</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold">Links Rápidos</h3>
              <nav className="flex flex-col space-y-3 text-sm text-muted-foreground">
                <Link href="#home" className="transition-colors hover:text-foreground">
                  Página Inicial
                </Link>
                <Link href="#objetivos" className="transition-colors hover:text-foreground">
                  Objetivos
                </Link>
                <Link href="#projetos" className="transition-colors hover:text-foreground">
                  Projetos
                </Link>
                <Link href="#estrategias" className="transition-colors hover:text-foreground">
                  Estratégias
                </Link>
              </nav>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h3 className="font-semibold">Redes Sociais</h3>
              <div className="flex gap-4">
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-muted/80"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-muted/80"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors hover:bg-muted/80"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </div>
              <p className="text-pretty text-xs text-muted-foreground leading-relaxed">
                Siga-nos para acompanhar nossas atividades e novidades
              </p>
            </div>
          </div>

          <div className="mt-12 border-t pt-8">
            <div className="mb-8 flex flex-wrap items-center justify-center gap-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_NIT-01-removebg-preview-8BK4Lm2ovgUUrKH8K4Q2tvqUcPIteB.png"
                alt="Núcleo de Inovação Tecnológica da Unitins"
                width={200}
                height={80}
                className="h-16 w-auto opacity-80 transition-opacity hover:opacity-100"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Unitins%20vertical-bspisR7Db9O3taYdN7gNkQHpqTmJi5.png"
                alt="Unitins"
                width={120}
                height={120}
                className="h-20 w-auto opacity-80 transition-opacity hover:opacity-100"
              />
            </div>
            <p className="text-center text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Meninas e Mulheres Inovadoras - Unitins. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
