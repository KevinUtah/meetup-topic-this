From Head First JavaScript Programmin Teasers
https://www.youtube.com/watch?v=JduQUNn7L4w&list=PLjFDgXT6JR1keOyG_nxTStFl7D6PQ-BFo&index=1
Four Rules
- Default Binding:  In code at the global level, `this` refers to the global object.  In the browser, that is the 'window'
- Implicit Binding:  When an object method is called, the value of `this` is the object whose method is called - applies to elements on event handlers as well
- New Binding:  When a function is called with 'new', 'new' creates an empty object and assigns it to `this` in the function
- Hard Binding:  When a function is called with a `call` or `apply` method, `this` is assigned the value of the first argument passed to `call` or `apply` in the function that was called.



From "JavaScript this keyword: Explained in 16 minutes" by Ryan Durk, MD
https://www.youtube.com/watch?list=PLjFDgXT6JR1keOyG_nxTStFl7D6PQ-BFo&v=IGqGqlyIcg8&app=desktop
Four contexts
- Default Binding
 - on the root scope
  - type this into console, get window
  - define function
  - function foo() { return this.word }
  - undefined is returned
  - run foo --> undefined because 'word' isn't defined on any objects yet
  - define word on the global object
    - window.word =  'Hello';
    - returns "Hello"
  - foo(); is defined as this.word and will return "Hello"
- Explicit Binding with .apply
    - functions are objects meaning they have methods of their own

    - console.dir(foo);
      - function foo() { return this.word };
-Dot notation
 - precedence - apply takes precedence to setting `this` keyword
- NEW keyword
  -
