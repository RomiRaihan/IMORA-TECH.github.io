// Toggle hamburger menu visibility
// Auto-slide every 3 seconds
const hamburger = document.getElementById("hamburger");
navbarNav = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", () => {
  navbarNav.classList.toggle("active");
  hamburger.classList.toggle("showx");
});

const cardBtns = document.querySelectorAll(".card-btn");

cardBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const id = btn.getAttribute("data-id"); // Ambil ID dari atribut data-id
    const produk = document.getElementById(id); // Cari elemen dengan ID tersebut

    // Sembunyikan semua elemen produk terlebih dahulu
    document.querySelectorAll(".produk").forEach((el) => {
      el.style.display = "none";
    });

    // Tampilkan elemen dengan ID sesuai
    if (produk) {
      produk.style.display = "flex";
    }
  });
});
document.querySelectorAll(".produk .close-x").forEach((closeBtn) => {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const parentProduk = closeBtn.closest(".produk"); // Cari elemen produk terdekat
    if (parentProduk) {
      parentProduk.style.display = "none"; // Sembunyikan elemen produk
    }
  });
});
// Tangkap elemen form
const form = document.getElementById("contactForm");

// Tambahkan event listener untuk form submit
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Mencegah submit default

  // Ambil nilai dari input]
  const name = document.getElementById("name").value;
  const contact = document.getElementById("contact").value;
  const message = document.getElementById("message").value;

  // Nomor WhatsApp tujuan (ganti dengan nomor Anda)
  const whatsappNumber = "6288214333695"; // Format internasional tanpa tanda '+'

  // Buat URL untuk WhatsApp
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Nama: ${name}\nKontak: ${contact}\nPesan: ${message}`
  )}`;

  // Arahkan ke URL WhatsApp
  window.open(whatsappURL, "_blank");
});
