### O que é o Angular ?

> Um framework Javascript desenvolvido pelo Google para criação de aplicações Web SPA baseada em componentes.

- AngularJS x Angular
- Angular CLI
- Typescript
- Componentes (Component Tree)
    - `main.ts`
    - APPModule (algo que não existe em outros frameworks)
    - AppComponent (referência a outros componentes)

### O que é um componente?

> Um pedaço da aplicação, um trecho de código que apresenta algo visual dentro da tela. (HTML + CSS + TS)

- É possível colocar tudo dentro de dois ou até mesmo um arquivo, mas por questões de boas práticas, o ideal é ter três ou até mesmo quatro arquivos.

- `selector`
- `templateUrl`
- `styleUrls`

### Organização em módulos

> Todos os componentes estarão em algum módulo, em aplicações maiores normalmente se é utilizado mais de um módulo, o que facilita a organização e a facilidade para futuras melhorias no projeto.

![Exemplo](https://i.imgur.com/efyF3QP.png)

- `declarations`
- `imports`
- `exports`
- `providers`
- `bootstrap`: geralmente utilizado no componente principal que será carregado no `main.ts`, que geralmente fica no APPModule, que inclusive apenas utiliza o `imports` e não tem `exports` (claro que isso em aplicações maiores ou com mais pessoas no projeto)