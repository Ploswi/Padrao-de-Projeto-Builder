# 🧱 Exemplo de Padrão de Projeto: Builder (TypeScript)

Este projeto demonstra o uso do **padrão de projeto Builder** para criar objetos complexos de forma controlada e flexível.  
O exemplo constrói um objeto `Car` definindo seus atributos passo a passo por meio do `CarBuilder`.

## 🧠 O que foi implementado

O código implementa a classe `Car` (produto) e o construtor `CarBuilder`, que permite configurar o modelo, cor, motor e número de portas antes de finalizar a criação do carro com o método `build()`.

## ⚙️ Benefícios do padrão Builder

- Clareza e legibilidade: facilita a criação de objetos com muitos parâmetros sem precisar de múltiplos construtores sobrecarregados.  
- Flexibilidade: permite criar variações do mesmo tipo de objeto com diferentes combinações de atributos.  
- Manutenção simplificada: alterações nos atributos do produto impactam menos o código cliente.  
- Separação de responsabilidades: o processo de construção é separado da representação do objeto final, tornando o código mais modular.

## 🧩 Como utilizar em uma arquitetura

Este padrão pode ser útil em sistemas que precisam gerar objetos com muitas configurações, como:
- Montagem de entidades complexas no backend.
- Configuração de objetos para APIs ou integrações.
- Criação de DTOs (Data Transfer Objects) personalizados em camadas de serviço.

## 🚀 Instalação

```bash
git clone https://github.com/<seu-usuario>/builder-pattern-example.git
cd builder-pattern-example
npm install
```

## ▶️ Execução

```bash
npm run build
npm start
```

## 🧾 Exemplo de saída

```
Modelo: Sedan Turbo
Cor: Azul
Motor: 2.0 Turbo
Portas: 4
```

## 📜 Licença
Projeto sob licença MIT.
