window.addEventListener("load", function () {
    // Menjalankan fungsi 5 detik (5000 milidetik) setelah halaman selesai dimuat
    setTimeout(function () {
        const modal = document.getElementById("popUpTwoYear");
        if (modal) {
            // Memastikan modal ada sebelum mencoba menampilkannya
            const bootstrapModal = new bootstrap.Modal(modal);
            bootstrapModal.show();
        }
    }, 0);
});

// ==============
// ==============
// ==============
// ====RUNNING TIME====
// ==============
// ==============

function updateRunningTime() {
    const startDate = new Date("2022-09-09T00:00:00"); // Tanggal mulai
    const now = new Date();
    const timeDiff = now - startDate;

    const seconds = Math.floor(timeDiff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(days / 30.437); // Perkiraan rata-rata hari dalam sebulan
    const years = Math.floor(days / 365.25); // Perkiraan rata-rata hari dalam setahun

    // Pastikan semua perhitungan sisa waktu dibulatkan ke bawah
    const remainingDays = Math.floor(days - years * 365.25);
    const remainingMonths = Math.floor(months - years * 12);
    const remainingWeeks = Math.floor(weeks - years * 52 - Math.floor((remainingMonths / 12) * 4.345));
    const remainingDaysAfterWeeks = Math.floor(remainingDays - remainingWeeks * 7);
    const remainingHours = Math.floor(hours - days * 24);
    const remainingMinutes = Math.floor(minutes - hours * 60);
    const remainingSeconds = Math.floor(seconds - minutes * 60);

    const runningTimeElement = document.getElementById("running-time");
    runningTimeElement.textContent = `${years} Year, ${remainingMonths} Months, ${remainingWeeks} Week, ${remainingDaysAfterWeeks} Day, ${remainingHours} Hour, ${remainingMinutes} Minute, ${remainingSeconds} Seconds`;
}

// Perbarui waktu berjalan setiap detik
setInterval(updateRunningTime, 1000);

// Panggil fungsi sekali saat halaman dimuat
updateRunningTime();
