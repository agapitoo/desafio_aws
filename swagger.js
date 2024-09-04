const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'API de Estudantes',
    description: 'Documentação da API para gerenciamento de estudantes',
  },
  host: 'localhost:3000', // Ajuste esse valor para o ambiente de produção
  schemes: ['http'],
};

const outputFile = './swagger_output.json';
const endpointsFiles = ['./server.js']; // Ajuste esse valor para incluir os arquivos de rotas relevantes

(async () => {
  await swaggerAutogen(outputFile, endpointsFiles, doc);
  require('./server.js'); // Inicie o servidor após gerar a documentação
})();

