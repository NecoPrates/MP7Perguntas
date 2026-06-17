MP7Perguntas — Instruções de teste

Resumo
- Local: `Ferramentas MP Consultoria/Elaborador de Prompt MP Consultoria.html`
- App bundle: `Ferramentas MP Consultoria/MP7Perguntas.app`
- Launcher opcional: `Ferramentas MP Consultoria/MP7Perguntas`

Objetivo
Testar os fluxos interativos: abrir exercício salvo, montar e salvar (com opção de sobrescrever), e fechar com confirmação de saída sem salvar.

Recomendações de navegador
- Para melhor experiência de salvar com escolha de arquivo (sobrescrever), use Chrome ou Edge (suportam `showSaveFilePicker`).
- Safari pode não suportar a API de salvamento; nesses casos o site usará download para a pasta padrão (Downloads).

Testes passo a passo
1. Abrir a página
   - No Finder, abra `Ferramentas MP Consultoria/Elaborador de Prompt MP Consultoria.html` ou execute:

```bash
open "$(pwd)/Ferramentas MP Consultoria/Elaborador de Prompt MP Consultoria.html"
```

2. Preencher `Nome da empresa`
   - Digite o nome da empresa no topo. Ao digitar, todos os campos anteriores serão limpos (exceto `Nome da empresa` e `Data da revisão`) e o seletor de arquivos será aberto para buscar um exercício salvo.
   - Selecione um arquivo `.json` gerado anteriormente (nome sugerido `7Perguntas-exercicio.json`).

3. Editar campos e `Montar texto final`
   - Navegue pelos passos, preencha e clique em `Montar texto final`.
   - Se seu navegador suporta `showSaveFilePicker`, será aberto um diálogo para escolher local e nome de arquivo.
     - Se escolher um arquivo existente, o navegador nativo pedirá confirmação de sobrescrita.
   - Se o navegador não suportar a API, será mostrado um aviso e iniciado um download para a pasta padrão (Downloads). O navegador pode renomear automaticamente se um arquivo com o mesmo nome já existir.

4. Confirmar sobrescrita (quando aplicável)
   - No diálogo do sistema (Chrome/Edge), escolha o arquivo existente e confirme sobrescrever.

5. Fechar sem salvar
   - Clique em `Fechar`. Se houver mudanças não salvas, o sistema perguntará se deseja sair sem salvar.
   - Observação: `window.close()` pode não funcionar em abas abertas manualmente. Nesse caso, a confirmação ocorre e você deve fechar a aba manualmente.

Limitações conhecidas
- Um fallback via download não consegue sobrescrever arquivos já existentes automaticamente; o navegador (ou o sistema) pode renomear o arquivo (ex.: `file (1).json`). Para sobrescrever no fallback, mova/renomeie manualmente no Finder e salve novamente.
- Abrir o seletor de arquivos automaticamente ao digitar depende de comportamento do navegador; alguns navegadores bloqueiam aberturas de seletor que não foram originadas por clique direto.

Sugestões
- Para testes completos, abra a página no Chrome, configure `Nome da empresa`, escolha um arquivo salvo e verifique que o diálogo de salvar permite sobrescrever.
- Se quiser que eu implemente um modo Node/Electron para ter controle total do sistema de arquivos (permite sobrescrever e abrir pastas sem restrições), posso criar um pacote mínimo.

Electron (app desktop)
- Há um app Electron mínimo em `Ferramentas MP Consultoria/electron` que integra o HTML e usa diálogos nativos para abrir e salvar arquivos.
- Para rodar localmente você precisa ter `node` e `npm` instalados. No terminal, execute:

```bash
cd "$(pwd)/Ferramentas MP Consultoria/electron"
npm install
npm start
```

- O app abre a mesma página `Elaborador de Prompt MP Consultoria.html` com acesso a diálogos nativos: `Abrir` e `Salvar` funcionarão com confirmação de sobrescrita e escolha direta de arquivo.
- Observação: a pasta `electron` inclui `package.json`, `main.js` e `preload.js`. A primeira vez o `npm install` instalará `electron` como dependência de desenvolvimento.

Contato
- Arquivo: `Elaborador de Prompt MP Consultoria.html`
- Local: `Ferramentas MP Consultoria/`