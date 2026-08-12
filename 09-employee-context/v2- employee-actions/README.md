# 👤 Employee Introduction — V2
A JavaScript project demonstrating explicit `this` control using `call()`, `apply()`, and `bind()` — extended from V1 to include methods that read *and* mutate object state.

---

## 🎯 What This Demonstrates
- Explicit control of function execution context (`this`)
- Reusable methods shared across multiple objects
- Safe, targeted state mutation via `call()` / `apply()`
- Clean, readable template-literal output formatting

---

## ⚙️ How It Works
A single `introducer` object exposes three methods, each invoked with a different employee as its `this` context:

| Method | Purpose |
|---|---|
| `introduce(greeting, ending)` | Returns a formatted self-introduction |
| `promote(greeting, newRole)` | Updates `this.role` and returns a promotion message |
| `switchCompany(greeting, pronoun, newCompany, newRole)` | Updates `this.company` + `this.role`, returns a summary of the change |

**Example:**
```javascript
introducer.promote.call(employee3, "Kudos", "Senior Cloud Architect");
// → "Kudos Daren! You have been promoted to Senior Cloud Architect."
```

---


## 🛠 Built With
JavaScript (ES6+)

---

## ▶️ Run It
```bash
node employee-introduction-v2.js
```

---

## 👨‍💻 Author
**Afri | Frontend Developer**
[GitHub](https://github.com/Aedenfri-Fusiondev)