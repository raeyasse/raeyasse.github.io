/**
 * accordion.js
 * Initializes the jQuery-UI accordion widget on the About Us page.
 * Targets the #campAccordion element which contains Camp Values,
 * Meet the Staff, and Safety and Policies panels.
 * Author: Camp Rocky River
 */

$(document).ready(function () {

    // Initialize jQuery-UI accordion on the #campAccordion div
    // collapsible: true  — allows all panels to be closed at once
    // active: false      — starts with all panels collapsed
    $("#campAccordion").accordion({
        collapsible: true,
        active: false
    });

});