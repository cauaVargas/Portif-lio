# 📌 Portfólio - Cauã de Vargas Lacerda

Este é um projeto de **site de portfólio responsivo** desenvolvido com **HTML, CSS e JavaScript puro**, incluindo uma **área administrativa oculta** para edição das informações.

---

## 🚀 Funcionalidades
- **Página Principal (`index.html`)**
  - Apresentação pessoal (Sobre Mim)
  - Contatos (texto ou links clicáveis)
  - Experiências profissionais
  - Projetos (com suporte a links no formato `Nome|URL`)

- **Área Administrativa (`admin.html`)**
  - Protegida por login simples
  - Permite editar as seções: Sobre Mim, Contatos, Experiências e Projetos
  - Dados salvos no **localStorage** (persistem no navegador)
  - Placeholders e dicas para preenchimento correto dos campos

---

## 🛠️ Tecnologias Utilizadas
- **HTML5** → Estrutura semântica
- **CSS3** → Layout responsivo com media queries
- **JavaScript (puro)** → Lógica de login e manipulação do localStorage

---

## 📂 Estrutura de Diretórios
```bash
portfolio-site/
│
├── index.html     # Página principal
├── admin.html     # Área administrativa oculta
├── style.css      # Estilos globais e responsividade
└── script.js      # Lógica de login e edição de dados
```

---

## 📖 Como Usar
1. Abra o arquivo `index.html` no navegador para visualizar o portfólio.
2. Acesse diretamente `admin.html` para abrir a área de administração.
3. Edite os campos desejados:
   - **Sobre Mim** → texto livre.
   - **Contatos** → links ou texto separados por vírgula.
   - **Experiências** → texto simples separado por vírgula.
   - **Projetos** → formato `Nome do Projeto|https://link.com`, separados por vírgula.
4. Clique em **Salvar Alterações**. As informações serão gravadas no `localStorage`.
5. Atualize o `index.html` para visualizar as mudanças.

---

## 🔮 Melhorias Futuras
- Autenticação com backend real (Node.js, Firebase, Supabase etc.)
- Banco de dados externo (MySQL, MongoDB)
- Upload de imagens para os projetos
- Dark Mode
- Melhorar a segurança do login

---

✍️ Desenvolvido por **Cauã de Vargas Lacerda**
