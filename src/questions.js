const questions = [
  // JAVA VERSIONS
  {
    question: "Which feature was introduced in Java 8?",
    category: "Java Versions",
    options: [
      "Sealed classes",
      "Virtual threads",
      "Lambda expressions",
      "Records",
    ],
    answer: 2,
    explanation:
      "Java 8 introduced lambda expressions, allowing concise implementations of functional interfaces.",
  },
  {
    question: "Which API was introduced in Java 8 to process sequences of elements?",
    category: "Collections",
    options: [
      "The Stream API",
      "The SequencedCollection API",
      "The VirtualThread API",
      "The Record API",
    ],
    answer: 0,
    explanation:
      "The Stream API supports operations such as filter, map, and reduce on sequences of elements.",
  },
  {
    question: "Which statement correctly compares Java 8, Java 17, and Java 21?",
    category: "Java Versions",
    options: [
      "All three versions include virtual threads.",
      "Java 8 includes records, but Java 17 does not.",
      "Java 17 introduced lambda expressions.",
      "Java 17 supports sealed classes, and Java 21 adds finalized virtual threads.",
    ],
    answer: 3,
    explanation:
      "Sealed classes became permanent in Java 17. Virtual threads became permanent in Java 21. Neither feature is available in Java 8.",
  },
  {
    question: "What does LTS stand for in Java releases?",
    category: "Java Versions",
    options: [
      "Local Thread Storage",
      "Long-Term Support",
      "Language Type Safety",
      "Lightweight Thread System",
    ],
    answer: 1,
    explanation:
      "LTS means Long-Term Support. Support duration, update availability, and terms depend on the JDK vendor.",
  },
  {
    question: "Which feature became permanent in Java 17?",
    category: "Java Versions",
    options: [
      "Lambda expressions",
      "Records",
      "Sealed classes",
      "Virtual threads",
    ],
    answer: 2,
    explanation:
      "Sealed classes became permanent in Java 17. Records became permanent in Java 16, lambdas arrived in Java 8, and virtual threads became permanent in Java 21.",
  },
  {
    question: "In which Java version did records and pattern matching for instanceof become permanent?",
    category: "Java Versions",
    options: ["Java 8", "Java 11", "Java 17", "Java 16"],
    answer: 3,
    explanation:
      "Both records and pattern matching for instanceof became permanent in Java 16 and are also available in Java 17 and later.",
  },
  {
    question: "What is the main purpose of a Java record?",
    category: "Modern Java",
    options: [
      "To provide a concise declaration for a data carrier",
      "To create a lightweight thread",
      "To allow multiple class inheritance",
      "To replace all interfaces",
    ],
    answer: 0,
    explanation:
      "Records reduce boilerplate for data carriers by providing component fields, accessors, a canonical constructor, equals(), hashCode(), and toString().",
  },
  {
    question: "Which statement about record immutability is correct?",
    category: "Modern Java",
    options: [
      "All objects referenced by a record are automatically immutable.",
      "Record component fields are final, but referenced objects may still be mutable.",
      "Records automatically copy every object passed to their constructors.",
      "Record components can always be reassigned through setters.",
    ],
    answer: 1,
    explanation:
      "Records provide shallow immutability. A component reference cannot be reassigned, but the referenced object may still change.",
  },
  {
    question: "What is the purpose of strong encapsulation of JDK internals?",
    category: "Modern Java",
    options: [
      "To make every application field private",
      "To prevent developers from creating packages",
      "To remove all reflection APIs",
      "To restrict access to internal JDK implementation details",
    ],
    answer: 3,
    explanation:
      "Strong encapsulation restricts access to JDK internals and encourages applications to use supported APIs. It does not remove reflection entirely.",
  },
  {
    question: "What is the main purpose of a sealed class?",
    category: "Modern Java",
    options: [
      "To prevent all object creation",
      "To make every method static",
      "To restrict which classes can directly extend it",
      "To make every field immutable",
    ],
    answer: 2,
    explanation:
      "A sealed class controls its direct subclasses. A sealed interface similarly controls its direct subinterfaces and implementing classes.",
  },
  {
    question: "Which keyword explicitly lists the permitted direct subclasses of a sealed class?",
    category: "Modern Java",
    options: ["permits", "implements", "allows", "exports"],
    answer: 0,
    explanation:
      "The permits clause explicitly lists permitted direct subclasses. In some declarations, Java can infer the permitted types.",
  },
  {
    question: "Which declaration correctly completes this sealed hierarchy?",
    category: "Modern Java",
    code: `sealed class Animal permits Dog {}

___ class Dog extends Animal {}`,
    options: ["public", "static", "protected", "final"],
    answer: 3,
    explanation:
      "A direct subclass of a sealed class must be final, sealed, or non-sealed. Declaring Dog final prevents further subclassing.",
  },
  {
    question: "What does non-sealed mean for a permitted subclass?",
    category: "Modern Java",
    options: [
      "It cannot be instantiated.",
      "It reopens the hierarchy so other classes can extend it.",
      "It cannot contain methods.",
      "It automatically becomes an interface.",
    ],
    answer: 1,
    explanation:
      "A non-sealed subclass removes the sealing restriction for its own subclasses, subject to ordinary access and inheritance rules.",
  },
  {
    question: "How does pattern matching improve instanceof?",
    category: "Modern Java",
    options: [
      "It automatically converts every object to a String.",
      "It eliminates runtime type checks.",
      "It combines a type check with a pattern variable, avoiding an explicit cast.",
      "It allows unrelated classes to inherit from each other.",
    ],
    answer: 2,
    explanation:
      "A type pattern checks the object's type and introduces a variable of that type when the match succeeds.",
  },
  {
    question: "What does this code print?",
    category: "Modern Java",
    code: `Object value = "Java";

if (value instanceof String text) {
    System.out.println(text.length());
}`,
    options: ["4", "Java", "0", "Compilation error"],
    answer: 0,
    explanation:
      "value refers to a String, so the pattern matches. text refers to that String, whose length is 4.",
  },
  {
    question: "What happens when this code runs?",
    category: "Modern Java",
    code: `Object value = null;

if (value instanceof String text) {
    System.out.println(text);
} else {
    System.out.println("No match");
}`,
    options: [
      "It throws NullPointerException.",
      "It prints null.",
      "It fails to compile because instanceof cannot check null.",
      'It prints "No match".',
    ],
    answer: 3,
    explanation:
      "A type pattern does not match null. The condition is false, so the else branch runs.",
  },
  {
    question: "Which pair of features became permanent in Java 21?",
    category: "Java Versions",
    options: [
      "Lambda expressions and streams",
      "Virtual threads and Sequenced Collections",
      "Records and pattern matching for instanceof",
      "Sealed classes and generics",
    ],
    answer: 1,
    explanation:
      "Java 21 finalized virtual threads and introduced Sequenced Collections.",
  },
  {
    question: "What is the main goal of virtual threads?",
    category: "Threads",
    options: [
      "To make every CPU calculation run faster",
      "To eliminate the need for synchronization",
      "To support large numbers of concurrent tasks with lightweight threads",
      "To replace the Java garbage collector",
    ],
    answer: 2,
    explanation:
      "Virtual threads support many concurrent tasks with lightweight threads, especially when tasks wait for I/O. They do not make CPU calculations inherently faster. This Java 21+ example uses sleep to simulate waiting.",
    example: `import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        try (var executor =
                Executors.newVirtualThreadPerTaskExecutor()) {

            for (int i = 1; i <= 1000; i++) {
                final int taskId = i;

                executor.submit(() -> {
                    Thread.sleep(100); // Simulates waiting for I/O
                    System.out.println("Task completed: " + taskId);
                    return null;
                });
            }
        } // Waits for all submitted tasks to finish.
    }
}

// Each task runs on its own virtual thread.
// Completion order can vary.`,
  },
  {
    question: "Which workload is generally the best fit for virtual threads?",
    category: "Threads",
    options: [
      "A server handling many requests that wait for network or database responses",
      "A single calculation that continuously uses one CPU core",
      "A program that must avoid all thread creation",
      "A task that requires every thread to own a dedicated operating-system thread",
    ],
    answer: 0,
    explanation:
      "Virtual threads suit many concurrent tasks that wait for network or database responses. This Java 21+ example simulates requests waiting for a database. Virtual threads do not inherently speed up CPU-bound calculations.",
    example: `import java.util.concurrent.Executors;

public class Main {
    public static void main(String[] args) {
        try (var executor =
                Executors.newVirtualThreadPerTaskExecutor()) {

            for (int i = 1; i <= 100; i++) {
                final int requestId = i;

                executor.submit(() -> {
                    // Simulate waiting for a database response.
                    Thread.sleep(200);

                    System.out.println("Response for request " + requestId);
                    return null;
                });
            }
        } // Waits for all requests to finish.
    }
}

// Requests wait concurrently on lightweight virtual threads.
// Response order can vary.`,
  },
  {
    question: "What do Sequenced Collections provide?",
    category: "Collections",
    options: [
      "Automatic sorting for every collection",
      "Automatic thread safety",
      "A guarantee that duplicate elements are removed",
      "Uniform operations for collections with a defined encounter order",
    ],
    answer: 3,
    explanation:
      "Sequenced Collections provide consistent ways to access first and last elements and obtain reverse-order views. Encounter order does not necessarily mean sorted order.",
  },

  // INHERITANCE
  {
    question: "What is inheritance in Java?",
    category: "Object-Oriented Programming",
    options: [
      "Hiding all methods from subclasses",
      "Inheritance is an object-oriented programming concept that allows a child class to inherit methods and attributes from a parent class.",
      "Copying an object into another variable",
      "Declaring several methods with the same name",
    ],
    answer: 1,
    explanation:
      "Inheritance establishes an is-a relationship and allows a subclass to reuse and specialize superclass behavior.",
  },
  {
    question: "Which keyword is used for class inheritance?",
    category: "Object-Oriented Programming",
    options: ["implements", "inherits", "extends", "instanceof"],
    answer: 2,
    explanation:
      "A class uses extends to name its superclass. It uses implements to declare the interfaces it implements.",
  },
  {
    question: "What does this program print?",
    category: "Object-Oriented Programming",
    code: `class Animal {
    void eat() {
        System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat();
        dog.bark();
    }
}`,
    options: [
      "Eating, followed by Woof on the next line",
      "Woof, followed by Eating on the next line",
      "Only Woof",
      "Compilation error",
    ],
    answer: 0,
    explanation:
      "Dog inherits the accessible eat() method from Animal and declares its own bark() method. The calls execute in that order.",
  },
  {
    question: "Which statement about inheritance in Java is correct?",
    category: "Object-Oriented Programming",
    options: [
      "A class can extend multiple classes.",
      "A class cannot implement more than one interface.",
      "A subclass automatically inherits its superclass constructors.",
      "A class can extend one class and implement multiple interfaces.",
    ],
    answer: 3,
    explanation:
      "Java supports single class inheritance and multiple interface implementation. Constructors are not inherited.",
  },

  // POLYMORPHISM
  {
    question: "What is runtime polymorphism in Java?",
    category: "Object-Oriented Programming",
    options: [
      "Selecting every method only by its return type",
      "Executing an overridden instance method according to the object's runtime type",
      "Making all fields accessible from any package",
      "Creating multiple constructors with identical parameter lists",
    ],
    answer: 1,
    explanation:
      "For overridden instance methods, dynamic dispatch selects the implementation based on the actual object's runtime class.",
  },
  {
    question: "What does this program print?",
    category: "Object-Oriented Programming",
    code: `class Animal {
    void sound() {
        System.out.println("Animal sound");
    }
}

class Dog extends Animal {
    @Override
    void sound() {
        System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Animal animal = new Dog();
        animal.sound();
    }
}`,
    options: ["Animal sound", "null", "Woof", "Compilation error"],
    answer: 2,
    explanation:
      "The reference type is Animal, but the runtime object is Dog. Therefore, the overridden Dog.sound() method executes.",
  },
  {
    question: "What is the purpose of the @Override annotation?",
    category: "Object-Oriented Programming",
    options: [
      "To ask the compiler to verify that a method overrides or implements an inherited method",
      "To make a method execute before all other methods",
      "To allow a class to extend multiple classes",
      "To turn an instance method into a static method",
    ],
    answer: 0,
    explanation:
      "@Override helps the compiler detect mistakes such as a misspelled method name or an incompatible parameter list.",
  },
  {
    question: "Assume bark() is declared only in Dog. What happens here?",
    category: "Object-Oriented Programming",
    code: `Animal animal = new Dog();
animal.bark();`,
    options: [
      "Dog.bark() always runs because the object is a Dog.",
      "Animal automatically gains the bark() method.",
      "The call is silently ignored.",
      "Compilation fails because Animal does not declare or inherit bark().",
    ],
    answer: 3,
    explanation:
      "The reference's compile-time type determines which methods can be called. Runtime dispatch selects implementations only after a valid method call has been established.",
  },

  {
    question: "What is the main purpose of encapsulation?",
    category: "Object-Oriented Programming",
    options: [
      "To make every field public",
      "Encapsulation is an object-oriented programming concept that hides a class’s internal state and restricts direct access to its attributes.",
      "To make subclasses mandatory",
      "To remove methods from classes",
    ],
    answer: 1,
    explanation:
      "Encapsulation is an object-oriented programming concept that hides a class’s internal state and restricts direct access to its attributes. It allows interaction through controlled methods to protect data integrity, prevent improper changes, and improve code maintainability and security. Encapsulation protects an object's internal state. In this example, balance is private and can only be increased through deposit(), which rejects invalid amounts.",
    example: `class BankAccount {
    // Private state: external code cannot modify it directly.
    private int balance = 0;

    public void deposit(int amount) {
        // Protect the rule: deposits must be positive.
        if (amount <= 0) {
            throw new IllegalArgumentException(
                "Deposit must be positive"
            );
        }

        balance += amount;
    }

    public int getBalance() {
        return balance;
    }
}

public class Main {
    public static void main(String[] args) {
        BankAccount account = new BankAccount();

        account.deposit(500);
        System.out.println(account.getBalance()); // 500

        // account.balance = -100;
        // Compilation error: balance is private.

        // account.deposit(-100);
        // Throws IllegalArgumentException.
    }
}`,
  },
  {
    question: "Assuming the declaring class is accessible, which member modifier allows access from any package?",
    category: "Object-Oriented Programming",
    options: ["private", "protected", "public", "No modifier"],
    answer: 2,
    explanation:
      "A public member is accessible wherever its declaring type is accessible, subject to applicable module boundaries.",
  },
  {
    question: "Can a separate top-level subclass directly access a private field declared in its superclass?",
    category: "Object-Oriented Programming",
    code: `// Parent class
class Person {
    private String name = "Erick";

    public String getName() {
        return name;
    }
}

// Child class
class Employee extends Person {
    public void showName() {
        // System.out.println(name);
        // Compilation error: name is private in Person.

        System.out.println(getName());
        // Valid: accesses the name through a public getter.
    }
}

public class Main {
    public static void main(String[] args) {
        Employee employee = new Employee();
        employee.showName(); // Prints: Erick
    }
}`,
    options: [
      "No. It must use an accessible operation exposed by the superclass.",
      "Yes, because inheritance makes all fields accessible.",
      "Yes, but only if the field is a String.",
      "Yes, if it adds @Override to the field.",
    ],
    answer: 0,
    explanation:
      "Person is the parent class, and Employee is the child class. Employee cannot directly access the private name field. It calls the public getName() method, which reads the field inside Person and returns its value.",
  },
  {
    question: "Which statement best describes protected access?",
    category: "Object-Oriented Programming",
    options: [
      "Only the declaring class can access the member.",
      "Every class in every package can access the member.",
      "Only classes with the same name can access the member.",
      "Same-package code can access it; subclasses in other packages have restricted access.",
    ],
    answer: 3,
    explanation:
      "protected allows access from the same package. A child class in another package can also access the inherited field, but not through an arbitrary parent-class reference.",
    example: `// File: people/Person.java
package people;

public class Person {
    protected int age = 30;
}

// File: people/Office.java
package people;

public class Office {
    public void showAge() {
        Person person = new Person();
        System.out.println(person.age); // Valid: same package.
    }
}

// File: employees/Employee.java
package employees;

import people.Person;

public class Employee extends Person {
    public void showAge() {
        System.out.println(this.age); // Valid: inherited field.
    }

    public void compare(Employee other, Person person) {
        System.out.println(other.age); // Valid: Employee reference.

        // System.out.println(person.age);
        // Error: a Person reference does not permit this
        // protected instance access from another package.
    }
}`,
  },
  {
    question: "What does this program print?",
    category: "Object-Oriented Programming",
    code: `class Person {
    private String name = "Erick";
    protected int age = 30;

    public String getName() {
        return name;
    }
}

class Employee extends Person {
    public void showData() {
        System.out.println(getName());
        System.out.println(age);
    }
}

public class Main {
    public static void main(String[] args) {
        new Employee().showData();
    }
}`,
    options: [
      "Compilation error because getName() is inherited",
      "Erick, followed by 30 on the next line",
      "null, followed by 0 on the next line",
      "Only 30",
    ],
    answer: 1,
    explanation:
      "Employee reads the private name through the public getter and directly accesses the protected age field.",
  },
  {
    question: "Which setter best protects a non-negative account balance?",
    category: "Object-Oriented Programming",
    options: [
      "A setter that accepts every value without checking it",
      "A setter that makes the balance field public",
      "A setter that rejects negative values before updating the field",
      "A setter that always replaces the balance with zero",
    ],
    answer: 2,
    explanation:
      "A validating setter can preserve an invariant. Getters and setters are design choices; encapsulation does not require exposing every field.",
  },

  // ABSTRACTION AND INTERFACES
  {
    question: "What is abstraction in Java?",
    category: "Object-Oriented Programming",
    options: [
      "Abstraction is an object-oriented programming concept that represents an object’s essential characteristics and behaviors while hiding implementation details.",
      "Making every method private",
      "Copying all superclass code into a subclass",
      "Preventing interfaces from having implementations",
    ],
    answer: 0,
    explanation:
      "Abstraction is an object-oriented programming concept that represents an object’s essential characteristics and behaviors while hiding implementation details. It exposes only what is necessary to use the object, simplifying system design and making it easier to understand and maintain. Abstraction describes what an object can do without requiring callers to know how it does it. Interfaces and abstract classes help express this separation.",
  },
  {
    question: "Which statement correctly describes interfaces and abstract classes?",
    category: "Interfaces and Abstract Classes",
    options: [
      "Both can always be instantiated directly.",
      "Abstract classes cannot contain implemented methods.",
      "A class uses extends to implement an interface.",
      "A class implements interfaces, extends an abstract class, and cannot directly instantiate either.",
    ],
    answer: 3,
    explanation:
      "A class uses implements for interfaces and extends for an abstract superclass. Abstract classes can contain both abstract and concrete methods.",
  },
];

// Additional practical abstraction questions
questions.push(
  {
    question: "What does this program print?",
    category: "Interfaces and Abstract Classes",
    code: `interface PayrollCalculator {
    int calculate(int days, int dailySalary);
}

class StandardPayroll implements PayrollCalculator {
    @Override
    public int calculate(int days, int dailySalary) {
        return days * dailySalary;
    }
}

public class Main {
    public static void main(String[] args) {
        PayrollCalculator payroll = new StandardPayroll();
        System.out.println(payroll.calculate(15, 400));
    }
}`,
    options: ["415", "6000", "15", "Compilation error"],
    answer: 1,
    explanation:
      "The interface defines the operation, and StandardPayroll supplies its implementation. Multiplying 15 by 400 produces 6000.",
  },
  {
    question: "Why must StandardPayroll.calculate() be public when implementing this interface method?",
    category: "Interfaces and Abstract Classes",
    code: `interface PayrollCalculator {
    int calculate(int days, int dailySalary);
}`,
    options: [
      "Every method in every Java class must be public.",
      "The method returns an int.",
      "The interface method is implicitly public, and its implementation cannot reduce access.",
      "The implements keyword automatically makes all class methods public.",
    ],
    answer: 2,
    explanation:
      "This interface method is implicitly public and abstract. Its implementation must be public because overriding cannot reduce visibility.",
  },
  {
    question: "StandardPayroll and BonusPayroll both implement PayrollCalculator. What is the main benefit?",
    category: "Object-Oriented Programming",
    options: [
      "Calling code can use the same contract with different calculation implementations.",
      "Both implementations must always return the same result.",
      "Neither implementation needs a calculate() method.",
      "The interface automatically chooses the implementation with the highest salary.",
    ],
    answer: 0,
    explanation:
      "The interface provides abstraction, while interchangeable implementations enable polymorphism. Callers can depend on the contract rather than a concrete class.",
  },
  {
    question: "Which example correctly matches the four object-oriented pillars?",
    category: "Object-Oriented Programming",
    options: [
      "Inheritance: private fields; polymorphism: constructors; encapsulation: extends; abstraction: loops",
      "Inheritance: interfaces only; polymorphism: final fields; encapsulation: public fields; abstraction: casting",
      "Inheritance: getters; polymorphism: imports; encapsulation: records only; abstraction: arithmetic",
      "Inheritance: extends; polymorphism: overridden methods; encapsulation: controlled state access; abstraction: interfaces",
    ],
    answer: 3,
    explanation:
      "extends establishes class inheritance; overridden methods enable runtime polymorphism; controlled state access supports encapsulation; interfaces express abstract contracts.",
  },
  {
    question: "What is the main purpose of the SOLID principles?",
    category: "SOLID Principles",
    options: [
      "To eliminate all interfaces",
      "To make software easier to maintain, extend, and test",
      "To replace object-oriented programming",
      "To guarantee faster execution",
    ],
    answer: 1,
    explanation:
      "SOLID provides five design principles that help manage dependencies and build maintainable, extensible, and testable software.",
  },
  {
    question: "What does the Single Responsibility Principle state?",
    category: "SOLID Principles",
    options: [
      "A class must contain exactly one method.",
      "A program must contain exactly one class.",
      "Each class should focus on a specific responsibility or need.",
      "Every method must use one parameter.",
    ],
    answer: 2,
    explanation:
      "Each class should focus on a specific responsibility or need, such as calculating payroll, saving data, or sending notifications. It can have multiple methods that support that responsibility.",
  },
  {
    question: "Which payroll design best follows Single Responsibility?",
    category: "SOLID Principles",
    options: [
      "Separate calculation, persistence, and notification into focused classes.",
      "Put all payroll operations inside main().",
      "Make the calculator also send emails and execute SQL.",
      "Place all application behavior in one controller.",
    ],
    answer: 0,
    explanation:
      "Calculation, persistence, and notification change for different reasons, so separating them supports Single Responsibility.",
  },
  {
    question: "What does the Open-Closed Principle recommend?",
    category: "SOLID Principles",
    options: [
      "Prevent all future changes to the application.",
      "Make every class final.",
      "Avoid adding new implementations.",
      "Design software to support extension without changing stable existing logic.",
    ],
    answer: 3,
    explanation:
      "New payroll calculations can be added by implementing CalculadoraNomina. NominaService works with the interface, so its existing processing logic does not need to change.",
    example: `interface CalculadoraNomina {
    int calcular(int salarioBase);
}

class NominaNormal implements CalculadoraNomina {
    public int calcular(int salarioBase) {
        return salarioBase;
    }
}

// Extension: add a new implementation.
class NominaConBono implements CalculadoraNomina {
    public int calcular(int salarioBase) {
        return salarioBase + 500;
    }
}

// Existing logic stays unchanged.
class NominaService {
    public void mostrar(CalculadoraNomina calculadora) {
        System.out.println(calculadora.calcular(1000));
    }
}

public class Main {
    public static void main(String[] args) {
        NominaService service = new NominaService();

        service.mostrar(new NominaNormal());  // 1000
        service.mostrar(new NominaConBono()); // 1500
    }
}`,
  },
  {
    question: "Which change best demonstrates Open-Closed in a payroll system?",
    category: "SOLID Principles",
    options: [
      "Add a new if statement to the service for every payroll type.",
      "Add a new CalculadoraNomina implementation and inject it into the existing service.",
      "Copy the service for every employee.",
      "Replace all interfaces with concrete fields.",
    ],
    answer: 1,
    explanation:
      "NominaConBono adds a new calculation through CalculadoraNomina. It is injected through the constructor, so NominaService supports the new behavior without changing its existing code.",
    example: `interface CalculadoraNomina {
    int calcular(int salarioBase);
}

// New implementation
class NominaConBono implements CalculadoraNomina {
    public int calcular(int salarioBase) {
        return salarioBase + 500;
    }
}

// Existing service: no changes needed.
class NominaService {
    private final CalculadoraNomina calculadora;

    NominaService(CalculadoraNomina calculadora) {
        this.calculadora = calculadora;
    }

    public void procesar() {
        System.out.println(calculadora.calcular(1000));
    }
}

public class Main {
    public static void main(String[] args) {
        // Inject the new implementation.
        NominaService service =
            new NominaService(new NominaConBono());

        service.procesar(); // 1500
    }
}`,
  },
  {
    question: "What does the Liskov Substitution Principle require?",
    category: "SOLID Principles",
    options: [
      "Every child class must return the same values as its parent class.",
      "Every child class must declare new fields.",
      "Objects of a child class must be able to replace objects of the parent class while preserving its expected behavior without breaking the program.",
      "Every parent class must contain only one method.",
    ],
    answer: 2,
    explanation:
      "Car can replace Vehicle because it respects the promise that startEngine() starts the engine without throwing an unsupported-operation exception.",
    example: `class Vehicle {
    // Contract: starts the engine successfully.
    public void startEngine() {
        System.out.println("Vehicle engine started");
    }
}

class Car extends Vehicle {
    @Override
    public void startEngine() {
        System.out.println("Car engine started");
    }
}

public class Main {
    static void startVehicle(Vehicle vehicle) {
        vehicle.startEngine();
    }

    public static void main(String[] args) {
        startVehicle(new Vehicle()); // Vehicle engine started
        startVehicle(new Car());     // Car engine started

        // Car replaces Vehicle and preserves its contract.
    }
}`,
  },
  {
    question: "When can NominaNormal and NominaConBono satisfy Liskov Substitution?",
    category: "SOLID Principles",
    options: [
      "When both respect the contract defined by CalculadoraNomina",
      "Only when both calculate exactly the same amount",
      "Only when both have identical source code",
      "When one implementation ignores the interface contract",
    ],
    answer: 0,
    explanation:
      "Both implementations accept the same valid inputs and respect the promised result. Different amounts are allowed: the contract permits a bonus. Sharing an interface alone does not guarantee Liskov Substitution.",
    example: `interface CalculadoraNomina {
    // Contract: accepts a base salary from 0 to 1,000,000.
    // Returns at least the base salary; a bonus is allowed.
    int calcular(int salarioBase);
}

class NominaNormal implements CalculadoraNomina {
    public int calcular(int salarioBase) {
        return salarioBase;
    }
}

class NominaConBono implements CalculadoraNomina {
    public int calcular(int salarioBase) {
        return salarioBase + 500;
    }
}

public class Main {
    static void mostrarNomina(CalculadoraNomina calculadora) {
        System.out.println(calculadora.calcular(1000));
    }

    public static void main(String[] args) {
        // Either implementation respects the same contract.
        mostrarNomina(new NominaNormal());  // 1000
        mostrarNomina(new NominaConBono()); // 1500
    }
}`,
  },
  {
    question: "What does the Interface Segregation Principle state?",
    category: "SOLID Principles",
    options: [
      "Every class must implement every available interface.",
      "All methods should be placed in one interface.",
      "Interfaces must never be public.",
      "Clients should not depend on methods they do not need.",
    ],
    answer: 3,
    explanation:
      "Small, focused interfaces avoid unnecessary dependencies. A SimplePrinter implements only printing, while a MultifunctionPrinter implements both printing and scanning.",
    example: `interface Printer {
    void print();
}

interface Scanner {
    void scan();
}

// Only needs printing.
class SimplePrinter implements Printer {
    public void print() {
        System.out.println("Printing...");
    }
}

// Needs both capabilities.
class MultifunctionPrinter implements Printer, Scanner {
    public void print() {
        System.out.println("Printing...");
    }

    public void scan() {
        System.out.println("Scanning...");
    }
}

public class Main {
    public static void main(String[] args) {
        Printer printer = new SimplePrinter();
        printer.print(); // Printing...

        // SimplePrinter does not need a scan() method.
    }
}`,
  },
  {
    question: "Why separate CalculadoraNomina, RepositorioNomina, and Notificador?",
    category: "SOLID Principles",
    options: [
      "To require every implementation to calculate, save, and notify",
      "To keep each contract focused on a specific capability",
      "To avoid using polymorphism",
      "To make constructor injection impossible",
    ],
    answer: 1,
    explanation:
      "A calculator does not need persistence or notification methods. Separate contracts avoid unrelated obligations.",
  },
  {
    question: "What does the Dependency Inversion Principle recommend?",
    category: "SOLID Principles",
    options: [
      "Business services should directly construct every dependency.",
      "Interfaces should depend on database implementations.",
      "High-level classes (business logic) and low-level classes (implementation details, such as database access) should depend on abstractions.",
      "Every dependency must be static.",
    ],
    answer: 2,
    explanation:
      "OrderService (business logic) depends on the Notifier interface, while EmailNotifier (implementation detail) implements it. The service can use another notification implementation without changing its code.",
    example: `// Abstraction
interface Notifier {
    void send(String message);
}

// Low-level class: notification implementation
class EmailNotifier implements Notifier {
    public void send(String message) {
        System.out.println("Email: " + message);
    }
}

// High-level class: business logic
class OrderService {
    private final Notifier notifier;

    OrderService(Notifier notifier) {
        this.notifier = notifier;
    }

    public void placeOrder() {
        notifier.send("Order confirmed");
    }
}

public class Main {
    public static void main(String[] args) {
        OrderService service = new OrderService(new EmailNotifier());
        service.placeOrder(); // Email: Order confirmed
    }
}`,
  },
  {
    question: "Which design best applies Dependency Inversion?",
    category: "SOLID Principles",
    options: [
      "NominaService depends on interfaces supplied through its constructor.",
      "NominaService constructs RepositorioConsola inside every method.",
      "NominaService contains database connection details.",
      "NominaService uses only global variables.",
    ],
    answer: 0,
    explanation:
      "NominaService depends on the RepositorioNomina interface. RepositorioConsola implements that interface and is supplied through the constructor, allowing the implementation to change without modifying the service's business logic.",
    example: `interface RepositorioNomina {
    void guardar(int total);
}

// Low-level class: storage implementation.
class RepositorioConsola implements RepositorioNomina {
    public void guardar(int total) {
        System.out.println("Saved payroll: " + total);
    }
}

// High-level class: business logic.
class NominaService {
    private final RepositorioNomina repositorio;

    NominaService(RepositorioNomina repositorio) {
        this.repositorio = repositorio;
    }

    public void procesar(int salarioBase, int bono) {
        repositorio.guardar(salarioBase + bono);
    }
}

public class Main {
    public static void main(String[] args) {
        NominaService service =
            new NominaService(new RepositorioConsola());

        service.procesar(1000, 500); // Saved payroll: 1500
    }
}`,
  },
  {
    question: "How does constructor injection help test NominaService?",
    category: "SOLID Principles",
    options: [
      "It automatically generates every test.",
      "It prevents dependencies from being replaced.",
      "It requires tests to connect to a production database.",
      "It allows test doubles to replace real dependencies.",
    ],
    answer: 3,
    explanation:
      "A test can inject a fake repository that records the saved amount in memory. This verifies NominaService without connecting to a real database.",
    example: `interface RepositorioNomina {
    void guardar(int total);
}

// Test double: stores the value in memory.
class RepositorioFake implements RepositorioNomina {
    int totalGuardado;

    public void guardar(int total) {
        totalGuardado = total;
    }
}

class NominaService {
    private final RepositorioNomina repositorio;

    NominaService(RepositorioNomina repositorio) {
        this.repositorio = repositorio;
    }

    public void procesar(int salario, int bono) {
        repositorio.guardar(salario + bono);
    }
}

public class Main {
    public static void main(String[] args) {
        RepositorioFake fake = new RepositorioFake();
        NominaService service = new NominaService(fake);

        service.procesar(1000, 500);

        if (fake.totalGuardado != 1500) {
            throw new AssertionError("Expected payroll: 1500");
        }

        System.out.println("Test passed");
    }
}`,
  },

  // PAYROLL EXAMPLE
  {
    question: "What is the responsibility of NominaService in the example?",
    category: "SOLID Principles",
    options: [
      "Implement every calculation formula",
      "Coordinate calculation, saving, and notification",
      "Define the Java runtime",
      "Replace every interface",
    ],
    answer: 1,
    explanation:
      "NominaService coordinates the payroll workflow. It delegates calculation, saving, and notification to separate dependencies.",
    example: `interface CalculadoraNomina {
    int calcular(int salario);
}

interface RepositorioNomina {
    void guardar(int total);
}

interface Notificador {
    void notificar(int total);
}

class NominaService {
    private final CalculadoraNomina calculadora;
    private final RepositorioNomina repositorio;
    private final Notificador notificador;

    NominaService(CalculadoraNomina calculadora,
                  RepositorioNomina repositorio,
                  Notificador notificador) {
        this.calculadora = calculadora;
        this.repositorio = repositorio;
        this.notificador = notificador;
    }

    public void procesar(int salario) {
        int total = calculadora.calcular(salario);
        repositorio.guardar(total);
        notificador.notificar(total);
    }
}

public class Main {
    public static void main(String[] args) {
        NominaService service = new NominaService(
            salario -> salario + 500,
            total -> System.out.println("Saved: " + total),
            total -> System.out.println("Notified: " + total)
        );

        service.procesar(1000);
        // Saved: 1500
        // Notified: 1500
    }
}`,
  },
  {
    question: "Why is NominaConBono used in this configuration?",
    category: "SOLID Principles",
    code: `NominaService service = new NominaService(
    new NominaConBono(),
    new RepositorioConsola(),
    new NotificadorConsola()
);`,
    options: [
      "Java automatically selects the class with the longest name.",
      "All calculator implementations execute automatically.",
      "The caller explicitly passes a NominaConBono instance.",
      "Interfaces always select the most recently declared class.",
    ],
    answer: 2,
    explanation:
      "The constructor receives the specific object created by the caller. Merely declaring another implementation does not execute it.",
  },
  {
    question: "What does this calculation return?",
    category: "Interfaces and Abstract Classes",
    code: `class NominaConBono implements CalculadoraNomina {
    public int calcular(int dias, int sueldoDiario) {
        return dias * sueldoDiario + 500;
    }
}

// Method call:
new NominaConBono().calcular(15, 400);`,
    options: ["6500", "6000", "5500", "415"],
    answer: 0,
    explanation:
      "The base salary is 15 * 400 = 6000. Adding the 500 bonus produces 6500.",
  },
  {
    question: "In what order does this payroll service invoke its dependencies?",
    category: "SOLID Principles",
    code: `public void procesar(String empleado, int dias, int sueldoDiario) {
    int total = calculadora.calcular(dias, sueldoDiario);
    repositorio.guardar(empleado, total);
    notificador.enviar(empleado);
}`,
    options: [
      "Notify, save, calculate",
      "Save, calculate, notify",
      "Calculate, notify, save",
      "Calculate, save, notify",
    ],
    answer: 3,
    explanation:
      "The method calculates the amount first, passes it to the repository, and then sends the notification.",
  },

  // ABSTRACT CLASSES AND INTERFACES
  {
    question: "When is an interface usually a good choice?",
    category: "Interfaces and Abstract Classes",
    options: [
      "When every implementation must inherit the same instance fields",
      "When different classes need a common capability or contract",
      "When you need to instantiate the interface directly",
      "When you need an interface constructor",
    ],
    answer: 1,
    explanation:
      "Interfaces express shared capabilities without requiring implementations to share the same class hierarchy.",
  },
  {
    question: "When is an abstract class usually a good choice?",
    category: "Interfaces and Abstract Classes",
    options: [
      "When unrelated classes need only a shared contract",
      "When a class must extend multiple classes",
      "When related classes need shared state, initialization, or implementation",
      "When no constructor or instance field is needed or allowed",
    ],
    answer: 2,
    explanation:
      "An abstract class can provide shared fields, constructors, and reusable methods. Here, Car inherits the brand field and showBrand() method from Vehicle.",
    example: `abstract class Vehicle {
    protected String brand; // Shared field

    Vehicle(String brand) { // Shared initialization
        this.brand = brand;
    }

    public void showBrand() { // Reusable behavior
        System.out.println(brand);
    }

    public abstract void start();
}

class Car extends Vehicle {
    Car() {
        super("Toyota");
    }

    @Override
    public void start() {
        System.out.println("Car started");
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle car = new Car();
        car.showBrand(); // Toyota
        car.start();     // Car started
    }
}`,
  },
  {
    question: "Which statement about abstract classes is correct?",
    category: "Interfaces and Abstract Classes",
    options: [
      "They can contain both abstract and concrete methods.",
      "They cannot declare fields.",
      "They cannot declare constructors.",
      "They can always be instantiated directly.",
    ],
    answer: 0,
    explanation:
      "Abstract classes may contain abstract methods, implemented methods, fields, and constructors, but cannot be instantiated directly.",
  },
  {
    question: "Why can an abstract class have a constructor?",
    category: "Interfaces and Abstract Classes",
    options: [
      "To allow direct instantiation of the abstract class",
      "To replace all subclass constructors",
      "To create interface constants",
      "To initialize its part of a subclass object",
    ],
    answer: 3,
    explanation:
      "An abstract class constructor initializes shared state when a child object is created. Here, Car calls the Vehicle constructor using super() to initialize brand.",
    example: `abstract class Vehicle {
    protected String brand;

    Vehicle(String brand) {
        this.brand = brand; // Initializes the inherited field
    }
}

class Car extends Vehicle {
    Car() {
        super("Toyota"); // Calls the parent constructor
    }

    public void showBrand() {
        System.out.println(brand);
    }
}

public class Main {
    public static void main(String[] args) {
        Car car = new Car();
        car.showBrand(); // Toyota

        // new Vehicle("Toyota");
        // Error: an abstract class cannot be instantiated directly.
    }
}`,
  },
  {
    question: "Which statement about Java interface fields is correct?",
    category: "Interfaces and Abstract Classes",
    options: [
      "They are private instance fields by default.",
      "They are implicitly public, static, and final.",
      "They are always mutable instance fields.",
      "They must be initialized by an interface constructor.",
    ],
    answer: 1,
    explanation: `Interface fields are implicitly public, static, and final.

1. public: You can access it from outside the interface.
2. static: It belongs to the interface; you do not need to create an object.
3. final: You cannot reassign its value.

A final reference does not make the referenced object immutable.`,
    example: `interface Vehicle {
    int MAX_SPEED = 120;
    // Equivalent to: public static final int MAX_SPEED = 120;
}

public class Main {
    public static void main(String[] args) {
        // public: accessible from another class.
        // static: no Vehicle object is needed.
        System.out.println(Vehicle.MAX_SPEED); // 120

        // final: the field cannot be reassigned.
        // Vehicle.MAX_SPEED = 150; // Compilation error
    }
}`,
  },
  {
    question: "Which methods became available in interfaces starting with Java 8?",
    category: "Interfaces and Abstract Classes",
    options: [
      "Constructors and destructors",
      "Protected instance methods",
      "Default and static methods",
      "Final abstract methods",
    ],
    answer: 2,
    explanation:
      "Java 8 added default methods with inherited implementations and static methods belonging to the interface.",
  },
  {
    question: "Which interface capability was added in Java 9?",
    category: "Interfaces and Abstract Classes",
    options: [
      "Private methods for sharing implementation details within the interface",
      "Instance constructors",
      "Protected instance fields",
      "Multiple class inheritance",
    ],
    answer: 0,
    explanation:
      "Java 9 added private interface methods, including private static methods, to support internal code reuse.",
  },
  {
    question: "Which inheritance declaration is valid if all named types are accessible and compatible?",
    category: "Interfaces and Abstract Classes",
    options: [
      "class Payment extends BasePayment, OtherPayment {}",
      "class Payment implements BasePayment {}",
      "class Payment extends Payable implements BasePayment {}",
      "class Payment extends BasePayment implements Payable, Auditable {}",
    ],
    answer: 3,
    explanation:
      "Assuming BasePayment is a class and Payable and Auditable are interfaces, a class can extend one class and implement multiple interfaces.",
  },

  // CHECKED AND UNCHECKED EXCEPTIONS
  {
    question: "What must code do when a checked exception can propagate from a method call?",
    category: "Exception Handling",
    options: [
      "Always terminate the JVM.",
      "Catch it or declare a compatible throws clause.",
      "Convert it into a String.",
      "Ignore it because all exceptions are unchecked.",
    ],
    answer: 1,
    explanation:
      "A checked exception must be caught or declared with throws. Here, readFile() declares IOException, and main catches it.",
    example: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    static String readFile() throws IOException {
        return Files.readString(Path.of("example.txt"));
    }

    public static void main(String[] args) {
        try {
            System.out.println(readFile());
        } catch (IOException e) {
            System.out.println("Could not read the file");
        }
    }
}

// readFile() declares the checked exception.
// main handles it with try-catch.`,
  },
  {
    question: "Which pair contains checked exceptions?",
    category: "Exception Handling",
    options: [
      "NullPointerException and IllegalArgumentException",
      "IllegalStateException and ArithmeticException",
      "IOException and InterruptedException",
      "RuntimeException and NullPointerException",
    ],
    answer: 2,
    explanation:
      "IOException and InterruptedException are checked exceptions. Here, main declares both with throws because file reading and sleeping can throw them.",
    example: `import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

public class Main {
    public static void main(String[] args)
            throws IOException, InterruptedException {

        // Can throw IOException.
        String text = Files.readString(Path.of("example.txt"));
        System.out.println(text);

        // Can throw InterruptedException.
        Thread.sleep(1000);
    }
}

// Both checked exceptions are declared with throws.
// Alternatively, they could be handled with try-catch.`,
  },
  {
    question: "Which pair contains unchecked exceptions?",
    category: "Exception Handling",
    options: [
      "NullPointerException and IllegalArgumentException",
      "IOException and InterruptedException",
      "Exception and IOException",
      "InterruptedException and IllegalArgumentException",
    ],
    answer: 0,
    explanation:
      "NullPointerException and IllegalArgumentException extend RuntimeException. The compiler does not require catching or declaring them, although they can still interrupt execution.",
    example: `public class Main {
    static void validateAge(int age) {
        if (age < 0) {
            throw new IllegalArgumentException("Age cannot be negative");
        }
    }

    public static void main(String[] args) {
        // Each example catches its exception so both can run.
        try {
            String name = null;
            System.out.println(name.length());
        } catch (NullPointerException e) {
            System.out.println("Name is null");
        }

        try {
            validateAge(-1);
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        }
    }
}

// Output:
// Name is null
// Age cannot be negative

// These catch blocks are optional at compile time.`,
  },
  {
    question: "Which statement about unchecked throwable types is correct?",
    category: "Exception Handling",
    options: [
      "They can never be caught.",
      "They occur only during compilation.",
      "Every subclass of Exception is unchecked.",
      "RuntimeException subclasses and Error subclasses are unchecked.",
    ],
    answer: 3,
    explanation:
      "RuntimeException and Error, together with their subclasses, are unchecked. Catching or declaring them is not required by the compiler. They can be caught, although applications generally should not try to recover from serious JVM errors.",
    example: `public class Main {
    public static void main(String[] args) {
        try {
            throw new IllegalArgumentException("Invalid value");
        } catch (RuntimeException e) {
            System.out.println("Caught a RuntimeException");
        }

        try {
            throw new AssertionError("Demo failure");
        } catch (AssertionError e) {
            System.out.println("Caught an Error");
        }
    }
}

// Output:
// Caught a RuntimeException
// Caught an Error

// Both types are unchecked.
// No throws clause is required.
// Catching AssertionError here is only a demonstration.`,
  },
  {
    question: "What is the difference between throw and throws?",
    category: "Exception Handling",
    options: [
      "They are interchangeable keywords.",
      "throw raises an exception; throws declares exceptions that may propagate.",
      "throw is only for checked exceptions; throws is only for unchecked exceptions.",
      "throws creates a new exception object.",
    ],
    answer: 1,
    explanation:
      "throw is a statement that raises a throwable. A throws clause appears in a method or constructor declaration.",
  },
  {
    question: "Which exception is appropriate for rejecting negative worked days?",
    category: "Exception Handling",
    options: [
      "InterruptedException",
      "IOException",
      "IllegalArgumentException",
      "ClassNotFoundException",
    ],
    answer: 2,
    explanation:
      "IllegalArgumentException indicates that a caller supplied an invalid argument, such as a negative number of worked days.",
  },

  // INTERRUPTION
  {
    question: "What does Thread.sleep(1000) do?",
    category: "Threads",
    options: [
      "Temporarily pauses the current thread without creating a new thread.",
      "Creates a new thread that runs for exactly one second.",
      "Stops every thread in the application.",
      "Guarantees the current task finishes within one second.",
    ],
    answer: 0,
    explanation:
      "Thread.sleep(1000) temporarily pauses the current thread for approximately one second, subject to scheduling and interruption. It does not create a new thread.",
    example: `public class Main {
    public static void main(String[] args)
            throws InterruptedException {

        System.out.println("Before sleep");

        Thread.sleep(1000); // Pauses the main thread.

        System.out.println("After sleep");
    }
}

// Output:
// Before sleep
// (approximately one second later)
// After sleep

// Both messages run on the same thread.`,
  },
  {
    question: "Why restore the interrupt flag after catching InterruptedException when the task cannot propagate it directly?",
    category: "Threads",
    options: [
      "To restart the entire application",
      "To guarantee immediate termination of every thread",
      "To repeat the interrupted sleep automatically",
      "To preserve the cancellation signal for higher-level code",
    ],
    answer: 3,
    explanation:
      "When sleep throws InterruptedException, it clears the interrupt flag. Calling Thread.currentThread().interrupt() restores the cancellation signal so calling code can detect it.",
    example: `public class Main {
    static void pause() {
        try {
            Thread.sleep(1000);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt(); // Restore the signal.
        }
    }

    public static void main(String[] args) {
        Thread.currentThread().interrupt(); // Request cancellation.

        pause(); // sleep throws and clears the flag; catch restores it.

        if (Thread.currentThread().isInterrupted()) {
            System.out.println("Cancellation detected");
            return;
        }

        System.out.println("Continuing work");
    }
}

// Output:
// Cancellation detected`,
  },
  {
    question: "Which statement restores the current thread's interrupt status?",
    category: "Threads",
    options: [
      "Thread.sleep(0);",
      "Thread.currentThread().interrupt();",
      "Thread.interrupted();",
      "new Thread().start();",
    ],
    answer: 1,
    explanation:
      "Thread.currentThread().interrupt() sets the current thread's interrupt status. Thread.interrupted() checks and clears it.",
  },
  {
    question: "What happens after this catch block executes?",
    category: "Threads",
    code: `try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
    throw new IllegalStateException("Payroll interrupted", e);
}

return dias * sueldoDiario;`,
    options: [
      "The method always returns the salary.",
      "The InterruptedException is silently ignored.",
      "The interrupt status is restored, and IllegalStateException propagates instead of returning a salary.",
      "A new thread calculates the salary.",
    ],
    answer: 2,
    explanation:
      "The catch block restores interrupt status and throws an unchecked exception that preserves the original exception as its cause.",
  },

  // SPRING CONTROLLER AND ERROR HANDLING
  {
    question: "What is the role of @RestController in the payroll example?",
    category: "SpringBoot",
    options: [
      "To identify a controller whose handler return values are written to the HTTP response body",
      "To create a database table",
      "To catch every exception automatically",
      "To make the service run on a new thread",
    ],
    answer: 0,
    explanation:
      "@RestController combines controller behavior with response-body semantics. Serialization depends on the configured HTTP message converters.",
  },
  {
    question: "What does @RequestParam bind in this endpoint?",
    category: "SpringBoot",
    code: `@GetMapping
public int calcular(
    @RequestParam("dias") int dias,
    @RequestParam("sueldoDiario") int sueldoDiario
) {
    return service.calcular(dias, sueldoDiario);
}`,
    options: [
      "Java class names",
      "Database column definitions",
      "Only JSON request-body fields",
      "Request parameter values such as dias and sueldoDiario in the query string",
    ],
    answer: 3,
    explanation:
      "For a URL such as /nominas?dias=15&sueldoDiario=400, Spring binds and converts the query parameter values to the declared int parameters.",
  },
  {
    question: "What is the purpose of @RestControllerAdvice with @ExceptionHandler methods?",
    category: "Exception Handling",
    options: [
      "To prevent any exception from being thrown",
      "To centralize exception handling and produce response bodies for matching controller exceptions",
      "To automatically retry every failed request",
      "To replace constructor injection",
    ],
    answer: 1,
    explanation:
      "@RestControllerAdvice centralizes exception handling across controllers. Here, @ExceptionHandler handles IllegalArgumentException and returns HTTP 400 with an error message.",
    example: `import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
class NominaController {
    @GetMapping("/nomina")
    public int calcular(@RequestParam("dias") int dias) {
        if (dias < 0) {
            throw new IllegalArgumentException(
                "Days cannot be negative"
            );
        }
        return dias * 100;
    }
}

@RestControllerAdvice
class GlobalExceptionHandler {
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handle(IllegalArgumentException e) {
        return ResponseEntity.badRequest().body(e.getMessage());
    }
}

// GET /nomina?dias=-1
// Status: 400 Bad Request
// Body: Days cannot be negative

// The handler can also handle this exception
// from other controllers covered by the advice.`,
  },
  {
    question: "What response does this handler build?",
    category: "SpringBoot",
    code: `@ExceptionHandler(IllegalArgumentException.class)
public ResponseEntity<Map<String, String>> invalid(
    IllegalArgumentException e
) {
    return ResponseEntity.badRequest()
        .body(Map.of("error", e.getMessage()));
}`,
    options: [
      "HTTP 200 with an empty body",
      "HTTP 500 with a payroll total",
      "HTTP 400 with an error message in the response body",
      "HTTP 404 with no explanation",
    ],
    answer: 2,
    explanation:
      "badRequest() selects HTTP 400. With JSON serialization configured, the map becomes an object such as {\"error\":\"Invalid input\"}.",
  },
  {
    question: "Assuming valid input, no interruption, and a standard calculation of days * daily salary, what does this GET request return?",
    category: "SpringBoot",
    code: `/nominas?dias=15&sueldoDiario=400`,
    options: [
      "HTTP 200 with 6000",
      "HTTP 200 with 6500",
      "HTTP 400 with an input error",
      "HTTP 500 because GET cannot return a number",
    ],
    answer: 0,
    explanation:
      "The standard calculation returns 15 * 400 = 6000. This Spring service example does not add the bonus used in the earlier strategy example.",
  },
  {
    question: "In the example, what happens when the service rejects dias=-1?",
    category: "SpringBoot",
    options: [
      "The controller returns a negative payroll amount.",
      "The framework automatically changes dias to zero.",
      "The calculator silently skips validation.",
      "IllegalArgumentException reaches its configured handler, which returns HTTP 400.",
    ],
    answer: 3,
    explanation:
      "The service rejects negative days by throwing IllegalArgumentException. The configured @RestControllerAdvice catches it and returns HTTP 400 with an error message.",
    example: `import org.springframework.stereotype.Service;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Service
class NominaService {
    public int calcular(int dias) {
        if (dias < 0) {
            throw new IllegalArgumentException(
                "Days cannot be negative"
            );
        }
        return dias * 100;
    }
}

@RestController
class NominaController {
    private final NominaService service;

    NominaController(NominaService service) {
        this.service = service;
    }

    @GetMapping("/nomina")
    public int calcular(@RequestParam("dias") int dias) {
        return service.calcular(dias);
    }
}

@RestControllerAdvice
class ErrorHandler {
    @ExceptionHandler(IllegalArgumentException.class)
    public ResponseEntity<String> handle(IllegalArgumentException ex) {
        return ResponseEntity.badRequest().body(ex.getMessage());
    }
}

// GET /nomina?dias=-1
// Status: 400 Bad Request
// Body: Days cannot be negative`,
  },
  {
    question: "What is a thread in Java?",
    category: "Threads",
    options: [
      "A separate copy of the entire application",
      "An independent path of execution within a program",
      "A variable that stores execution results",
      "A method that always runs before main()",
    ],
    answer: 1,
    explanation:
      "A thread is an independent path of execution within a program. Here, main and a worker thread execute separate tasks concurrently. Their messages may appear in either order.",
    example: `public class Main {
    public static void main(String[] args)
            throws InterruptedException {

        Thread worker = new Thread(() -> {
            System.out.println("Worker thread: processing a task");
        });

        worker.start(); // Starts a new path of execution.

        System.out.println("Main thread: doing other work");

        worker.join(); // Waits for the worker to finish.
    }
}

// Both messages are printed.
// Their order can vary.`,
  },
  {
    question: "What does concurrent execution of threads mean?",
    category: "Threads",
    options: [
      "All threads must finish at the same time.",
      "Every thread must run on a separate computer.",
      "Multiple tasks can make progress during overlapping periods.",
      "Threads always run simultaneously on different CPU cores.",
    ],
    answer: 2,
    explanation:
      "Concurrent tasks can make progress during overlapping periods. Their execution may be interleaved on one CPU core or run simultaneously on multiple cores. The output order is not guaranteed.",
    example: `public class Main {
    public static void main(String[] args)
            throws InterruptedException {

        Thread taskA = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println("Task A: " + i);
            }
        });

        Thread taskB = new Thread(() -> {
            for (int i = 1; i <= 3; i++) {
                System.out.println("Task B: " + i);
            }
        });

        taskA.start();
        taskB.start();

        taskA.join();
        taskB.join();
    }
}

// Possible output:
// Task A: 1
// Task B: 1
// Task A: 2
// Task B: 2
// Task B: 3
// Task A: 3

// Interleaving is possible, but not guaranteed.`,
  },
  {
    question: "Does this statement start the thread?",
    category: "Threads",
    code: `Thread hilo1 = new Thread(
    () -> nomina.procesar("Ana", 15, 400)
);`,
    options: [
      "No. It creates the Thread object, but start() must be called.",
      "Yes. The constructor immediately starts the thread.",
      "Yes. A lambda always starts a new thread.",
      "No. Only join() can start a thread.",
    ],
    answer: 0,
    explanation:
      "Creating a Thread object does not start its execution. The thread begins executing its task after start() is called.",
  },
  {
    question: "What does the lambda passed to the Thread constructor represent?",
    category: "Threads",
    code: `Thread hilo1 = new Thread(
    () -> nomina.procesar("Ana", 15, 400)
);`,
    options: [
      "A guarantee that this thread finishes first",
      "A lock protecting every object in the program",
      "The result returned by join()",
      "The Runnable task that the thread will execute",
    ],
    answer: 3,
    explanation:
      "The lambda defines the task supplied to the Thread. Here, the task calls procesar() for Ana.",
  },
  {
    question: "What is the difference between start() and calling run() directly?",
    category: "Threads",
    options: [
      "Both methods always start a new thread.",
      "start() starts a new thread; calling run() directly executes the task on the calling thread.",
      "run() starts a new thread; start() waits for it.",
      "start() executes the task twice.",
    ],
    answer: 1,
    explanation:
      "Calling run() directly executes the task on the current thread. Calling start() starts a new thread that executes the task.",
    example: `public class Main {
    public static void main(String[] args)
            throws InterruptedException {

        Thread worker = new Thread(() -> {
            System.out.println(Thread.currentThread().getName());
        }, "Worker");

        worker.run();   // Prints main: ordinary method call.

        worker.start(); // Prints Worker: runs on a new thread.
        worker.join();  // Waits for Worker to finish.
    }
}

// Output:
// main
// Worker`,
  },
  {
    question: "How many worker threads are started in this example?",
    category: "Threads",
    code: `Thread hilo1 = new Thread(
    () -> nomina.procesar("Ana", 15, 400)
);

Thread hilo2 = new Thread(
    () -> nomina.procesar("Luis", 15, 500)
);

hilo1.start();
hilo2.start();`,
    options: ["None", "One", "Two", "Four"],
    answer: 2,
    explanation:
      "The program starts two worker threads. Each processes a different employee. The main thread exists separately.",
  },
  {
    question: "Does starting hilo1 before hilo2 guarantee that Ana's payslip prints first?",
    category: "Threads",
    options: [
      "No. The scheduler does not guarantee which worker prints first.",
      "Yes. Threads always print in their starting order.",
      "Yes. The employee with the lower salary is processed first.",
      "No. The second thread always prints first.",
    ],
    answer: 0,
    explanation:
      "Starting hilo1 first does not guarantee that Ana's payslip prints first. The scheduler determines when each worker runs, so either message may appear first.",
    example: `public class Main {
    public static void main(String[] args)
            throws InterruptedException {

        Thread hilo1 = new Thread(() -> {
            System.out.println("Ana: payslip ready");
        });

        Thread hilo2 = new Thread(() -> {
            System.out.println("Luis: payslip ready");
        });

        hilo1.start();
        hilo2.start();

        hilo1.join();
        hilo2.join();
    }
}

// Possible output:
// Luis: payslip ready
// Ana: payslip ready

// Ana may also print first. Neither order is guaranteed.`,
  },
  {
    question: "What does hilo1.join() do when called by main?",
    category: "Threads",
    options: [
      "Starts hilo1",
      "Stops hilo1 immediately",
      "Combines hilo1 with hilo2",
      "Makes main wait for hilo1 to terminate, unless main is interrupted",
    ],
    answer: 3,
    explanation:
      "main calls hilo1.join() to wait until hilo1 finishes. After join() returns normally, main continues and prints its message.",
    example: `public class Main {
    public static void main(String[] args)
            throws InterruptedException {

        Thread hilo1 = new Thread(() -> {
            System.out.println("Worker: payslip ready");
        });

        hilo1.start(); // Starts the worker.
        hilo1.join();  // main waits for the worker to finish.

        System.out.println("Main: worker has finished");
    }
}

// Output:
// Worker: payslip ready
// Main: worker has finished`,
  },
  {
    question: "Do these join() calls make the already-started workers execute sequentially?",
    category: "Threads",
    code: `hilo1.start();
hilo2.start();

hilo1.join();
hilo2.join();`,
    options: [
      "Yes. hilo2 cannot run until hilo1 finishes.",
      "No. Both workers have started; main waits for their completion.",
      "Yes. join() pauses all worker threads.",
      "No. join() creates additional workers.",
    ],
    answer: 1,
    explanation:
      "Both workers start before main calls join(). While main waits for hilo1, hilo2 can continue running or may already have finished.",
  },
  {
    question: "When does the final message print if both join() calls return normally?",
    category: "Threads",
    code: `hilo1.join();
hilo2.join();

System.out.println("Payroll processing finished.");`,
    options: [
      "Before either worker starts",
      "Immediately after the first worker starts",
      "After both worker threads have terminated",
      "Only when hilo1 finishes before hilo2",
    ],
    answer: 2,
    explanation:
      "Both workers have terminated before execution reaches the final print statement. Their relative completion order is not guaranteed.",
  },
  {
    question: "Why does main declare throws InterruptedException in this example?",
    category: "Threads",
    code: `public static void main(String[] args)
        throws InterruptedException {
    hilo1.start();
    hilo2.start();

    hilo1.join();
    hilo2.join();
}`,
    options: [
      "Because join() can throw InterruptedException while main is waiting",
      "Because creating any Thread always throws InterruptedException",
      "Because every main method requires this declaration",
      "Because multiplying numbers interrupts a thread",
    ],
    answer: 0,
    explanation:
      "The main thread can be interrupted while waiting in join(). This example declares the checked exception instead of catching it.",
  },
  {
    question: "Why do the two workers have separate calculation results in the shown method?",
    category: "Threads",
    code: `public void procesar(String nombre, int dias, int sueldoDiario) {
    int bruto = dias * sueldoDiario;
    int deducciones = bruto / 10;
    int neto = bruto - deducciones;

    System.out.println(nombre + ": " + neto);
}`,
    options: [
      "Java automatically synchronizes every method.",
      "Each worker receives a complete copy of the Nomina object.",
      "join() prevents the workers from calling the method concurrently.",
      "Each method invocation has its own parameters and local calculation variables.",
    ],
    answer: 3,
    explanation:
      "The calculation results are local to each invocation. They are not stored in shared instance fields, even though both workers use the same Nomina object.",
  },
  {
    question: "What can happen if threads update shared mutable data without proper coordination?",
    category: "Threads",
    options: [
      "The compiler always rejects the program.",
      "Race conditions can produce incorrect results.",
      "Java automatically executes the threads sequentially.",
      "The threads automatically receive separate copies of every field.",
    ],
    answer: 1,
    explanation:
      "Concurrent access to shared mutable data can cause race conditions. Appropriate synchronization or atomic operations may be necessary.",
  },
  {
    question: "Which statement describes execution inside each worker in the payroll example?",
    category: "Threads",
    options: [
      "All statements inside the method execute simultaneously.",
      "The payslip must print before the calculation starts.",
      "Each worker follows its method's statement order, while execution between workers can overlap.",
      "One worker must finish before the other can calculate anything.",
    ],
    answer: 2,
    explanation:
      "Each worker calculates the salary, applies the deduction, and prints the payslip in that order. Execution between workers can overlap, so either payslip may print first.",
    example: `public class Main {
    static void procesarNomina(String nombre, int dias) {
        int salario = dias * 100;        // 1. Calculate
        int total = salario - 50;        // 2. Apply deduction
        System.out.println(nombre + ": " + total); // 3. Print
    }

    public static void main(String[] args)
            throws InterruptedException {

        Thread hilo1 = new Thread(() -> procesarNomina("Ana", 10));
        Thread hilo2 = new Thread(() -> procesarNomina("Luis", 12));

        hilo1.start();
        hilo2.start();

        hilo1.join();
        hilo2.join();
    }
}

// Possible output:
// Luis: 1150
// Ana: 950

// Each worker follows steps 1 → 2 → 3.
// The order between workers is not guaranteed.`,
  },

  {
    question: "What is a List in Java?",
    category: "Collections",
    options: [
      "A collection that stores only unique elements",
      "An interface for ordered collections that allow duplicates and positional access",
      "A class that stores only key-value pairs",
      "A fixed-size structure that stores only primitive values",
    ],
    answer: 1,
    explanation:
      "List is an interface for ordered collections. Lists allow duplicate elements and provide access by index.",
  },
  {
    question: "When is a List a suitable choice?",
    category: "Collections",
    options: [
      "When every element must be unique",
      "When values must be retrieved by a unique key",
      "When element order matters and duplicates are allowed",
      "When elements must always be automatically sorted",
    ],
    answer: 2,
    explanation:
      "A List is useful when position matters, duplicates are valid, or elements need to be retrieved and updated by index.",
  },
  {
    question: "Which group contains five commonly used List methods?",
    category: "Collections",
    options: [
      "add(element), get(index), set(index, element), remove(index), size()",
      "put(key, value), get(key), containsKey(key), keySet(), values()",
      "push(), start(), join(), sleep(), interrupt()",
      "length(), put(), sortKey(), firstKey(), lastKey()",
    ],
    answer: 0,
    explanation:
      "These List methods append, retrieve, replace, remove, and count elements. Some implementations restrict modification operations.",
  },
  {
    question: "What does this code print?",
    category: "Collections",
    code: `List<String> names = new ArrayList<>();
names.add("Ana");
names.add("Luis");
names.add("Ana");

System.out.println(names.get(1));
System.out.println(names.size());`,
    options: [
      "Ana, followed by 2",
      "Ana, followed by 3",
      "Luis, followed by 2",
      "Luis, followed by 3",
    ],
    answer: 3,
    explanation:
      "List indexes start at zero, so index 1 contains Luis. The list contains three elements because duplicates are allowed.",
  },
  {
    question: "What does set(index, element) do to an ArrayList?",
    category: "Collections",
    options: [
      "Inserts an additional element and increases the size",
      "Replaces an existing element and returns the previous value",
      "Removes every duplicate element",
      "Sorts the list by index",
    ],
    answer: 1,
    explanation:
      "set() replaces the element at an existing index and returns the previous element. It does not change the list's size.",
  },
  {
    question: "What does this code print?",
    category: "Collections",
    code: `List<String> names = new ArrayList<>();
names.add("Ana");
names.add("Luis");

String previous = names.set(1, "Sofia");

System.out.println(previous);
System.out.println(names);`,
    options: [
      "Sofia, followed by [Ana, Luis]",
      "Luis, followed by [Ana, Luis, Sofia]",
      "Luis, followed by [Ana, Sofia]",
      "Ana, followed by [Sofia, Luis]",
    ],
    answer: 2,
    explanation:
      "set(1, \"Sofia\") replaces Luis with Sofia and returns the previous value, Luis.",
  },

  // ARRAYLIST
  {
    question: "What is an ArrayList in Java?",
    category: "Collections",
    options: [
      "A resizable-array implementation of the List interface",
      "An interface implemented by List",
      "A collection that automatically removes duplicates",
      "A structure that stores elements only in linked nodes",
    ],
    answer: 0,
    explanation:
      "ArrayList is a concrete List implementation backed by a resizable array. It preserves list order and allows duplicates.",
  },
  {
    question: "What is the difference between List and ArrayList?",
    category: "Collections",
    options: [
      "List is a class, and ArrayList is an interface.",
      "List allows duplicates, but ArrayList does not.",
      "List stores keys, while ArrayList stores values.",
      "List defines a contract, while ArrayList implements it using a resizable array.",
    ],
    answer: 3,
    explanation:
      "List specifies list operations. ArrayList provides a concrete implementation and determines how elements are stored.",
  },
  {
    question: "When is ArrayList generally a good choice?",
    category: "Collections",
    options: [
      "When sorted unique keys are required",
      "When frequent indexed access and additions mainly at the end are needed",
      "When duplicates must be rejected automatically",
      "When every operation must be thread-safe without coordination",
    ],
    answer: 1,
    explanation:
      "ArrayList provides constant-time indexed access and amortized constant-time appends. It is not automatically thread-safe.",
  },
  {
    question: "What are the time complexities of ArrayList.get(index) and removing an element from the middle?",
    category: "Collections",
    options: [
      "Both are always O(1).",
      "get() is O(n), and middle removal is O(1).",
      "get() is O(1), and middle removal is O(n).",
      "Both are O(log n).",
    ],
    answer: 2,
    explanation:
      "ArrayList accesses an index directly. Removing from the middle shifts later elements, requiring linear time.",
  },
  {
    question: "What does this code print?",
    category: "Collections",
    code: `List<String> names = new ArrayList<>();
names.add("Ana");
names.add("Luis");
names.add("Ana");

String removed = names.remove(1);

System.out.println(removed);
System.out.println(names);`,
    options: [
      "Luis, followed by [Ana, Ana]",
      "Ana, followed by [Luis, Ana]",
      "Luis, followed by [Ana, Luis, Ana]",
      "1, followed by [Ana, Ana]",
    ],
    answer: 0,
    explanation:
      "remove(1) removes and returns the element at index 1, which is Luis. The remaining elements shift to fill the gap.",
  },
  {
    question: "What is the benefit of declaring a variable as List<String>?",
    category: "Collections",
    code: `List<String> names = new ArrayList<>();

names = new LinkedList<>(names);`,
    options: [
      "It makes both implementations use the same internal storage.",
      "It makes List directly instantiable.",
      "It guarantees identical performance for every implementation.",
      "It allows different List implementations to be used through the same reference type.",
    ],
    answer: 3,
    explanation:
      "Both ArrayList and LinkedList implement List. A List reference supports their shared operations without depending on one concrete implementation.",
  },

  // ARRAYS VS ARRAYLIST
  {
    question: "What is the main size difference between an array and an ArrayList?",
    category: "Collections",
    options: [
      "Both always have a fixed number of elements.",
      "An array's length is fixed after creation; an ArrayList's number of elements can change.",
      "An array grows automatically, but an ArrayList cannot grow.",
      "Only arrays can remove elements dynamically.",
    ],
    answer: 1,
    explanation:
      "An array retains its allocated length. ArrayList supports adding and removing elements, changing its logical size.",
  },
  {
    question: "Which statement about primitive values is correct?",
    category: "Collections",
    options: [
      "ArrayList<int> is valid Java syntax.",
      "Arrays cannot store primitive values.",
      "An int[] stores primitives, while ArrayList<Integer> uses wrapper objects.",
      "Integer cannot be used inside an ArrayList.",
    ],
    answer: 2,
    explanation:
      "Java generic type arguments must be reference types. ArrayList<Integer> uses Integer objects, with autoboxing available for int values.",
  },
  {
    question: "How do you obtain the size of an array and an ArrayList?",
    category: "Collections",
    options: [
      "Use array.length and list.size().",
      "Use array.size() and list.length.",
      "Use length() for both.",
      "Use size for both without parentheses.",
    ],
    answer: 0,
    explanation:
      "Arrays expose the length field. ArrayList provides the size() method to report its number of elements.",
  },
  {
    question: "What happens when this code runs?",
    category: "Collections",
    code: `int[] numbers = {10, 20, 30};
numbers[3] = 40;`,
    options: [
      "The array automatically grows to four elements.",
      "The value 30 is replaced with 40.",
      "The statement is ignored.",
      "ArrayIndexOutOfBoundsException is thrown.",
    ],
    answer: 3,
    explanation:
      "A three-element array has valid indexes 0, 1, and 2. Index 3 is outside its bounds.",
  },

  // LINKEDLIST
  {
    question: "What is a LinkedList in Java?",
    category: "Collections",
    options: [
      "A sorted implementation of Map",
      "A doubly linked implementation of List and Deque",
      "A fixed-size array of unique elements",
      "An interface that ArrayList extends",
    ],
    answer: 1,
    explanation:
      "LinkedList stores elements in connected nodes and implements both List and Deque, supporting positional and double-ended operations.",
  },
  {
    question: "Which statement correctly compares ArrayList and LinkedList?",
    category: "Collections",
    options: [
      "LinkedList always provides faster indexed access.",
      "ArrayList rejects duplicates, while LinkedList allows them.",
      "ArrayList uses a resizable array; LinkedList uses connected nodes.",
      "LinkedList stores key-value pairs, while ArrayList stores keys only.",
    ],
    answer: 2,
    explanation:
      "ArrayList provides direct indexed access. LinkedList traverses nodes to reach an index but provides efficient operations at both ends.",
  },
  {
    question: "Which group contains the five LinkedList methods shown in the material?",
    category: "Collections",
    options: [
      "add(element), addFirst(element), addLast(element), removeFirst(), get(index)",
      "put(), containsKey(), keySet(), values(), entrySet()",
      "start(), run(), join(), sleep(), interrupt()",
      "length(), resize(), firstKey(), lastKey(), put()",
    ],
    answer: 0,
    explanation:
      "These methods append elements, insert at either end, remove the first element, and retrieve an element by index.",
  },
  {
    question: "What does this code print?",
    category: "Collections",
    code: `LinkedList<String> names = new LinkedList<>();
names.add("Luis");
names.addFirst("Ana");
names.addLast("Sofia");

System.out.println(names.removeFirst());
System.out.println(names);`,
    options: [
      "Luis, followed by [Ana, Sofia]",
      "Sofia, followed by [Ana, Luis]",
      "Ana, followed by [Ana, Luis, Sofia]",
      "Ana, followed by [Luis, Sofia]",
    ],
    answer: 3,
    explanation:
      "The list becomes [Ana, Luis, Sofia]. removeFirst() removes and returns Ana, leaving [Luis, Sofia].",
  },

  // MAP AND HASHMAP
  {
    question: "What is a Map in Java?",
    category: "Collections",
    options: [
      "An indexed sequence that allows duplicate keys",
      "An interface representing key-value associations with unique keys",
      "A collection that stores only unique values",
      "A fixed-size implementation of List",
    ],
    answer: 1,
    explanation:
      "Map associates keys with values. Each key has at most one mapping, but different keys can map to equal values. Map does not extend the Collection interface.",
  },
  {
    question: "When is a Map a suitable choice?",
    category: "Collections",
    options: [
      "When every value must be unique",
      "When elements must only be accessed by position",
      "When values need to be retrieved by identifiers such as employee IDs",
      "When duplicate keys must be stored as separate mappings",
    ],
    answer: 2,
    explanation:
      "A Map is useful for looking up values by keys, such as retrieving an employee using a unique employee ID.",
  },
  {
    question: "What is the relationship between Map and HashMap?",
    category: "Collections",
    options: [
      "Map defines the contract, and HashMap implements it using a hash table.",
      "Map is a subclass of HashMap.",
      "HashMap is an interface implemented by Map.",
      "Both are interfaces without implementations.",
    ],
    answer: 0,
    explanation:
      "Map is an interface. HashMap is a hash-table implementation that provides efficient key-based operations when hashes are well distributed.",
  },
  {
    question: "What does a HashMap guarantee about iteration order?",
    category: "Collections",
    options: [
      "Keys are always sorted.",
      "Insertion order is always preserved.",
      "Values are always returned alphabetically.",
      "No particular iteration order is guaranteed.",
    ],
    answer: 3,
    explanation:
      "HashMap does not guarantee insertion order or sorted order. Its observed iteration order should not be relied upon.",
  },
  {
    question: "Which Map implementations suit insertion-order iteration and sorted-key iteration, respectively?",
    category: "Collections",
    options: [
      "HashMap and ArrayList",
      "LinkedHashMap in its default mode and TreeMap",
      "TreeMap and HashMap",
      "HashSet and LinkedList",
    ],
    answer: 1,
    explanation:
      "LinkedHashMap normally preserves insertion order, although it can be configured for access order. TreeMap orders keys by natural ordering or a comparator.",
  },
  {
    question: "What do put(), get(), remove(), containsKey(), and size() do in a Map?",
    category: "Collections",
    options: [
      "They all operate on numeric positions.",
      "They automatically sort values and remove duplicates.",
      "They add or update mappings, retrieve values, remove mappings, check keys, and count mappings.",
      "They create, start, pause, stop, and count threads.",
    ],
    answer: 2,
    explanation:
      "Map operations work with keys and mappings. size() counts key-value mappings, not distinct values.",
  },
  {
    question: "What does this code print?",
    category: "Collections",
    code: `Map<Integer, String> employees = new HashMap<>();
employees.put(1, "Ana");
employees.put(2, "Luis");
employees.put(1, "Sofia");

System.out.println(employees.get(1));
System.out.println(employees.size());`,
    options: [
      "Sofia, followed by 2",
      "Ana, followed by 3",
      "Sofia, followed by 3",
      "Ana, followed by 2",
    ],
    answer: 0,
    explanation:
      "Putting a value under an existing key replaces that key's previous value. The map still contains only two mappings.",
  },
  {
    question: "Why might HashMap.get(key) return null even when the key exists?",
    category: "Collections",
    options: [
      "HashMap never stores values.",
      "Every existing key returns null.",
      "get() removes the key before returning.",
      "The key may explicitly be mapped to null.",
    ],
    answer: 3,
    explanation:
      "HashMap allows null values. get() returns null for an absent key or a key mapped to null; containsKey() distinguishes these cases.",
  },
  {
    question: "What does this code print?",
    category: "Collections",
    code: `Map<Integer, String> employees = new HashMap<>();
employees.put(1, "Ana");
employees.put(2, "Ana");

System.out.println(employees.remove(1));
System.out.println(employees.containsKey(1));
System.out.println(employees.size());`,
    options: [
      "true, followed by true, followed by 2",
      "Ana, followed by false, followed by 1",
      "1, followed by false, followed by 0",
      "Ana, followed by true, followed by 1",
    ],
    answer: 1,
    explanation:
      "Map.remove(key) returns the previous value. Removing key 1 leaves one mapping. Duplicate values are allowed.",
  },

  // SET AND HASHSET
  {
    question: "What is a Set in Java?",
    category: "Collections",
    options: [
      "An ordered sequence that always allows duplicates",
      "A collection that requires numeric indexes",
      "An interface representing a collection without duplicate elements",
      "A structure that stores only key-value pairs",
    ],
    answer: 2,
    explanation:
      "Set represents unique elements and does not define indexed access. Ordering behavior depends on the implementation.",
  },
  {
    question: "What is a HashSet in Java?",
    category: "Collections",
    options: [
      "A hash-based Set implementation that stores unique elements without guaranteeing iteration order",
      "A sorted List implementation",
      "An interface implemented by Set",
      "A Map that allows duplicate keys",
    ],
    answer: 0,
    explanation:
      "HashSet implements Set and is backed by a HashMap. It prevents duplicates and does not guarantee insertion or sorted order.",
  },
  {
    question: "Which Set implementations preserve insertion order and sorted order, respectively?",
    category: "Collections",
    options: [
      "HashSet and ArrayList",
      "TreeSet and LinkedHashSet",
      "LinkedList and HashSet",
      "LinkedHashSet and TreeSet",
    ],
    answer: 3,
    explanation:
      "LinkedHashSet preserves insertion order. TreeSet orders elements using natural ordering or a comparator.",
  },
  {
    question: "What does adding a duplicate element to a HashSet return?",
    category: "Collections",
    code: `Set<String> names = new HashSet<>();
names.add("Ana");

boolean added = names.add("Ana");`,
    options: [
      "true, and the set contains two copies",
      "false, and the set remains unchanged",
      "null, and the existing element is removed",
      "An index identifying the duplicate",
    ],
    answer: 1,
    explanation:
      "HashSet.add() returns false when an equal element is already present. It does not add another copy.",
  },
  {
    question: "What do add(), remove(), contains(), size(), and clear() do in a Set?",
    category: "Collections",
    options: [
      "They operate only on key-value pairs.",
      "They retrieve and update elements by index.",
      "They add unique elements, remove elements, check membership, count elements, and remove all elements.",
      "They sort elements and assign indexes automatically.",
    ],
    answer: 2,
    explanation:
      "For a mutable Set such as HashSet, these methods manage membership. add() and remove() report whether they changed the set.",
  },
  {
    question: "What does this code print?",
    category: "Collections",
    code: `Set<String> names = new HashSet<>();
names.add("Ana");
names.add("Luis");
names.add("Ana");

System.out.println(names.contains("Luis"));
System.out.println(names.remove("Ana"));
System.out.println(names.size());

names.clear();
System.out.println(names.size());`,
    options: [
      "true, followed by true, followed by 1, followed by 0",
      "true, followed by Ana, followed by 2, followed by 0",
      "false, followed by true, followed by 1, followed by 1",
      "true, followed by false, followed by 3, followed by 0",
    ],
    answer: 0,
    explanation:
      "The duplicate Ana is not added. Luis exists, removing Ana returns true, one element remains, and clear() leaves the set empty.",
  },
  {
    question: "What is the main purpose of Spring Boot?",
    category: "SpringBoot",
    options: [
      "To replace the Java language",
      "To simplify building and running Spring applications",
      "To replace every relational database",
      "To eliminate the Spring IoC container",
    ],
    answer: 1,
    explanation:
      "Spring Boot simplifies Spring application setup through auto-configuration, dependency management, starters, and support for embedded servers.",
  },
  {
    question: "Which Spring Framework generation is Spring Boot 3.3.x based on?",
    category: "SpringBoot",
    options: [
      "Spring Framework 4",
      "Spring Framework 5",
      "Spring Framework 6",
      "Spring Framework 3",
    ],
    answer: 2,
    explanation:
      "Spring Boot 3.3.x is based on Spring Framework 6, specifically the 6.1 generation.",
  },
  {
    question: "Which statement correctly distinguishes Spring Boot from Spring Framework?",
    category: "SpringBoot",
    options: [
      "Spring Boot simplifies application setup, while Spring Framework provides core features such as IoC, AOP, transactions, and web infrastructure.",
      "Spring Boot replaces every Spring Framework feature.",
      "Spring Framework only manages dependency versions.",
      "Spring Boot is a database implementation of Spring Framework.",
    ],
    answer: 0,
    explanation:
      "Spring Boot simplifies startup and configuration. Spring Framework provides features such as dependency injection and request handling. This example assumes a Spring Boot project with the web starter.",
    example: `import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

// Spring Boot: startup and auto-configuration.
@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}

// Spring Framework: managed service.
@Service
class GreetingService {
    public String greet() {
        return "Hello, Erick!";
    }
}

// Spring Framework: web handling and constructor injection.
@RestController
class GreetingController {
    private final GreetingService service;

    GreetingController(GreetingService service) {
        this.service = service;
    }

    @GetMapping("/hello")
    public String hello() {
        return service.greet();
    }
}

// GET /hello → Hello, Erick!`,
  },
  {
    question: "Which group describes common advantages of Spring Boot?",
    category: "SpringBoot",
    options: [
      "Automatic business-rule generation and guaranteed security",
      "Mandatory XML configuration and external application servers",
      "Automatic database design and unlimited scalability",
      "Auto-configuration, starter dependencies, embedded servers, and operational features",
    ],
    answer: 3,
    explanation:
      "Spring Boot reduces setup work and provides useful application defaults. Production operation still requires appropriate configuration, security, and monitoring.",
  },
  {
    question: "What is the purpose of Spring Boot dependency management?",
    category: "SpringBoot",
    options: [
      "To create every application object manually",
      "To provide a coordinated set of dependency versions",
      "To replace Maven and Gradle",
      "To prevent external libraries from being used",
    ],
    answer: 1,
    explanation:
      "Spring Boot provides dependency version management that can be applied through Maven or Gradle, reducing the need to specify individual versions.",
  },
  {
    question: "What is an advantage of an embedded web server?",
    category: "SpringBoot",
    options: [
      "It automatically makes every endpoint secure.",
      "It removes the need for HTTP.",
      "It allows a web application to run without separately installing an application server.",
      "It replaces the service and repository layers.",
    ],
    answer: 2,
    explanation:
      "An embedded server runs as part of the application, simplifying execution and deployment of a standalone web application.",
  },

  // LAYERED ARCHITECTURE
  {
    question: "Which structure matches the layered architecture shown in the material?",
    category: "SpringBoot",
    options: [
      "Controllers, services, repositories, entities, and DTOs",
      "Only controllers containing all application code",
      "Only entities containing HTTP endpoints",
      "One main method containing every database operation",
    ],
    answer: 0,
    explanation:
      "The example separates request handling, business logic, persistence, persistent data, and transferred data into focused responsibilities. Spring Boot does not require this architecture.",
  },
  {
    question: "What is the controller's main responsibility in this architecture?",
    category: "SpringBoot",
    options: [
      "Store all database records in memory",
      "Implement every business calculation",
      "Replace the IoC container",
      "Handle HTTP requests and return responses to the client",
    ],
    answer: 3,
    explanation:
      "Controllers handle the web interaction and typically delegate business operations to services.",
  },
  {
    question: "Which layer should contain the application's business rules?",
    category: "SpringBoot",
    options: [
      "The DTO layer",
      "The service layer",
      "The HTTP configuration file",
      "The entity's package declaration",
    ],
    answer: 1,
    explanation:
      "Services implement business operations and coordinate work such as validation, calculations, and repository calls.",
  },
  {
    question: "What is the repository's main responsibility?",
    category: "SpringBoot",
    options: [
      "Render user-interface components",
      "Receive browser events",
      "Provide access to persistent data",
      "Start the embedded web server",
    ],
    answer: 2,
    explanation:
      "Repositories encapsulate data access. With Spring Data JPA, repository interfaces can provide operations such as save(), findAll(), and deleteById().",
  },
  {
    question: "What does a JPA entity represent?",
    category: "SpringBoot",
    options: [
      "A persistent domain object mapped to database structures",
      "An HTTP request handler",
      "A dependency-injection instruction",
      "A replacement for the application context",
    ],
    answer: 0,
    explanation:
      "A JPA entity represents persistent domain data. Its mapping may involve one or more tables, so an entity is not necessarily identical to a single table.",
  },
  {
    question: "Why use a DTO in a Spring Boot API?",
    category: "SpringBoot",
    options: [
      "To automatically create database indexes",
      "To make every entity field public",
      "To replace all service methods",
      "To transfer selected data without directly exposing persistence entities",
    ],
    answer: 3,
    explanation:
      "DTOs define the data exchanged across application boundaries, helping keep the API contract separate from persistence details.",
  },

  // ANNOTATIONS AND APPLICATION STARTUP
  {
    question: "What is an annotation in a Spring application?",
    category: "SpringBoot",
    options: [
      "A separate process that executes Java code",
      "Metadata that Spring can interpret to configure application behavior",
      "A database record containing configuration",
      "A method that always runs asynchronously",
    ],
    answer: 1,
    explanation:
      "Annotations provide metadata. Spring infrastructure interprets supported annotations for purposes such as bean registration, injection, and request mapping.",
  },
  {
    question: "Which annotations are combined by @SpringBootApplication?",
    category: "SpringBoot",
    options: [
      "@Service, @Repository, and @Controller",
      "@Autowired, @Bean, and @Entity",
      "@SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan",
      "@GetMapping, @PostMapping, and @RequestBody",
    ],
    answer: 2,
    explanation:
      "@SpringBootApplication combines the main configuration marker, auto-configuration, and component scanning.",
  },
  {
    question: "What does @SpringBootConfiguration indicate?",
    category: "SpringBoot",
    options: [
      "The class provides Spring Boot application configuration.",
      "The class represents a database table.",
      "Every method in the class handles an HTTP request.",
      "The class must extend Thread.",
    ],
    answer: 0,
    explanation:
      "@SpringBootConfiguration marks a Spring Boot configuration class and is itself based on Spring's @Configuration.",
  },
  {
    question: "How does Spring Boot auto-configuration choose what to configure?",
    category: "SpringBoot",
    options: [
      "It always enables every available feature.",
      "It reads method names and invents business rules.",
      "It ignores application-defined beans.",
      "It evaluates conditions involving dependencies, properties, existing beans, and the application environment.",
    ],
    answer: 3,
    explanation:
      "Auto-configuration is conditional. It uses available libraries and other application conditions, and can back off when application-defined configuration is present.",
  },
  {
    question: "What does adding spring-boot-starter-web commonly provide in a Spring Boot 3.3 application?",
    category: "SpringBoot",
    options: [
      "Automatic generation of every REST endpoint",
      "Dependencies for a Spring MVC web application, including an embedded server by default",
      "A mandatory connection to a production database",
      "A replacement for Java's compiler",
    ],
    answer: 1,
    explanation:
      "The starter brings together common web dependencies, including Spring MVC and an embedded server by default. Application endpoints still need to be defined.",
  },
  {
    question: "Where does default component scanning begin with @SpringBootApplication?",
    category: "SpringBoot",
    options: [
      "In every package of every dependency without restriction",
      "Only in the java.lang package",
      "In the annotated class's package and its subpackages",
      "Only in packages named controllers",
    ],
    answer: 2,
    explanation:
      "By default, component scanning covers the application class's package and its subpackages. Scan locations can be customized.",
  },
  {
    question: "What starts the application in this typical entry point?",
    category: "SpringBoot",
    code: `@SpringBootApplication
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}`,
    options: [
      "Calling SpringApplication.run()",
      "Importing SpringBootApplication",
      "Declaring the Application class",
      "Writing a package statement",
    ],
    answer: 0,
    explanation:
      "SpringApplication.run() bootstraps the Spring application context and starts the web server when the application is configured as a web application.",
  },

  // DEPENDENCY INJECTION
  {
    question: "What is dependency injection in Spring Boot?",
    category: "SpringBoot",
    options: [
      "Making every dependency a static variable",
      "Requiring each service to construct its own repository",
      "Copying dependency source code into every class",
      "Having the Spring container supply the objects that a managed class needs",
    ],
    answer: 3,
    explanation:
      "Dependency injection supplies collaborators from outside the class. Spring manages beans and resolves their dependencies through its IoC container.",
  },
  {
    question: "What is a Spring bean?",
    category: "SpringBoot",
    options: [
      "Any object created anywhere with new",
      "An object managed by the Spring IoC container",
      "A Java primitive variable",
      "A database table generated by Hibernate",
    ],
    answer: 1,
    explanation:
      "A bean is an object managed by the Spring container. An object created manually is not automatically registered as a bean.",
  },
  {
    question: "Which annotations can mark classes for component scanning?",
    category: "SpringBoot",
    options: [
      "@Override, @Deprecated, and @SuppressWarnings",
      "@RequestParam, @RequestBody, and @PathVariable",
      "@Component, @Service, and @Repository",
      "@Id, @Column, and @GeneratedValue",
    ],
    answer: 2,
    explanation:
      "@Component identifies a component, while @Service and @Repository are specialized stereotypes. Scanning can discover these classes and register bean definitions.",
  },
  {
    question: "What does @Autowired indicate on this constructor?",
    category: "SpringBoot",
    code: `@Service
public class PersonaService {
    private final PersonaRepository repository;

    @Autowired
    public PersonaService(PersonaRepository repository) {
        this.repository = repository;
    }
}`,
    options: [
      "Spring should use the constructor to supply a matching repository dependency.",
      "The service must create the repository inside every method.",
      "The constructor becomes an HTTP endpoint.",
      "The repository is automatically converted into a DTO.",
    ],
    answer: 0,
    explanation:
      "@Autowired marks the constructor for dependency injection. Spring must be able to resolve the required PersonaRepository dependency.",
  },
  {
    question: "When is @Autowired optional on a constructor?",
    category: "SpringBoot",
    options: [
      "Whenever the dependency is a database repository",
      "Only when every field is public",
      "Only when the class has no dependencies",
      "When a Spring-managed class has a single constructor",
    ],
    answer: 3,
    explanation:
      "Spring can use a managed class's single constructor without @Autowired. With multiple constructors, @Autowired can help identify the intended injection constructor.",
  },
  {
    question: "Why is constructor injection commonly preferred for required dependencies?",
    category: "SpringBoot",
    options: [
      "It automatically removes every dependency.",
      "It makes dependencies explicit, supports final fields, and simplifies unit testing.",
      "It guarantees that the application cannot fail.",
      "It prevents test doubles from being supplied.",
    ],
    answer: 1,
    explanation:
      "Constructor injection makes required collaborators visible and lets tests instantiate the class with suitable test doubles. @Autowired can also be used for field or setter injection.",
  },
  {
    question: "Why are API contracts important for system integration?",
    category: "SpringBoot - API",
    options: [
      "They require all systems to use the same programming language.",
      "They define request and response structures, inputs, outputs, and expected behavior.",
      "They automatically implement every endpoint.",
      "They eliminate the need for error handling.",
    ],
    answer: 1,
    explanation:
      "A clear contract tells consumers how to call an API and interpret its responses, reducing integration misunderstandings.",
  },
  {
    question: "What is the difference between REST and RESTful?",
    category: "SpringBoot - API",
    options: [
      "REST is a Java library, and RESTful is a database.",
      "REST requires XML, while RESTful requires JSON.",
      "REST is an architectural style; RESTful describes a system that follows its constraints.",
      "REST is used only for GET, while RESTful supports POST.",
    ],
    answer: 2,
    explanation:
      "REST is an architectural style. RESTful describes a system that follows its constraints. This example illustrates resource-based URLs and HTTP GET semantics; these alone do not demonstrate every REST constraint.",
    example: `import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
class ProductController {

    @GetMapping("/{id}")
    public Product getProduct(@PathVariable("id") long id) {
        return new Product(id, "Laptop");
    }
}

record Product(long id, String name) {}

// Request: GET /api/products/1
// Response: 200 OK
// Body: {"id":1,"name":"Laptop"}

// REST: the architectural style guiding the design.
// RESTful: describes a system that follows REST constraints.

// Constrains
//Client–Server
//Stateless
//Cacheable
//Uniform Interface
//Layered System
//Code on Demand — optional.
`,
  },
  {
    question: "Does returning JSON over HTTP automatically make an API RESTful?",
    category: "SpringBoot - API",
    options: [
      "No. The API must also follow REST constraints and consistent resource semantics.",
      "Yes. JSON is the only requirement.",
      "Yes. Any HTTP endpoint is RESTful.",
      "No. RESTful APIs must return XML.",
    ],
    answer: 0,
    explanation:
      "HTTP and JSON alone do not establish REST compliance. REST also includes constraints such as statelessness, a uniform interface, cacheability, and layered systems.",
  },
  {
    question: "What does stateless communication mean in REST?",
    category: "SpringBoot - API",
    options: [
      "The server cannot store resources in a database.",
      "The client cannot send authentication information.",
      "Every request must create a new resource.",
      "Each request contains the information needed to understand it without relying on stored client session context.",
    ],
    answer: 3,
    explanation:
      "Each request includes the information needed to process it, such as authentication credentials. The server does not rely on a previous client session, but it can still store resource data in a database.",
    example: `// Client example: each request includes its token.
// The server must validate the token on every request.

const token = "your-access-token";

fetch("/api/products/1", {
  headers: {
    Authorization: "Bearer " + token,
  },
});

fetch("/api/products/2", {
  headers: {
    Authorization: "Bearer " + token,
  },
});

// The second request does not depend on the first.
// Each request identifies the resource and provides credentials.
// Products can still be stored in a database.`,
  },
  {
    question: "How can statelessness help an API scale?",
    category: "SpringBoot - API",
    options: [
      "It guarantees that every request completes instantly.",
      "Requests can be handled by different server instances without depending on local session history.",
      "It eliminates the need for databases.",
      "It prevents all network failures.",
    ],
    answer: 1,
    explanation:
      "Each request contains the information needed to process it, so different server instances can handle requests without remembering previous interactions. In this example, both instances validate the token and access the same product database.",
    example: `const token = "your-access-token";

// A load balancer sends this request to Server A.
fetch("/api/products/1", {
  headers: { Authorization: "Bearer " + token },
});

// A load balancer sends this request to Server B.
fetch("/api/products/2", {
  headers: { Authorization: "Bearer " + token },
});

// Both servers can process either request.
// Each server validates the token independently.
// Both servers access the same product database.
// No local client session history is required.`,
  },

  // CONTROLLERS
  {
    question: "What is the main difference between @Controller and @RestController?",
    category: "SpringBoot - API",
    options: [
      "@Controller cannot handle HTTP requests.",
      "@RestController automatically saves objects to a database.",
      "@Controller commonly supports view rendering; @RestController applies response-body semantics to its methods.",
      "@RestController supports only GET requests.",
    ],
    answer: 2,
    explanation:
      "@Controller commonly returns a view name. @RestController combines @Controller and @ResponseBody, so return values are written directly to the HTTP response body.",
    example: `import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@Controller
class PageController {
    @GetMapping("/page")
    public String page() {
        return "welcome"; // View name: e.g., welcome.html
    }
}

@RestController
class ApiController {
    @GetMapping("/message")
    public String message() {
        return "welcome"; // Response body: welcome
    }
}

// GET /page    → renders the configured "welcome" view.
// GET /message → returns the text "welcome" directly.`,
  },
  {
    question: "How can a method in a regular @Controller return data directly in the response body?",
    category: "SpringBoot - API",
    options: [
      "Add @ResponseBody to the method.",
      "Add @Entity to the method.",
      "Replace its return type with void.",
      "Add @Repository to its parameter.",
    ],
    answer: 0,
    explanation:
      "@ResponseBody tells Spring to write the return value to the HTTP response using an appropriate message converter.",
  },
  {
    question: "What does the returned String represent in this controller?",
    category: "SpringBoot - API",
    code: `@Controller
public class PageController {
    @GetMapping("/home")
    public String home() {
        return "home";
    }
}`,
    options: [
      "A database table name",
      "A JSON object",
      "An HTTP status code",
      "A logical view name to be resolved by the configured view infrastructure",
    ],
    answer: 3,
    explanation:
      "Without @ResponseBody, a String return value in this controller is interpreted as a view name. Its resolution depends on the configured view resolver.",
  },

  // REQUEST MAPPINGS
  {
    question: "Which annotations map GET, POST, PUT, PATCH, and DELETE requests, respectively?",
    category: "SpringBoot - API",
    options: [
      "@RequestBody, @ResponseBody, @Valid, @Entity, @Id",
      "@GetMapping, @PostMapping, @PutMapping, @PatchMapping, @DeleteMapping",
      "@Controller, @Service, @Repository, @Component, @Bean",
      "@Get, @Post, @Put, @Patch, @Delete",
    ],
    answer: 1,
    explanation:
      "These composed mapping annotations associate controller methods with specific HTTP request methods.",
  },
  {
    question: "What is the usual semantic difference between PUT and PATCH?",
    category: "SpringBoot - API",
    options: [
      "PUT retrieves a resource; PATCH deletes it.",
      "PUT and PATCH must always create new resources.",
      "PUT requests replacement of a resource's state; PATCH applies partial modifications.",
      "PATCH is only used to retrieve headers.",
    ],
    answer: 2,
    explanation:
      "PUT replaces the resource's state with the supplied representation. PATCH modifies only the specified parts. Here, PUT sends both product fields, while JSON Merge Patch changes only the price.",
    example: `// Current product: {"name":"Laptop","price":1000}

// PUT: replace the product's state.
fetch("/api/products/1", {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name: "Gaming Laptop", price: 1500 }),
});
// Result: {"name":"Gaming Laptop","price":1500}

// PATCH: update only the price.
// This endpoint must support JSON Merge Patch.
fetch("/api/products/1", {
  method: "PATCH",
  headers: { "Content-Type": "application/merge-patch+json" },
  body: JSON.stringify({ price: 1200 }),
});
// Only price changes; name keeps its existing value.
// Run the requests separately or await PUT before PATCH.`,
  },
  {
    question: "What is @RequestMapping commonly used for at the controller class level?",
    category: "SpringBoot - API",
    options: [
      "Defining a shared base path for the controller's endpoints",
      "Converting every request body into JSON",
      "Creating a database transaction",
      "Replacing every method-level mapping",
    ],
    answer: 0,
    explanation:
      "A class-level @RequestMapping commonly supplies a base path that combines with method-level paths. It can also define other mapping conditions.",
  },
  {
    question: "Which requests map to these controller methods?",
    category: "SpringBoot - API",
    code: `@RestController
@RequestMapping("/personas")
public class PersonaController {
    @GetMapping
    public String listar() {
        return "List of people";
    }

    @PostMapping
    public String guardar() {
        return "Person saved";
    }
}`,
    options: [
      "GET /listar and POST /guardar",
      "POST /personas calls listar(), and GET /personas calls guardar().",
      "Both methods handle only GET /personas.",
      "GET /personas calls listar(), and POST /personas calls guardar().",
    ],
    answer: 3,
    explanation:
      "Both methods share the /personas path. Their HTTP method mappings determine which handler executes. Returning a message alone does not actually persist data.",
  },

  // SPRING MVC REQUEST FLOW
  {
    question: "What is the role of DispatcherServlet in Spring MVC?",
    category: "SpringBoot - API",
    options: [
      "It stores every entity in the database.",
      "It acts as the front controller and coordinates request processing.",
      "It replaces the servlet container.",
      "It generates all application business rules.",
    ],
    answer: 1,
    explanation:
      "DispatcherServlet acts as the front controller. It delegates finding the matching controller method to HandlerMapping and invoking it to HandlerAdapter.",
    example: `import org.springframework.web.bind.annotation.*;

@RestController
class GreetingController {

    @GetMapping("/hello")
    public String hello() {
        return "Hello, Erick!";
    }
}

// Request: GET /hello

// 1. The servlet container forwards it to DispatcherServlet.
// 2. DispatcherServlet uses HandlerMapping to find hello().
// 3. It uses HandlerAdapter to invoke the method.
// 4. Spring writes the returned text to the response body.

// Response: 200 OK
// Body: Hello, Erick!`,
  },
  {
    question: "What is the difference between HandlerMapping and HandlerAdapter?",
    category: "SpringBoot - API",
    options: [
      "Both exist only to serialize JSON.",
      "HandlerMapping executes SQL; HandlerAdapter creates tables.",
      "HandlerMapping locates a matching handler; HandlerAdapter supports invoking that handler.",
      "HandlerAdapter selects the database; HandlerMapping selects its driver.",
    ],
    answer: 2,
    explanation:
      "HandlerMapping finds the controller method that matches the request. HandlerAdapter coordinates preparing its arguments and invoking it. DispatcherServlet coordinates both steps.",
    example: `import org.springframework.web.bind.annotation.*;

@RestController
class GreetingController {

    @GetMapping("/hello")
    public String hello(@RequestParam("name") String name) {
        return "Hello, " + name;
    }
}

// Request: GET /hello?name=Erick

// 1. HandlerMapping finds the hello() controller method.

// 2. HandlerAdapter resolves the name argument as "Erick"
//    and invokes hello("Erick").

// Response body: Hello, Erick`,
  },
  {
    question: "Which sequence best describes a typical successful Spring MVC REST request?",
    category: "SpringBoot - API",
    options: [
      "Servlet container and filters → DispatcherServlet → handler lookup → handler invocation → response conversion",
      "Repository → client → DispatcherServlet → controller registration",
      "Response conversion → request arrival → database initialization",
      "Controller → filters → client request → handler lookup",
    ],
    answer: 0,
    explanation:
      "The container receives the request and invokes its filter chain. DispatcherServlet then coordinates handler lookup, invocation, and response processing.",
  },
  {
    question: "What is the role of HttpMessageConverter in Spring MVC APIs?",
    category: "SpringBoot - API",
    options: [
      "To select the controller's Java package",
      "To manage database transactions",
      "To authenticate every request automatically",
      "To read or write HTTP message bodies using supported representations",
    ],
    answer: 3,
    explanation:
      "Message converters deserialize request bodies and serialize response bodies. JSON is common, but the selected representation depends on configuration and media types.",
  },

  // REQUEST DATA BINDING
  {
    question: "What is @RequestBody used for?",
    category: "SpringBoot - API",
    options: [
      "Reading a value only from the URL path",
      "Reading and converting the HTTP request body into a controller argument",
      "Setting an HTTP response status",
      "Finding a repository implementation",
    ],
    answer: 1,
    explanation:
      "@RequestBody uses an HttpMessageConverter to read the request body, commonly converting JSON into a Java DTO.",
  },
  {
    question: "Which annotation should read page from /users?page=1?",
    category: "SpringBoot - API",
    options: [
      "@RequestBody",
      "@ResponseStatus",
      "@RequestParam",
      "@PathVariable",
    ],
    answer: 2,
    explanation:
      "@RequestParam binds request parameters, including query-string parameters such as page=1.",
  },
  {
    question: "Which annotation should read id from the path /users/10?",
    category: "SpringBoot - API",
    options: [
      "@PathVariable",
      "@RequestBody",
      "@ResponseBody",
      "@RequestParam",
    ],
    answer: 0,
    explanation:
      "@PathVariable binds a value captured by a URI template variable such as /users/{id}.",
  },
  {
    question: "Which values are supplied to this method for PUT /users/10?notify=true with a valid JSON body?",
    category: "SpringBoot - API",
    code: `@PutMapping("/users/{id}")
public UserDto update(
    @PathVariable("id") Long id,
    @RequestParam("notify") boolean notify,
    @RequestBody UserDto user
) {
    return service.update(id, notify, user);
}`,
    options: [
      "id comes from JSON, and notify comes from the path.",
      "All arguments come from the query string.",
      "All arguments come from the HTTP headers.",
      "id is 10, notify is true, and user comes from the JSON body.",
    ],
    answer: 3,
    explanation:
      "The annotations identify three distinct sources: the URI path, a request parameter, and the request body.",
  },

  // VALIDATION AND ERROR HANDLING
  {
    question: "What is the difference between request conversion and validation?",
    category: "SpringBoot - API",
    options: [
      "Conversion and validation always mean exactly the same thing.",
      "Conversion produces the expected Java types; validation checks declared constraints on the resulting values.",
      "Conversion checks business permissions; validation selects the controller.",
      "Validation always runs before the request body is read.",
    ],
    answer: 1,
    explanation:
      "Conversion may fail when data cannot be represented by the target type. Validation checks constraints such as required fields or allowed ranges.",
  },
  {
    question: "Why use Integer with @NotNull instead of int for a required numeric DTO field?",
    category: "SpringBoot - API",
    options: [
      "Integer automatically rejects all negative numbers.",
      "int cannot store zero.",
      "Integer can represent a missing value as null, which @NotNull can reject.",
      "Integer removes the need to trigger validation.",
    ],
    answer: 2,
    explanation:
      "A wrapper can distinguish null from a supplied zero. With ordinary DTO binding, a primitive may retain its default zero when a field is absent.",
  },
  {
    question: "Which declaration checks that a deserialized request DTO satisfies its Bean Validation constraints?",
    category: "SpringBoot - API",
    options: [
      "@Valid @RequestBody CreateUserRequest request",
      "@Entity @RequestBody CreateUserRequest request",
      "@ResponseBody @PathVariable CreateUserRequest request",
      "@Repository CreateUserRequest request",
    ],
    answer: 0,
    explanation:
      "With Bean Validation configured, @Valid triggers validation of the request DTO after its body has been converted.",
  },
  {
    question: "Which validation constraint rejects null, empty, and whitespace-only text?",
    category: "SpringBoot - API",
    options: [
      "@NotNull",
      "@Min(1)",
      "@Positive",
      "@NotBlank",
    ],
    answer: 3,
    explanation:
      "@NotBlank applies to character sequences and requires at least one non-whitespace character. @NotNull alone still permits empty text.",
  },
  {
    question: "What is a good approach to debugging inconsistent request-binding failures?",
    category: "SpringBoot - API",
    options: [
      "Return HTTP 200 for every exception.",
      "Inspect the payload, Content-Type, DTO types, constraints, and logs, then centralize appropriate error responses.",
      "Replace every DTO field with Object.",
      "Disable conversion and validation.",
    ],
    answer: 1,
    explanation:
      "Separate malformed or incompatible input from constraint violations. @RestControllerAdvice can standardize error formats; unsupported media types may require 415 rather than 400.",
  },

  // HTTP RESPONSES
  {
    question: "Which response is commonly appropriate after successfully creating a resource?",
    category: "SpringBoot - API",
    options: [
      "404 Not Found",
      "500 Internal Server Error",
      "201 Created, commonly with a Location header identifying the new resource",
      "401 Unauthorized",
    ],
    answer: 2,
    explanation:
      "201 indicates creation. A Location header can identify the new resource so the client can retrieve it.",
  },
  {
    question: "Which statement correctly distinguishes 200 OK from 204 No Content?",
    category: "SpringBoot - API",
    options: [
      "200 indicates success and may include a body; 204 indicates success without response content.",
      "200 always indicates creation; 204 indicates validation failure.",
      "204 must include a JSON object.",
      "200 is only valid for POST requests.",
    ],
    answer: 0,
    explanation:
      "A successful update may return 200 with a representation or 204 without content. A 204 response must not contain a response body.",
  },
  {
    question: "Which statement correctly distinguishes 401 from 403?",
    category: "SpringBoot - API",
    options: [
      "401 means the resource does not exist; 403 means it was created.",
      "Both always mean the server crashed.",
      "403 always means authentication is missing.",
      "401 means valid authentication credentials are required; 403 means the server refuses the request, commonly because permission is insufficient.",
    ],
    answer: 3,
    explanation:
      "401 concerns missing or invalid authentication credentials. 403 commonly occurs when an authenticated user lacks permission, although authentication is not a prerequisite for every 403.",
  },
  {
    question: "Which mapping of HTTP error statuses is correct?",
    category: "SpringBoot - API",
    options: [
      "400: server crash; 404: created; 409: authenticated; 500: invalid query",
      "400: invalid request; 404: not found; 409: conflict with current resource state; 500: unexpected server failure",
      "400: success; 404: no content; 409: redirect; 500: duplicate key",
      "400: permission denied; 404: invalid token; 409: success; 500: resource created",
    ],
    answer: 1,
    explanation:
      "For example, invalid input can produce 400, a missing resource 404, a conflicting unique identifier 409, and an unexpected server error 500.",
  },
  {
    question: "When should a controller use ResponseEntity instead of only @ResponseStatus?",
    category: "SpringBoot - API",
    options: [
      "Only when returning HTML",
      "Only when the endpoint has no parameters",
      "When it needs to choose the status, headers, or body dynamically",
      "When it wants to disable HTTP semantics",
    ],
    answer: 2,
    explanation:
      "ResponseEntity provides explicit control over the response. @ResponseStatus is useful for declaring a fixed status.",
  },
  {
    question: "What does idempotency mean for PUT and DELETE?",
    category: "SpringBoot - API",
    options: [
      "Repeating an identical request has the same intended server-side effect as sending it once.",
      "Every repeated request must return exactly the same response status.",
      "The server must ignore all repeated requests.",
      "The requests cannot change resource state.",
    ],
    answer: 0,
    explanation:
      "Idempotency concerns the intended effect, not identical responses. A repeated DELETE may return a different status after the resource has already been removed.",
  },

  // OPENAPI AND SWAGGER
  {
    question: "What is the relationship between OpenAPI, springdoc, and Swagger UI?",
    category: "SpringBoot - API",
    options: [
      "All three are database persistence frameworks.",
      "Swagger UI replaces every controller implementation.",
      "OpenAPI is an authentication protocol.",
      "OpenAPI describes the API contract, springdoc can generate it from a Spring application, and Swagger UI displays interactive documentation.",
    ],
    answer: 3,
    explanation:
      "These tools help describe and explore APIs. Generated documentation should still be reviewed for accuracy.",
  },
  {
    question: "Which OpenAPI annotation mapping is correct?",
    category: "SpringBoot - API",
    options: [
      "@Operation: database table; @ApiResponse: request thread; @Schema: transaction; @SecurityRequirement: password encryption",
      "@Operation: endpoint description; @ApiResponse: response documentation; @Schema: data structure; @SecurityRequirement: security requirements",
      "@Operation: dependency injection; @ApiResponse: component scan; @Schema: controller discovery; @SecurityRequirement: SQL execution",
      "All four annotations automatically implement endpoint behavior.",
    ],
    answer: 1,
    explanation:
      "These annotations document different parts of the contract. In particular, @SecurityRequirement documents security but does not enforce authorization.",
  },
  {
    question: "Which API documentation details are important to keep accurate for consumers?",
    category: "SpringBoot - API",
    options: [
      "Only internal class names",
      "Only the database vendor",
      "Paths, HTTP methods, parameters, schemas, validation rules, statuses, error formats, and security requirements",
      "Only successful example responses",
    ],
    answer: 2,
    explanation:
      "Consumers need both successful and failed outcomes documented, along with the exact requirements for making valid requests.",
  },

  // GRAPHQL COMPARISON
  {
    question: "What advantage can GraphQL provide compared with fixed-response REST endpoints?",
    category: "SpringBoot - API",
    options: [
      "Clients can select the fields they need and request related data in one operation.",
      "It guarantees that every database query is faster.",
      "It removes the need for authentication.",
      "It requires a separate URL for every field.",
    ],
    answer: 0,
    explanation:
      "GraphQL commonly exposes a single endpoint and lets clients describe their data requirements, potentially reducing excess data and multiple round trips.",
  },
  {
    question: "Which statement about GraphQL fetching efficiency is correct?",
    category: "SpringBoot - API",
    options: [
      "GraphQL automatically eliminates every expensive database query.",
      "GraphQL always uses less bandwidth than every REST API.",
      "GraphQL prevents clients from requesting related resources.",
      "Field selection can reduce over-fetching, but efficient server-side fetching still requires careful implementation.",
    ],
    answer: 3,
    explanation:
      "GraphQL can reduce unnecessary response fields and requests, but resolver design, batching, authorization, and query complexity still affect performance.",
  },
  // DESIGN PATTERN FUNDAMENTALS
  {
    question: "What is a software design pattern?",
    category: "Design Patterns",
    options: [
      "A complete application ready to deploy",
      "A reusable approach to solving a recurring software design problem",
      "A Java keyword for creating classes",
      "A rule that requires every class to have one method",
    ],
    answer: 1,
    explanation:
      "A design pattern describes a reusable approach to a common design problem. It must be adapted to the application's needs.",
  },
  {
    question: "Why can design patterns be useful?",
    category: "Design Patterns",
    options: [
      "They guarantee faster execution.",
      "They eliminate the need for testing.",
      "They can improve maintainability, extensibility, and separation of responsibilities.",
      "They require every application to use the same architecture.",
    ],
    answer: 2,
    explanation:
      "Appropriate patterns help organize object creation and behavior. Their value depends on whether they fit the actual problem.",
  },
  {
    question: "Which classification of these patterns is correct?",
    category: "Design Patterns",
    options: [
      "Factory Method and Singleton are creational; Strategy and Observer are behavioral.",
      "Factory Method and Strategy are structural; Singleton and Observer are creational.",
      "All four patterns are creational.",
      "All four patterns are structural.",
    ],
    answer: 0,
    explanation:
      "Factory Method and Singleton address object creation. Strategy and Observer address behavior and collaboration between objects.",
  },

  // FACTORY METHOD
  {
    question: "What is the main purpose of the Factory Method pattern?",
    category: "Design Patterns",
    options: [
      "To ensure every object has only one instance",
      "To notify subscribers about events",
      "To switch algorithms through a strategy field",
      "To define an object-creation method that child classes override to choose the concrete product",
    ],
    answer: 3,
    explanation:
      "VehicleFactory declares createVehicle(). CarFactory overrides it to create a Car. The parent creator uses the Vehicle interface without depending on Car directly.",
    example: `interface Vehicle {
    void start();
}

class Car implements Vehicle {
    public void start() {
        System.out.println("Car started");
    }
}

// Parent creator
abstract class VehicleFactory {
    public abstract Vehicle createVehicle();

    public void deliverVehicle() {
        Vehicle vehicle = createVehicle();
        vehicle.start();
    }
}

// Child creator chooses the concrete product
class CarFactory extends VehicleFactory {
    @Override
    public Vehicle createVehicle() {
        return new Car();
    }
}

public class Main {
    public static void main(String[] args) {
        VehicleFactory factory = new CarFactory();
        factory.deliverVehicle(); // Car started
    }
}`,
  },
  {
    question: "What is the role of Vehicle in the Factory Method example?",
    category: "Design Patterns",
    code: `interface Vehicle {
    void startEngine();
}`,
    options: [
      "It decides which factory is instantiated.",
      "It defines the common product contract used by the factories and shared logic.",
      "It stores the only instance of every vehicle.",
      "It automatically creates Car and Motorcycle objects.",
    ],
    answer: 1,
    explanation:
      "Vehicle is the product interface. Car and Motorcycle implement this shared contract.",
  },
  {
    question: "Which method is the Factory Method in this creator class?",
    category: "Design Patterns",
    code: `abstract class VehicleFactory {
    public abstract Vehicle createVehicle();

    public void deliverVehicle() {
        Vehicle vehicle = createVehicle();
        vehicle.startEngine();
    }
}`,
    options: [
      "startEngine()",
      "deliverVehicle()",
      "createVehicle()",
      "main()",
    ],
    answer: 2,
    explanation:
      "createVehicle() is the creation operation overridden by concrete factories. deliverVehicle() uses the product through the Vehicle interface.",
  },
  {
    question: "Which relationship correctly describes the creator classes?",
    category: "Design Patterns",
    options: [
      "VehicleFactory is the parent class; CarFactory and MotorcycleFactory are child classes.",
      "CarFactory is the parent class of VehicleFactory.",
      "Vehicle is the parent class of CarFactory.",
      "Car and Motorcycle are child classes of VehicleFactory.",
    ],
    answer: 0,
    explanation:
      "CarFactory and MotorcycleFactory extend VehicleFactory and override its creation method. Car and Motorcycle are products, not creator subclasses.",
  },
  {
    question: "Why does deliverVehicle() use a Vehicle reference?",
    category: "Design Patterns",
    options: [
      "To prevent startEngine() from executing",
      "To force every vehicle to have identical behavior",
      "To create all products at the same time",
      "To work with different products without depending on their concrete classes",
    ],
    answer: 3,
    explanation:
      "deliverVehicle() uses the Vehicle interface, so it can work with Car or Motorcycle. Each factory chooses the concrete product, and the same delivery method calls its startEngine() implementation.",
    example: `interface Vehicle {
    void startEngine();
}

class Car implements Vehicle {
    public void startEngine() {
        System.out.println("Car engine started");
    }
}

class Motorcycle implements Vehicle {
    public void startEngine() {
        System.out.println("Motorcycle engine started");
    }
}

abstract class VehicleFactory {
    public abstract Vehicle createVehicle();

    public void deliverVehicle() {
        Vehicle vehicle = createVehicle(); // Common interface
        vehicle.startEngine(); // Runs the product's implementation
    }
}

class CarFactory extends VehicleFactory {
    public Vehicle createVehicle() {
        return new Car();
    }
}

class MotorcycleFactory extends VehicleFactory {
    public Vehicle createVehicle() {
        return new Motorcycle();
    }
}

public class Main {
    public static void main(String[] args) {
        new CarFactory().deliverVehicle();
        // Car engine started

        new MotorcycleFactory().deliverVehicle();
        // Motorcycle engine started
    }
}`,
  },
  {
    question: "What does this Factory Method example print?",
    category: "Design Patterns",
    code: `// Car.startEngine() prints "Car engine started".
// Motorcycle.startEngine() prints "Motorcycle engine started".

VehicleFactory factory = new CarFactory();
factory.deliverVehicle();`,
    options: [
      "Motorcycle engine started",
      "Car engine started",
      "Both messages",
      "Nothing, because the reference type is abstract",
    ],
    answer: 1,
    explanation:
      "CarFactory.createVehicle() returns a Car. The shared delivery method then invokes that object's startEngine().",
  },
  {
    question: "How would you add Truck support to the shown Factory Method design?",
    category: "Design Patterns",
    options: [
      "Replace Vehicle with Truck throughout the application.",
      "Add every truck operation directly to CarFactory.",
      "Create a Truck implementing Vehicle and a TruckFactory extending VehicleFactory.",
      "Remove createVehicle() from the parent creator.",
    ],
    answer: 2,
    explanation:
      "A new product and concrete creator extend the design. Existing shared delivery logic can continue using the Vehicle contract.",
  },

  // STRATEGY
  {
    question: "What is the Strategy design pattern?",
    category: "Design Patterns",
    options: [
      "A behavioral pattern that encapsulates interchangeable algorithms behind a common contract",
      "A pattern that always creates a single object",
      "A pattern that requires a child factory for every product",
      "A pattern that automatically broadcasts events",
    ],
    answer: 0,
    explanation:
      "Vehicle delegates driving behavior to a DrivingStrategy. EcoDriving and SportDriving implement the same interface, allowing the behavior to change without modifying Vehicle.",
    example: `interface DrivingStrategy {
    void drive();
}

class EcoDriving implements DrivingStrategy {
    public void drive() {
        System.out.println("Gentle acceleration");
    }
}

class SportDriving implements DrivingStrategy {
    public void drive() {
        System.out.println("Fast acceleration");
    }
}

class Vehicle {
    private DrivingStrategy strategy;

    Vehicle(DrivingStrategy strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(DrivingStrategy strategy) {
        this.strategy = strategy;
    }

    public void drive() {
        strategy.drive(); // Delegates to the selected strategy
    }
}

public class Main {
    public static void main(String[] args) {
        Vehicle car = new Vehicle(new EcoDriving());
        car.drive(); // Gentle acceleration

        car.setStrategy(new SportDriving());
        car.drive(); // Fast acceleration
    }
}`,
  },
  {
    question: "What are EcoDriving and SportDriving in this design?",
    category: "Design Patterns",
    code: `interface DrivingStrategy {
    void drive();
}

class EcoDriving implements DrivingStrategy {
    public void drive() {
        System.out.println("Gentle acceleration");
    }
}

class SportDriving implements DrivingStrategy {
    public void drive() {
        System.out.println("Responsive acceleration");
    }
}`,
    options: [
      "Singleton access methods",
      "Concrete factories that create vehicles",
      "Observer registration methods",
      "Concrete strategies implementing alternative driving behaviors",
    ],
    answer: 3,
    explanation:
      "Both classes implement DrivingStrategy, allowing the context to use either behavior through the same contract.",
  },
  {
    question: "What is the role of Vehicle in the Strategy example?",
    category: "Design Patterns",
    code: `class Vehicle {
    private DrivingStrategy strategy;

    public Vehicle(DrivingStrategy strategy) {
        this.strategy = strategy;
    }

    public void drive() {
        strategy.drive();
    }
}`,
    options: [
      "It creates every possible strategy automatically.",
      "It acts as the context and delegates driving behavior to its strategy.",
      "It prevents the strategy from executing.",
      "It guarantees a single instance of DrivingStrategy.",
    ],
    answer: 1,
    explanation:
      "Vehicle is the context. It holds a strategy reference and delegates the operation instead of implementing every driving algorithm itself.",
  },
  {
    question: "What enables changing the driving behavior of the same Vehicle object at runtime?",
    category: "Design Patterns",
    options: [
      "Declaring Vehicle abstract",
      "Calling startEngine() twice",
      "Replacing its strategy through setStrategy()",
      "Making every strategy method static",
    ],
    answer: 2,
    explanation:
      "A setter can replace the current strategy. Later drive() calls delegate to the newly assigned implementation.",
  },
  {
    question: "What does this Strategy example print?",
    category: "Design Patterns",
    code: `// EcoDriving.drive() prints "Gentle acceleration".
// SportDriving.drive() prints "Responsive acceleration".

Vehicle car = new Vehicle(new EcoDriving());
car.drive();

car.setStrategy(new SportDriving());
car.drive();`,
    options: [
      "Gentle acceleration, followed by Responsive acceleration",
      "Responsive acceleration twice",
      "Gentle acceleration twice",
      "Both strategies execute on each drive() call",
    ],
    answer: 0,
    explanation:
      "The first call uses EcoDriving. After setStrategy(), the same Vehicle object delegates to SportDriving.",
  },
  {
    question: "How can a new driving algorithm be added without changing Vehicle.drive()?",
    category: "Design Patterns",
    options: [
      "Add another condition inside every drive() caller.",
      "Copy the entire Vehicle class.",
      "Remove the DrivingStrategy interface.",
      "Implement DrivingStrategy in a new class and supply an instance to Vehicle.",
    ],
    answer: 3,
    explanation:
      "The context depends on the strategy contract. New implementations can provide behavior without changing its delegation code.",
  },
  {
    question: "What is the main difference between Factory Method and Strategy?",
    category: "Design Patterns",
    options: [
      "Both exist only to restrict object creation to one instance.",
      "Factory Method varies object creation; Strategy varies the algorithm or behavior used by a context.",
      "Strategy requires factories to extend the context.",
      "Factory Method only works with static methods.",
    ],
    answer: 1,
    explanation:
      "Factory Method addresses which product gets created. Strategy addresses which interchangeable behavior gets executed.",
  },

  // SINGLETON
  {
    question: "What is the main purpose of the Singleton pattern?",
    category: "Design Patterns",
    options: [
      "To create a new object for every method call",
      "To switch between algorithms",
      "To control access to a single instance of a class",
      "To create a child factory for each product",
    ],
    answer: 2,
    explanation:
      "Singleton controls instance creation and provides an access point to the shared instance. In Java, separate class loaders can hold separate instances.",
  },
  {
    question: "Why is the Car constructor private in this Singleton?",
    category: "Design Patterns",
    code: `public final class Car extends Vehicle {
    private static final Car INSTANCE = new Car();

    private Car() {
        super("Toyota");
    }

    public static Car getInstance() {
        return INSTANCE;
    }
}`,
    options: [
      "To prevent ordinary external code from directly creating Car objects with new Car()",
      "To prevent Car from calling its parent constructor",
      "To make every inherited method private",
      "To create a new object whenever getInstance() runs",
    ],
    answer: 0,
    explanation:
      "The private constructor restricts direct construction. External callers normally obtain the shared instance through getInstance().",
  },
  {
    question: "What do static and final mean for the INSTANCE field?",
    category: "Design Patterns",
    options: [
      "Every Car object owns a separate field, and the object is deeply immutable.",
      "The field can only be used by child classes.",
      "The field is initialized again on every access.",
      "The field belongs to the class, and its reference cannot be reassigned after initialization.",
    ],
    answer: 3,
    explanation:
      "static makes the field class-level. final prevents reference reassignment, but does not automatically make the referenced object's state immutable.",
  },
  {
    question: "What does this code print?",
    category: "Design Patterns",
    code: `Car car1 = Car.getInstance();
Car car2 = Car.getInstance();

System.out.println(car1 == car2);`,
    options: ["false", "true", "null", "Compilation error"],
    answer: 1,
    explanation:
      "Both calls return the same INSTANCE reference. The == operator therefore evaluates to true.",
  },
  {
    question: "Which initialization approach does this Singleton use?",
    category: "Design Patterns",
    code: `private static final Car INSTANCE = new Car();`,
    options: [
      "A new instance for every caller",
      "Unsynchronized lazy initialization inside getInstance()",
      "Eager initialization when the declaring class is initialized",
      "Initialization by an observer notification",
    ],
    answer: 2,
    explanation:
      "The instance is created as part of class initialization. It is not necessarily created at program startup, and this is not the lazy holder-class variant.",
  },
  {
    question: "Why is the static holder-class Singleton considered lazily initialized and safe for concurrent initialization?",
    category: "Design Patterns",
    code: `public final class Car {
    private Car() {}

    private static class Holder {
        private static final Car INSTANCE = new Car();
    }

    public static Car getInstance() {
        return Holder.INSTANCE;
    }
}`,
    options: [
      "The holder is initialized on first active use, and Java coordinates class initialization.",
      "private automatically synchronizes every method.",
      "Every thread creates its own Holder.INSTANCE.",
      "The constructor runs on every getInstance() call.",
    ],
    answer: 0,
    explanation:
      "The nested holder's initialization occurs when its instance field is first actively used. Java's class initialization mechanism coordinates creation and publication.",
  },
  {
    question: "Does safely initializing a Singleton make all operations on its mutable state thread-safe?",
    category: "Design Patterns",
    options: [
      "Yes. A single object cannot experience race conditions.",
      "Yes. static automatically synchronizes every field access.",
      "Yes. final makes the entire object deeply immutable.",
      "No. Concurrent access to mutable state may still require synchronization.",
    ],
    answer: 3,
    explanation:
      "Safe creation and publication do not protect later state changes. Shared mutable data still needs an appropriate concurrency design.",
  },
  {
    question: "Can a Singleton class extend a parent class, as Car extends Vehicle in the example?",
    category: "Design Patterns",
    options: [
      "No. Singleton classes cannot inherit behavior.",
      "Yes. Car can inherit from Vehicle while controlling its own instance creation.",
      "Yes, but every call to an inherited method must create a new Car.",
      "No. The parent class must also be a Singleton.",
    ],
    answer: 1,
    explanation:
      "Singleton does not prohibit inheritance from a parent class. The shown final Car cannot itself have child classes, and a Vehicle reference still invokes Car's overridden methods.",
  },

  // KAFKA FUNDAMENTALS
  {
    question: "What is Apache Kafka?",
    category: "Kafka",
    options: [
      "A relational database for storing application tables",
      "A distributed event-streaming platform for publishing, storing, and consuming events",
      "A Java framework for rendering HTML pages",
      "A protocol that requires direct synchronous calls between services",
    ],
    answer: 1,
    explanation:
      "Kafka lets applications publish and consume streams of events. It supports asynchronous communication and durable event storage.",
  },
  {
    question: "How does Kafka help decouple applications?",
    category: "Kafka",
    options: [
      "It requires every consumer to call the producer directly.",
      "It forces all applications to run in one process.",
      "Producers publish events that consumers can process independently.",
      "It removes every dependency on message formats.",
    ],
    answer: 2,
    explanation:
      "Producers and consumers communicate through Kafka rather than directly invoking each other. They still need compatible event contracts.",
  },
  {
    question: "What is a Kafka topic?",
    category: "Kafka",
    options: [
      "A named stream that organizes related records into partitions",
      "A Java thread that processes every message",
      "A unique identifier for a consumer application",
      "A database connection used by a producer",
    ],
    answer: 0,
    explanation:
      "A topic organizes related events. Producers write records to its partitions, and consumers read records from them.",
  },
  {
    question: "What is a Kafka broker?",
    category: "Kafka",
    options: [
      "A message's position within a partition",
      "An application that only reads events",
      "A serialization format",
      "A Kafka server that stores records and serves producer and consumer requests",
    ],
    answer: 3,
    explanation:
      "A broker is a server in a Kafka cluster. Multiple brokers can distribute partition storage and replicate data.",
  },
  {
    question: "What is a producer in Kafka?",
    category: "Kafka",
    options: [
      "A server that assigns every consumer its business rules",
      "An application or component that publishes records to Kafka topics",
      "A schema version stored inside a database",
      "A process that only commits consumer offsets",
    ],
    answer: 1,
    explanation:
      "A producer sends records to Kafka. Those records are written to partitions within the selected topic.",
  },
  {
    question: "What is a consumer in Kafka?",
    category: "Kafka",
    options: [
      "A component that creates every Kafka topic",
      "A server that replaces all brokers",
      "An application or component that reads and processes Kafka records",
      "A configuration that prevents producer retries",
    ],
    answer: 2,
    explanation:
      "Consumers read records from Kafka and perform application-specific processing, such as updating data or sending notifications.",
  },

  // PARTITIONS AND OFFSETS
  {
    question: "What is a partition in Kafka?",
    category: "Kafka",
    options: [
      "An ordered log of records within a topic",
      "A group of application users",
      "A serializer that converts records into JSON",
      "A separate consumer group for each message",
    ],
    answer: 0,
    explanation:
      "A topic can have multiple partitions. Each partition is an ordered log that can be stored and consumed independently.",
  },
  {
    question: "Where does Kafka maintain record ordering?",
    category: "Kafka",
    options: [
      "Across every topic in the cluster",
      "Across all partitions of every topic",
      "Across all consumer groups globally",
      "Within each individual partition",
    ],
    answer: 3,
    explanation:
      "Kafka maintains log order within a partition. It does not provide a single global order across a topic's different partitions.",
  },
  {
    question: "Why divide a topic into multiple partitions?",
    category: "Kafka",
    options: [
      "To guarantee a global order across all messages",
      "To distribute storage and support parallel consumption",
      "To prevent more than one consumer group from reading it",
      "To eliminate the need for brokers",
    ],
    answer: 1,
    explanation:
      "Partitions allow a topic's workload to be distributed across brokers and consumers, providing a basis for scalability.",
  },
  {
    question: "What does an offset identify?",
    category: "Kafka",
    options: [
      "A globally unique message across the entire cluster",
      "The number of consumers in a group",
      "A record's position within a specific partition",
      "The producer's database transaction",
    ],
    answer: 2,
    explanation:
      "An offset identifies a position in one partition. Topic, partition, and offset together identify a record's log position.",
  },
  {
    question: "Can two records in different partitions have the same offset?",
    category: "Kafka",
    options: [
      "Yes. Offsets are scoped to individual partitions.",
      "No. Offsets are globally unique.",
      "Only when Kafka loses data.",
      "Only when the records have identical values.",
    ],
    answer: 0,
    explanation:
      "Partition 0 and partition 1 can both contain a record at offset 10. The partition is part of the record's identity.",
  },
  {
    question: "After processing offset 10, which offset normally represents the next record to read?",
    category: "Kafka",
    options: ["9", "10", "0", "11"],
    answer: 3,
    explanation:
      "Consumers normally commit the next offset to process. After successfully processing offset 10, that position is 11, although retained logs can contain offset gaps.",
  },

  // CONSUMER GROUPS
  {
    question: "What is a consumer group in Kafka?",
    category: "Kafka",
    options: [
      "A collection of brokers that stores one record",
      "A set of consumers that cooperate to share partition consumption",
      "A set of producers that must publish identical records",
      "A schema shared by every Kafka topic",
    ],
    answer: 1,
    explanation:
      "In a conventional consumer group, consumers share partition assignments to distribute the reading workload.",
  },
  {
    question: "Within a conventional consumer group, how many consumers are assigned a given partition at one time?",
    category: "Kafka",
    options: [
      "Every consumer in the group",
      "Exactly two consumers",
      "At most one consumer",
      "One consumer from every broker",
    ],
    answer: 2,
    explanation:
      "A partition is assigned to at most one consumer within the same conventional group at a time. This assignment does not itself guarantee exactly-once business processing.",
  },
  {
    question: "A topic has three partitions and three consumers in one group. What assignment is possible?",
    category: "Kafka",
    options: [
      "Each consumer can be assigned one partition.",
      "Every consumer must read every partition.",
      "Only one consumer can receive any partition.",
      "Kafka must create six additional partitions.",
    ],
    answer: 0,
    explanation:
      "The group can distribute the three partitions across the three consumers, allowing parallel consumption.",
  },
  {
    question: "A conventional group has five consumers subscribed only to a topic with three partitions. What happens?",
    category: "Kafka",
    options: [
      "All five consumers must receive a different partition.",
      "Kafka automatically duplicates every partition.",
      "The topic becomes unavailable.",
      "At most three consumers receive partition assignments; the others have no partitions assigned.",
    ],
    answer: 3,
    explanation:
      "Consumer-group parallelism for that topic is limited by its partition count. One consumer can also handle multiple partitions.",
  },
  {
    question: "Can different consumer groups read the same topic independently?",
    category: "Kafka",
    options: [
      "No. A topic belongs to exactly one group.",
      "Yes. Each group maintains its own consumption progress.",
      "Only when every group uses the same committed offsets.",
      "Only after the first group deletes its records.",
    ],
    answer: 1,
    explanation:
      "Different groups can independently consume the same retained records. One group's progress does not advance another group's offsets.",
  },

  // REBALANCING
  {
    question: "What is a consumer rebalance?",
    category: "Kafka",
    options: [
      "Sorting messages globally by timestamp",
      "Deleting records that have already been processed",
      "Redistributing partition assignments among consumers in a group",
      "Converting messages from JSON into Avro",
    ],
    answer: 2,
    explanation:
      "Rebalancing adjusts partition ownership so that active consumers can share the workload as group membership or assignments change.",
  },
  {
    question: "Which event can trigger a consumer rebalance?",
    category: "Kafka",
    options: [
      "A consumer joins, leaves, or is detected as failed.",
      "A message contains a long String.",
      "A producer changes a field value in one record.",
      "A consumer prints a message to the console.",
    ],
    answer: 0,
    explanation:
      "Changes in group membership can cause partition reassignment. Changes to subscribed topics or partition counts can also affect assignments.",
  },
  {
    question: "What can happen after a consumer fails and its partition is reassigned?",
    category: "Kafka",
    options: [
      "All records in the topic are deleted.",
      "The producer must become a consumer.",
      "The replacement consumer always skips every previously read record.",
      "The replacement consumer can resume from the group's committed offset, potentially reprocessing uncommitted work.",
    ],
    answer: 3,
    explanation:
      "If processing completed but its offset was not committed before failure, another consumer may process the record again.",
  },

  // IDEMPOTENCY
  {
    question: "What does an idempotent Kafka producer help prevent?",
    category: "Kafka",
    options: [
      "Every possible duplicate business event",
      "Duplicate log writes caused by retries of the producer's sends",
      "Every consumer rebalance",
      "Every failure in an external database",
    ],
    answer: 1,
    explanation:
      "Producer idempotence lets Kafka recognize retried sends. It does not deduplicate arbitrary repeated application-level send() calls.",
  },
  {
    question: "Which producer setting explicitly enables idempotence?",
    category: "Kafka",
    options: [
      "enable.auto.commit=true",
      "auto.offset.reset=earliest",
      "enable.idempotence=true",
      "group.id=idempotent",
    ],
    answer: 2,
    explanation:
      "enable.idempotence controls producer idempotence. Compatible producer settings are also required; consumer offset settings serve a different purpose.",
  },
  {
    question: "What is an idempotent consumer?",
    category: "Kafka",
    options: [
      "A consumer designed so that processing the same event again does not repeat its business effect",
      "A consumer that never receives the same record twice",
      "A consumer that disables offset commits permanently",
      "A consumer that always deletes its topic after reading",
    ],
    answer: 0,
    explanation:
      "An idempotent consumer protects business operations against repeated delivery or processing, for example by using an event ID.",
  },
  {
    question: "How can a payment consumer safely avoid applying paymentId=123 twice?",
    category: "Kafka",
    options: [
      "Assume producer idempotence protects every database update.",
      "Use a different consumer group for every retry.",
      "Check an in-memory flag and always trust it after a restart.",
      "Atomically record the processed payment ID and apply the payment, using a durable uniqueness rule.",
    ],
    answer: 3,
    explanation:
      "The duplicate check and business update must be coordinated. A database transaction and unique payment ID can prevent concurrent or repeated application.",
  },

  // AVRO AND SCHEMA REGISTRY
  {
    question: "What is Apache Avro used for with Kafka?",
    category: "Kafka",
    options: [
      "Assigning partitions to consumers",
      "Schema-based serialization and deserialization of structured records",
      "Starting Kafka brokers",
      "Committing consumer offsets",
    ],
    answer: 1,
    explanation:
      "Avro describes structured data through schemas and supports compact binary encoding. Kafka transports the resulting bytes.",
  },
  {
    question: "Which statement correctly describes the Avro message flow?",
    category: "Kafka",
    options: [
      "Kafka brokers automatically convert Java objects into Avro.",
      "Consumers serialize records before producers create them.",
      "The producer serializes records into bytes, Kafka stores those bytes, and the consumer deserializes them using the appropriate schemas.",
      "Schema Registry executes every consumer's business logic.",
    ],
    answer: 2,
    explanation:
      "Avro serialization uses a writer's schema. Deserialization uses that schema and can resolve it against a compatible reader's schema.",
  },
  {
    question: "What is the purpose of Schema Registry in a Kafka architecture?",
    category: "Kafka",
    options: [
      "To manage schema versions and check configured compatibility rules",
      "To replace every Kafka broker",
      "To guarantee exactly-once external payments",
      "To store consumer partition assignments instead of Kafka",
    ],
    answer: 0,
    explanation:
      "Schema Registry manages event schemas and their evolution. It helps producers and consumers maintain compatible data contracts.",
  },
  {
    question: "With Confluent's standard Avro wire format, why does a message include a schema ID?",
    category: "Kafka",
    options: [
      "To identify the consumer group's current leader",
      "To replace the record's partition offset",
      "To encrypt the complete message automatically",
      "To identify the writer's schema so the deserializer can obtain it from Schema Registry or its cache",
    ],
    answer: 3,
    explanation:
      "The standard Confluent Avro payload includes a schema identifier rather than embedding the full schema in every message. This is a serializer-specific format, not a requirement of Kafka itself.",
  },

  {
    question: "What is the Java Stream API used for?",
    category: "Streams",
    options: [
      "To store database credentials",
      "To process data by chaining operations like filtering and transforming",
      "To replace every collection with an array",
      "To create classes automatically",
    ],
    answer: 1,
    explanation:
      "The Java Stream API lets you process collections, such as lists, by chaining operations like filtering and transforming data.",
    example: `import java.util.List;

// Inside main:
List<String> names = List.of("Ana", "Luis", "Alberto");

List<String> result = names.stream()
    .filter(name -> name.startsWith("A"))
    .toList();

System.out.println(result); // [Ana, Alberto]`,
  },
  {
    question: "What does stream() do when called on a List?",
    category: "Streams",
    options: [
      "It sorts the list immediately.",
      "It removes duplicate elements.",
      "It creates a stream to process the list's elements.",
      "It deletes the original list.",
    ],
    answer: 2,
    explanation:
      "stream() creates a sequential stream from the collection. You can then chain operations to process its elements.",
    example: `import java.util.List;

// Inside main:
List<String> names = List.of("Ana", "Luis");

long total = names.stream().count();

System.out.println(total); // 2`,
  },
  {
    question: "What does filter() do in a stream?",
    category: "Streams",
    options: [
      "It keeps elements that match a condition.",
      "It transforms every element into a different type.",
      "It always removes duplicate elements.",
      "It combines nested streams into one stream.",
    ],
    answer: 0,
    explanation:
      "filter() keeps only the elements for which the supplied condition returns true.",
    example: `import java.util.List;

// Inside main:
List<Integer> numbers = List.of(1, 2, 3, 4);

List<Integer> even = numbers.stream()
    .filter(number -> number % 2 == 0)
    .toList();

System.out.println(even); // [2, 4]`,
  },
  {
    question: "What does map() do in the Java Stream API?",
    category: "Streams",
    options: [
      "It stores elements as key-value pairs.",
      "It keeps only elements that match a condition.",
      "It always combines nested lists.",
      "It transforms each element into one result.",
    ],
    answer: 3,
    explanation:
      "map() applies a transformation to each element. For example, each word can become its length.",
    example: `import java.util.List;

// Inside main:
List<String> words = List.of("cat", "house");

List<Integer> lengths = words.stream()
    .map(String::length)
    .toList();

System.out.println(lengths); // [3, 5]`,
  },
  {
    question: "What does flatMap() do in the Java Stream API?",
    category: "Streams",
    options: [
      "It guarantees that every element produces exactly one result.",
      "It transforms each element into a stream and combines those streams into one.",
      "It converts a stream into a HashMap.",
      "It sorts all elements in reverse order.",
    ],
    answer: 1,
    explanation:
      "flatMap() flattens the streams produced from each input element into one stream. Each input can contribute zero, one, or multiple results.",
    example: `import java.util.List;

// Inside main:
List<List<String>> groups = List.of(
    List.of("Ana", "Luis"),
    List.of("Erick")
);

List<String> names = groups.stream()
    .flatMap(group -> group.stream())
    .toList();

System.out.println(names); // [Ana, Luis, Erick]`,
  },
  {
    question: "How does map() differ from flatMap()?",
    category: "Streams",
    options: [
      "map() transforms each element into one result; flatMap() combines the resulting streams into one stream.",
      "map() only works with numbers; flatMap() only works with strings.",
      "map() changes the original collection; flatMap() deletes it.",
      "Both always produce identical results.",
    ],
    answer: 0,
    explanation:
      "map() produces one result per input element, even if that result is a list. flatMap() can flatten nested data into individual elements.",
    example: `import java.util.List;

// Inside main:
List<List<String>> groups = List.of(
    List.of("cat", "dog"),
    List.of("bird")
);

System.out.println(
    groups.stream().map(group -> group).toList()
); // [[cat, dog], [bird]]

System.out.println(
    groups.stream().flatMap(List::stream).toList()
); // [cat, dog, bird]`,
  },
  {
    question: "Which operation can transform words into uppercase?",
    category: "Streams",
    options: [
      "filter(String::toUpperCase)",
      "count(String::toUpperCase)",
      "map(String::toUpperCase)",
      "toList(String::toUpperCase)",
    ],
    answer: 2,
    explanation:
      "map(String::toUpperCase) transforms each word into its uppercase representation.",
    example: `import java.util.List;

// Inside main:
List<String> words = List.of("cat", "dog");

List<String> result = words.stream()
    .map(String::toUpperCase)
    .toList();

System.out.println(result); // [CAT, DOG]`,
  },
  {
    question: "How can flatMap() combine the letters of several words?",
    category: "Streams",
    options: [
      "By counting the words before processing them",
      "By converting every word into its length",
      "By keeping only words that contain one letter",
      "By creating a stream of letters for each word and flattening those streams",
    ],
    answer: 3,
    explanation:
      "Each word produces a stream of letters. flatMap() combines these streams into one stream of letters.",
    example: `import java.util.Arrays;
import java.util.List;

// Inside main:
List<String> words = List.of("cat", "dog");

List<String> letters = words.stream()
    .flatMap(word -> Arrays.stream(word.split("")))
    .toList();

System.out.println(letters); // [c, a, t, d, o, g]`,
  },
  {
    question: "What does toList() do at the end of a stream pipeline?",
    category: "Streams",
    options: [
      "It starts a new stream.",
      "It collects the stream's elements into an unmodifiable List.",
      "It changes every element into a String.",
      "It modifies the original collection.",
    ],
    answer: 1,
    explanation:
      "Stream.toList() is a terminal operation that collects the results into an unmodifiable List.",
    example: `import java.util.List;

// Inside main:
List<Integer> result = List.of(1, 2, 3).stream()
    .map(number -> number * 2)
    .toList();

System.out.println(result); // [2, 4, 6]

// result.add(8);
// Throws UnsupportedOperationException.`,
  },
  {
    question: "Does filtering a stream automatically modify its original list?",
    category: "Streams",
    options: [
      "Yes, filter() deletes elements from the original list.",
      "Yes, toList() replaces the original list.",
      "No, filtering produces stream results without removing elements from the original list.",
      "No, because streams cannot process lists.",
    ],
    answer: 2,
    explanation:
      "filter() selects elements for the stream result. It does not remove elements from the source list.",
    example: `import java.util.List;

// Inside main:
List<Integer> numbers = List.of(1, 2, 3);

List<Integer> result = numbers.stream()
    .filter(number -> number > 1)
    .toList();

System.out.println(numbers); // [1, 2, 3]
System.out.println(result);  // [2, 3]`,
  }

);

export default questions;