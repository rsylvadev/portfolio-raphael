// CSS
import './App.css';

// React
import { useState } from 'react';

// UI Components
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from './components/ui/card';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Button } from './components/ui/button';

// Custom Components
import Navbar from './components/Navbar';
import FadeInSection from './components/FadeInSection';
import Modal from './components/Modal';

// Icons - React Icons
// Font Awesome
import {
    FaIdBadge,
    FaWhatsapp,
    FaCode,
    FaLaptopCode,
    FaDatabase,
    FaServer,
    FaTools,
    FaProjectDiagram,
    FaGlobeAmericas,
    FaCertificate,
    FaMobileAlt,
    FaShieldAlt,
    FaDocker,
    FaLanguage,
    FaBookOpen,
    FaEnvelope,
    FaBookmark,
    FaExclamationTriangle,
    FaUserCheck,
    FaGithub,
    FaExternalLinkAlt
} from 'react-icons/fa'

// Feather Icons
import {
    FiHome,
    FiBriefcase,
    FiBookOpen,
    FiAward,
    FiCpu,
    FiFolder,
    FiMail,
    FiChevronDown
} from 'react-icons/fi'

import {
    SiReact,
    SiGraphql
} from '@icons-pack/react-simple-icons'

import { motion } from "framer-motion"

export default function App() {
    const [modalOpen, setModalOpen] = useState(false)
    const [selectedProject, setSelectedProject] = useState(null)

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const BASE_PATH = import.meta.env.BASE_URL

    const validarCamposInterno = () => {
        if (!name.trim() || !phone.trim() || !email.trim() || !message.trim()) {
            setErro("Por favor, preencha todos os campos antes de enviar.")
            return false
        }

        // Validação simples de e-mail
        if (!email.includes("@")) {
            setErro("Informe um e-mail válido.")
            return false
        }

        return true
    }

    const [loading, setLoading] = useState(false)
    const [erro, setErro] = useState("")

    const enviarParaWhatsapp = () => {

        // Resetar mensagem de erro
        setErro("")

        if (!validarCamposInterno()) return

        setLoading(true)

        const texto = `Olá, meu nome é ${name}. ${message} | Telefone: ${phone}, E-mail: ${email}`
        const numero = '5516981209086'
        const link = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`

        // Simular breve carregamento (para aparecer o spinner)
        setTimeout(() => {
            window.open(link, '_blank')
            setLoading(false)
        }, 700)
    }

    // 🔹 State e função do accordion
    const [aberto, setAberto] = useState(null)

    const toggle = (index) => {
        setAberto(aberto === index ? null : index)
    }

    const [expandedImage, setExpandedImage] = useState(null);

    const experiencias = [

  {
            cargo: 'Estagiario Administrativo',
            empresa: 'Escola Técnica Estadual José Martimiano da Silva',
            periodo: 'Maio 2019 - Dez 2019',
            local: 'Ribeirão Preto, SP · Presencial',
            descricao: `Organização e controle de documentações;
Atendimentos telefônicos, via email ou redes sociais;
Emissão de notas fiscais;
Organização, preenchimento e controle de planilhas;
Elaboração de relatórios, cartas, atas e outros documentos;.`,
            descricaoLonga: `Organização e controle de documentações;
Atendimentos telefônicos, via email ou redes sociais;
Emissão de notas fiscais;
Organização, preenchimento e controle de planilhas;
Elaboração de relatórios, cartas, atas e outros documentos;`,
        },


        {
            cargo: 'Especialista de Atendimento',
            empresa: 'Atento Brasil S.A',
            periodo: 'Jun 2020 - Dez 2021',
            local: 'Ribeirão Preto, SP · Presencial',
            descricao: `Atendimento Especializado: Realiza atendimento receptivo, via voz ou WhatsApp, focado em clientes varejistas e de alto valor.
Resolução de Problemas: Esclarece dúvidas financeiras, auxilia no cancelamento de contas e resolve questões técnicas, incluindo serviços de fibra e banda larga.
Análise Financeira: Capacidade analítica para realizar cálculos como pro-rata e procedimentos de antecipação de recebíveis.
.`,
            descricaoLonga: `Atendimento Especializado: Realiza atendimento receptivo, via voz ou WhatsApp, focado em clientes varejistas e de alto valor.
Resolução de Problemas: Esclarece dúvidas financeiras, auxilia no cancelamento de contas e resolve questões técnicas, incluindo serviços de fibra e banda larga.
Análise Financeira: Capacidade analítica para realizar cálculos como pro-rata e procedimentos de antecipação de recebíveis.
.`,
        },
     
        {
            cargo: 'Operador de Cobrança',
            empresa: 'TSP Recuperadora de Crédito',
            periodo: 'Mar 2022 - Jun 2022',
            local: 'Ribeirão Preto, SP · Presencial',
            descricao: `Realiza cobrança de pessoa física e jurídica, negocia formas de pagamento e analisa títulos. Registra informações de negociação, controla planilhas e atualiza cadastros.`,
            descricaoLonga: `Realiza cobrança de pessoa física e jurídica, negocia formas de pagamento e analisa títulos. Registra informações de negociação, controla planilhas e atualiza cadastros,
            voltada para a pré-implantação de sistemas.`,
        },
        {
            cargo: 'Leiturista',
            empresa: 'Cleanmax Ambiental e Betta Consultoria Gestão e Serviços Ltda',
            periodo: 'Jun 2022 - Jan 2026',
            local: 'Serrana, SP · Presencial',
            descricao: `Responsável por percorrer rotas diárias para registrar o consumo nos hidrômetros dos imóveis, garantindo a emissão correta da fatura. Ele usa dispositivos eletrônicos para registrar os dados, identifica vazamentos, fraudes ou irregularidades, além de fornecer orientações básicas aos consumidores.`,
            descricaoLonga: `Responsável por percorrer rotas diárias para registrar o consumo nos hidrômetros dos imóveis, garantindo a emissão correta da fatura. Ele usa dispositivos eletrônicos para registrar os dados, identifica vazamentos, fraudes ou irregularidades, além de fornecer orientações básicas aos consumidores.`,
        },
       
    ]

    const formacoes = [

{
            titulo: "Tecnico em Logistica",
            instituicao: "Escola Técnica Estadual Ângelo Cavalheiro",
            periodo: "2015 - 2016",
            descricaoLonga: `Formação focada capacitar prática para gerenciar o fluxo de materiais e produtos, desde a matéria-prima até a entrega ao consumidor final. Ele prepara para atuar em armazenamento, transporte, distribuição e gestão de estoques, com objetivo de reduzir custos e otimizar a eficiência operacional das empresas. .`,
        },



        {
            titulo: "Tecnico em Recursos Humanos",
            instituicao: "Escola Técnica Estadual Ângelo Cavalheiro",
            periodo: "2018 - 2019",
            descricaoLonga: `Formação focada capacitar profissionais para as rotinas operacionais e administrativas da gestão de pessoas, com foco prático em departamento pessoal, recrutamento e seleção, benefícios e legislação trabalhista .`,
        },
        {
            titulo: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
            instituicao: "Faculdade Metropolitana do Estado de São Paulo - FAMEESP",
            periodo: "2022 - 2025",
            descricaoLonga: `Base sólida em Analise, programação, estruturas de banco de dados, infraestrutura, lógica aplicada e desenvolvimento de aplicações reais.`,
        }
    ]

    const certificados = [
        {
            nome: "Web Designer",
            org: "Prepara Cursos Profissionalizantes",
            ano: 2009,
           },
        {
            nome: "Engenharia de Software",
            org: "Faculdade Metropolitana do Estado de São Paulo - FAMEESP",
            ano: 2024,
           },
        {
            nome: "Administração em Banco de Dados",
            org: "Faculdade Metropolitana do Estado de São Paulo - FAMEESP",
            ano: 2023,
            },
        {
            nome: "AI-900 - Fundamentos de IA no Azure",
            org: "Fundação bradesco            ",
            ano: 2025,
        },
        {
            nome: "Análise de Dados - Microsoft Power BI",
            org: "Fundação Bradesco",
            ano: 2024,
            },
        
    ]

    const skills = [
        {
            icon: <FaCode className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Backend",
            items: " Java • Web API • Servidores• Python• Frameworks•",
            level: "45%" // <- nível de proficiência
        },
        {
            icon: <FaLaptopCode className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Frontend",
            items: " • HTML • CSS • JavaScript • TypeScript • React",
            level: "60%"
        },
        {
            icon: <FaDatabase className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Banco de Dados",
            items: "SQL Server • MySQL • •",
            level: "50%"
        },
      
        {
            icon: <FaTools className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Ferramentas",
            items: "Microsoft Visual Studio • VS Code • Git • GitHub • Power BI•  ",
            level: "60%"
        },
        {
            icon: <FaGlobeAmericas className="text-4xl text-blue-500 mx-auto mb-4" />,
            title: "Idiomas",
            items: "Inglês — estudo contínuo, com foco em leitura técnica e conversação",
            level: "40%"
        }
    ]

    const learning = [
        {
            icon: <FaMobileAlt className="text-4xl text-green-500 mx-auto mb-4" />,
            title: "ERP/SAP",
            items: "Desenvolvimento de apps mobile nativos para iOS e Android",
            level: "Em Andamento"
        },
      
        {
            icon: <SiReact className="text-4xl mx-auto mb-4" style={{ color: '#61DAFB' }} />,
            title: "Linux",
            items: "Aprofundando em Sistema Operacional",
            level: "Em andamento"
        },
        {
            icon: <FaLanguage className="text-4xl text-yellow-500 mx-auto mb-4" />,
            title: "Inglês",
            items: "Estudo contínuo de inglês técnico e conversação pela WiseUp",
            level: "Em andamento"
        }
    ]

    const projetos = [
        {
            title: 'Parcelly',
            description: 'Parcelly é um aplicativo de cálculo de parcelas desenvolvido para computadores. Ele funciona integrado ao Excel, sendo necessário ter o programa instalado para utilizar suas funcionalidades. O app foi criado em Python e gera automaticamente uma planilha com os resultados, exibindo o valor de cada parcela e o número de meses correspondentes. Além disso, há a possibilidade de futura adaptação para dispositivos móveis, ampliando o acesso e a praticidade para os usuários.',
            technologies: ['Python', 'Windows Desktop', 'Inno', 'VScode'],
            github: null,
            live: '', // se houver versão online
             icon: <FaServer className="text-3xl mb-2 text-blue-500" />,
     
          
           
            level: 'Fase Beta'
        },
        {
            title: 'App de Planejamento financeiro',
            description: 'O aplicativo de planejamento financeiro, atualmente em fase de desenvolvimento, tem como principal contribuição oferecer uma solução prática e acessível para que os usuários possam organizar suas finanças de forma clara e eficiente. A proposta é permitir que qualquer pessoa, independentemente de seu nível de conhecimento em finanças, consiga registrar seus gastos e receitas, criar orçamentos personalizados e acompanhar metas financeiras de maneira simples e intuitiva.',
            problem: 'Apesar de seu potencial, o projeto pode enfrentar alguns desafios. A experiência do usuário pode ser prejudicada caso a interface se torne complexa ou exija muitas etapas para registrar informações, o que pode reduzir o engajamento. Existe também o risco de baixa retenção, já que usuários podem abandonar o app se não perceberem valor imediato ou se não houver mecanismos de motivação para uso contínuo.',
            approach: 'O desenvolvimento do aplicativo de planejamento financeiro será conduzido de forma gradual e estruturada, com foco em oferecer uma experiência simples e eficiente para o usuário. A abordagem inicial privilegia funcionalidades essenciais, como o registro de gastos e receitas, a criação de orçamentos e o acompanhamento de metas financeiras, garantindo que o usuário perceba valor imediato desde os primeiros usos.',
            contribution: 'O aplicativo de planejamento financeiro busca contribuir de maneira significativa para a vida dos usuários, oferecendo não apenas ferramentas de organização, mas também conhecimento e autonomia na gestão do dinheiro. Sua principal contribuição está em tornar o controle financeiro acessível e simples, permitindo que qualquer pessoa, independentemente de seu nível de experiência, consiga visualizar seus hábitos de consumo, estabelecer metas claras e acompanhar sua evolução ao longo do tempo.',
            technologies: ['Linux', 'Windows Desktop', 'SQL Server','Mysql', 'HTML, CSS, Javascript' ],
           
            live: '', // se houver versão online
            icon: <FaServer className="text-3xl mb-2 text-blue-500" />,
     
            level: 'Em andamento'
        },
        
    ]

    const projetosFuturos = [
        {
            title: 'Sistema & App de Alerta em Tempo Real',
            description: 'Sistema de monitoramento de ocorrências em escolas com alertas sonoros, localização do local via GPS, e aplicativo mobile para envio de Alertas, informações importantes e chat.',
            problem: 'Melhorar a segurança escolar e permitir resposta rápida dos Serviços de Emergências (GCM). As escolas enfrentam dificuldades ' +
                'para acionar rapidamente os serviços de emergência em situações críticas. Isso reduz a capacidade de resposta e compromete a segurança de ' +
                'alunos e funcionários. Muitas prefeituras ainda não adotam soluções tecnológicas que poderiam agilizar esse atendimento.',
            approach: 'Planejo criar backend em .NET 8 WebAPI, app em React Native e alertas push.',
            contribution: 'Projeto proposto sem fins lucrativos. Ainda será submetido à prefeitura para autorização e avaliação de adesão antes da possível implementação.',
            technologies: ['ASP.NET Core 8', 'WebAPI', 'React Native', 'SQL Server', 'Push Notifications'],
            github: null,
            live: null,
            icon: <FaShieldAlt className="text-3xl mb-2 text-red-500" />,
            images: null,
            level: "Planejamento"
        }
    ]

    const openModal = (project) => {
        setSelectedProject(project)
        setModalOpen(true)
    }

    const closeModal = () => {
        setSelectedProject(null)
        setModalOpen(false)
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* NAVBAR */}
            <Navbar />

            {/* HERO */}
            <section
                id="inicio"
                className="relative min-h-screen md:h-screen flex items-start md:items-center justify-center bg-black/50 text-white px-6 pt-10"
            >
                <div className="flex flex-col md:flex-row items-center md:items-center gap-10">

                    {/* FOTO */}
                    <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden shadow-xl border-4 border-white/20 flex items-center justify-center">
                        <img
                            src={BASE_PATH + "foto.jpg"}
                            alt="Raphael Augusto da Silva"
                            className="min-w-full min-h-full object-cover"
                        />
                    </div>

                    {/* TEXTO */}
                    <div className="text-center md:text-left max-w-xl">
                        <h1 className="text-5xl font-bold mb-3">Raphael Augusto da Silva</h1>

                        <p className="text-xl mb-4">
                            Desenvolvedor Full Stack • Analista de Sistemas • Administrador em Banco de Dados
                        </p>

                        <p className="text-gray-300 mb-8">
                      Minha trajetória na área de tecnologia começou em 2009, quando concluí um curso profissionalizante de Web Design. Desde então, desenvolvi uma paixão por TI e venho me dedicando a pequenos cursos e projetos que ampliaram minha experiência prática. Em 2022, iniciei o curso de Tecnólogo em Análise e Desenvolvimento de Sistemas, o que me permitiu aprofundar meus estudos e consolidar minha base acadêmica. Entre 2023 e 2024, conquistei certificações em Administração de Banco de Dados e Engenharia de Software, fortalecendo minha formação técnica. Em 2025, finalizei minha graduação como Tecnólogo em Análise e Desenvolvimento de Sistemas. Atualmente, sigo em constante aprendizado, buscando aprimorar meus conhecimentos e acompanhar as tendências e inovações da área de tecnologia.
                        </p>

                        <div className="flex gap-4 justify-center md:justify-start">

                            {/* Botão padrão */}
                            <Button
                                onClick={() => window.scrollTo({ top: 800, behavior: "smooth" })}
                                className="flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:-translate-y-1 active:scale-95"
                            >
                                <FaIdBadge />
                                Ver Portfólio
                            </Button>

                            {/* Botão WhatsApp */}
                            <Button
                                asChild
                                className="flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:-translate-y-1 active:scale-95"
                            >
                                <a
                                    href="https://wa.me/5516981209086"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaWhatsapp className="text-xl" />
                                    Fale comigo
                                </a>
                            </Button>

                            {/* Botão E-mail */}
                            <Button
                                asChild
                                className="flex items-center gap-2 transition-all duration-300 hover:brightness-125 hover:-translate-y-1 active:scale-95"
                            >
                                <a
                                    href="mailto:raphaelsilvadeveloper@gmail.com"
                                    rel="noopener noreferrer"
                                >
                                    <FaEnvelope className="text-xl" />
                                    E-mail
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Experiencias */}
            <FadeInSection>
                <section id="experiencias" className="py-20 container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <FiBriefcase className="text-blue-400" />
                        Experiências
                    </h2>

                    {/* Barra Vertical Animada */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-blue-500 ml-4 origin-top"
                    >
                        {experiencias.map((exp, index) => (
                            <div key={index} className="mb-8 ml-6 relative">

                                {/* Bolinha Animada */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -left-4 top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
                                ></motion.span>

                                {/* Botão */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full text-left"
                                >
                                    <h3 className="text-xl font-semibold flex items-center justify-between">
                                        {exp.cargo}
                                        <span
                                            className={`text-blue-600 text-xl transition-transform duration-300 ${aberto === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        >
                                            <FiChevronDown />
                                        </span>
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {exp.empresa} · {exp.periodo} · {exp.local}
                                    </p>
                                </button>

                                {/* Conteúdo expandido */}
                                {aberto === index && (
                                    <div className="mt-3 p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                                        <p className="text-gray-700 whitespace-pre-line">
                                            {exp.descricaoLonga ||
                                                "Em breve adicionarei mais detalhes sobre esta experiência."}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </section>
            </FadeInSection>

            {/* Formação */}
            <FadeInSection>
                <section id="formacoes" className="py-20 container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <FiBookOpen className="text-blue-400" />
                        Formação
                    </h2>

                    {/* Barra Vertical Animada */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-blue-500 ml-4 origin-top"
                    >
                        {formacoes.map((form, index) => (
                            <div key={index} className="mb-8 ml-6 relative">

                                {/* Bolinha Animada */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -left-4 top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
                                ></motion.span>

                                {/* Botão */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full text-left"
                                >
                                    <h3 className="text-xl font-semibold flex items-center justify-between">
                                        {form.titulo}
                                        <span
                                            className={`text-blue-600 text-xl transition-transform duration-300 ${aberto === index ? "rotate-180" : "rotate-0"
                                                }`}
                                        >
                                            <FiChevronDown />
                                        </span>
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {form.instituicao} · {form.periodo}
                                    </p>
                                </button>

                                {/* Conteúdo expandido */}
                                {aberto === index && (
                                    <div className="mt-3 p-4 bg-gray-100 rounded-lg shadow-sm border border-gray-300">
                                        <p className="text-gray-700 whitespace-pre-line">
                                            {form.descricaoLonga}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </motion.div>
                </section>
            </FadeInSection>

            {/* Cursos e Certificados */}
            <FadeInSection>
                <section id="certificacoes" className="py-20 container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <FiAward className="text-blue-400" />
                        Certificados
                    </h2>

                    {/* Barra Vertical Animada */}
                    <motion.div
                        initial={{ opacity: 0, scaleY: 0 }}
                        whileInView={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="relative border-l-2 border-blue-500 ml-4 origin-top"
                    >
                        {certificados.map((cert, index) => (
                            <div key={index} className="mb-8 ml-6 relative">

                                {/* Bolinha Animada */}
                                <motion.span
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        duration: 0.4,
                                        delay: index * 0.15,
                                        ease: "easeOut"
                                    }}
                                    viewport={{ once: true }}
                                    className="absolute -left-4 top-4 w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"
                                ></motion.span>

                                <div>
                                    <h3 className="text-xl font-semibold flex items-center justify-between">
                                        {cert.nome}

                                        {/* Botão (abre certificado com ícone) */}
                                        {cert.link && (
                                            <a
                                                href={cert.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-600 hover:text-blue-800"
                                            >
                                                <FaCertificate size={20} />
                                            </a>
                                        )}
                                    </h3>

                                    <p className="text-sm text-gray-500">
                                        {cert.org} · {cert.ano}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </section>
            </FadeInSection>

            {/* Skills com % */}
            <FadeInSection>
                {(isVisible) => (
                    <section id="skills" className="py-20 container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                            <FiCpu className="text-blue-400" />
                            Skills
                        </h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
                                    <div className="flex flex-col items-center mb-4">
                                        {skill.icon}
                                        <h3 className="text-xl font-semibold mt-2">{skill.title}</h3>
                                    </div>

                                    {/* texto de tecnologias */}
                                    <p className="text-sm text-gray-500 mb-4">{skill.items}</p>

                                    {/* Barra animada */}
                                    <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
                                        <div
                                            className="bg-blue-400 h-4 rounded-full transition-all duration-[1500ms] ease-out"
                                            style={{
                                                width: isVisible ? (skill.level || "70%") : "0%",
                                            }}
                                        ></div>
                                    </div>

                                    {/* texto do % */}
                                    <p className="text-sm text-right mt-1 font-medium">
                                        {skill.level || "70%"}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </FadeInSection>

            {/* Estudando */}
            <FadeInSection>
                <section id="learning" className="py-20 container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <FaBookOpen className="text-green-400" />
                        Aprendizado atual
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {learning.map((item, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-105 hover:shadow-xl">
                                <div className="flex flex-col items-center mb-4">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                                </div>

                                <p className="text-sm text-gray-500 mb-4">{item.items}</p>

                                <p className="text-sm text-right mt-1 font-medium text-green-500">
                                    {item.level}
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </FadeInSection>

            {/* Projetos */}
            <FadeInSection>
                <section id="projetos" className="py-20 container mx-auto px-4">
                    <div className="flex flex-col items-center gap-1">
                        <h2 className="text-4xl font-bold flex items-center gap-3">
                            <FaLaptopCode className="text-blue-400" />
                            Projetos
                        </h2>
                        <p className="text-sm text-gray-500">Clique para saber mais</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {projetos.map((proj, index) => (
                            <Card
                                key={index}
                                className="hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                                onClick={() => openModal(proj)}
                            >
                                <CardHeader>
                                    {proj.icon}
                                    <CardTitle>{proj.title}</CardTitle>
                                    <CardDescription>{proj.technologies.join(' • ')}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{proj.description}</p>
                                    <p className="text-sm text-right mt-2 font-medium text-green-500">
                                        {proj.level}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </section>
            </FadeInSection>

            {/*
<FadeInSection>
    <section id="projetos-futuros" className="py-20 container mx-auto px-4">
        <div className="flex flex-col items-center gap-1">
            <h2 className="text-4xl font-bold flex items-center gap-3">
                <FaLaptopCode className="text-red-400" />
                Projetos Futuros
            </h2>
            <p className="text-sm text-gray-500">Ideias futuras</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
            {projetosFuturos.map((proj, index) => (
                <Card
                    key={index}
                    className="hover:shadow-lg transition-transform hover:scale-105 cursor-pointer"
                    onClick={() => openModal(proj)}
                >
                    <CardHeader>
                        {proj.icon}
                        <CardTitle>{proj.title}</CardTitle>

                        {proj.technologies && proj.technologies.length > 0 && (
                            <CardDescription>
                                {proj.technologies.join(' • ')}
                            </CardDescription>
                        )}
                    </CardHeader>

                    <CardContent>
                        <p>{proj.description}</p>

                        <p className="text-sm text-right mt-2 font-medium text-green-500">
                            {proj.level}
                        </p>
                    </CardContent>
                </Card>
            ))}
        </div>
    </section>
</FadeInSection>
*/}

            {/* Modal Projetos */}
            {selectedProject && (
                <Modal
                    isOpen={modalOpen}
                    onClose={closeModal}
                    title={selectedProject.title}
                    images={selectedProject.images}
                    onImageClick={setExpandedImage}   // <<<<< ENVIA PARA O MODAL
                >
                    <div className="space-y-6">

                        {/* Problema */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaExclamationTriangle className="text-yellow-500" />
                                Problema / Objetivo
                            </p>
                            <p className="text-gray-700 mt-1">{selectedProject.problem}</p>
                        </div>

                        {/* Abordagem */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaTools className="text-blue-500" />
                                Abordagem / Processo
                            </p>
                            <p className="text-gray-700 mt-1">{selectedProject.approach}</p>
                        </div>

                        {/* Tecnologias */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaLaptopCode className="text-green-600" />
                                Tecnologias utilizadas
                            </p>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {selectedProject.technologies?.map((tech, i) => (
                                    <span
                                        key={i}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* GitHub */}
                        {selectedProject.github && (
                            <p className="flex items-center gap-2">
                                <FaGithub className="text-gray-800" />
                                Código-fonte:{" "}
                                <a
                                    href={selectedProject.github}
                                    target="_blank"
                                    className="text-blue-600 underline"
                                >
                                    GitHub
                                </a>
                            </p>
                        )}

                        {/* Projeto online */}
                        {selectedProject.live && (
                            <p className="flex items-center gap-2">
                                <FaExternalLinkAlt className="text-gray-800" />
                                Projeto online:{" "}
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    className="text-blue-600 underline"
                                >
                                    Acessar
                                </a>
                            </p>
                        )}

                        {/* Contribuição */}
                        <div>
                            <p className="font-semibold flex items-center gap-2 text-lg">
                                <FaUserCheck className="text-purple-600" />
                                Minha contribuição
                            </p>
                            <p className="text-gray-700 mt-1">{selectedProject.contribution}</p>
                        </div>

                        {/* Imagens */}
                        {selectedProject.images && selectedProject.images.length > 0 && (
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                                {selectedProject.images.map((img, i) => (
                                    <img
                                        key={i}
                                        src={img}
                                        alt={`Screenshot ${i}`}
                                        className="w-full h-32 object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform"
                                        onClick={() => setExpandedImage(img)}
                                    />
                                ))}
                            </div>
                        )}

                        {/* Vídeo local */}
                        {selectedProject.video && (
                            <div className="mt-4">
                                <video controls className="w-full rounded">
                                    <source src={selectedProject.video} type="video/mp4" />
                                    Seu navegador não suporta vídeo.
                                </video>
                            </div>
                        )}
                    </div>
                </Modal>
            )}

            {/* Miniatura das imagens Modal */}
            {/* Imagem expandida (Lightbox) */}
            {expandedImage && (
                <div
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4 overflow-auto"
                    onClick={() => setExpandedImage(null)}
                >
                    <div className="relative">
                        <img
                            src={expandedImage}
                            alt="Imagem ampliada"
                            className="w-auto max-w-full h-auto max-h-[95vh] rounded shadow-xl cursor-zoom-in transition-transform duration-200"
                            onClick={(e) => e.stopPropagation()} // evita fechar ao clicar na imagem
                        />
                        {/* Botão de fechar */}
                        <button
                            className="absolute top-2 right-2 text-white text-2xl font-bold"
                            onClick={() => setExpandedImage(null)}
                        >
                            &times;
                        </button>
                    </div>
                </div>
            )}

            {/* Contato */}
            <FadeInSection>
                <section id="contato" className="py-20 container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-12 flex items-center justify-center gap-3">
                        <FiMail className="text-blue-400" />
                        Contato
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        <Card className="transition-transform hover:scale-105 hover:shadow-lg">
                            <CardHeader>
                                <CardTitle>Contate-me</CardTitle>
                                <CardDescription>
                                    Preencha o formulário abaixo com sua mensagem.

                                    {erro && (
                                        <p className="text-red-500 font-medium mt-2">
                                            {erro}
                                        </p>
                                    )}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Nome Completo</label>
                                    <Input placeholder="Seu nome completo" value={name} onChange={e => setName(e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Telefone</label>
                                    <Input placeholder="(11) 99999-9999" value={phone} onChange={e => setPhone(e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">E-mail</label>
                                    <Input type="email" placeholder="email@dominio.com" value={email} onChange={e => setEmail(e.target.value)} />
                                </div>
                                <div>
                                    <label className="text-sm font-medium text-gray-700 mb-2 block">Mensagem</label>
                                    <Textarea placeholder="Sua mensagem..." rows={4} value={message} onChange={e => setMessage(e.target.value)} />
                                </div>
                                <Button
                                    onClick={enviarParaWhatsapp}
                                    disabled={loading}
                                    className={`w-full bg-sky-600 text-white hover:bg-green-600 flex items-center justify-center transition-colors ${loading ? "opacity-70 cursor-not-allowed" : ""
                                        }`}
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                            Enviando...
                                        </>
                                    ) : (
                                        <>
                                            <FaWhatsapp className="h-4 w-4 mr-2" />
                                            Enviar
                                        </>
                                    )}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </section>
            </FadeInSection>

            {/* FOOTER */}
            <footer className="bg-gray-900 text-white py-12 mt-20">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-10">

                        {/* LINKS */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Links</h4>
                            <ul className="space-y-2 text-gray-400">

                                <li>
                                    <a
                                        href="https://github.com/rsylvadev"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/raphael-silva-dev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        LinkedIn
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://mega.nz/file/gnwhyRxQ#SnaRlH5RokYDYKfENGpzOpTeHe-zbEZw3htkf-HmCwg"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-white transition-colors"
                                    >
                                        📄 Baixar Currículo (PDF)
                                    </a>
                                </li>

                            </ul>
                        </div>

                        {/* CONTATO */}
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Contatos</h4>

                            <div className="space-y-2 text-gray-400">

                                {/* Telefone → abrir WhatsApp ao clicar */}
                                <a
                                    href="https://wa.me/5516981209086"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block hover:text-white transition-colors"
                                >
                                    📱 (16) 98120-9086
                                </a>

                                {/* Email */}
                                <a
                                    href="mailto:raphaelsilvadeveloper@gmail.com.com"
                                    className="block hover:text-white transition-colors"
                                >
                                    ✉️ raphaelsilvadeveloper@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* COPYRIGHT */}
                    <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400">
                        <p>&copy; {new Date().getFullYear()} Desenvolvido por Raphael Sylva</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}