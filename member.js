function skillsMember() {
    var member = document.getElementById("member");
    var skills = document.getElementById("skills");
    var memberBox = document.getElementById("memberBox");
    var skillsBox = document.getElementById("skillsBox");
    var memberBtn = document.getElementById("memberBtn");
    var skillsBtn = document.getElementById("skillsBtn");
    member.style.backgroundColor = "#fff";
    member.style.color = "#000";
    skills.style.backgroundColor = "#000";
    skills.style.color = "#fff";
    memberBox.style.display = "block";
    skillsBox.style.display = "none";
    memberBtn.style.display = "block";
    skillsBtn.style.display = "none";
}