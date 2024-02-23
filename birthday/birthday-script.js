// window.onload = function () {
//     setTimeout(function () {
//         $("#verifModal").modal("show");
//     }, 2000); // Delay of 2 seconds
// };
window.onload = function () {
    $("#verifModal").modal("show");
};
function checkVerification() {
    var verificationNameValue = document.querySelector("#verificationName").value;
    console.log(123123);
    if (verificationNameValue == "abcde") {
        $("#verifModal").modal("hide");
    } else {
        alert("Please enter the correct verification code");
    }
}
