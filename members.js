import { db } from './firebase.js';
import { ref, set, push, onValue } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

const form = document.getElementById("memberForm");
const tableBody = document.getElementById("membersTable");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const role = document.getElementById("role").value;

  const memberRef = push(ref(db, "members"));
  set(memberRef, {
    name: name,
    phone: phone,
    role: role
  });

  alert("Member added!");
  form.reset();
});

onValue(ref(db, "members"), (snapshot) => {
  tableBody.innerHTML = "";
  snapshot.forEach(child => {
    const data = child.val();
    tableBody.innerHTML += `
      <tr>
        <td>${data.name}</td>
        <td>${data.phone}</td>
        <td>${data.role}</td>
      </tr>
    `;
  });
});
