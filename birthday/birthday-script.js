window.onload = function () {
    if (window.location.href.includes("keira's-birthday.html")) {
        $("#verifModal").modal("show");
    }
};

function checkVerification() {
    let invitedNames = ["feesa", "maura", "adya", "chilla", "lala", "alika", "ira", "raya", "riri", "alya", "rei", "zada", "nadira", "alya", "kirana", "nara", "opal", "ale", "hasna", "naila", "aureli", "cyndi", "kintan", "dino"];

    var verificationNameValue = document.querySelector("#verificationName").value;

    if (invitedNames.includes(verificationNameValue.toLowerCase())) {
        $("#verifModal").modal("hide");
        window.location.href = "invited-only.html";
    } else {
        $("#verifModal").modal("hide");
        $("#gagalModal").modal("show");
    }
}

if (window.history && window.history.pushState) {
    window.history.pushState("forward", null, "./#");
    window.onpopstate = function () {
        window.location.reload();
    };
}
