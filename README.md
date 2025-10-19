# QuizApp

A simple client-side multiple-choice quiz web app built with HTML, CSS and vanilla JavaScript.

This repository contains a small interactive quiz that runs entirely in the browser. It's intended as a beginner-friendly example of DOM manipulation, event handling, and basic UI styling.

## What it does

- Presents a sequence of 10 multiple-choice questions.
- Lets the user select one answer per question and submit it.
- Tracks score and shows the final result with a "Play Again" button.

## Files

- `index.html` — markup for the quiz UI.
- `style.css` — styles for layout and visual presentation.
- `script.js` — quiz data and logic (loading questions, handling selection, scoring).

## How to run

You don't need any build tools — the app is static. Two simple ways to run it:

1. Open directly (quickest):

   - In File Explorer, double-click `index.html`, or
   - From PowerShell:

```powershell
Start-Process .\index.html
```

2. Serve from a local static server (recommended for consistent behavior):

   - If you have Python 3 installed, run in PowerShell from the project folder:

```powershell
# Python 3
python -m http.server 8000; Start-Process http://localhost:8000
```

- Or if you have Node.js, install `http-server` once and run:

```powershell
npm install -g http-server; http-server -p 8000 -o
```

Then open `http://localhost:8000` in your browser.

## Notes and known issues

- The app stores the quiz questions and answers in `script.js` inside the `quizDB` array. Editing or adding questions can be done by updating that array.
- The current app uses radio inputs with ids `ans1`..`ans4` and the answer key values like `ans2` in the `quizDB`. Keep these ids intact if you modify the HTML.
- Minor data/text issues: some quiz items include typos or informal wording (for example, `Cascading Style Shit` in question 2). Consider updating the question text in `script.js`.

## Small improvements you can make

- Accessibility: add `fieldset`/`legend`, `aria-live` for score updates, and ensure labels are keyboard-focusable.
- Persist score/history in localStorage to show past attempts.
- Add per-question feedback (show correct answer after submission).
- Add animations and responsive layout tweaks for small screens.
- Move `quizDB` to a separate JSON file and fetch it to demonstrate async data loading.

## License

This project is provided as-is for learning and demonstration purposes. Feel free to copy, modify, and experiment.

---

If you want, I can also: fix typos in questions, add accessibility improvements, or turn this into a React/Vite starter. Tell me which and I'll implement it.
