<- [README.MD](../README.MD)

# **🦩 Chunk Analysis**

A fim de entender otimizar chunks da aplicação. Foi instalado a lib `rollup-plugin-visualizer` ao realizar o build (`npm run build`) esse plugin gera o arquivo [stats.html](../stats.html). Esse arquivo pode ser aberto em qualquer navegador e com ele é possível visualizar a organização tamanho dos chunks da aplicação. 


Code Splitting: Com o intuito de otimizar os chunks da aplicação foi realizado `lazy imports` das páginas da aplicação.

Com o intuito de reduzir o tamanho do chunk `index.js`, foi realizado chunks de forma manual após analisar o arquivo [stats.html](../stats.html). Os chunks manuais estão configurados no arquivo [vite.config.ts](../vite.config.ts) na função `manualChunks`.

É importante que os chunks não tenham mais de 1064 KB de tamanho, pois algumas CDNs como Cloudfront e Cloudflare limitam o arquivo a esse tamanho em algumas ocasiões, ocasionando em erros pois carregam os arquivos JavaSript com esse tamanho no máximo.

---