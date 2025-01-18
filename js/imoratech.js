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
