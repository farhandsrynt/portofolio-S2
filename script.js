/* =========================================================
   PORTOFOLIO PPG SEMESTER 2
   Ubah data refleksi, video, dan galeri di bagian ini.
   ========================================================= */

// 1. DATA REFLEKSI LK 2
// Ganti judul, deskripsi, dan nama PDF sesuai dokumen Anda.
// Simpan PDF di folder pdf/.
// Contoh: file: "pdf/nama-dokumen.pdf"
const reflections = [
  {
    number: "01",
    title: "Refleksi Asesmen",
    subtitle: "Asesmen pembelajaran",
    reflection: [
      { label: "Keterkaitan / Connection", text: "Materi Pembelajaran Mendalam dan Asesmen Lanjut berkaitan dengan peran guru dalam merancang pembelajaran yang mendorong pemahaman mendalam." },
      { label: "Tantangan / Challenge", text: "Asesmen perlu melampaui pengukuran hasil dan membantu mengenali proses serta kebutuhan belajar peserta didik." },
      { label: "Konsep / Concept", text: "Asesmen diagnostik, formatif, dan autentik dapat digunakan untuk melihat kebutuhan, perkembangan, dan penerapan pemahaman." },
      { label: "Perubahan / Change", text: "Saya akan menggunakan hasil asesmen untuk menyesuaikan pembelajaran dan mendukung perkembangan peserta didik." }
    ],
    artifact: "Artefak yang dibahas meliputi pemetaan alur asesmen diagnostik dan rancangan tugas atau asesmen autentik. Artefak ini menunjukkan bagaimana kebutuhan awal peserta didik dapat dikenali dan pemahaman mereka dinilai melalui proses serta hasil belajar.",
    practicalLink: "Dalam pembelajaran Broadcasting dan Perfilman, asesmen diagnostik dapat digunakan untuk memetakan pengetahuan awal dan keterampilan produksi peserta didik. Selama proyek, umpan balik formatif membantu mereka memperbaiki karya, sedangkan rubrik autentik menilai proses kerja, kreativitas, dan hasil akhir.",
    file: "pdf/Refleksi Assesmen.pdf",
    tags: ["4C", "Analisis Artefak", "Kaitan Praktis"]
  },
  {
    number: "02",
    title: "Refleksi Pendidikan Inklusi",
    subtitle: "Pendidikan inklusi",
    reflection: [
      { label: "Keterkaitan / Connection", text: "Pendidikan Inklusi berhubungan dengan tanggung jawab guru untuk mengenali keragaman potensi, kebutuhan, dan hambatan belajar." },
      { label: "Tantangan / Challenge", text: "Peserta didik memiliki kebutuhan yang beragam, sehingga satu pendekatan belum tentu mendukung semua orang." },
      { label: "Konsep / Concept", text: "Guru berperan sebagai fasilitator yang menyesuaikan strategi dan dukungan belajar secara inklusif." },
      { label: "Perubahan / Change", text: "Saya akan mengenali kebutuhan peserta didik sebelum merancang dukungan belajar yang adil dan tidak memberi stigma." }
    ],
    artifact: "Artefak refleksi menyoroti uraian pengalaman belajar dan analisis tentang keragaman kebutuhan peserta didik, termasuk pentingnya mengenali potensi serta hambatan sebelum menentukan dukungan dan strategi pembelajaran.",
    practicalLink: "Saat mengajar Broadcasting dan Perfilman, saya dapat menyediakan pilihan cara belajar dan menunjukkan pemahaman—misalnya melalui demonstrasi, panduan visual, latihan bertahap, atau proyek kelompok dengan pembagian peran yang fleksibel. Saya juga akan memberi pendampingan dan umpan balik sesuai kebutuhan.",
    file: "pdf/Refleksi Pendidikan Inklusi.pdf",
    tags: ["4C", "Analisis Artefak", "Kaitan Praktis"]
  },
  {
    number: "03",
    title: "Refleksi Projek Kepemimpinan",
    subtitle: "Projek kepemimpinan",
    reflection: [
      { label: "Keterkaitan / Connection", text: "Projek Kepemimpinan menghubungkan peran guru dengan kemampuan memimpin kolaborasi dan merancang perubahan yang menjawab kebutuhan peserta didik." },
      { label: "Tantangan / Challenge", text: "Penggunaan AI yang semakin dekat dengan siswa perlu diarahkan agar tidak menimbulkan ketergantungan dan menghambat kemandirian berpikir." },
      { label: "Konsep / Concept", text: "Kepemimpinan kolaboratif dan literasi digital membantu peserta didik menggunakan teknologi secara bijak dan bertanggung jawab." },
      { label: "Perubahan / Change", text: "Saya akan mengarahkan penggunaan AI sebagai alat bantu, bukan pengganti proses berpikir dan berkarya." }
    ],
    artifact: "Artefak projek berupa video Iklan Layanan Masyarakat (ILM) berjudul “Bijak Menggunakan AI”, yang dikembangkan melalui tahapan praproduksi, produksi, pascaproduksi, dan evaluasi secara kolaboratif.",
    practicalLink: "Projek serupa dapat diterapkan di kelas dengan mengajak peserta didik meriset isu, menyusun naskah dan storyboard, lalu memproduksi media kampanye. Prosesnya melatih kepemimpinan, pembagian tanggung jawab, kolaborasi, serta penggunaan AI yang kritis dan beretika.",
    file: "pdf/Refleksi PK.pdf",
    tags: ["4C", "Analisis Artefak", "Kaitan Praktis"]
  },
  {
    number: "04",
    title: "Refleksi Pembelajaran Sosial Emosional",
    subtitle: "Pembelajaran sosial emosional",
    reflection: [
      { label: "Keterkaitan / Connection", text: "Pembelajaran Sosial Emosional mendukung kemampuan guru dan peserta didik mengenali emosi, berempati, membangun hubungan, serta mengambil keputusan." },
      { label: "Tantangan / Challenge", text: "Perbedaan pendapat dalam kerja kelompok perlu dikelola melalui komunikasi yang baik dan sikap saling menghargai." },
      { label: "Konsep / Concept", text: "CASEL mencakup kesadaran diri, pengelolaan diri, kesadaran sosial, keterampilan berelasi, dan pengambilan keputusan yang bertanggung jawab." },
      { label: "Perubahan / Change", text: "Saya akan membangun suasana belajar yang aman, menghargai gagasan, dan terbuka terhadap umpan balik." }
    ],
    artifact: "Artefak yang tercermin dalam refleksi adalah proses kolaborasi penulisan naskah: pengembangan ide, pembagian kerja, pemberian umpan balik, revisi, dan refleksi. Proses ini menunjukkan keterampilan sosial emosional yang digunakan dalam kegiatan produksi.",
    practicalLink: "Dalam pembelajaran Produksi Siaran Program Televisi dan Penulisan Naskah, peserta didik dapat berlatih menyepakati ide, berbagi peran, menyampaikan kritik dengan santun, dan merevisi naskah bersama. Guru dapat memfasilitasi refleksi agar mereka mengenali kontribusi, emosi, serta perkembangan kerja tim.",
    file: "pdf/Reflesksi Pembelajaran Sosial Emosional.pdf",
    tags: ["4C", "Analisis Artefak", "Kaitan Praktis"]
  }
];

// 2. VIDEO MENGAJAR
// Pilih salah satu:
// - YouTube: isi youtubeUrl dengan tautan video YouTube.
// - File lokal: isi localVideo dengan path video, mis. "videos/praktik-mengajar.mp4".
// Jangan isi keduanya sekaligus.
const teachingVideo = {
  youtubeUrl: "",
  localVideo: "videos/videos mengajar.mp4",
  title: "Praktik Mengajar — Semester 2"
};

// 3. DATA GALERI FOTO
// Simpan foto di folder images/ lalu sesuaikan image.
// Untuk foto lokal, gunakan path relatif seperti "images/nama-foto.jpg".
// Untuk sementara, jika image dikosongkan, kartu menampilkan placeholder desain.
const galleryItems = [
  {
    title: "Kegiatan Kolaborasi",
    description: "Dokumentasi kegiatan bersama rekan pendidik atau komunitas belajar.",
    category: "nonmengajar",
    image: "images/foto 1.jpeg",
    icon: "◎"
  },
  {
    title: "Kegiatan Sekolah",
    description: "Partisipasi dalam kegiatan sekolah di luar kegiatan belajar-mengajar.",
    category: "nonmengajar",
    image: "images/foto 2.jpeg",
    icon: "⌂"
  },
  {
    title: "Pengembangan Diri",
    description: "Pelatihan, diskusi, refleksi, atau aktivitas pengembangan profesional.",
    category: "nonmengajar",
    image: "images/foto 3.jpeg",
    icon: "✦"
  },
  {
    title: "Kegiatan Nonmengajar",
    description: "Dokumentasi pengalaman dan aktivitas pendidik di luar kegiatan belajar-mengajar.",
    category: "nonmengajar",
    image: "images/foto 4.jpeg",
    icon: "✦"
  }
];

// ====== RENDER REFLEKSI ======
const reflectionGrid = document.getElementById("reflectionGrid");
const mediaModal = document.getElementById("mediaModal");
const modalContent = document.getElementById("modalContent");
let revealObserver;

function escapeHTML(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function observeRevealElements() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");
  if (!("IntersectionObserver" in window)) {
    elements.forEach(element => element.classList.add("visible"));
    return;
  }
  if (revealObserver) {
    elements.forEach(element => revealObserver.observe(element));
    return;
  }
  revealObserver = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${Math.min(index % 4, 3) * 80}ms`;
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(element => revealObserver.observe(element));
}

function renderReflections() {
  reflectionGrid.innerHTML = reflections.map(item => `
    <article class="reflection-card reveal" data-number="${escapeHTML(item.number)}">
      <div class="card-topline">
        <span class="card-number">REFLEKSI / ${escapeHTML(item.number)}</span>
        <span class="status-chip">LK 2 · SEMESTER 2</span>
      </div>
      <h3>${escapeHTML(item.title)}</h3>
      <p class="reflection-subtitle"><strong>${escapeHTML(item.subtitle)}</strong></p>
      <details class="reflection-expand">
        <summary>Lihat uraian refleksi <span aria-hidden="true">＋</span></summary>
        <div class="reflection-details">
          <div class="reflection-detail reflection-4c"><span>REFLEKSI 4C</span>
            ${item.reflection.map(part => `<p><strong>${escapeHTML(part.label)}:</strong> ${escapeHTML(part.text)}</p>`).join("")}
          </div>
          <div class="reflection-detail"><span>ANALISIS ARTEFAK</span><p>${escapeHTML(item.artifact)}</p></div>
          <div class="reflection-detail"><span>KAITAN PRAKTIS</span><p>${escapeHTML(item.practicalLink)}</p></div>
        </div>
      </details>
      <div class="reflection-tags">${item.tags.map(tag => `<span>${escapeHTML(tag)}</span>`).join("")}</div>
      <div class="card-actions">
        <a href="${escapeHTML(item.file)}">Buka PDF ↗</a>
        <button type="button" data-preview-pdf="${escapeHTML(item.file)}" data-title="${escapeHTML(item.title)}">Pratinjau</button>
      </div>
    </article>
  `).join("");
  observeRevealElements();
}
renderReflections();

// ====== VIDEO MENGAJAR ======
function getYouTubeEmbed(url) {
  try {
    const parsed = new URL(url);
    let id = "";
    if (parsed.hostname.includes("youtu.be")) id = parsed.pathname.slice(1);
    else if (parsed.hostname.includes("youtube.com")) {
      id = parsed.searchParams.get("v") || parsed.pathname.split("/").filter(Boolean).pop();
      if (["shorts", "embed", "live"].includes(id)) id = parsed.pathname.split("/").filter(Boolean).pop();
    }
    return /^[a-zA-Z0-9_-]{11}$/.test(id) ? `https://www.youtube-nocookie.com/embed/${id}` : "";
  } catch {
    return "";
  }
}

function renderTeachingVideo() {
  const frame = document.getElementById("videoFrame");
  const youtubeEmbed = teachingVideo.youtubeUrl ? getYouTubeEmbed(teachingVideo.youtubeUrl) : "";
  if (youtubeEmbed) {
    frame.innerHTML = `<iframe src="${youtubeEmbed}" title="${escapeHTML(teachingVideo.title)}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  } else if (teachingVideo.localVideo) {
    frame.innerHTML = `<video controls preload="metadata" playsinline><source src="${escapeHTML(teachingVideo.localVideo)}" type="video/mp4">Browser Anda tidak mendukung pemutar video ini.</video>`;
  } else {
    frame.innerHTML = `<div class="video-placeholder"><div class="big-play" id="videoSetupButton" role="button" tabindex="0" aria-label="Petunjuk menambahkan video">▶</div><span>VIDEO PRAKTIK MENGAJAR</span><small>Tambahkan tautan YouTube atau file video Anda</small></div>`;
    const setupButton = document.getElementById("videoSetupButton");
    const showHint = () => {
      openModal(`<h2 class="modal-title">Cara menambahkan video</h2>
        <p class="modal-description">Buka file <code>script.js</code>, lalu cari bagian <strong>VIDEO MENGAJAR</strong>.</p>
        <p class="modal-description"><strong>Jika menggunakan YouTube:</strong> masukkan tautan video ke dalam <code>youtubeUrl</code>, misalnya tautan video publik atau tidak publik (unlisted). Kosongkan <code>localVideo</code>.</p>
        <p class="modal-description"><strong>Jika menggunakan video lokal:</strong> simpan file MP4 di folder <code>assets/video/</code>, lalu isi <code>localVideo</code> dengan path file. Kosongkan <code>youtubeUrl</code>.</p>`);
    };
    setupButton.addEventListener("click", showHint);
    setupButton.addEventListener("keydown", event => { if (event.key === "Enter" || event.key === " ") showHint(); });
  }
}
renderTeachingVideo();

// ====== GALERI FOTO + FILTER ======
const galleryGrid = document.getElementById("galleryGrid");

function renderGallery(filter = "semua") {
  const filteredItems = galleryItems.filter(item => filter === "semua" || item.category === filter);
  if (!filteredItems.length) {
    galleryGrid.innerHTML = `<div class="gallery-empty">Belum ada dokumentasi pada kategori ini.</div>`;
    return;
  }
  galleryGrid.innerHTML = filteredItems.map(item => {
    const categoryLabel = item.category === "mengajar" ? "KEGIATAN MENGAJAR" : "KEGIATAN NONMENGAJAR";
    const imageMarkup = item.image
      ? `<img src="${escapeHTML(item.image)}" alt="${escapeHTML(item.title)}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"><div class="gallery-placeholder" style="display:none"><span>${escapeHTML(item.icon || "✦")}</span><small>TAMBAHKAN FOTO</small></div>`
      : `<div class="gallery-placeholder"><span>${escapeHTML(item.icon || "✦")}</span><small>TAMBAHKAN FOTO</small></div>`;
    return `<article class="gallery-card reveal">
      <div class="gallery-image">${imageMarkup}<span class="gallery-category">${categoryLabel}</span></div>
      <div class="gallery-info"><h3>${escapeHTML(item.title)}</h3><p>${escapeHTML(item.description)}</p></div>
    </article>`;
  }).join("");
  observeRevealElements();
}

renderGallery();
document.querySelectorAll(".filter-button").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter-button").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    renderGallery(button.dataset.filter);
  });
});

// ====== MODAL / PRATINJAU PDF & MEDIA ======
function openModal(content) {
  modalContent.innerHTML = content;
  mediaModal.classList.add("open");
  mediaModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  document.getElementById("modalClose").focus();
}
function closeModal() {
  mediaModal.classList.remove("open");
  mediaModal.setAttribute("aria-hidden", "true");
  modalContent.innerHTML = "";
  document.body.style.overflow = "";
}
document.getElementById("modalClose").addEventListener("click", closeModal);
mediaModal.querySelectorAll("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));
document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

document.addEventListener("click", event => {
  const button = event.target.closest("[data-preview-pdf]");
  if (!button) return;
  const file = button.dataset.previewPdf;
  const title = button.dataset.title || "Pratinjau PDF";
  openModal(`<h2 class="modal-title">${escapeHTML(title)}</h2>
    <p class="modal-description">Jika PDF belum muncul, pastikan file sudah berada di folder yang sesuai dan nama filenya sama dengan yang tertulis di script.js.</p>
    <iframe class="modal-embed" src="${escapeHTML(file)}" title="${escapeHTML(title)}"></iframe>
    <div class="modal-actions"><a href="${escapeHTML(file)}">Buka PDF ↗</a></div>`);
});

// ====== NAVIGASI MOBILE ======
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
menuToggle.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
mainNav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  mainNav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

// ====== ANIMASI SAAT SCROLL ======
observeRevealElements();
