window.onload = function () {
    if (window.location.href.includes("keira's-birthday.html")) {
        $("#verifModal").modal("show");

        window.onload = function () {
            var assetsFolder = "assets-bd/";
            // var assets = ["image1.jpg", "image2.jpg", "image3.jpg", "main-bg.png"];
            var assets = ["main-bg.png"];

            assets.forEach(function (asset) {
                var img = new Image();
                img.src = assetsFolder + asset;
            });
        };

        // Rest of the code...
    }
};

window.onload = function () {
    var assetsFolder = "assets-bd/";
    var assets = ["image1.jpg", "image2.jpg", "image3.jpg"];

    assets.forEach(function (asset) {
        var img = new Image();
        img.src = assetsFolder + asset;
    });
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

function confirmeOrder() {
    $("#confirmOrderModal").modal("show");
}

function submitOrder() {
    var inputInsideFormTag = document.querySelector('input[type="submit"]');
    inputInsideFormTag.click();
}
