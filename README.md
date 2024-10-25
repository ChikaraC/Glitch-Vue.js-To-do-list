## README.md

### 1. What framework did you pick and why?

For this project, I chose **Vue.js** as the JavaScript framework. Vue.js is known for its simplicity, ease of use, and powerful features, making it an good choice for beginners. I wanted a framework that allowed me to quickly build an interactive and reactive web application without the need for complex setup or steep learning curves. Vue.js offers a great balance between easy learning and powerful capabilities, which made it the best choice for this assignment.

Additionally, Vue.js provides reactivity out of the box, which means I can update the UI dynamically based on changes in data. This is what I needed for a project like a to-do list app, where user interaction should immediately reflect changes in the interface, such as adding or deleting tasks.

### 2. What about that framework appealed to you, for this project?

Vue.js appealed to me for this project because of its **lightweight nature** and **reactive data binding**. The framework allows for clean, declarative code, which is great for building applications where user interaction dynamically updates the UI. Vue’s two-way data binding makes it simple to keep the DOM in sync with the application’s data.

Vue.js also offers a flexible component system that I can dive into later if I want to extend the project. For this project, the framework’s ease of integration and use of CDN (without the need for a build process) was a major plus. Since the project was small-scale, I didn't need advanced features like a complex state management system (which frameworks like React might require). Vue’s straightforward syntax and simplicity allowed me to quickly prototype and implement my ideas.

### 3. What alternative frameworks did you consider?

I briefly considered using **React.js** and **jQuery**. React is one of the most popular frameworks, especially for building dynamic user interfaces, and it has a large developer community. However, React requires more setup (including a build process), which seemed unnecessary for the scale of this project. While React provides component-based development and reactivity, Vue.js offers similar functionality with a simpler setup and syntax.

I also thought about **jQuery**, a library that is easy to learn and useful for DOM manipulation and event handling. However, jQuery is not a framework and lacks the modern reactivity and component-based architecture that Vue.js provides. Given that I wanted a more structured approach to building interactive components, Vue.js felt like the right choice compared to jQuery.

### 4. What resources did you read/watch/listen to?

To familiarize myself with Vue.js and its core features, I used several resources:
- The **official Vue.js documentation** was my primary resource. It provided comprehensive information on Vue’s basic features, such as reactivity, event handling.
- Additionally, I reviewed some beginner-friendly guides on **Glitch** itself to ensure smooth integration of Vue with a static site, particularly in how to deploy and test small projects.

These resources helped me quickly get up to speed with Vue.js and allowed me to explore its capabilities in a short amount of time.

### 5. Describe the site you built for this assignment. What does it do? What components or features of the framework did you explore for this project?

For this assignment, I built a **To-Do List Application** using Vue.js. The application allows users to add tasks to a list, and once a task is completed, they can click a check button to delete the task. The check button functionality was designed to mark tasks as completed and removing them from the list at the same time.

Key Vue.js features that I explored for this project include:
- **Data Binding (`v-model`)**: I used Vue’s `v-model` directive to bind the input field to the `newTask` data property, allowing users to input and add new tasks easily.
- **Event Handling (`@click`)**: I explored Vue’s event handling system, particularly the `@click` directive, to trigger functions such as adding and deleting tasks.
- **Dynamic Rendering (`v-for`)**: I used the `v-for` directive to render the task list dynamically, ensuring that each task is displayed based on the current state of the `tasks` array.
- **Reactivity**: Vue’s reactivity system automatically updated the user interface when tasks were added or removed, making the app feel responsive without manually manipulating the DOM.

 