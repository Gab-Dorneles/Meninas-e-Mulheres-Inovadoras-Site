import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Lightbulb, Users, BookOpen, Rocket, Mail, MapPin, Brain, Heart, Shield, Zap } from 'lucide-react'
import { ActionsCarousel } from '@/components/actions-carousel'

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
                Promovendo a participação feminina em Ciência, Tecnologia, Engenharia e Matemática.
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

      {/* Projects Section - Science Background */}
      <section id="projetos" className="relative bg-primary/5 py-24 md:py-36 overflow-hidden">
        {/* Decorative Science Background */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating atoms/molecules */}
          <svg className="absolute top-10 left-10 w-24 h-24 text-primary/10" viewBox="0 0 100 100" fill="none">
            <circle cx="50" cy="50" r="8" fill="currentColor" />
            <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="2" />
            <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="2" transform="rotate(60 50 50)" />
            <ellipse cx="50" cy="50" rx="40" ry="15" stroke="currentColor" strokeWidth="2" transform="rotate(120 50 50)" />
            <circle cx="90" cy="50" r="4" fill="currentColor" />
            <circle cx="10" cy="50" r="4" fill="currentColor" />
            <circle cx="70" cy="85" r="4" fill="currentColor" />
          </svg>
          
          {/* Math symbols */}
          <div className="absolute top-20 right-20 text-6xl font-light text-primary/8 select-none">+</div>
          <div className="absolute top-40 right-40 text-4xl font-light text-cyan-500/10 select-none">x</div>
          <div className="absolute bottom-32 left-20 text-5xl font-light text-primary/8 select-none">=</div>
          <div className="absolute bottom-20 right-32 text-3xl font-light text-teal-500/10 select-none">%</div>
          
          {/* Pi symbol */}
          <div className="absolute top-1/3 left-[5%] text-7xl font-serif text-primary/6 select-none">π</div>
          
          {/* Sigma */}
          <div className="absolute bottom-1/4 right-[8%] text-6xl font-serif text-cyan-500/8 select-none">Σ</div>
          
          {/* DNA helix suggestion */}
          <svg className="absolute bottom-10 left-1/4 w-16 h-32 text-primary/8" viewBox="0 0 40 80" fill="none">
            <path d="M10 0 Q30 20 10 40 Q-10 60 10 80" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M30 0 Q10 20 30 40 Q50 60 30 80" stroke="currentColor" strokeWidth="2" fill="none" />
            <line x1="10" y1="10" x2="30" y2="10" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="25" x2="28" y2="25" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="40" x2="30" y2="40" stroke="currentColor" strokeWidth="1.5" />
            <line x1="12" y1="55" x2="28" y2="55" stroke="currentColor" strokeWidth="1.5" />
            <line x1="10" y1="70" x2="30" y2="70" stroke="currentColor" strokeWidth="1.5" />
          </svg>
          
          {/* Floating circles/dots */}
          <div className="absolute top-1/2 right-10 w-3 h-3 rounded-full bg-yellow-400/20"></div>
          <div className="absolute top-1/4 right-1/4 w-2 h-2 rounded-full bg-cyan-400/25"></div>
          <div className="absolute bottom-1/3 left-1/3 w-4 h-4 rounded-full bg-primary/10"></div>
          <div className="absolute top-2/3 left-10 w-2 h-2 rounded-full bg-teal-400/20"></div>
          
          {/* Light bulb idea */}
          <svg className="absolute top-1/4 left-1/2 w-12 h-12 text-yellow-400/15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm2 14h-4v-1h4v1zm0-2h-4v-1h4v1zm1.5-4.33l-.83.58V12h-5.34v-1.75l-.83-.58C7.54 8.95 7 8.03 7 9c0 2.76 2.24 5 5 5s5-2.24 5-5c0 .03-.54.95-1.5 1.67z"/>
          </svg>
          
          {/* Gear/cog */}
          <svg className="absolute bottom-1/4 left-[15%] w-14 h-14 text-primary/6" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
          </svg>
          
          {/* Beaker/flask */}
          <svg className="absolute top-16 right-1/3 w-10 h-10 text-cyan-500/10" viewBox="0 0 24 24" fill="currentColor">
            <path d="M19.8 18.4L14 10.67V6.5l1.35-1.69c.26-.33.03-.81-.39-.81H9.04c-.42 0-.65.48-.39.81L10 6.5v4.17L4.2 18.4c-.49.66-.02 1.6.8 1.6h14c.82 0 1.29-.94.8-1.6z"/>
          </svg>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-6xl space-y-16">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Projetos e Ações
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Iniciativas que Transformam Vidas e Inspiram Mudanças
              </p>
            </div>

            {/* Actions Carousel */}
            <div className="space-y-8">
              <h3 className="text-center text-xl font-semibold text-primary md:text-2xl">
                Conheça um pouco das ações realizadas
              </h3>
              <ActionsCarousel />
            </div>
          </div>
        </div>
      </section>

      {/* Strategies Section - Clean Layout with Images */}
      <section id="estrategias" className="bg-background py-24 md:py-36">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-20">
            <div className="text-center">
              <h2 className="text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                Estratégias para Incluir Meninas em STEAM
              </h2>
              <p className="mt-6 text-pretty text-lg text-muted-foreground md:text-xl">
                Ações intencionais para quebrar estereótipos e criar oportunidades
              </p>
            </div>

            {/* Strategy 1 */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-80">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Daniel%20Batista-f08a4Wtg1ZCcy7KHQ4c6WSkLQzb2hN.jpg"
                  alt="Criança aprendendo sobre ciência"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold md:text-2xl">Estímulo desde a Infância</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Quebrar estereótipos:</strong> Incentivar meninas a explorar blocos de montar, jogos de l��gica e robótica</li>
                  <li><strong className="text-foreground">Clubes de ciências:</strong> Criar espaços focados em meninas com metodologias como Aprendizagem Baseada em Projetos (ABP)</li>
                  <li><strong className="text-foreground">Projetos práticos:</strong> Mostrar aplicações reais da tecnologia e inovação</li>
                </ul>
              </div>
            </div>

            {/* Strategy 2 */}
            <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">
              <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-80">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Dom%20Alano-KxtVKoZUe7U6dlRpg1wlsnMw3rgG3K.jpg"
                  alt="Grupo de estudantes em mentoria"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Heart className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold md:text-2xl">Mentoria e Representatividade</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Conexão com referências:</strong> Promover encontros com mulheres que atuam em STEM para inspirar</li>
                  <li><strong className="text-foreground">Visibilidade de modelos:</strong> Destacar cientistas e engenheiras mulheres, históricas e atuais</li>
                  <li><strong className="text-foreground">Senso de pertencimento:</strong> Mostrar que existem carreiras possíveis e seguras para meninas</li>
                </ul>
              </div>
            </div>

            {/* Strategy 3 */}
            <div className="flex flex-col items-center gap-8 md:flex-row md:gap-12">
              <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-80">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Oficina%20Dom%20Alano-67BkVQvevUrz5QOgpdXZHhTCG9DCn4.jpg"
                  alt="Ambiente de aprendizado colaborativo"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold md:text-2xl">Ambientes Seguros e Acolhedores</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Inclusão e respeito:</strong> Garantir locais que protejam e façam meninas se sentirem confortáveis</li>
                  <li><strong className="text-foreground">Liberdade para errar:</strong> Permitir que aprendam através de tentativa e erro em ambiente seguro</li>
                  <li><strong className="text-foreground">Foco na colaboração:</strong> Incentivar trabalho em equipe e resolução de problemas sociais</li>
                </ul>
              </div>
            </div>

            {/* Strategy 4 */}
            <div className="flex flex-col items-center gap-8 md:flex-row-reverse md:gap-12">
              <div className="relative h-64 w-full shrink-0 overflow-hidden rounded-2xl md:h-72 md:w-80">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Campus%20Augustinopolis-JAP3bYOVIWn1Kt7RaWydQOWPf3nZF6.jpg"
                  alt="Exposição de projetos científicos"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold md:text-2xl">Iniciativas Específicas e Políticas Públicas</h3>
                </div>
                <ul className="space-y-3 text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">Programas dedicados:</strong> Apoiar bolsas, olimpíadas e eventos para público feminino</li>
                  <li><strong className="text-foreground">Propriedade Intelectual:</strong> Desenvolver projetos que despertam criatividade e inovação</li>
                  <li><strong className="text-foreground">Engajamento em redes:</strong> Utilizar mídias sociais para divulgar perfis e carreiras em STEM</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Compact */}
      <footer className="border-t bg-muted/30 py-6">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="flex items-center gap-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo_NIT-01-removebg-preview-8BK4Lm2ovgUUrKH8K4Q2tvqUcPIteB.png"
                alt="NIT Unitins"
                width={120}
                height={48}
                className="h-10 w-auto opacity-70"
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Unitins%20vertical-bspisR7Db9O3taYdN7gNkQHpqTmJi5.png"
                alt="Unitins"
                width={60}
                height={60}
                className="h-12 w-auto opacity-70"
              />
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Mail className="h-3 w-3" />
                nit@unitins.br
              </span>
              <span className="hidden sm:inline">|</span>
              <span className="flex items-center gap-1">
                <MapPin className="h-3 w-3" />
                Câmpus Palmas - Quadra 109 Norte
              </span>
            </div>
            <p className="text-xs text-muted-foreground/70">
              &copy; {new Date().getFullYear()} Meninas e Mulheres Inovadoras - Unitins
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
