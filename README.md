# MP7Perguntas — Assistente de Planejamento Estratégico em 7 Passos

**Crie um plano estratégico simples em texto corrido.** Preenchimento passo a passo com visão, missão, valores, SWOT, objetivos, estratégias, planos de ação e indicadores.

---

## 🚀 Como usar

### Opção 1: App Desktop para macOS (recomendado)

1. **Baixar o pacote**
   - Vá para [Releases](https://github.com/NecoPrates/MP7Perguntas/releases)
   - Baixe `MP7Perguntas-0.1.0.dmg` ou `MP7Perguntas-0.1.0-mac.zip`

2. **Instalar**
   - Se baixou o `.dmg`: abra o arquivo e arraste `MP7Perguntas` para a pasta `Applications`
   - Se baixou o `.zip`: descompacte e mova `MP7Perguntas.app` para `Applications`

3. **Executar**
   - Abra a pasta `Applications` no Finder e clique duas vezes em `MP7Perguntas`

### Opção 2: Web App (funciona em qualquer navegador)

1. **No seu computador**
   - Abra `Elaborador de Prompt MP Consultoria.html` no navegador (Chrome, Edge ou Safari)

2. **No celular ou tablet**
   - Visite o [site publicado](https://necoprates.github.io/MP7Perguntas/) (quando disponível em hospedagem)

### Opção 3: App Electron (desenvolvimento local)

Se você quer rodar diretamente do código-fonte:

```bash
cd electron
npm install
npm start
```

---

## 📋 Recursos

- ✅ **7 Passos guiados**: Visão, Missão, Valores, SWOT, Objetivos, Estratégias, Ações, Indicadores
- ✅ **Salvar rascunho**: Seu progresso é salvo automaticamente no navegador
- ✅ **Exportar em JSON**: Baixe o exercício completo para continuar depois
- ✅ **Abrir exercício anterior**: Carregue um arquivo `.json` salvo antes para continuar
- ✅ **Montar texto final**: Gera um parágrafo completo e pronto para usar

---

## 🎯 Fluxo de uso

1. **Preencher Nome da empresa e Data**
   - Ao digitar o nome, você pode abrir um exercício anterior

2. **Navegar pelos 7 passos**
   - Use os botões na barra superior ou os botões `Anterior` e `Próximo`
   - Preencha os campos em linguagem simples

3. **Montar o texto final** (último passo)
   - Clique em `Montar texto final`
   - Revise o parágrafo gerado
   - Copie ou baixe em JSON

4. **Salvar o arquivo**
   - Clique `Salvar arquivo` para exportar em `.json`
   - Nome automático: `NomeDaEmpresa-DD-MM-AAAA-HH-MM-SS.json`

---

## 💾 Suporte a navegadores

| Navegador | Salvar arquivo | Abrir arquivo | Suporte |
|-----------|-------|--------|---------|
| Chrome/Edge | ✅ Nativo | ✅ Nativo | Completo |
| Safari | ⚠️ Download | ✅ Nativo | Parcial |
| Firefox | ⚠️ Download | ✅ Nativo | Parcial |

**Nota**: "Nativo" significa diálogo de sistema com escolha de local. "Download" usa a pasta padrão (Downloads).

---

## 📁 Estrutura do projeto

```
MP7Perguntas/
├── Elaborador de Prompt MP Consultoria.html  (Web app principal)
├── README.md                                  (Este arquivo)
├── README-MP7Perguntas.md                     (Instruções técnicas detalhadas)
├── releases/                                  (Pacotes de distribuição)
│   ├── MP7Perguntas-0.1.0.dmg
│   └── MP7Perguntas-0.1.0-mac.zip
├── electron/                                  (App Electron para desktop)
│   ├── package.json
│   ├── main.js
│   ├── preload.js
│   └── dist/                                  (Binários compilados)
└── MP7Perguntas.app/                         (App bundle macOS)
```

---

## 🛠️ Desenvolvimento

### Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript vanilla
- **Desktop**: Electron 26
- **Build**: electron-builder
- **Armazenamento**: localStorage (navegador) + JSON (arquivo)

### Compilar para desktop

```bash
cd electron
npm install
npm run dist
```

Os pacotes serão salvos em `electron/dist/`.

---

## 🐛 Problemas comuns

**"Não consigo salvar o arquivo"**
- Use Chrome ou Edge para melhor suporte
- Safari e Firefox usam download como fallback

**"Não lembro qual era meu exercício anterior"**
- O rascunho é salvo automaticamente no navegador
- Ou abra um arquivo `.json` salvo antes com `Abrir 7Perguntas salvo`

**"Quero continuar em outro computador"**
- Baixe o arquivo em JSON (`Salvar arquivo`)
- Abra o mesmo arquivo em outro computador com `Abrir 7Perguntas salvo`

---

## 📞 Contato

- **Desenvolvido por**: MP Consultoria
- **Versão**: 0.1.0
- **GitHub**: [NecoPrates/MP7Perguntas](https://github.com/NecoPrates/MP7Perguntas)

---

## 📄 Licença

Este projeto está em desenvolvimento. Todos os direitos reservados © MP Consultoria.

---

## Changelog

### v0.1.0 (17/06/2026)
- ✨ Lançamento inicial com 7 passos
- ✨ Salvamento em JSON
- ✨ App Electron para macOS
- ✨ Web app funcional em navegadores
