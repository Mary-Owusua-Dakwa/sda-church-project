import { db } from './firebase.js';
import { ref, push, set, onValue } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const form = document.getElementById("financeForm");
const tableBody = document.getElementById("financeTable");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const member = document.getElementById("member").value;
  const amount = document.getElementById("amount").value;
  const type = document.getElementById("type").value;

  const financeRef = push(ref(db, "finance"));
  set(financeRef, {
    member,
    amount,
    type,
    date: new Date().toLocaleDateString()
  });

  alert("Record added!");
  form.reset();
});

onValue(ref(db, "finance"), (snapshot) => {
  tableBody.innerHTML = "";
  snapshot.forEach(child => {
    const data = child.val();
    tableBody.innerHTML += `
      <tr>
        <td>${data.member}</td>
        <td>${data.type}</td>
        <td>${data.amount}</td>
        <td>${data.date}</td>
      </tr>
    `;
  });
});
