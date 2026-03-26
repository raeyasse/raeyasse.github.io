(function () {
    document.addEventListener("click", function (event) {
        if (event.target.id !== "generateHtmlBtn") {
            return;
        }

        if (!window.introFormApp.validateForm()) {
            return;
        }

        const data = window.introFormApp.collectFormData();
        const courseLines = data.courses.map(function (course) {
            return [
                "        <li>",
                "            <strong>" + course.department + " " + course.number + " - " + course.name + ":</strong> " + course.reason,
                "        </li>"
            ].join("\n");
        }).join("\n");

        const linkLines = data.links.map(function (link, index) {
            return '        <li><a href="' + link + '">Link ' + (index + 1) + "</a></li>";
        }).join("\n");

        const html = [
            "<h2>Introduction HTML</h2>",
            "<h3>" + data.fullHeading + "</h3>",
            "<figure>",
            '    <img src="' + data.imageSrc + '" alt="Introduction image">',
            "    <figcaption><em>" + data.caption + "</em></figcaption>",
            "</figure>",
            "<p>" + data.personalStatement + "</p>",
            "<ul>",
            "    <li><strong>Personal Background:</strong> " + data.personalBackground + "</li>",
            "    <li><strong>Professional Background:</strong> " + data.professionalBackground + "</li>",
            "    <li><strong>Academic Background:</strong> " + data.academicBackground + "</li>",
            "    <li><strong>Background in this Subject:</strong> " + data.subjectBackground + "</li>",
            "    <li><strong>Primary Work Computer:</strong> " + data.primaryComputer + "</li>",
            "    <li><strong>Backup Work Computer & Location Plan:</strong> " + data.backupPlan + "</li>",
            "    <li><strong>Courses I’m Taking, & Why:</strong>",
            "        <ol>",
            courseLines,
            "        </ol>",
            "    </li>",
            data.funny ? "    <li><strong>Funny/Interesting item to remember me by:</strong> " + data.funny + "</li>" : "",
            data.extra ? "    <li><strong>I’d also like to share:</strong> " + data.extra + "</li>" : "",
            "    <li><strong>Acknowledgment:</strong> " + data.acknowledgment + " (" + data.acknowledgmentDate + ")</li>",
            "    <li><strong>Links:</strong>",
            "        <ul>",
            linkLines,
            "        </ul>",
            "    </li>",
            "</ul>",
            '<blockquote>"' + data.quote + '" <cite>- ' + data.quoteAuthor + "</cite></blockquote>"
        ].filter(Boolean).join("\n");

        window.introFormApp.renderCodeOutput("Introduction HTML", "html", html);
    });
}());
