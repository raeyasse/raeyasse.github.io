const form = document.getElementById("introForm");
const container = document.querySelector(".container");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const mascotAdj = document.getElementById("mascotAdj").value;
  const mascotAnimal = document.getElementById("mascotAnimal").value;
  const divider = document.getElementById("divider").value;

  const statement = document.getElementById("personalStatement").value;
  const personal = document.getElementById("personalBackground").value;
  const professional = document.getElementById("professionalBackground").value;
  const academic = document.getElementById("academicBackground").value;
  const subject = document.getElementById("subjectBackground").value;
  const computer = document.getElementById("primaryComputer").value;
  const backup = document.getElementById("backupPlan").value;

  const funny = document.getElementById("funny").value;
  const extra = document.getElementById("extra").value;

  const quote = document.getElementById("quote").value;
  const author = document.getElementById("quoteAuthor").value;

  const caption = document.getElementById("caption").value;

  const courseDepts = document.querySelectorAll(".courseDept");
  const courseNums = document.querySelectorAll(".courseNum");
  const courseNames = document.querySelectorAll(".courseName");
  const courseReasons = document.querySelectorAll(".courseReason");

  let coursesHTML = "";

  for (let i = 0; i < courseDepts.length; i++) {
    coursesHTML += `
      <li><strong>${courseDepts[i].value}${courseNums[i].value} – ${courseNames[i].value}:</strong> ${courseReasons[i].value}</li>
    `;
  }

  container.innerHTML = `
    <h2>Introduction Form</h2>

    <h3>${firstName} ${lastName} ${divider} ${mascotAdj} ${mascotAnimal}</h3>

    <figure>
      <img src="images/marlowe.jpg" alt="image" width="500">
      <figcaption><em>${caption}</em></figcaption>
    </figure>

    <p>${statement}</p>

    <ul>
      <li>${personal}</li>
      <li><strong>Professional Background:</strong> ${professional}</li>
      <li><strong>Academic Background:</strong> ${academic}</li>
      <li><strong>Background in this Subject:</strong> ${subject}</li>
      <li><strong>Primary Work Computer:</strong> ${computer}</li>
      <li><strong>Backup Work Computer & Location Plan:</strong> ${backup}</li>
      <li><strong>Courses I’m Taking, & Why:</strong>
        <ol>${coursesHTML}</ol>
      </li>
      <li><strong>Funny/Interesting item to remember me by:</strong> ${funny}</li>
      <li><strong>I’d also like to share:</strong> ${extra}</li>
    </ul>

    <blockquote>
      "${quote}"
      <cite>- ${author}</cite>
    </blockquote>
  `;
});