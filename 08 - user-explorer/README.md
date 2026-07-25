# 🔍 User Search App (Client-Side Search)

A responsive JavaScript application that fetches user data from the JSONPlaceholder API and performs **client-side searching** using JavaScript array methods. The application demonstrates asynchronous programming, API integration, DOM manipulation, and robust error handling.

---

## 🎯 Purpose

This project was built to practice real-world JavaScript concepts including asynchronous programming, API integration, DOM manipulation, and client-side data filtering without relying on server-side search.

---

# 💻 Skills Demonstrated

This project demonstrates practical knowledge of:

- Fetch API
- Async / Await
- Promises
- DOM Manipulation
- Event Handling
- Array.filter()
- Array.map()
- String Methods (`trim()`, `toLowerCase()`, `includes()`)
- Error Handling
- Input Validation
- Dynamic Rendering

---

# ⚙️ How It Works

1. User enters a name.
2. Input is validated before making a request.
3. The application fetches all users from the JSONPlaceholder API.
4. JavaScript filters the users locally using:

```javascript
user.name
    .toLowerCase()
    .includes(userInput.toLowerCase());
```

5. Matching users are rendered dynamically.
6. If no match exists, the application displays a friendly message.
7. Network errors are handled gracefully using `try...catch`.

---

# 📈 Project Evolution

### Version 1

The initial implementation relied on the API endpoint:

```
/users?name=input
```

The server handled the filtering.

---

### Version 2 (Current)

The application now fetches all users once and performs filtering locally using JavaScript.

Benefits:

- Partial name search
- Case-insensitive matching
- Better JavaScript practice
- Demonstrates understanding of array methods instead of relying entirely on API endpoints

---

# 🧠 What I Learned

While building this project, I strengthened my understanding of:

- Asynchronous JavaScript
- API communication
- Client-side filtering
- Dynamic DOM rendering
- Error handling
- Writing cleaner and more maintainable JavaScript

The biggest improvement in this version was moving from server-side search to client-side filtering. Instead of relying on the API to perform searches, I implemented the filtering logic myself using JavaScript array methods, which strengthened my understanding of data processing and DOM rendering.

---

## Technologies Used
- HTML5
- JavaScript (ES6+)
- Fetch API + Async/Await
- DOM Manipulation
- JSONPlaceholder API

--- 

## 👨‍💻 Author

**Afri**  
Frontend Developer

GitHub: https://github.com/Aedenfri-Fusiondev