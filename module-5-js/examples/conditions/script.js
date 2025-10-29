const score = Math.floor(Math.random() * 101); // 0..100
console.log("Generated mood score:", score);

let message;
if (score < 30) {
  message = "Too sleepy — time for a short break ☕️";
  console.warn("LOW mood score");
} else if (score < 70) {
  message = "Just right — keep going! 🙂";
  console.log("MEDIUM mood score");
} else {
  message = "Super focused — great flow today! 🚀";
  console.log("HIGH mood score");
}

console.log("Mood message:", message);
