function afficherSection(sectionId) {
// masquer l'autre sections
    var sections = document.getElementsByClassName('content-section');
    for (var i = 0; i < sections.length; i++) {
        sections[i].style.display = "none";
    }

    // afficher section spécifique
    var section = document.getElementById(sectionId);
    if (section){
        section.style.display = 'block';
    }
}