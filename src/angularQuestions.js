export const angularQuestions = [
  {
    question: "What is Angular Framework?",
    category: "Angular Basic",
    options: [
      "Angular is a JavaScript library for building backend services and managing databases.",
      "Angular is a TypeScript-based open-source frontend framework by Google for building scalable single-page and enterprise web applications. It is a complete platform with routing, forms, HTTP, DI, testing, and SSR built in.",
      "Angular is a CSS framework for styling static HTML pages without components.",
      "Angular is a programming language that replaces JavaScript in the browser.",
    ],
    answer: 1,
    explanation:
      "Angular is a TypeScript-based open-source frontend framework by Google for building scalable single-page and enterprise web applications. It is a complete platform with routing, forms, HTTP, DI, testing, and SSR built in.",
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<h1>Hello, {{ name }}!</h1>'
})
export class AppComponent {
  name = 'Erick';
}

// View: Hello, Erick!`,
  },

  {
    question: "What is TypeScript?",
    category: "Angular Basic",
    options: [
      "TypeScript is a JavaScript library that handles only asynchronous operations.",
      "TypeScript is a database language used to query Angular applications.",
      "TypeScript is a programming language that extends JavaScript with static typing, interfaces, generics, and decorators. It compiles to JavaScript and is used to build Angular applications.",
      "TypeScript is a template language that replaces HTML and CSS.",
    ],
    answer: 2,
    explanation:
      "TypeScript is a programming language that extends JavaScript with static typing, interfaces, generics, and decorators. It compiles to JavaScript and is used to build Angular applications.",
    code: `interface User {
  name: string;
  age: number;
}

const user: User = {
  name: 'Erick',
  age: 29
};

console.log(user.name); // Erick`,
  },

  {
    question: "What architecture is Angular based on?",
    category: "Angular Basic",
    options: [
      "Angular uses a component-based architecture. Components manage data and logic, while templates display that data through data binding.",
      "Angular uses a database-based architecture. Tables manage all user interface logic.",
      "Angular uses a template-only architecture. HTML manages data, services, and dependency injection.",
      "Angular uses a server-only architecture. Components cannot run in the browser.",
    ],
    answer: 0,
    explanation:
      "Angular uses a component-based architecture. Components manage data and logic, while templates display that data through data binding. Components use services for shared logic, provided through dependency injection. The router selects which component to display based on the URL. NgModules (containers that group related components, directives, and pipes) organize module-based applications.",
    code: `import { Component, Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  name = 'Erick';
}

@Component({
  selector: 'app-user',
  standalone: true,
  template: '<h1>{{ userService.name }}</h1>'
})
export class UserComponent {
  userService = inject(UserService);
}

// Service: shared data
// Component: data and logic
// Template: displays Erick`,
  },

  {
    question: "What is data binding?",
    category: "Angular Basic",
    options: [
      "Data binding connects an Angular application directly to database tables.",
      "Data binding compiles TypeScript into JavaScript.",
      "Data binding creates services without dependency injection.",
      "Data binding connects a component’s data and its template. Angular supports four types: Interpolation {{ }}, Property binding [ ], Event binding ( ), and Two-way binding [( )].",
    ],
    answer: 3,
    explanation:
      "Data binding connects a component’s data and its template. Angular supports four types: Interpolation {{ }}, Property binding [ ], Event binding ( ), and Two-way binding [( )].",
    code: `// Component data and method
name = 'Erick';
isDisabled = false;

save() {
  console.log(this.name);
}

// Template
<h1>{{ name }}</h1>
<button [disabled]="isDisabled" (click)="save()">
  Save
</button>
<input [(ngModel)]="name">

// ngModel requires FormsModule.`,
  },

  {
    question: "What is Interpolation {{ }}?",
    category: "Angular Basic",
    options: [
      "Displays data as text.",
      "Runs component code when an event occurs.",
      "Sets an element’s property from component data.",
      "Keeps component data and an input value synchronized.",
    ],
    answer: 0,
    explanation: "Interpolation {{ }}: Displays data as text.",
    code: `// Component
name = 'Erick';

// Template
<h1>{{ name }}</h1>

// View: Erick`,
  },

  {
    question: "What is Property binding [ ]?",
    category: "Angular Basic",
    options: [
      "Keeps component data and an input value synchronized.",
      "Displays data as text.",
      "Sets an element’s property from component data.",
      "Runs component code when an event occurs.",
    ],
    answer: 2,
    explanation:
      "Property binding [ ]: Sets an element’s property from component data.",
    code: `// Component
isDisabled = true;

// Template
<button [disabled]="isDisabled">Save</button>

// The Save button is disabled.`,
  },

  {
    question: "What is Event binding ( )?",
    category: "Angular Basic",
    options: [
      "Sets an element’s property from component data.",
      "Runs component code when an event occurs.",
      "Displays data as text.",
      "Keeps component data and an input value synchronized.",
    ],
    answer: 1,
    explanation:
      "Event binding ( ): Runs component code when an event occurs.",
    code: `// Component
save() {
  console.log('Saved');
}

// Template
<button (click)="save()">Save</button>

// Click → Saved`,
  },

  {
    question: "What is Two-way binding [( )]?",
    category: "Angular Basic",
    options: [
      "Displays data as text without accepting input.",
      "Runs component code only when the component is destroyed.",
      "Sets an element’s property without updating component data.",
      "Keeps component data and an input value synchronized.",
    ],
    answer: 3,
    explanation:
      "Two-way binding [( )]: Keeps component data and an input value synchronized.",
    code: `// Component: imports: [FormsModule]
name = 'Erick';

// Template
<input [(ngModel)]="name">
<p>{{ name }}</p>

// Typing Ana updates name and displays Ana.`,
  },

  {
    question: "What is RxJS?",
    category: "Angular Basic",
    options: [
      "RxJS is an Angular module that creates HTML templates and CSS styles.",
      "RxJS is a database library that stores component data permanently.",
      "RxJS is a JavaScript library for reactive programming. It provides Observables and operators like map and filter to create and manage streams of data and events.",
      "RxJS is a TypeScript compiler that converts templates into JavaScript.",
    ],
    answer: 2,
    explanation:
      "RxJS is a JavaScript library for reactive programming. It provides Observables and operators like map and filter to create and manage streams of data and events.",
    code: `import { of, filter, map } from 'rxjs';

of(1, 2, 3, 4).pipe(
  filter(n => n % 2 === 0),
  map(n => n * 10)
).subscribe(value => console.log(value));

// Output:
// 20
// 40`,
  },

  {
    question: "What is a pipe?",
    category: "Angular Basic",
    options: [
      "A pipe transforms data for display in a template without changing the original value. For example, {{ name | uppercase }} displays the name in uppercase.",
      "A pipe changes the original component value permanently whenever the template renders.",
      "A pipe creates a subscription to every DOM event automatically.",
      "A pipe groups related components, directives, and services.",
    ],
    answer: 0,
    explanation:
      "A pipe transforms data for display in a template without changing the original value. For example, {{ name | uppercase }} displays the name in uppercase.",
    code: `// Component: imports: [UpperCasePipe]
name = 'Erick';

// Template
<p>{{ name | uppercase }}</p>
<p>{{ name }}</p>

// View:
// ERICK
// Erick`,
  },

  {
    question: "What is the purpose of async pipe?",
    category: "Angular Basic",
    options: [
      "The async pipe converts all synchronous values into HTTP requests.",
      "The async pipe subscribes to an Observable or reads a Promise and displays its latest value in the template. It automatically unsubscribes from Observables when the component is destroyed, helping prevent memory leaks.",
      "The async pipe cancels every Promise when a component is destroyed.",
      "The async pipe stores Observable values permanently in a database.",
    ],
    answer: 1,
    explanation:
      "The async pipe subscribes to an Observable or reads a Promise and displays its latest value in the template. It automatically unsubscribes from Observables when the component is destroyed, helping prevent memory leaks.",
    code: `import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { interval } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [AsyncPipe],
  template: '<p>{{ count$ | async }}</p>'
})
export class CounterComponent {
  count$ = interval(1000);
}

// View: 0, then 1, then 2...
// AsyncPipe unsubscribes when destroyed.`,
  },

  {
    question: "What are observables?",
    category: "Angular Basic",
    options: [
      "Observables are objects that always resolve with exactly one value and cannot be unsubscribed.",
      "Observables are HTML elements that display asynchronous data automatically.",
      "Observables are functions that execute only during TypeScript compilation.",
      "Observables represent streams that can emit multiple values over time. They are generally lazy, starting when you subscribe, and you can unsubscribe to stop receiving values and release resources. They are central to RxJS and Angular’s HTTP, Router, and Forms APIs.",
    ],
    answer: 3,
    explanation:
      "Observables represent streams that can emit multiple values over time. They are generally lazy, starting when you subscribe, and you can unsubscribe to stop receiving values and release resources. They are central to RxJS and Angular’s HTTP, Router, and Forms APIs.",
    code: `import { interval } from 'rxjs';

const count$ = interval(1000); // Observable

const subscription = count$.subscribe(value => {
  console.log(value);
});

setTimeout(() => {
  subscription.unsubscribe();
}, 3500);

// Output: 0, 1, 2
// Then the timer is stopped.`,
  },

  {
    question: "What is a Subscription?",
    category: "Angular Basic",
    options: [
      "A Subscription is an HTML template that displays Observable values.",
      "A Subscription is an operator that transforms values before they are emitted.",
      "A Subscription is an object that represents an active Observable execution. It lets you stop receiving values and release associated resources by calling unsubscribe().",
      "A Subscription is a Promise that always resolves when an Observable completes.",
    ],
    answer: 2,
    explanation:
      "A Subscription is an object that represents an active Observable execution. It lets you stop receiving values and release associated resources by calling unsubscribe().",
    code: `import { interval } from 'rxjs';

const count$ = interval(1000);

// subscribe() returns a Subscription.
const subscription = count$.subscribe(console.log);

// Later: stop receiving values and clear the timer.
setTimeout(() => subscription.unsubscribe(), 2500);

// Output: 0, 1`,
  },

  {
    question: "What is a Promise?",
    category: "Angular Basic",
    options: [
      "A Promise is a JavaScript object that represents the eventual result of an asynchronous operation. It either resolves with a single value or rejects with an error. You handle it using then() and catch(), or async/await.",
      "A Promise is a stream that emits multiple values until unsubscribe() is called.",
      "A Promise is an Angular directive that changes the DOM structure.",
      "A Promise is a synchronous function that always returns its final result immediately.",
    ],
    answer: 0,
    explanation:
      "A Promise is a JavaScript object that represents the eventual result of an asynchronous operation. It either resolves with a single value or rejects with an error. You handle it using then() and catch(), or async/await.",
    code: `const userPromise = new Promise(resolve => {
  setTimeout(() => resolve('Erick'), 1000);
});

userPromise
  .then(name => console.log(name))
  .catch(error => console.error(error));

// After 1 second: Erick`,
  },

  {
    question: "What does fetch() return?",
    category: "Angular Basic",
    options: [
      "Returns parsed JSON immediately without a Promise.",
      "Returns a Promise for the HTTP response.",
      "Returns an Observable that requires subscribe().",
      "Returns a Subscription that requires unsubscribe().",
    ],
    answer: 1,
    explanation:
      "fetch(): Returns a Promise for the HTTP response. response.json(): Returns a Promise for parsed JSON. fetch does not reject for HTTP errors such as 404: check response.ok.",
    code: `fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP ' + response.status);
    }

    return response.json();
  })
  .then(user => console.log(user.name))
  .catch(error => console.error(error));

// Output: Leanne Graham`,
  },

  {
    question: "What are directives?",
    category: "Angular Basic",
    options: [
      "Directives are functions that only transform displayed values.",
      "Directives are services that perform HTTP requests.",
      "Directives are classes that add behavior to elements in Angular. There are three types: Components, Structural directives, and Attribute directives.",
      "Directives are modules that compile JavaScript into TypeScript.",
    ],
    answer: 2,
    explanation:
      "Directives are classes that add behavior to elements in Angular. There are three types: Components, Structural directives, and Attribute directives. Components: Directives with a template. They define a part of the user interface. Structural directives: Change the DOM structure by adding or removing elements. Attribute directives: Change an element’s appearance or behavior.",
    code: `<!-- Component -->
<app-user></app-user>

<!-- Structural directive -->
<p *ngIf="true">Welcome!</p>

<!-- Attribute directive -->
<p [ngStyle]="{ color: 'blue' }">Hello</p>

<!-- Import the component and CommonModule. -->`,
  },

  {
    question: "What are Structural directives?",
    category: "Angular Basic",
    options: [
      "Change the DOM structure by adding or removing elements.",
      "Transform data for display without changing the original value.",
      "Provide shared logic through dependency injection.",
      "Define CSS classes without changing the DOM structure.",
    ],
    answer: 0,
    explanation:
      "Structural directives: Change the DOM structure by adding or removing elements.",
    code: `// Component: imports: [CommonModule]
isLoggedIn = true;

// Template
<p *ngIf="isLoggedIn">Welcome!</p>

// true: the paragraph exists.
// false: the paragraph is removed.`,
  },

  {
    question: "What is the purpose of ngIf?",
    category: "Angular Basic",
    options: [
      "Repeats an element for each item in a collection.",
      "Sets inline CSS styles dynamically.",
      "Renders an existing template with an optional context.",
      "Adds or removes an element based on a condition.",
    ],
    answer: 3,
    explanation:
      "ngIf: Adds or removes an element based on a condition.",
    code: `// Component: imports: [CommonModule]
isLoggedIn = true;

// Template
<p *ngIf="isLoggedIn">Welcome!</p>

// View: Welcome!`,
  },

  {
    question: "What is the purpose of ngFor?",
    category: "Angular Basic",
    options: [
      "Displays a template when no switch case matches.",
      "Repeats an element for each item in a collection.",
      "Synchronizes a form control’s value with component data.",
      "Adds or removes CSS classes based on expressions.",
    ],
    answer: 1,
    explanation:
      "ngFor: Repeats an element for each item in a collection.",
    code: `// Component: imports: [CommonModule]
names = ['Erick', 'Ana'];

// Template
<ul>
  <li *ngFor="let name of names">{{ name }}</li>
</ul>

// View:
// • Erick
// • Ana`,
  },

  {
    question: "What is the purpose of ngSwitchCase?",
    category: "Angular Basic",
    options: [
      "Displays a template when no switch case matches.",
      "Repeats an element for each item in a collection.",
      "Displays a template when its value matches the ngSwitch expression.",
      "Sets inline CSS styles dynamically.",
    ],
    answer: 2,
    explanation:
      "ngSwitchCase: Displays a template when its value matches the ngSwitch expression.",
    code: `// Component: imports: [CommonModule]
role = 'admin';

// Template
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin panel</p>
  <p *ngSwitchCase="'user'">User panel</p>
</div>

// View: Admin panel`,
  },

  {
    question: "What is the purpose of ngSwitchDefault?",
    category: "Angular Basic",
    options: [
      "Displays a template when no switch case matches.",
      "Displays a template only when every switch case matches.",
      "Synchronizes a form control’s value with component data.",
      "Enables navigation to an Angular route without reloading the page.",
    ],
    answer: 0,
    explanation:
      "ngSwitchDefault: Displays a template when no switch case matches.",
    code: `// Component: imports: [CommonModule]
role = 'guest';

// Template
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin panel</p>
  <p *ngSwitchDefault>Guest view</p>
</div>

// View: Guest view`,
  },

  {
    question: "What is the purpose of ngTemplateOutlet?",
    category: "Angular Basic",
    options: [
      "Creates an HTTP request with an optional response.",
      "Adds or removes CSS classes based on expressions.",
      "Selects an Angular route based on the current URL.",
      "Renders an existing template with an optional context.",
    ],
    answer: 3,
    explanation:
      "ngTemplateOutlet: Renders an existing template with an optional context.",
    code: `<!-- Component: imports: [CommonModule] -->

<ng-template #greeting let-name>
  <p>Hello, {{ name }}!</p>
</ng-template>

<ng-container
  *ngTemplateOutlet="greeting; context: { $implicit: 'Erick' }">
</ng-container>

<!-- View: Hello, Erick! -->`,
  },

  {
    question: "What are Attribute directives?",
    category: "Angular Basic",
    options: [
      "Group related components, directives, and pipes.",
      "Change an element’s appearance or behavior.",
      "Represent streams that can emit multiple values over time.",
      "Define a component’s HTML template.",
    ],
    answer: 1,
    explanation:
      "Attribute directives: Change an element’s appearance or behavior.",
    code: `// Component: imports: [CommonModule]
textColor = 'blue';

// Template
<p [ngStyle]="{ color: textColor }">Hello</p>

// Hello appears in blue.`,
  },

  {
    question: "What is the purpose of ngClass?",
    category: "Angular Basic",
    options: [
      "Sets inline CSS styles dynamically.",
      "Repeats an element for each item in a collection.",
      "Adds or removes CSS classes based on expressions.",
      "Renders an existing template with an optional context.",
    ],
    answer: 2,
    explanation:
      "ngClass: Adds or removes CSS classes based on expressions.",
    code: `// Component: imports: [CommonModule]
isActive = true;

// Template
<p [ngClass]="{ active: isActive }">Online</p>

// CSS
.active {
  color: green;
}

// Online appears in green.`,
  },

  {
    question: "What is the purpose of ngStyle?",
    category: "Angular Basic",
    options: [
      "Sets inline CSS styles dynamically.",
      "Adds or removes CSS classes based on expressions.",
      "Displays a template when no switch case matches.",
      "Synchronizes a form control’s value with component data.",
    ],
    answer: 0,
    explanation: "ngStyle: Sets inline CSS styles dynamically.",
    code: `// Component: imports: [CommonModule]
textColor = 'blue';

// Template
<p [ngStyle]="{ color: textColor }">Hello</p>

// Hello appears in blue.`,
  },

  {
    question: "What is the purpose of ngModel?",
    category: "Angular Basic",
    options: [
      "Selects which matching case templates to display.",
      "Transforms data for display in a template.",
      "Enables navigation without reloading the page.",
      "Synchronizes a form control’s value with component data.",
    ],
    answer: 3,
    explanation:
      "ngModel: Synchronizes a form control’s value with component data.",
    code: `// Component: imports: [FormsModule]
name = 'Erick';

// Template
<input [(ngModel)]="name">
<p>{{ name }}</p>

// Changing the input updates name.`,
  },

  {
    question: "What is the purpose of ngSwitch?",
    category: "Angular Basic",
    options: [
      "Repeats an element for each item in a collection.",
      "Selects which matching case templates to display.",
      "Adds or removes CSS classes based on expressions.",
      "Renders an existing template with an optional context.",
    ],
    answer: 1,
    explanation:
      "ngSwitch: Selects which matching case templates to display.",
    code: `// Component: imports: [CommonModule]
role = 'admin';

// Template
<div [ngSwitch]="role">
  <p *ngSwitchCase="'admin'">Admin panel</p>
  <p *ngSwitchDefault>Guest view</p>
</div>

// View: Admin panel`,
  },

  {
    question: "What is the purpose of routerLink?",
    category: "Angular Basic",
    options: [
      "Makes an HTTP request and displays the response.",
      "Reloads the entire page whenever component data changes.",
      "Enables navigation to an Angular route without reloading the page.",
      "Synchronizes the URL with a database table.",
    ],
    answer: 2,
    explanation:
      "routerLink: Enables navigation to an Angular route without reloading the page.",
    code: `// Component: imports: [RouterLink]
// Assumes /users is a configured Angular route.

// Template
<a routerLink="/users">Users</a>

// Click → navigates to /users without a full page reload.`,
  },

  {
    question: "What are components?",
    category: "Angular Basic",
    options: [
      "Components are the building blocks of an Angular application. Each component has a TypeScript class for data and logic, an HTML template for the view, and optional CSS styles for appearance. The @Component decorator defines its metadata.",
      "Components are database objects that store application data and execute SQL queries.",
      "Components are JavaScript operators that transform Observable streams without templates.",
      "Components are CSS containers that cannot include data or application logic.",
    ],
    answer: 0,
    explanation:
      "Components are the building blocks of an Angular application. Each component has a TypeScript class for data and logic, an HTML template for the view, and optional CSS styles for appearance. The @Component decorator defines its metadata.",
    code: `import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: '<h1>{{ name }}</h1>',
  styles: ['h1 { color: blue; }']
})
export class UserComponent {
  name = 'Erick';
}

// View: Erick in blue.`,
  },

  {
    question: "What is the difference between a component and a directive?",
    category: "Angular Basic",
    options: [
      "A component has no template, while every directive has its own HTML template.",
      "A component only changes CSS, while a directive always creates an entire application.",
      "Components and directives are unrelated and cannot share behavior.",
      "A component has its own template and controls a part of the user interface. A non-component directive has no template and changes an existing element’s behavior, appearance, or structure. Every component is a directive, but not every directive is a component.",
    ],
    answer: 3,
    explanation:
      "A component has its own template and controls a part of the user interface. A non-component directive has no template and changes an existing element’s behavior, appearance, or structure. Every component is a directive, but not every directive is a component.",
    code: `import { Component, Directive } from '@angular/core';

// Directive: changes an existing element.
@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: { style: 'background-color: yellow' }
})
export class HighlightDirective {}

// Component: has its own template.
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [HighlightDirective],
  template: '<p appHighlight>Erick</p>'
})
export class UserComponent {}

// View: Erick with a yellow background.`,
  },

  {
    question: "What is a template?",
    category: "Angular Basic",
    options: [
      "A template is a TypeScript service that handles database connections.",
      "A template is the HTML that defines a component’s view. It uses Angular syntax to display data, handle events, and control which elements appear.",
      "A template is a CSS file that defines dependency injection.",
      "A template is an Observable that emits HTML over time.",
    ],
    answer: 1,
    explanation:
      "A template is the HTML that defines a component’s view. It uses Angular syntax to display data, handle events, and control which elements appear.",
    code: `// Component
name = 'Erick';
isLoggedIn = true;

save() {
  console.log('Saved');
}

// Template
<h1>{{ name }}</h1>
<button (click)="save()">Save</button>

@if (isLoggedIn) {
  <p>Welcome back!</p>
}`,
  },

  {
    question: "What is a module?",
    category: "Angular Basic",
    options: [
      "A module is an HTML element that repeats a component for every item.",
      "A module is an Observable operator that groups asynchronous values.",
      "An NgModule is a class marked with @NgModule that groups related components, directives, and pipes, and can provide services. It helps organize an Angular application.",
      "A module is a CSS class that defines the appearance of every component.",
    ],
    answer: 2,
    explanation:
      "An NgModule is a class marked with @NgModule that groups related components, directives, and pipes, and can provide services. It helps organize an Angular application.",
    code: `import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: false,
  template: '<p>Erick</p>'
})
export class UserComponent {}

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent]
})
export class UserModule {}

// UserModule groups and exports UserComponent.`,
  },

  {
    question: "What lifecycle hooks are available in Angular?",
    category: "Angular Basic",
    options: [
      "ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, and ngOnDestroy.",
      "ngOnCreate, ngOnStart, ngOnRender, ngOnPause, and ngOnStop.",
      "componentDidMount, componentDidUpdate, and componentWillUnmount.",
      "onMounted, onUpdated, onUnmounted, and onActivated.",
    ],
    answer: 0,
    explanation:
      "Lifecycle hooks let you run code at specific stages of a component’s life: ngOnChanges, ngOnInit, ngDoCheck, ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, and ngOnDestroy.",
    code: `import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: '<p>User</p>'
})
export class UserComponent implements OnInit, OnDestroy {
  ngOnInit() {
    console.log('Initialized');
  }

  ngOnDestroy() {
    console.log('Cleanup');
  }
}`,
  },

  {
    question: "When does ngOnChanges run?",
    category: "Angular Basic",
    options: [
      "Once, after projected content is initialized.",
      "Before the component is destroyed, for cleanup.",
      "Once, after the component’s view and child views are initialized.",
      "When input values change.",
    ],
    answer: 3,
    explanation:
      "ngOnChanges: When input values change. The first ngOnChanges runs before ngOnInit when inputs are present.",
    code: `// Inside a component class.
// Import Input and SimpleChanges from @angular/core.

@Input() name = '';

ngOnChanges(changes: SimpleChanges) {
  if (changes['name']) {
    console.log(changes['name'].currentValue);
  }
}

// Parent template:
<app-user [name]="userName"></app-user>

// When userName changes, ngOnChanges receives the change.`,
  },

  {
    question: "When does ngOnInit run?",
    category: "Angular Basic",
    options: [
      "Whenever Angular checks the component for changes.",
      "Once, after initial inputs are set.",
      "After projected content is checked.",
      "Before the component is destroyed, for cleanup.",
    ],
    answer: 1,
    explanation: "ngOnInit: Once, after initial inputs are set.",
    code: `// Inside a component class
name = '';

ngOnInit() {
  this.name = 'Erick';
}

// Template
<p>{{ name }}</p>

// View: Erick`,
  },

  {
    question: "When does ngDoCheck run?",
    category: "Angular Basic",
    options: [
      "Only when the component is destroyed.",
      "Only once, before initial inputs are set.",
      "Whenever Angular checks the component for changes.",
      "Only after an HTTP request fails.",
    ],
    answer: 2,
    explanation:
      "ngDoCheck: Whenever Angular checks the component for changes.",
    code: `// Inside a component class
ngDoCheck() {
  console.log('Checking component');
}

// Logs whenever Angular checks this component.`,
  },

  {
    question: "When does ngAfterContentInit run?",
    category: "Angular Basic",
    options: [
      "Once, after projected content is initialized.",
      "When input values change.",
      "After the component’s view and child views are checked.",
      "Before the component is destroyed, for cleanup.",
    ],
    answer: 0,
    explanation:
      "ngAfterContentInit: Once, after projected content is initialized.",
    code: `// CardComponent template
<ng-content></ng-content>

// Inside CardComponent
ngAfterContentInit() {
  console.log('Projected content initialized');
}

// Parent template
<app-card>
  <p>Hello, Erick!</p>
</app-card>`,
  },

  {
    question: "When does ngAfterContentChecked run?",
    category: "Angular Basic",
    options: [
      "Once, after initial inputs are set.",
      "Only before projected content is initialized.",
      "When the component is destroyed.",
      "After projected content is checked.",
    ],
    answer: 3,
    explanation:
      "ngAfterContentChecked: After projected content is checked.",
    code: `// Component template
<ng-content></ng-content>

// Inside the component class
ngAfterContentChecked() {
  console.log('Projected content checked');
}

// May run repeatedly.`,
  },

  {
    question: "When does ngAfterViewInit run?",
    category: "Angular Basic",
    options: [
      "Whenever Angular checks the component for changes.",
      "Once, after the component’s view and child views are initialized.",
      "Before initial inputs are set.",
      "After projected content is checked.",
    ],
    answer: 1,
    explanation:
      "ngAfterViewInit: Once, after the component’s view and child views are initialized.",
    code: `// Template
<p #message>Hello, Erick!</p>

// Inside the component class.
// Import ViewChild and ElementRef from @angular/core.
@ViewChild('message') message!: ElementRef<HTMLParagraphElement>;

ngAfterViewInit() {
  console.log(this.message.nativeElement.textContent);
}

// Output: Hello, Erick!`,
  },

  {
    question: "When does ngAfterViewChecked run?",
    category: "Angular Basic",
    options: [
      "Only when input values change.",
      "Once, after projected content is initialized.",
      "After the component’s view and child views are checked.",
      "Before the component is destroyed, for cleanup.",
    ],
    answer: 2,
    explanation:
      "ngAfterViewChecked: After the component’s view and child views are checked.",
    code: `// Inside a component class
ngAfterViewChecked() {
  console.log('View and child views checked');
}

// May run repeatedly.
// Avoid changing bound state inside this hook.`,
  },

  {
    question: "When does ngOnDestroy run?",
    category: "Angular Basic",
    options: [
      "Before the component is destroyed, for cleanup.",
      "Once, after initial inputs are set.",
      "When input values change.",
      "Once, after projected content is initialized.",
    ],
    answer: 0,
    explanation:
      "ngOnDestroy: Before the component is destroyed, for cleanup.",
    code: `// Inside a component class.
// Import interval from rxjs.

subscription = interval(1000).subscribe(value => {
  console.log(value);
});

ngOnDestroy() {
  this.subscription.unsubscribe();
}

// Stops the timer when the component is destroyed.`,
  },
  {
  question: "What is dependency injection in Angular?",
  category: "Angular Basic",
  options: [
    "Dependency injection is a mechanism in Angular that requires components to create their dependencies manually, increasing coupling.",
    "Dependency injection is a mechanism in Angular that creates and provides the dependencies components and services need, reducing coupling and making code easier to test. For example, Angular provides a UserService to a component to access user data.",
    "Dependency injection is a mechanism in Angular that connects HTML inputs to FormControl and FormGroup.",
    "Dependency injection is a mechanism in Angular that transforms data for display in a template without changing the original value.",
  ],
  answer: 1,
  explanation:
    "Dependency injection is a mechanism in Angular that creates and provides the dependencies components and services need, reducing coupling and making code easier to test. For example, Angular provides a UserService to a component to access user data.",
  code: `import { Component, Injectable, inject } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  getUsers() {
    return ['Erick', 'Ana'];
  }
}

@Component({
  selector: 'app-user',
  standalone: true,
  template: '<p>{{ users.join(", ") }}</p>'
})
export class UserComponent {
  private userService = inject(UserService);

  users = this.userService.getUsers();
}

// Angular provides UserService through dependency injection.
// View: Erick, Ana`,
},

{
  question: "What is a reactive form in Angular?",
  category: "Angular Basic",
  options: [
    "A reactive form is a form defined and managed only in the HTML template using ngModel.",
    "A reactive form is a form that uses CSS classes to manage input values and validation.",
    "A reactive form is a form defined and managed in the TypeScript class using FormControl and FormGroup. It provides explicit control over input values, validation, and form changes.",
    "A reactive form is a form that stores input values in services without using form controls.",
  ],
  answer: 2,
  explanation:
    "A reactive form is a form defined and managed in the TypeScript class using FormControl and FormGroup. It provides explicit control over input values, validation, and form changes.",
  code: `import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: \`
    <form [formGroup]="form" (ngSubmit)="submit()">
      <input formControlName="name" placeholder="Name">
      <button type="submit" [disabled]="form.invalid">
        Save
      </button>
    </form>
  \`
})
export class UserFormComponent {
  form = new FormGroup({
    name: new FormControl('', {
      nonNullable: true,
      validators: [Validators.required]
    })
  });

  submit() {
    if (this.form.valid) {
      console.log(this.form.getRawValue());
    }
  }
}

// Empty input: Save is disabled.
// Enter Erick and submit: { name: 'Erick' }`,
},

{
  question: "What is FormControl?",
  category: "Angular Basic",
  options: [
    "Groups related controls and manages their combined values and validation.",
    "Simplifies the creation of controls, groups, and arrays.",
    "Provides validation rules such as required, email, and minLength.",
    "Manages the value and validation of a single input.",
  ],
  answer: 3,
  explanation:
    "FormControl: Manages the value and validation of a single input.",
  code: `import { FormControl, Validators } from '@angular/forms';

const name = new FormControl('', {
  nonNullable: true,
  validators: [Validators.required]
});

console.log(name.valid); // false

name.setValue('Erick');

console.log(name.value); // Erick
console.log(name.valid); // true`,
},

{
  question: "What is FormGroup?",
  category: "Angular Basic",
  options: [
    "Groups related controls and manages their combined values and validation.",
    "Manages the value and validation of a single input.",
    "Provides validation rules such as required, email, and minLength.",
    "Simplifies the creation of controls, groups, and arrays.",
  ],
  answer: 0,
  explanation:
    "FormGroup: Groups related controls and manages their combined values and validation.",
  code: `import {
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';

const form = new FormGroup({
  name: new FormControl('Erick', {
    nonNullable: true,
    validators: [Validators.required]
  }),
  email: new FormControl('erick@example.com', {
    nonNullable: true,
    validators: [Validators.required, Validators.email]
  })
});

console.log(form.getRawValue());
// { name: 'Erick', email: 'erick@example.com' }

console.log(form.valid); // true`,
},

{
  question: "What is FormBuilder?",
  category: "Angular Basic",
  options: [
    "Provides validation rules such as required, email, and minLength.",
    "Simplifies the creation of controls, groups, and arrays.",
    "Manages the value and validation of a single input.",
    "Displays form values in a template without creating controls.",
  ],
  answer: 1,
  explanation:
    "FormBuilder: Simplifies the creation of controls, groups, and arrays.",
  code: `import { FormBuilder, Validators } from '@angular/forms';

const fb = new FormBuilder();

const form = fb.nonNullable.group({
  name: ['Erick', Validators.required],
  email: ['erick@example.com', [
    Validators.required,
    Validators.email
  ]]
});

console.log(form.getRawValue());
// { name: 'Erick', email: 'erick@example.com' }

// FormBuilder creates the FormGroup and FormControls.`,
},

{
  question: "What are Validators?",
  category: "Angular Basic",
  options: [
    "Groups related controls and manages their combined values and validation.",
    "Simplifies the creation of controls, groups, and arrays.",
    "Provides validation rules such as required, email, and minLength.",
    "Creates and provides the dependencies components and services need.",
  ],
  answer: 2,
  explanation:
    "Validators: Provides validation rules such as required, email, and minLength.",
  code: `import { FormControl, Validators } from '@angular/forms';

const email = new FormControl('', {
  nonNullable: true,
  validators: [
    Validators.required,
    Validators.email,
    Validators.minLength(6)
  ]
});

console.log(email.hasError('required')); // true

email.setValue('abc');
console.log(email.hasError('email')); // true
console.log(email.hasError('minlength')); // true

email.setValue('erick@example.com');
console.log(email.valid); // true`,
},
];