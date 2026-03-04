# Projeto Landing Page - Efraim Clube de Férias

Este repositório contém o código-fonte da landing page desenvolvida para a promoção do Efraim Clube de Férias. O objetivo desta página é aquecer leads, informando sobre o prêmio de 4 diárias de praia e apresentando a empresa.

## Tecnologias Utilizadas

- **React:** Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite:** Ferramenta de build rápida para projetos web modernos.
- **Tailwind CSS:** Framework CSS utilitário para estilização rápida e responsiva.
- **shadcn/ui:** Coleção de componentes de UI construídos com Radix UI e Tailwind CSS.
- **Lucide Icons:** Biblioteca de ícones.

## Estrutura do Projeto

```
promocao-circo/
├── public/             # Arquivos estáticos (favicon, etc.)
├── src/                # Código-fonte da aplicação
│   ├── assets/         # Imagens e outros assets
│   ├── components/     # Componentes React (incluindo shadcn/ui)
│   ├── App.css         # Estilos globais e Tailwind CSS
│   ├── App.jsx         # Componente principal da Landing Page
│   └── main.jsx        # Ponto de entrada da aplicação
├── components.json     # Configuração do shadcn/ui
├── index.html          # Arquivo HTML principal
├── package.json        # Dependências e scripts do projeto
├── pnpm-lock.yaml      # Lock file de dependências (se usar pnpm)
└── vite.config.js      # Configuração do Vite
└── README.md           # Este arquivo
```

## Como Configurar e Rodar o Projeto

Siga os passos abaixo para configurar o ambiente de desenvolvimento e rodar a aplicação localmente.

### Pré-requisitos

Certifique-se de ter o **Node.js** (versão 18 ou superior) e um gerenciador de pacotes (npm ou pnpm) instalados em sua máquina.

### 1. Instalação das Dependências

Navegue até o diretório raiz do projeto (`promocao-circo/`) e instale as dependências:

```bash
# Se você usa pnpm (recomendado, pois o projeto foi criado com ele)
pnpm install

# Ou se você usa npm
npm install
```

### 2. Rodar o Servidor de Desenvolvimento

Após a instalação das dependências, você pode iniciar o servidor de desenvolvimento:

```bash
# Com pnpm
pnpm run dev

# Com npm
npm run dev
```

O aplicativo estará disponível em `http://localhost:5173/` (ou outra porta, se 5173 estiver em uso). O servidor será reiniciado automaticamente a cada alteração no código-fonte.

### 3. Build para Produção

Para gerar os arquivos otimizados para produção, execute o comando de build:

```bash
# Com pnpm
pnpm run build

# Com npm
npm run build
```

Isso criará uma pasta `dist/` na raiz do projeto, contendo todos os arquivos estáticos prontos para serem hospedados.

## Como Hospedar o Site

O conteúdo da pasta `dist/` é totalmente estático e pode ser hospedado em qualquer servidor web (Apache, Nginx, Vercel, Netlify, GitHub Pages, etc.).

1.  **Copie o conteúdo da pasta `dist/`** para o diretório raiz do seu servidor web (ex: `public_html`, `www`, `htdocs`).
2.  **Configure seu servidor** para servir os arquivos estáticos. Não é necessário um servidor Node.js para a hospedagem, apenas para o desenvolvimento e build.

## Edições e Personalizações

- **Textos:** A maioria dos textos pode ser encontrada e editada diretamente em `src/App.jsx`.
- **Imagens:** As imagens estão em `src/assets/`. Para alterar, substitua os arquivos existentes ou atualize os caminhos em `src/App.jsx`.
- **Cores e Estilos:** As cores principais estão definidas em `src/App.css` (variáveis CSS e classes Tailwind). Para personalizações mais profundas, consulte a documentação do Tailwind CSS e shadcn/ui.
- **Informações de Contato:** Edite os telefones, e-mails e endereço na seção de contato em `src/App.jsx`.
- **Formulário de Contato:** O formulário é apenas visual. Para que ele funcione, você precisará integrar um serviço de backend (como Formspree, Netlify Forms, ou um endpoint PHP/Node.js/Python em seu servidor) para receber as submissões. A ação do formulário precisará ser configurada no código.

Em caso de dúvidas ou necessidade de suporte, consulte a documentação das tecnologias utilizadas ou entre em contato com o desenvolvedor original.

