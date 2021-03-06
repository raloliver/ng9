# Como rodar o projeto?

1. Entrar na pasta **be** e rodar `npm install && npm start`
1. Entrar na pasta **fe** e rodar `npm install && npm start`

### O que é o Angular ?

> Um framework Javascript desenvolvido pelo Google para criação de aplicações Web SPA baseada em componentes.

- AngularJS x Angular
- Angular CLI
- Typescript
- Componentes (Component Tree)
  - `main.ts`
  - APPModule (algo que não existe em outros frameworks)
  - AppComponent (referência a outros componentes)
- Uso constante de decorators

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

### Novas descobertas

- `--minimal`: criar projeto com menos arquivos (sem arquivos de testes unitários, com css e templates inline)
- `ng add`: adicionar novos pacotes oficiais do angular ao projeto.
- Ao adicionar o Angular Material ao projeto, ele pergunta qual tema deseja utilizar, se quer adicionar a tipografia em todo o projeto e se quer ativar as animações.
- `ng lint`
- `ng generate --help`
- Components schematics https://angular.io/guide/schematics
- `ng g c shell --export`: --export para exportar componente criado no módulo
- `--skip-git`: não gera versionamento de código ao criar um novo projeto

### Observables (programação reativa)

- Um código se comportar de maneira pró-ativa consome muito processamento.

### Old but gold

#### Componentes

- Escopo isolado (exemplo: aplicação de estilos)
- App Shell Model: separar o conteúdo (que se atualiza com mais frequência) do restante dos componentes.
- `ng-content`: for transclusion content inside to component
- Cada tag do componente, é uma instância

#### Diretivas

- Diretiva de atributos: altera a aparência e o comportamento de um elemento, componente ou outro diretiva.
- `constructor(el: ElementRef) {el.nativeElement.style.color = 'red'}`
- Diretiva estrutural: altera o layout adicionando e removendo elementod do DOM. Sempre utilizam um * a frente, exemplo: `*ngFor`ou`\*ngIF`

#### Property Binding

- Uso de `[]`

#### Event Binding

- Uso de `()`

#### One way data binding and Two way data binding

- Do TS para o HTML: use apenas o `[]` e informa que a propriedade nativa do elemento HTML recebe o valor que vem do controller (TS)
- `[(ngModel)]`

#### Router, Angular Router

- O mapeamento é feito baseado na url, e então o componente é carregado no `router-outlet`

#### Angular Pipes (tubos)

- Filtros para formatar um valor ou items de uma lista
- Pode receber parâmetros
- Pode ser encadeado (chaining)

#### ReactiveX (programação reativa com padrão observer)

![Sample](https://i.imgur.com/3uEioKD.png)

- Código reativo X Código proativo
- Padrão Observer: https://www.youtube.com/watch?v=REqVImw8Wgo
- Event Handler, Listener, Callback...
- Padrão orientado a eventos (Gang Of Four)
- Historicamente tempos: callback => promisses (then) => observables
- Observable: reusável, stream de dados e operadores (diversos).

#### Services

- São classes que têm como principal objetivo organizar e compartilhar métodos e dados entre componentes.
- Geralmente utilizado para casos que não dizem respeito a parte visual da aplicação.
- Forma de compartilhar métodos e dados entre os componentes.
- Atenção as coerências à lógica.
- Por padrão, ao utilizar o `@Injectable({provideIn: "root"})` ao ser injetado como dependencia, a instância do serviço será única.
- `root`: alias para o AppModule
- ModuleInjector (@NgModule and @Injectable) x ElementInjector (@Directive and @Component)
- https://angular.io/guide/hierarchical-dependency-injection

![Motivos para utilizar services](https://i.imgur.com/hbJic2T.png)

> Injeção de Depedência: é um padrão no qual a classe recebe as dependências de uma fonte externa ao invés de criar por conta própria.

![Sem DI](https://i.imgur.com/hbJic2T.png)
![Com DI](https://i.imgur.com/rTR510p.png)
