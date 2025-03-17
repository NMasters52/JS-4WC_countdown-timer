# JavaScript 4 Week Challenge: Week 3 - Async JS - Countdown Timer

## Overview

This project is part of a personal 4-week JavaScript challenge concepts. This specific challenge, completed during my lunch break using an iPad and GitHub Codespaces, tackles timeouts and intervals by building a simple countdown timer.

**Week 3 Challenge:** Async JS - Countdown Timer

**Goal:** Create a countdown timer that counts down from 10 to 0 using JavaScript's `setInterval`.

**Completed On:** Monday (Timeouts & Intervals)

## Features

* **Countdown Display:** Displays the current countdown value.
* **Start/Restart Button:** Initiates the countdown and restarts it after completion.
* **Dynamic Button Text:** Updates the button text to "Running..." while the countdown is active and "Restart" when it finishes.
* **Clear Interval:** Properly clears the interval when the countdown reaches 0.

## Technologies Used

* **HTML:** For structuring the webpage.
* **CSS:** For basic styling (see `styles.css`).
* **JavaScript:** For implementing the countdown logic (see `script.js`).

## How to Use

1.  **Clone the Repository:**
    ```bash
    git clone [repository URL]
    ```
2.  **Open `index.html`:** Open the `index.html` file in your web browser.
3.  **Click "Start Count Down":** The timer will begin counting down from 10 to 0.
4.  **Restart:** After the countdown finishes, click "Restart" to start the timer again.

## Implementation Details

* The `script.js` file uses `setInterval` to decrement the countdown value every 1000 milliseconds (1 second).
* The `clearInterval` function is used to stop the countdown when it reaches 0.
* The button text is dynamically updated to reflect the countdown's state.
* DOM manipulation is used to update the display and button text.

## Development Environment

* Developed on an iPad using GitHub Codespaces.
* Completed during lunch breaks as part of a personal JavaScript challenge.

## File Structure

├── index.html
├── script.js
├── styles.css
└── README.md


## Future Improvements

* Add input fields to allow users to set the initial countdown value.
* Implement visual feedback during the countdown (e.g., changing colors).
* Add pause and resume functionality.
* Improve CSS styling.
