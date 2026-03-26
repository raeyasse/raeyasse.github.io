(function () {
    document.addEventListener("click", function (event) {
        if (event.target.id !== "generateJsonBtn") {
            return;
        }

        if (!window.introFormApp.validateForm()) {
            return;
        }

        const data = window.introFormApp.collectFormData();
        const payload = {
            first_name: data.firstName,
            preferred_name: data.nickname,
            middle_initial: data.middleName,
            last_name: data.lastName,
            divider: data.divider,
            mascot_adjective: data.mascotAdj,
            mascot_animal: data.mascotAnimal,
            image: data.imageSrc,
            image_caption: data.caption,
            personal_statement: data.personalStatement,
            personal_background: data.personalBackground,
            professional_background: data.professionalBackground,
            academic_background: data.academicBackground,
            subject_background: data.subjectBackground,
            primary_computer: data.primaryComputer,
            backup_plan: data.backupPlan,
            acknowledgment_statement: data.acknowledgment,
            acknowledgment_date: data.acknowledgmentDate,
            funny_thing: data.funny,
            something_to_share: data.extra,
            quote: data.quote,
            quote_author: data.quoteAuthor,
            courses: data.courses,
            links: data.links.map(function (link, index) {
                return {
                    name: "Link " + (index + 1),
                    href: link
                };
            })
        };

        window.introFormApp.renderCodeOutput("Introduction JSON", "json", JSON.stringify(payload, null, 2));
    });
}());
