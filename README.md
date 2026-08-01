# 📝 To-Do List App

A simple, interactive to-do list web app built using **HTML, CSS, and JavaScript** — created as a hands-on project to practice DOM manipulation, event handling, and dynamic UI updates.

🔗 **Live Demo:** [to-do-list.codedex.me](https://to-do-list.codedex.me/)

## 📌 Features

- **Thought of the Day** — Randomly generates a motivational quote from a curated list of 40+ quotes.
- **Personalized Heading** — Enter your name and today's date to get a custom greeting for your list.
- **Add Targets** — Dynamically add tasks/targets for the day to your list.
- **Mark as Done** — Toggle a task as complete, applying a strikethrough style.
- **Delete Task** — Remove a task from the list instantly.
- **Rate the App** — A simple footer rating system for user feedback (out of 10).

## 🛠️ Built With

- **HTML5** — Semantic page structure
- **CSS3** — Custom styling, gradients, and responsive layout
- **JavaScript (Vanilla)** — DOM manipulation, event delegation, dynamic element creation

## 🧠 Key Concepts Practiced

- `document.createElement()` and `appendChild()` for dynamically generating list items
- `classList.add()` / `classList.toggle()` / `classList.contains()` for managing styles and states
- **Event delegation** — a single click listener on the list handles clicks for all dynamically created "Done" and "Delete" buttons, instead of attaching listeners individually
- `.closest()` to traverse the DOM and find the correct parent element to act on
- `.remove()` to cleanly delete elements from the DOM

## 🚀 How to Use

1. Clone this repository:
   ```bash
   git clone https://github.com/sharma-coder2008/<repo-name>.git
   ```
2. Open `to-do-list-app.html` in your browser.
3. Enter your name and today's date, and hit Submit.
4. Type a target/task in the input box and click **Add**.
5. Click **Done** to mark a task complete, or **Delete** to remove it.
6. Click **Generate** anytime for a fresh thought of the day.

## 🔮 Planned Improvements

- [ ] Persist tasks using `localStorage` so the list survives a page refresh
- [ ] Add input validation to prevent empty task/name/date submissions
- [ ] Move inline JavaScript styles into CSS classes for cleaner code
- [ ] Add a progress counter (e.g., "3/5 tasks done")

## 👤 Author

**Riyansh Sharma**
GitHub: [@sharma-coder2008](https://github.com/sharma-coder2008)

---
*This project was built as part of my self-learning journey in web development, alongside my B.Tech CSE (AI) coursework at Shoolini University.*
