// Used for Timing and scheduling in JavaScript

// SetTimeout
// setTimeout(fn, delay)
// Purpose: Executes a function once after a delay (in milliseconds).
// Key Point: Non-blocking — doesn’t pause execution.
// Returns: A timeout ID (number), which you can use to cancel it.
// Example:

const timeoutId = setTimeout(() => {
    console.log("Executed after 2 seconds");
}, 2000);

// // Canceling it:
// clearTimeout(timeoutId);

// SetInterval
// setInterval(fn, interval)
// Purpose: Repeatedly calls a function every interval milliseconds.
// Returns: An interval ID.
// Example:
// Warning: If the function takes longer than the interval, the next execution may lag or overlap.
const id = setInterval(() => {
    console.log("Repeats every second");
}, 1000);
// // Stop it:
// clearInterval(id);


// RequestAnimationFrame
// requestAnimationFrame(callback)
// Purpose: Schedules a function to run before the next repaint of the browser (≈ 60 times per second).
// Ideal For: Animations, smooth visual updates.
// Example:
function animate() {
  // update animation frame
    console.log("Animating...");
  requestAnimationFrame(animate); // keep looping
}
requestAnimationFrame(animate);

// // Cancel it:
// const frameId = requestAnimationFrame(animate);
// cancelAnimationFrame(frameId);

/*
    Difference:
        | Feature	         |     setTimeout    |     setInterval    |	    requestAnimationFrame       |
        | Repeats?	         |        No	     |      Yes	          |  Yes (when recursively called)  |
        | Timing Unit        |	 Milliseconds    |	Milliseconds	  |     Frame (~16.6ms at 60 FPS)   |
        | Precision	         |   Low (can drift) |	Low (can drift)	  |     High (syncs with display)   |
        | Use Case	         |   Delayed actions |	Repeating timers  |	        Smooth animations       |
        | Browser-Friendly?	 |        No	     |       No 	      |   Yes (pauses in background)    |
*/

/*
# Real-World Examples

// 1) Auto-logout after inactivity:
let timeoutId;
function resetTimer() {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        console.log("Logged out due to inactivity.");
    }, 5 * 60 * 1000); // 5 minutes
}
document.addEventListener("mousemove", resetTimer);

// 2) Countdown Timer:
let seconds = 10;
const id = setInterval(() => {
    console.log(seconds--);
    if (seconds < 0) clearInterval(id);
}, 1000);

// 3) Smooth Animation (e.g. moving box):
let x = 0;
function moveBox() {
    x += 2;
    box.style.transform = `translateX(${x}px)`;
    requestAnimationFrame(moveBox);
}
requestAnimationFrame(moveBox);
*/