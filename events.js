import { db } from './firebase.js';
import { ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const form = document.getElementById("eventForm");
const list = document.getElementById("eventList");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const date = document.getElementById("date").value;
  const desc = document.getElementById("desc").value;

  const eventRef = push(ref(db, "events"));
  set(eventRef, { title, date, desc });

  alert("Event saved!");
  form.reset();
});

onValue(ref(db, "events"), (snapshot) => {
  list.innerHTML = "";
  snapshot.forEach(child => {
    const data = child.val();
    list.innerHTML += `
      <div class="event-card">
        <h3>${data.title}</h3>
        <p>${data.date}</p>
        <p>${data.desc}</p>
      </div>
    `;
  });
});
