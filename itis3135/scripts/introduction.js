(function () {
    const defaultCourses = [
        {
            department: "ITSC",
            number: "2181",
            name: "Intro to Computer Systems",
            reason: "Core foundational course for understanding how computer systems work."
        },
        {
            department: "ITIS",
            number: "3135",
            name: "Front-End Web App Development",
            reason: "Practical, hands-on class that’s interesting."
        },
        {
            department: "ITSC",
            number: "2600",
            name: "CS Program, Identity, Career",
            reason: "Required class that helps in understanding the CS field for transfer students."
        },
        {
            department: "ITSC",
            number: "3688",
            name: "Computing & Their Impact on Society",
            reason: "Interesting class that explores the social, ethical, and global impacts of computing."
        },
        {
            department: "MATH",
            number: "2164",
            name: "Matrices & Linear Algebra",
            reason: "Required math course that supports advanced computing and technical coursework."
        }
    ];

    const defaultImage = "../images/marlowe.jpg";
    let currentImageSrc = defaultImage;

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, function (char) {
            const map = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                "\"": "&quot;",
                "'": "&#39;"
            };
            return map[char];
        });
    }

    function getApp() {
        return document.getElementById("app");
    }

    function setHeadings(title, subtitle) {
        const pageTitle = document.getElementById("pageTitle");
        const pageSubtitle = document.getElementById("pageSubtitle");
        if (pageTitle) {
            pageTitle.textContent = title;
        }
        if (pageSubtitle) {
            pageSubtitle.textContent = subtitle;
        }
    }

    function courseRowHtml(course) {
        return [
            '<div class="course-row">',
            '<input type="text" class="courseDept" placeholder="Department" required value="' + escapeHtml(course.department || "") + '">',
            '<input type="text" class="courseNum" placeholder="Number" required value="' + escapeHtml(course.number || "") + '">',
            '<input type="text" class="courseName" placeholder="Course name" required value="' + escapeHtml(course.name || "") + '">',
            '<input type="text" class="courseReason" placeholder="Reason for taking the course" required value="' + escapeHtml(course.reason || "") + '">',
            '<button type="button" class="delete-course secondary">Delete</button>',
            "</div>"
        ].join("");
    }

    function attachCourseRow(course) {
        const coursesList = document.getElementById("coursesList");
        coursesList.insertAdjacentHTML("beforeend", courseRowHtml(course));
    }

    function collectCourses() {
        return Array.from(document.querySelectorAll(".course-row")).map(function (row) {
            return {
                department: row.querySelector(".courseDept").value.trim(),
                number: row.querySelector(".courseNum").value.trim(),
                name: row.querySelector(".courseName").value.trim(),
                reason: row.querySelector(".courseReason").value.trim()
            };
        }).filter(function (course) {
            return course.department || course.number || course.name || course.reason;
        });
    }

    function collectLinks() {
        return Array.from({ length: 5 }, function (_, index) {
            return document.getElementById("link" + (index + 1)).value.trim();
        });
    }

    function collectFormData() {
        const firstName = document.getElementById("firstName").value.trim();
        const middleName = document.getElementById("middleName").value.trim();
        const nickname = document.getElementById("nickname").value.trim();
        const lastName = document.getElementById("lastName").value.trim();
        const divider = document.getElementById("divider").value.trim();
        const mascotAdj = document.getElementById("mascotAdj").value.trim();
        const mascotAnimal = document.getElementById("mascotAnimal").value.trim();

        return {
            firstName: firstName,
            middleName: middleName,
            nickname: nickname,
            lastName: lastName,
            fullHeading: [firstName, middleName, nickname ? '"' + nickname + '"' : "", lastName, divider, mascotAdj, mascotAnimal].filter(Boolean).join(" "),
            acknowledgment: document.getElementById("ack").value.trim(),
            acknowledgmentDate: document.getElementById("ackDate").value,
            divider: divider,
            mascotAdj: mascotAdj,
            mascotAnimal: mascotAnimal,
            imageSrc: currentImageSrc,
            caption: document.getElementById("caption").value.trim(),
            personalStatement: document.getElementById("personalStatement").value.trim(),
            personalBackground: document.getElementById("personalBackground").value.trim(),
            professionalBackground: document.getElementById("professionalBackground").value.trim(),
            academicBackground: document.getElementById("academicBackground").value.trim(),
            subjectBackground: document.getElementById("subjectBackground").value.trim(),
            primaryComputer: document.getElementById("primaryComputer").value.trim(),
            backupPlan: document.getElementById("backupPlan").value.trim(),
            funny: document.getElementById("funny").value.trim(),
            extra: document.getElementById("extra").value.trim(),
            quote: document.getElementById("quote").value.trim(),
            quoteAuthor: document.getElementById("quoteAuthor").value.trim(),
            links: collectLinks(),
            courses: collectCourses()
        };
    }

    function validateCourses(courses) {
        return courses.length > 0 && courses.every(function (course) {
            return course.department && course.number && course.name && course.reason;
        });
    }

    function validateForm() {
        const form = document.getElementById("introForm");
        const error = document.getElementById("formError");
        error.textContent = "";

        if (!form.reportValidity()) {
            error.textContent = "Please complete all required fields before continuing.";
            return false;
        }

        const courses = collectCourses();
        if (!validateCourses(courses)) {
            error.textContent = "Please include at least one complete course.";
            return false;
        }

        return true;
    }

    function renderForm() {
        const app = getApp();
        const template = document.getElementById("formTemplate");
        app.innerHTML = "";
        app.appendChild(template.content.cloneNode(true));
        setHeadings("Introduction Form", "Please submit the form below.");

        defaultCourses.forEach(attachCourseRow);
        bindFormEvents();
    }

    function renderIntroduction(data) {
        const coursesHtml = data.courses.map(function (course) {
            return "<li><strong>" + escapeHtml(course.department + course.number + " – " + course.name) + ":</strong> " + escapeHtml(course.reason) + "</li>";
        }).join("");

        getApp().innerHTML = [
            "<header>",
            "<h1>" + escapeHtml(data.firstName + " " + data.lastName + " " + data.divider + " " + data.mascotAdj + " " + data.mascotAnimal) + "</h1>",
            "<nav>",
            '<a href="index.html">Home</a>',
            "<a></a>",
            "</nav>",
            "</header>",
            "<main>",
            "<h2>Introduction Form</h2>",
            "<figure>",
            '<img src="' + escapeHtml(data.imageSrc) + '" alt="image of a bunny" width="500"/>',
            "<figcaption><em>" + escapeHtml(data.caption) + "</em></figcaption>",
            "</figure>",
            "<p>" + escapeHtml(data.personalStatement) + "</p>",
            "<ul>",
            "<li>" + escapeHtml(data.personalBackground) + "</li>",
            "<li><strong>Professional Background:</strong> " + escapeHtml(data.professionalBackground) + "</li>",
            "<li><strong>Academic Background:</strong> " + escapeHtml(data.academicBackground) + "</li>",
            "<li><strong>Background in this Subject:</strong> " + escapeHtml(data.subjectBackground) + "</li>",
            "<li><strong>Primary Work Computer:</strong> " + escapeHtml(data.primaryComputer) + "</li>",
            "<li><strong>Backup Work Computer & Location Plan:</strong> " + escapeHtml(data.backupPlan) + "</li>",
            "<li><strong>Courses I’m Taking, & Why:</strong><ol>" + coursesHtml + "</ol></li>",
            data.funny ? "<li><strong>Funny/Interesting item to remember me by:</strong> " + escapeHtml(data.funny) + "</li>" : "",
            data.extra ? "<li><strong>I’d also like to share:</strong> " + escapeHtml(data.extra) + "</li>" : "",
            "</ul>",
            "<blockquote>",
            "“" + escapeHtml(data.quote) + "” ",
            "<cite>- " + escapeHtml(data.quoteAuthor) + "</cite>",
            "</blockquote>",
            "</main>",
            "<footer>",
            '<a href="' + escapeHtml(data.links[0]) + '">ITIS3135</a> ' + escapeHtml(data.divider) + ' ',
            '<a href="' + escapeHtml(data.links[1]) + '">GitHub</a> ' + escapeHtml(data.divider) + ' ',
            '<a href="' + escapeHtml(data.links[2]) + '">CLT Web</a> ' + escapeHtml(data.divider) + ' ',
            '<a href="' + escapeHtml(data.links[3]) + '">GitHub.io</a> ' + escapeHtml(data.divider) + ' ',
            '<a href="' + escapeHtml(data.links[4]) + '">LinkedIn</a>',
            "<hr>",
            "© 2026 rassefa Copyright Reserved.",
            '<p><a class="reset-link" href="#" id="resetLink">Reset form</a></p>',
            "</footer>"
        ].join("");

        document.getElementById("resetLink").addEventListener("click", function (event) {
            event.preventDefault();
            currentImageSrc = defaultImage;
            renderForm();
        });
    }

    function renderCodeOutput(title, language, code) {
        getApp().innerHTML = [
            '<section class="result-panel">',
            "<pre><code class=\"language-" + language + "\">" + escapeHtml(code) + "</code></pre>",
            '<a class="reset-link" href="#" id="resetLink">Reset form</a>',
            "</section>"
        ].join("");
        setHeadings(title, "Generated from the form submission.");
        if (window.hljs) {
            window.hljs.highlightAll();
        }
        document.getElementById("resetLink").addEventListener("click", function (event) {
            event.preventDefault();
            renderForm();
        });
    }

    function clearFormFields() {
        document.querySelectorAll("#introForm input, #introForm textarea").forEach(function (element) {
            if (element.type === "file") {
                element.value = "";
            } else {
                element.value = "";
            }
        });
        document.getElementById("coursesList").innerHTML = "";
        attachCourseRow({ department: "", number: "", name: "", reason: "" });
        currentImageSrc = "";
    }

    function resetFormState() {
        currentImageSrc = defaultImage;
    }

    function bindFormEvents() {
        const form = document.getElementById("introForm");
        const addCourseBtn = document.getElementById("addCourseBtn");
        const clearBtn = document.getElementById("clearBtn");
        const imageInput = document.getElementById("image");

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            if (!validateForm()) {
                return;
            }
            renderIntroduction(collectFormData());
        });

        form.addEventListener("reset", function () {
            window.setTimeout(function () {
                resetFormState();
                renderForm();
            }, 0);
        });

        addCourseBtn.addEventListener("click", function () {
            attachCourseRow({ department: "", number: "", name: "", reason: "" });
        });

        document.getElementById("coursesList").addEventListener("click", function (event) {
            if (!event.target.classList.contains("delete-course")) {
                return;
            }
            const rows = document.querySelectorAll(".course-row");
            if (rows.length === 1) {
                rows[0].querySelectorAll("input").forEach(function (input) {
                    input.value = "";
                });
                return;
            }
            event.target.closest(".course-row").remove();
        });

        clearBtn.addEventListener("click", function () {
            clearFormFields();
        });

        imageInput.addEventListener("change", function () {
            const file = imageInput.files && imageInput.files[0];
            if (!file) {
                currentImageSrc = defaultImage;
                return;
            }
            currentImageSrc = URL.createObjectURL(file);
        });
    }

    window.introFormApp = {
        collectFormData: collectFormData,
        renderCodeOutput: renderCodeOutput,
        validateForm: validateForm,
        renderForm: renderForm,
        escapeHtml: escapeHtml
    };

    renderForm();
}());
