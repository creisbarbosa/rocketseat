# NPM

Node Packege Manager

__Glossary: Dependencies, Packeges, Modules__

- [ ] Verificar se temos o npm instalado `npm -v`
- [ ] Criar nosso próprio pacote
- [ ] O que é o arquivo package.json
- [ ] Utilizat módulos de terceiros
- [ ] O que é o diretório node_modules
        npm instal <node-name> -g (instala o módulo globalmente)
        npm root --location=global (abre a pasta onde está localizada os módulos globais)
- [ ] O que é o arquivo package-lock.json
- [ ] Criar scripts para rodar com o npm
- [ ] Gerencando a versão da dependência
        major.minor.pach
        ex.:    "moment": "^2.29.1"     // Toda vez que abrir o pacote vai atualizar o .minor e .patvh
                "moment": "~2.29.1"     // Vai atualizar apenas o .patch
                "moment": "2.29.1"      // Nunca vai mudar de versão
                "moment": "*2.29.1"     // Vai atualizar tudo
        npm oudated
        npm upgrade // Vai inserir uma versão mais nova do que eu coloquei
        npm i moment@latest
        npm i moment@1.7.2 // instalar uma versão específica

        npm unistal moment // Para desinstalar