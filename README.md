# 💰 Finansly — Gerenciador de Orçamento Mensal

Aplicação web desenvolvida em **JavaScript puro** para controle de orçamento mensal, permitindo registrar transações, visualizar resumos financeiros, filtrar histórico por período e acompanhar gastos por categoria de forma visual.

O projeto foi pensado para resolver um problema comum do dia a dia: **organizar entradas e saídas financeiras sem depender de planilhas**.

---

## 🚀 Funcionalidades

- Cadastro de **entradas** e **saídas**
- Categorização das transações
- Cálculo automático de:
  - Saldo atual
  - Total de entradas
  - Total de saídas
  - Maior gasto do período
- Gráfico de gastos por categoria
- Histórico completo de transações
- Filtro de transações por mês
- Exclusão de transações
- Persistência de dados com `localStorage`
- Navegação entre seções no estilo **SPA**
- Configurações personalizáveis:
  - Tipo de moeda (BRL / USD)
  - Tamanho da fonte
- Salvamento da aba ativa entre recarregamentos

---

## 🧠 Conceitos e Tecnologias Utilizadas

- **JavaScript (ES6+)**
- Manipulação do DOM
- Event Delegation
- `localStorage`
- Funções de array (`map`, `filter`, `reduce`)
- Controle de estado da aplicação
- Organização modular de arquivos
- Datas e formatação
- Gráficos com **Chart.js**

---

## 📊 Como Funciona

1. O usuário registra uma nova transação informando tipo, descrição, categoria e valor.
2. As transações são armazenadas em memória e persistidas no `localStorage`.
3. O sistema recalcula automaticamente os valores financeiros.
4. A interface é atualizada com base no estado atual da aplicação.
5. O histórico pode ser filtrado por mês e as transações podem ser removidas.
6. Preferências do usuário são salvas e reaplicadas ao recarregar a página.

---

## 🧪 Possíveis Melhorias Futuras

- Centralização completa do estado da aplicação
- Criação de metas por categoria
- Comparação entre meses
- Exportação de dados
- Versão mobile-first
- Migração para React no futuro

---

## 💼 Objetivo do Projeto

Este projeto foi desenvolvido com foco em:
- Prática de **JavaScript intermediário**
- Organização de código sem frameworks
- Resolução de um `problema real`
- Evolução de arquitetura e controle de estado

---

## 👁️ Visualizar

https://daniel-dev-fullstack.github.io/FINANSLY/


