/* ============================================================
   SCRIPT.JS — Petualangan E-Portofolio Digital
   Tim MGMP Informatika SMPN 19 Bekasi
   ============================================================ */

/* ============ KONFIGURASI (TUNABLE) ============ */
const CONFIG = {
  SCHOOL_NAME: "SMP Negeri 19 Kota Bekasi",
  GAME_TITLE: "Petualangan E-Portofolio Digital",
  GAME_SUBTITLE: "E-Portofolio & Showcase Digital",
  FOOTER_TEXT: "LKPD Informatika Kelas 9 · E-Portofolio dan Showcase Digital · © 2026 SMP Negeri 19 Kota Bekasi",
  DEFAULT_LANGUAGE: "id",
  ENABLE_LANGUAGE_SWITCHER: true,
  ENABLE_TIMER: true,
  TIMER_DURATION: 90,
  ENABLE_SOUND: true,
  ENABLE_CONFETTI: true,
  ENABLE_HINTS: true,
  MAX_HINTS_PER_LEVEL: 1,
  STAR_THRESHOLD_3: 90,
  STAR_THRESHOLD_2: 70,
  STORAGE_KEY: "eportfolio_game_v1",
  AUTO_SAVE: true,
  ENABLE_DARK_MODE: true,
  ENABLE_PRINT_REPORT: true,
  ENABLE_CERTIFICATE: true,
  TEACHER_MODE_HOTKEY: "Ctrl+Shift+T",
  WHATSAPP_NUMBER: "",
  CLASSROOM_LINK: ""
};

/* ============ DATA SOAL (PERSIS DARI MATERI) ============ */
const GAME_DATA = {
  1: {
    level: 1,
    type: "multiple-choice",
    icon: "🧭",
    name_id: "Mengenal E-Portofolio",
    name_en: "Knowing E-Portfolio",
    questions: [
      {
        id: 1,
        q_id: "Apa yang dimaksud dengan E-Portofolio?",
        q_en: "What is an E-Portfolio?",
        options_id: ["Email untuk mengirim tugas", "Kumpulan karya digital, dokumentasi proses, dan refleksi belajar", "Aplikasi untuk bermain game", "Media sosial untuk chatting"],
        options_en: ["Email for sending assignments", "A collection of digital work, process documentation, and learning reflections", "An app for playing games", "A social media for chatting"],
        answer: 1,
        explanation_id: "E-Portofolio adalah kumpulan karya, dokumentasi proses belajar, dan refleksi yang disimpan dalam format digital dan dapat diakses melalui internet.",
        explanation_en: "An E-Portfolio is a collection of work, learning process documentation, and reflections stored in digital format and accessible via the internet."
      },
      {
        id: 2,
        q_id: "Apa perbedaan utama antara folder biasa dan e-portofolio?",
        q_en: "What is the main difference between a regular folder and an e-portfolio?",
        options_id: ["Folder biasa lebih besar ukurannya", "E-portofolio menyertakan refleksi dan dapat diakses online", "Folder biasa tidak bisa menyimpan gambar", "E-portofolio hanya bisa dibuka di HP"],
        options_en: ["Regular folders are larger in size", "E-portfolios include reflections and can be accessed online", "Regular folders cannot store images", "E-portfolios can only be opened on phones"],
        answer: 1,
        explanation_id: "E-portofolio tidak hanya menyimpan file, tetapi juga dokumentasi proses, refleksi, dan dapat dibagikan melalui internet.",
        explanation_en: "An e-portfolio not only stores files but also process documentation, reflections, and can be shared via the internet."
      },
      {
        id: 3,
        q_id: "Manakah yang BUKAN komponen e-portofolio?",
        q_en: "Which is NOT a component of an e-portfolio?",
        options_id: ["Identitas Diri", "Refleksi", "Daftar Belanja", "Hasil Karya"],
        options_en: ["Personal Identity", "Reflection", "Shopping List", "Work Results"],
        answer: 2,
        explanation_id: "Komponen e-portofolio meliputi Identitas Diri, Dokumentasi Proses, Hasil Karya, Refleksi, dan Target & Rencana.",
        explanation_en: "E-portfolio components include Personal Identity, Process Documentation, Work Results, Reflection, and Target & Plan."
      },
      {
        id: 4,
        q_id: "Mengapa e-portofolio penting bagi pelajar?",
        q_en: "Why is an e-portfolio important for students?",
        options_id: ["Untuk mendapatkan nilai tinggi saja", "Untuk mendokumentasikan perjalanan belajar dan melatih refleksi diri", "Untuk pamer kepada teman", "Untuk mengumpulkan banyak file"],
        options_en: ["Only to get high grades", "To document the learning journey and practice self-reflection", "To show off to friends", "To collect many files"],
        answer: 1,
        explanation_id: "E-portofolio membantu murid mendokumentasikan perjalanan belajar, merefleksikan perkembangan diri, dan mengomunikasikan hasil karya.",
        explanation_en: "E-portfolios help students document their learning journey, reflect on personal growth, and communicate their work."
      },
      {
        id: 5,
        q_id: "Analogi yang tepat untuk e-portofolio adalah...",
        q_en: "The right analogy for an e-portfolio is...",
        options_id: ["Lemari pakaian", "Album foto digital yang berisi cerita di balik setiap foto", "Kotak sampah digital", "Buku telepon"],
        options_en: ["A wardrobe", "A digital photo album with stories behind each photo", "A digital trash can", "A phone book"],
        answer: 1,
        explanation_id: "E-portofolio seperti album foto digital yang tidak hanya berisi foto, tetapi juga cerita, pelajaran, dan perasaan di baliknya.",
        explanation_en: "An e-portfolio is like a digital photo album that not only contains photos but also stories, lessons, and feelings behind them."
      }
    ]
  },
  2: {
    level: 2,
    type: "drag-drop-ordering",
    icon: "🧱",
    name_id: "Membangun Struktur",
    name_en: "Building Structure",
    instruction_id: "Susun 5 komponen e-portofolio berikut ke urutan yang benar!",
    instruction_en: "Arrange the 5 e-portfolio components in the correct order!",
    correctOrder: [
      { id: "identitas", label_id: "Identitas Diri", label_en: "Personal Identity" },
      { id: "dokumentasi", label_id: "Dokumentasi Proses", label_en: "Process Documentation" },
      { id: "hasil", label_id: "Hasil Karya", label_en: "Work Results" },
      { id: "refleksi", label_id: "Refleksi", label_en: "Reflection" },
      { id: "target", label_id: "Target & Rencana", label_en: "Target & Plan" }
    ]
  },
  3: {
    level: 3,
    type: "matching",
    icon: "🎨",
    name_id: "Memilih Platform",
    name_en: "Choosing Platform",
    instruction_id: "Jodohkan platform dengan fungsinya yang tepat!",
    instruction_en: "Match the platform with its correct function!",
    pairs: [
      { left_id: "Canva", left_en: "Canva", right_id: "Membuat desain grafis", right_en: "Making graphic designs" },
      { left_id: "Google Sites", left_en: "Google Sites", right_id: "Membuat website tanpa coding", right_en: "Building websites without coding" },
      { left_id: "Google Drive", left_en: "Google Drive", right_id: "Menyimpan file di cloud", right_en: "Storing files in the cloud" },
      { left_id: "Blogger", left_en: "Blogger", right_id: "Membuat blog sederhana", right_en: "Creating simple blogs" },
      { left_id: "OneDrive", left_en: "OneDrive", right_id: "Cloud terintegrasi Microsoft Office", right_en: "Microsoft Office-integrated cloud" },
      { left_id: "iCloud", left_en: "iCloud", right_id: "Cloud untuk pengguna Apple", right_en: "Cloud for Apple users" }
    ]
  },
  4: {
    level: 4,
    type: "file-sorting",
    icon: "☁️",
    name_id: "Menyimpan di Cloud",
    name_en: "Storing in Cloud",
    instruction_id: "Seret file ke folder cloud yang tepat!",
    instruction_en: "Drag the file to the correct cloud folder!",
    files: [
      { id: "foto_profil.jpg", correctFolder: "01_Identitas" },
      { id: "refleksi_minggu1.docx", correctFolder: "03_Refleksi" },
      { id: "proyek_scratch.sb3", correctFolder: "02_Karya_Informatika" },
      { id: "presentasi_canva.pdf", correctFolder: "02_Karya_Informatika" },
      { id: "screenshot_hasil.png", correctFolder: "02_Karya_Informatika" },
      { id: "catatan_revisi.txt", correctFolder: "04_Dokumentasi_Proses" }
    ],
    folders: ["01_Identitas", "02_Karya_Informatika", "03_Refleksi", "04_Dokumentasi_Proses"]
  },
  5: {
    level: 5,
    type: "sorting",
    icon: "🔒",
    name_id: "Cek Keamanan Digital",
    name_en: "Digital Safety Check",
    instruction_id: "Sortir pernyataan berikut ke AMAN atau BERBAHAYA!",
    instruction_en: "Sort the following statements into SAFE or DANGEROUS!",
    items: [
      { text_id: "Membagikan alamat rumah di portofolio publik", text_en: "Sharing home address on a public portfolio", correct: "dangerous" },
      { text_id: "Menampilkan nama lengkap dan kelas", text_en: "Displaying full name and class", correct: "safe" },
      { text_id: "Mengunggah foto teman tanpa izin", text_en: "Uploading a friend's photo without permission", correct: "dangerous" },
      { text_id: "Menggunakan kata sandi kuat", text_en: "Using a strong password", correct: "safe" },
      { text_id: "Mencantumkan atribusi karya orang lain", text_en: "Citing attribution for others' work", correct: "safe" },
      { text_id: "Membagikan nomor telepon", text_en: "Sharing phone number", correct: "dangerous" },
      { text_id: "Menulis komentar sopan", text_en: "Writing polite comments", correct: "safe" },
      { text_id: "Menyalin karya orang lain tanpa sumber", text_en: "Copying others' work without source", correct: "dangerous" },
      { text_id: "Meminta izin orang tua sebelum publikasi", text_en: "Asking parents' permission before publishing", correct: "safe" },
      { text_id: "Mengunggah foto yang memalukan", text_en: "Uploading embarrassing photos", correct: "dangerous" }
    ]
  },
  6: {
    level: 6,
    type: "mixed-quiz",
    icon: "🏆",
    name_id: "Showcase Final Quiz",
    name_en: "Showcase Final Quiz",
    questions: [
      {
        id: 1, type: "multiple-choice",
        q_id: "Kasus: Rani menyimpan video pembelajaran hanya di HP. HP-nya rusak dan video hilang. Apa pelajaran yang bisa diambil?",
        q_en: "Case: Rani stored learning videos only on her phone. Her phone broke and the videos were lost. What lesson can be learned?",
        options_id: ["Jangan pernah membuat video", "Simpan file di cloud dan buat e-portofolio sebagai cadangan", "Beli HP baru setiap tahun", "Jangan peduli dengan karya sendiri"],
        options_en: ["Never make videos", "Store files in the cloud and create an e-portfolio as a backup", "Buy a new phone every year", "Don't care about your own work"],
        answer: 1,
        explanation_id: "Menyimpan file di cloud dan membuat e-portofolio mencegah kehilangan karya.",
        explanation_en: "Storing files in the cloud and creating an e-portfolio prevents losing work."
      },
      {
        id: 2, type: "multiple-choice",
        q_id: "Informasi yang TIDAK BOLEH dibagikan di e-portofolio publik adalah...",
        q_en: "Information that MUST NOT be shared on a public e-portfolio is...",
        options_id: ["Nama depan", "Hobi", "Alamat rumah dan nomor telepon", "Cita-cita"],
        options_en: ["First name", "Hobbies", "Home address and phone number", "Dreams"],
        answer: 2,
        explanation_id: "Informasi sensitif seperti alamat rumah dan nomor telepon tidak boleh dibagikan untuk keamanan.",
        explanation_en: "Sensitive information like home address and phone number must not be shared for safety."
      },
      {
        id: 3, type: "true-false",
        q_id: "Canva adalah platform desain grafis online yang menyediakan template siap pakai.",
        q_en: "Canva is an online graphic design platform that provides ready-to-use templates.",
        answer: true,
        explanation_id: "Benar. Canva adalah platform desain grafis online dengan banyak template siap pakai.",
        explanation_en: "True. Canva is an online graphic design platform with many ready-to-use templates."
      },
      {
        id: 4, type: "true-false",
        q_id: "Cloud adalah lemari penyimpanan di langit yang bisa diakses kapan saja dan di mana saja selama ada internet.",
        q_en: "Cloud is a storage cabinet in the sky that can be accessed anytime and anywhere as long as there is internet.",
        answer: true,
        explanation_id: "Benar. Cloud (Komputasi Awan) menyimpan data di server internet, dapat diakses dari mana saja.",
        explanation_en: "True. Cloud (Cloud Computing) stores data on internet servers, accessible from anywhere."
      },
      {
        id: 5, type: "case-study",
        q_id: "Kasus: Dina menuliskan alamat rumah, nomor telepon, dan nama lengkap orang tuanya di halaman 'Tentang Saya' e-portofolionya. Apa yang salah?",
        q_en: "Case: Dina wrote her home address, phone number, and parents' full names on the 'About Me' page of her e-portfolio. What is wrong?",
        options_id: ["Tidak ada yang salah, itu bagus", "Dina membagikan informasi pribadi sensitif yang bisa disalahgunakan", "Dina seharusnya menambahkan nomor rekening", "Dina seharusnya menambahkan foto KTP"],
        options_en: ["Nothing wrong, that's great", "Dina shared sensitive personal information that could be misused", "Dina should add a bank account number", "Dina should add an ID card photo"],
        answer: 1,
        explanation_id: "Informasi pribadi sensitif tidak boleh dipublikasikan. Dina seharusnya hanya menampilkan nama depan, kelas, sekolah, hobi, dan cita-cita.",
        explanation_en: "Sensitive personal information must not be published. Dina should only display first name, class, school, hobbies, and dreams."
      }
    ]
  }
};

/* ============ TRANSLATIONS (i18n) ============ */
const translations = {
  id: {
    headerTitle: "Petualangan E-Portofolio Digital",
    headerSubtitle: "E-Portofolio & Showcase Digital",
    score: "Skor",
    splashTitle: "PETUALANGAN E-PORTOFOLIO DIGITAL",
    splashSubtitle: "E-Portofolio & Showcase Digital — LKPD Interaktif Kelas 9",
    askName: "Siapa namamu? / What's your name?",
    startAdventure: "🚀 MULAI PETUALANGAN / START ADVENTURE",
    howToPlay: "📖 Cara Bermain / How to Play",
    close: "Tutup",
    howToPlayTitle: "📖 Cara Bermain / How to Play",
    howToPlay1: "Selesaikan 6 level secara berurutan.",
    howToPlay2: "Setiap level punya tipe permainan berbeda: quiz, drag & drop, matching, simulasi, sorting.",
    howToPlay3: "Kumpulkan bintang (1–3) berdasarkan skor di setiap level.",
    howToPlay4: "Gunakan tombol 💡 untuk bantuan jika kesulitan.",
    howToPlay5: "Ganti bahasa dengan tombol 🇮🇩 ID / 🇬🇧 EN di kanan atas.",
    howToPlay6: "Progres tersimpan otomatis, aman jika halaman di-refresh.",
    mapTitle: "🗺️ Peta Petualangan",
    mapDesc: "Selesaikan setiap level untuk membuka level berikutnya!",
    backToMap: "🗺️ Kembali ke Peta / Back to Map",
    resetProgress: "🔄 Reset Progres / Reset Progress",
    locked: "Terkunci",
    start: "Mulai",
    next: "Lanjut",
    finish: "Selesai",
    correct: "Benar!",
    wrong: "Salah!",
    yourScore: "Skormu",
    levelComplete: "Level Selesai!",
    nextLevel: "Lanjut ke Level Berikutnya",
    backToMapBtn: "Kembali ke Peta",
    resultTitle: "🎉 Hasil Akhir",
    exitTicketTitle: "📋 Exit Ticket / Refleksi",
    exitQ1: "1. Apa 1 hal baru yang kamu pelajari hari ini?",
    exitQ2: "2. Apa yang masih membingungkan?",
    exitQ3: "3. Target belajarmu selanjutnya?",
    downloadCert: "📜 Unduh Sertifikat (PNG)",
    downloadReport: "📄 Unduh Laporan",
    shareResult: "📤 Bagikan ke Guru",
    playAgain: "🔄 Main Lagi",
    totalScore: "Total Skor",
    totalStars: "Total Bintang",
    levelsDone: "Level Selesai",
    footerText: "LKPD Informatika Kelas 9 · E-Portofolio dan Showcase Digital · © 2026 SMP Negeri 19 Kota Bekasi",
    hint: "Petunjuk:",
    hintLevel1: "Baca setiap pilihan dengan teliti. Pilih jawaban yang paling sesuai dengan definisi e-portofolio.",
    hintLevel2: "Urutan logis: mulai dari identitas, lalu proses, hasil, refleksi, dan diakhiri target.",
    hintLevel3: "Canva = desain. Google Sites = website. Drive = simpan. Blogger = blog. OneDrive/iCloud = cloud.",
    hintLevel4: "Perhatikan ekstensi file: .jpg foto, .docx refleksi, .sb3/.pdf/.png karya, .txt dokumentasi.",
    hintLevel5: "Data pribadi sensitif (alamat, telepon, foto memalukan) = BERBAHAYA. Sisanya = AMAN.",
    hintLevel6: "Baca kasus dengan cermat. Fokus pada keamanan dan manfaat e-portofolio.",
    resetConfirm: "Yakin ingin mereset semua progres? / Are you sure you want to reset all progress?",
    nameRequired: "Tulis namamu dulu ya! / Please enter your name first!",
    answer: "Jawab",
    safe: "AMAN",
    dangerous: "BERBAHAYA",
    timeUp: "⏰ Waktu habis!",
    placeholderName: "Tulis namamu...",
    feedbackCorrect: "✓ Benar!",
    feedbackWrong: "✗ Salah",
    explanation: "Penjelasan",
    correctAnswer: "Jawaban benar"
  },
  en: {
    headerTitle: "Digital E-Portfolio Adventure",
    headerSubtitle: "E-Portfolio & Digital Showcase",
    score: "Score",
    splashTitle: "DIGITAL E-PORTFOLIO ADVENTURE",
    splashSubtitle: "E-Portfolio & Digital Showcase — Grade 9 Interactive Worksheet",
    askName: "What's your name? / Siapa namamu?",
    startAdventure: "🚀 START ADVENTURE / MULAI PETUALANGAN",
    howToPlay: "📖 How to Play / Cara Bermain",
    close: "Close",
    howToPlayTitle: "📖 How to Play / Cara Bermain",
    howToPlay1: "Complete 6 levels in order.",
    howToPlay2: "Each level has a different game type: quiz, drag & drop, matching, simulation, sorting.",
    howToPlay3: "Collect stars (1–3) based on your score per level.",
    howToPlay4: "Use the 💡 button for hints when stuck.",
    howToPlay5: "Switch language with the 🇮🇩 ID / 🇬🇧 EN button in the top right.",
    howToPlay6: "Progress is saved automatically, safe if the page is refreshed.",
    mapTitle: "🗺️ Adventure Map",
    mapDesc: "Complete each level to unlock the next one!",
    backToMap: "🗺️ Back to Map / Kembali ke Peta",
    resetProgress: "🔄 Reset Progress / Reset Progres",
    locked: "Locked",
    start: "Start",
    next: "Next",
    finish: "Finish",
    correct: "Correct!",
    wrong: "Wrong!",
    yourScore: "Your Score",
    levelComplete: "Level Complete!",
    nextLevel: "Next Level",
    backToMapBtn: "Back to Map",
    resultTitle: "🎉 Final Results",
    exitTicketTitle: "📋 Exit Ticket / Reflection",
    exitQ1: "1. What new thing did you learn today?",
    exitQ2: "2. What is still confusing?",
    exitQ3: "3. What is your next learning target?",
    downloadCert: "📜 Download Certificate (PNG)",
    downloadReport: "📄 Download Report",
    shareResult: "📤 Share to Teacher",
    playAgain: "🔄 Play Again",
    totalScore: "Total Score",
    totalStars: "Total Stars",
    levelsDone: "Levels Completed",
    footerText: "LKPD Informatika Kelas 9 · E-Portofolio dan Showcase Digital · © 2026 SMP Negeri 19 Kota Bekasi",
    hint: "Hint:",
    hintLevel1: "Read each option carefully. Choose the answer that best matches the definition of e-portfolio.",
    hintLevel2: "Logical order: start from identity, then process, results, reflection, and end with target.",
    hintLevel3: "Canva = design. Google Sites = website. Drive = storage. Blogger = blog. OneDrive/iCloud = cloud.",
    hintLevel4: "Check file extensions: .jpg photo, .docx reflection, .sb3/.pdf/.png work, .txt documentation.",
    hintLevel5: "Sensitive personal data (address, phone, embarrassing photos) = DANGEROUS. Others = SAFE.",
    hintLevel6: "Read the case carefully. Focus on safety and e-portfolio benefits.",
    resetConfirm: "Are you sure you want to reset all progress? / Yakin ingin mereset semua progres?",
    nameRequired: "Please enter your name first! / Tulis namamu dulu ya!",
    answer: "Answer",
    safe: "SAFE",
    dangerous: "DANGEROUS",
    timeUp: "⏰ Time's up!",
    placeholderName: "Type your name...",
    feedbackCorrect: "✓ Correct!",
    feedbackWrong: "✗ Wrong",
    explanation: "Explanation",
    correctAnswer: "Correct answer"
  }
};

/* ============ STATE ============ */
let state = {
  lang: CONFIG.DEFAULT_LANGUAGE,
  playerName: "",
  soundOn: true,
  currentLevel: null,
  levelScores: {},
  levelStars: {},
  completedLevels: [],
  totalScore: 0,
  hintUsed: {},
  level1Index: 0,
  level1Correct: 0,
  level6Index: 0,
  level6Correct: 0,
  level6Timer: null,
  level6TimeLeft: CONFIG.TIMER_DURATION
};

/* ============ UTIL ============ */
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);
const t = (key) => (translations[state.lang] && translations[state.lang][key]) || key;

function showToast(msg, type = "") {
  const el = $("#toast");
  el.textContent = msg;
  el.className = "toast " + type;
  clearTimeout(el._timeout);
  el._timeout = setTimeout(() => el.classList.add("hidden"), 2200);
}

/* ============ AUDIO (Web Audio API) ============ */
let audioCtx = null;
function playSound(type) {
  if (!state.soundOn || !CONFIG.ENABLE_SOUND) return;
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    if (type === "correct") {
      osc.frequency.setValueAtTime(523, now);
      osc.frequency.setValueAtTime(659, now + 0.08);
      osc.frequency.setValueAtTime(784, now + 0.16);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now); osc.stop(now + 0.35);
    } else if (type === "wrong") {
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.3);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);
      osc.start(now); osc.stop(now + 0.3);
    } else {
      osc.frequency.setValueAtTime(440, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now); osc.stop(now + 0.1);
    }
  } catch (e) { /* ignore */ }
}

/* ============ CONFETTI ============ */
function showConfetti() {
  if (!CONFIG.ENABLE_CONFETTI) return;
  const layer = $("#confettiLayer");
  const colors = ["#2563EB", "#F59E0B", "#10B981", "#EF4444", "#8B5CF6", "#EC4899"];
  for (let i = 0; i < 60; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "%";
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.animationDelay = (Math.random() * 0.5) + "s";
    piece.style.animationDuration = (2 + Math.random() * 2) + "s";
    layer.appendChild(piece);
    setTimeout(() => piece.remove(), 5000);
  }
}

/* ============ LOCALSTORAGE ============ */
function saveProgress() {
  if (!CONFIG.AUTO_SAVE) return;
  const data = {
    lang: state.lang,
    playerName: state.playerName,
    soundOn: state.soundOn,
    levelScores: state.levelScores,
    levelStars: state.levelStars,
    completedLevels: state.completedLevels,
    totalScore: state.totalScore,
    exit1: $("#exit1") ? $("#exit1").value : "",
    exit2: $("#exit2") ? $("#exit2").value : "",
    exit3: $("#exit3") ? $("#exit3").value : ""
  };
  try { localStorage.setItem(CONFIG.STORAGE_KEY, JSON.stringify(data)); } catch (e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(CONFIG.STORAGE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    state.lang = data.lang || CONFIG.DEFAULT_LANGUAGE;
    state.playerName = data.playerName || "";
    state.soundOn = data.soundOn !== undefined ? data.soundOn : true;
    state.levelScores = data.levelScores || {};
    state.levelStars = data.levelStars || {};
    state.completedLevels = data.completedLevels || [];
    state.totalScore = data.totalScore || 0;
  } catch (e) {}
}

function resetProgress() {
  if (!confirm(t("resetConfirm"))) return;
  try { localStorage.removeItem(CONFIG.STORAGE_KEY); } catch (e) {}
  state.levelScores = {};
  state.levelStars = {};
  state.completedLevels = [];
  state.totalScore = 0;
  state.playerName = "";
  state.currentLevel = null;
  updateHeaderScore();
  renderMap();
  showScreen("splash");
  showToast("Progres direset / Progress reset", "success");
}

/* ============ I18N ============ */
function applyTranslations() {
  $$("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const val = t(key);
    if (val) el.textContent = val;
  });
  $("#langToggle").textContent = state.lang === "id" ? "🇮🇩 ID" : "🇬🇧 EN";
  $("#soundToggle").textContent = state.soundOn ? "🔊" : "🔇";
  const nameInput = $("#playerName");
  if (nameInput) nameInput.placeholder = t("placeholderName");
  document.documentElement.lang = state.lang;
}

function switchLanguage() {
  state.lang = state.lang === "id" ? "en" : "id";
  applyTranslations();
  saveProgress();
  // Re-render level aktif jika sedang bermain
  if (state.currentLevel && $("#screen-level").classList.contains("active")) {
    openLevel(state.currentLevel);
  }
  renderMap();
}

/* ============ SCREEN NAVIGATION ============ */
function showScreen(name) {
  $$(".screen").forEach(s => s.classList.remove("active"));
  const target = document.querySelector(`[data-screen="${name}"]`);
  if (target) target.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============ HEADER SCORE ============ */
function updateHeaderScore() {
  $("#headerScore").textContent = state.totalScore;
}

/* ============ MAP RENDER ============ */
function renderMap() {
  const map = $("#levelMap");
  map.innerHTML = "";
  for (let i = 1; i <= 6; i++) {
    const data = GAME_DATA[i];
    const done = state.completedLevels.includes(i);
    const unlocked = i === 1 || state.completedLevels.includes(i - 1) || done;
    const stars = state.levelStars[i] || 0;
    const isCurrent = unlocked && !done;
    const card = document.createElement("div");
    card.className = "level-card" + (done ? " completed" : "") + (!unlocked ? " locked" : "") + (isCurrent ? " current" : "");
    card.innerHTML = `
      ${!unlocked ? `<div class="lock-badge">🔒 ${t("locked")}</div>` : ""}
      <span class="level-icon">${data.icon}</span>
      <div class="level-number">Level ${i}</div>
      <div class="level-name">${state.lang === "id" ? data.name_id : data.name_en}</div>
      <div class="level-stars">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
    `;
    if (unlocked) {
      card.addEventListener("click", () => { playSound("click"); openLevel(i); });
    }
    map.appendChild(card);
  }
  const pct = Math.round((state.completedLevels.length / 6) * 100);
  $("#progressFill").style.width = pct + "%";
  $("#progressText").textContent = pct + "%";
}

/* ============ OPEN LEVEL ============ */
function openLevel(level) {
  state.currentLevel = level;
  state.hintUsed[level] = false;
  const data = GAME_DATA[level];
  $("#levelTitle").textContent = `Level ${level} — ${state.lang === "id" ? data.name_id : data.name_en}`;
  $("#levelProgress").textContent = `${level}/6`;
  $("#btnHint").style.display = CONFIG.ENABLE_HINTS ? "inline-flex" : "none";
  showScreen("level");
  const body = $("#levelBody");
  body.innerHTML = "";
  if (data.type === "multiple-choice") initLevel1(body, data);
  else if (data.type === "drag-drop-ordering") initLevel2(body, data);
  else if (data.type === "matching") initLevel3(body, data);
  else if (data.type === "file-sorting") initLevel4(body, data);
  else if (data.type === "sorting") initLevel5(body, data);
  else if (data.type === "mixed-quiz") initLevel6(body, data);
}

/* ============ HINT ============ */
$("#btnHint").addEventListener("click", () => {
  const lvl = state.currentLevel;
  if (!lvl) return;
  if (state.hintUsed[lvl]) {
    showToast("Hint sudah dipakai / Hint already used");
    return;
  }
  state.hintUsed[lvl] = true;
  showToast(t("hint") + " " + t("hintLevel" + lvl), "success");
});

/* ============ LEVEL 1 — MULTIPLE CHOICE ============ */
function initLevel1(container, data) {
  state.level1Index = 0;
  state.level1Correct = 0;
  renderLevel1Question(container, data);
}

function renderLevel1Question(container, data) {
  const q = data.questions[state.level1Index];
  const total = data.questions.length;
  if (state.level1Index >= total) {
    finishLevel(1, state.level1Correct, total);
    return;
  }
  container.innerHTML = `
    <div class="question-box">
      <div class="question-number">${t("answer")} ${state.level1Index + 1} / ${total}</div>
      <div class="question-text">${state.lang === "id" ? q.q_id : q.q_en}</div>
    </div>
    <div class="options-list" id="optionsList"></div>
    <div id="feedbackArea"></div>
  `;
  const list = $("#optionsList");
  const opts = state.lang === "id" ? q.options_id : q.options_en;
  opts.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
    btn.addEventListener("click", () => {
      const allBtns = list.querySelectorAll(".option-btn");
      allBtns.forEach(b => b.disabled = true);
      const isCorrect = i === q.answer;
      if (isCorrect) {
        btn.classList.add("correct");
        state.level1Correct++;
        playSound("correct");
      } else {
        btn.classList.add("wrong");
        allBtns[q.answer].classList.add("correct");
        playSound("wrong");
      }
      const fb = $("#feedbackArea");
      fb.innerHTML = `
        <div class="feedback-box ${isCorrect ? "correct" : "wrong"}">
          <strong>${isCorrect ? t("feedbackCorrect") : t("feedbackWrong")}</strong><br>
          ${state.lang === "id" ? q.explanation_id : q.explanation_en}
        </div>
        <button class="btn btn-primary" id="btnNextQ" style="margin-top:14px;">
          ${state.level1Index + 1 < total ? t("next") : t("finish")}
        </button>
      `;
      $("#btnNextQ").addEventListener("click", () => {
        state.level1Index++;
        renderLevel1Question(container, data);
      });
    });
    list.appendChild(btn);
  });
}

/* ============ LEVEL 2 — DRAG & DROP ORDERING ============ */
function initLevel2(container, data) {
  const correct = data.correctOrder.map(x => x.id);
  const shuffled = [...data.correctOrder].sort(() => Math.random() - 0.5);
  container.innerHTML = `
    <p class="section-desc">${state.lang === "id" ? data.instruction_id : data.instruction_en}</p>
    <div class="dnd-container">
      <div class="dnd-pool" id="dndPool">
        ${shuffled.map(item => `
          <div class="dnd-item" draggable="true" data-id="${item.id}">
            ${state.lang === "id" ? item.label_id : item.label_en}
          </div>
        `).join("")}
      </div>
      <div class="dnd-slots" id="dndSlots">
        ${[1,2,3,4,5].map(i => `
          <div class="dnd-slot" data-slot="${i - 1}">
            <span class="slot-number">${i}</span>
            <span class="slot-content"></span>
          </div>
        `).join("")}
      </div>
      <button class="btn btn-primary" id="btnCheckLevel2">${t("finish")}</button>
    </div>
  `;
  setupDnD("#dndPool", "#dndSlots", "dnd-item", "dnd-slot", () => {
    checkLevel2(correct);
  });
}

function checkLevel2(correct) {
  const slots = $$("#dndSlots .dnd-slot");
  let benar = 0;
  slots.forEach((slot, i) => {
    const item = slot.querySelector(".dnd-item");
    if (item && item.dataset.id === correct[i]) {
      slot.classList.add("filled");
      item.classList.add("correct");
      benar++;
    } else if (item) {
      item.classList.add("wrong");
    }
  });
  if (benar === 5) {
    playSound("correct");
    showConfetti();
    setTimeout(() => finishLevel(2, benar, 5), 900);
  } else {
    playSound("wrong");
    showToast(`${benar}/5 benar / correct`, "error");
    setTimeout(() => openLevel(2), 1500);
  }
}

/* ============ GENERIC DRAG & DROP (support tap untuk mobile) ============ */
function setupDnD(poolSel, slotSel, itemClass, slotClass, onCheck) {
  const pool = $(poolSel);
  const slots = $(slotSel);
  let selected = null;

  // Desktop drag events
  pool.querySelectorAll("." + itemClass).forEach(item => {
    item.addEventListener("dragstart", e => {
      selected = item;
      e.dataTransfer.setData("text/plain", "");
    });
  });

  slots.querySelectorAll("." + slotClass).forEach(slot => {
    slot.addEventListener("dragover", e => {
      e.preventDefault();
      slot.classList.add("over");
    });
    slot.addEventListener("dragleave", () => slot.classList.remove("over"));
    slot.addEventListener("drop", e => {
      e.preventDefault();
      slot.classList.remove("over");
      if (!selected) return;
      // jika slot sudah berisi, kembalikan ke pool
      const existing = slot.querySelector("." + itemClass);
      if (existing) pool.appendChild(existing);
      slot.querySelector(".slot-content").appendChild(selected);
      selected.classList.add("placed");
      selected = null;
    });
  });

  // Tap-to-select (mobile & accessibility)
  pool.querySelectorAll("." + itemClass).forEach(item => {
    item.addEventListener("click", () => {
      if (item.classList.contains("placed")) return;
      pool.querySelectorAll("." + itemClass).forEach(x => x.classList.remove("selected"));
      item.classList.add("selected");
      selected = item;
    });
  });
  slots.querySelectorAll("." + slotClass).forEach(slot => {
    slot.addEventListener("click", () => {
      if (!selected) return;
      const existing = slot.querySelector("." + itemClass);
      if (existing) pool.appendChild(existing);
      slot.querySelector(".slot-content").appendChild(selected);
      selected.classList.add("placed");
      selected.classList.remove("selected");
      selected = null;
    });
  });

  const btn = $("#btnCheckLevel2") || $("#btnCheckLevel4");
  if (btn) btn.addEventListener("click", onCheck);
}

/* ============ LEVEL 3 — MATCHING ============ */
function initLevel3(container, data) {
  const pairs = data.pairs;
  const leftItems = pairs.map((p, i) => ({ i, text: state.lang === "id" ? p.left_id : p.left_en }));
  const rightItems = pairs.map((p, i) => ({ i, text: state.lang === "id" ? p.right_id : p.right_en }))
                        .sort(() => Math.random() - 0.5);
  container.innerHTML = `
    <p class="section-desc">${state.lang === "id" ? data.instruction_id : data.instruction_en}</p>
    <div class="match-grid">
      <div class="match-col" id="matchLeft">
        ${leftItems.map(item => `<button class="match-item" data-idx="${item.i}" data-side="left">${item.text}</button>`).join("")}
      </div>
      <div class="match-col" id="matchRight">
        ${rightItems.map(item => `<button class="match-item" data-idx="${item.i}" data-side="right">${item.text}</button>`).join("")}
      </div>
    </div>
  `;
  let selectedLeft = null;
  let matched = 0;
  const total = pairs.length;

  $$(".match-item").forEach(el => {
    el.addEventListener("click", () => {
      if (el.classList.contains("matched")) return;
      if (el.dataset.side === "left") {
        $$("#matchLeft .match-item").forEach(x => x.classList.remove("selected"));
        el.classList.add("selected");
        selectedLeft = el;
      } else {
        if (!selectedLeft) return;
        if (selectedLeft.dataset.idx === el.dataset.idx) {
          selectedLeft.classList.remove("selected");
          selectedLeft.classList.add("matched");
          el.classList.add("matched");
          matched++;
          playSound("correct");
          selectedLeft = null;
          if (matched === total) {
            showConfetti();
            setTimeout(() => finishLevel(3, matched, total), 900);
          }
        } else {
          el.classList.add("wrong");
          playSound("wrong");
          setTimeout(() => el.classList.remove("wrong"), 600);
        }
      }
    });
  });
}

/* ============ LEVEL 4 — FILE SORTING ============ */
function initLevel4(container, data) {
  const files = [...data.files].sort(() => Math.random() - 0.5);
  container.innerHTML = `
    <p class="section-desc">${state.lang === "id" ? data.instruction_id : data.instruction_en}</p>
    <div class="file-list" id="filePool">
      ${files.map(f => `<div class="file-item" draggable="true" data-file="${f.id}" data-folder="${f.correctFolder}">📄 ${f.id}</div>`).join("")}
    </div>
    <div class="folder-grid" id="folderGrid">
      ${data.folders.map(folder => `
        <div class="folder" data-folder="${folder}">
          <div class="folder-title">📁 ${folder}</div>
          <div class="folder-items"></div>
        </div>
      `).join("")}
    </div>
    <button class="btn btn-primary" id="btnCheckLevel4" style="margin-top:16px;">${t("finish")}</button>
  `;
  setupDnDFile();
  $("#btnCheckLevel4").addEventListener("click", () => checkLevel4());
}

function setupDnDFile() {
  const pool = $("#filePool");
  let selected = null;
  pool.querySelectorAll(".file-item").forEach(item => {
    item.addEventListener("dragstart", () => { selected = item; });
    item.addEventListener("click", () => {
      if (item.classList.contains("placed")) return;
      pool.querySelectorAll(".file-item").forEach(x => x.classList.remove("selected"));
      item.classList.add("selected");
      selected = item;
    });
  });
  $$(".folder").forEach(folder => {
    folder.addEventListener("dragover", e => { e.preventDefault(); folder.classList.add("over"); });
    folder.addEventListener("dragleave", () => folder.classList.remove("over"));
    folder.addEventListener("drop", e => {
      e.preventDefault();
      folder.classList.remove("over");
      if (!selected) return;
      folder.querySelector(".folder-items").appendChild(selected);
      selected.classList.add("placed");
      selected.classList.remove("selected");
      selected = null;
    });
    folder.addEventListener("click", () => {
      if (!selected) return;
      folder.querySelector(".folder-items").appendChild(selected);
      selected.classList.add("placed");
      selected.classList.remove("selected");
      selected = null;
    });
  });
}

function checkLevel4() {
  let benar = 0;
  $$(".folder").forEach(folder => {
    const folderName = folder.dataset.folder;
    folder.querySelectorAll(".file-item").forEach(f => {
      if (f.dataset.folder === folderName) { benar++; f.style.background = "#DCFCE7"; }
      else { f.style.background = "#FEE2E2"; playSound("wrong"); }
    });
  });
  if (benar === 6) {
    playSound("correct");
    showConfetti();
    setTimeout(() => finishLevel(4, benar, 6), 900);
  } else {
    showToast(`${benar}/6 benar / correct`, "error");
  }
}

/* ============ LEVEL 5 — SORTING SAFE/DANGEROUS ============ */
function initLevel5(container, data) {
  const items = [...data.items].sort(() => Math.random() - 0.5);
  container.innerHTML = `
    <p class="section-desc">${state.lang === "id" ? data.instruction_id : data.instruction_en}</p>
    <div class="sort-container" id="sortContainer">
      ${items.map((item, i) => `
        <div class="sort-item" data-idx="${i}" data-correct="${item.correct}">
          <div class="sort-item-text">${state.lang === "id" ? item.text_id : item.text_en}</div>
          <div class="sort-buttons">
            <button class="sort-btn safe" data-val="safe">${t("safe")}</button>
            <button class="sort-btn dangerous" data-val="dangerous">${t("dangerous")}</button>
          </div>
        </div>
      `).join("")}
    </div>
    <button class="btn btn-primary" id="btnCheckLevel5" style="margin-top:16px;">${t("finish")}</button>
  `;
  $$(".sort-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const item = btn.closest(".sort-item");
      item.querySelectorAll(".sort-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      item.dataset.userAnswer = btn.dataset.val;
    });
  });
  $("#btnCheckLevel5").addEventListener("click", () => checkLevel5());
}

function checkLevel5() {
  let benar = 0;
  const items = $$(".sort-item");
  items.forEach(item => {
    if (item.dataset.userAnswer === item.dataset.correct) {
      benar++;
      item.classList.add("result-correct");
    } else {
      item.classList.add("result-wrong");
    }
  });
  if (benar === items.length) {
    playSound("correct");
    showConfetti();
    setTimeout(() => finishLevel(5, benar, items.length), 900);
  } else {
    playSound("wrong");
    showToast(`${benar}/${items.length} benar / correct`, "error");
    setTimeout(() => openLevel(5), 1800);
  }
}

/* ============ LEVEL 6 — MIXED QUIZ WITH TIMER ============ */
function initLevel6(container, data) {
  state.level6Index = 0;
  state.level6Correct = 0;
  state.level6TimeLeft = CONFIG.TIMER_DURATION;
  renderLevel6Question(container, data);
  if (CONFIG.ENABLE_TIMER) startLevel6Timer(container, data);
}

function startLevel6Timer(container, data) {
  if (state.level6Timer) clearInterval(state.level6Timer);
  state.level6Timer = setInterval(() => {
    state.level6TimeLeft--;
    const timer = $("#level6Timer");
    if (timer) {
      timer.textContent = `⏱️ ${state.level6TimeLeft}s`;
      if (state.level6TimeLeft <= 10) timer.classList.add("urgent");
    }
    if (state.level6TimeLeft <= 0) {
      clearInterval(state.level6Timer);
      showToast(t("timeUp"), "error");
      finishLevel(6, state.level6Correct, data.questions.length);
    }
  }, 1000);
}

function renderLevel6Question(container, data) {
  const q = data.questions[state.level6Index];
  const total = data.questions.length;
  if (state.level6Index >= total) {
    if (state.level6Timer) clearInterval(state.level6Timer);
    finishLevel(6, state.level6Correct, total);
    return;
  }
  const timerHtml = CONFIG.ENABLE_TIMER ? `<div class="timer-badge" id="level6Timer">⏱️ ${state.level6TimeLeft}s</div>` : "";
  container.innerHTML = `
    ${timerHtml}
    <div class="question-box">
      <div class="question-number">${t("answer")} ${state.level6Index + 1} / ${total}</div>
      <div class="question-text">${state.lang === "id" ? q.q_id : q.q_en}</div>
    </div>
    <div class="options-list" id="optionsList6"></div>
    <div id="feedbackArea6"></div>
  `;
  const list = $("#optionsList6");
  if (q.type === "true-false") {
    const opts = [
      { text: state.lang === "id" ? "BENAR / TRUE" : "TRUE / BENAR", val: true },
      { text: state.lang === "id" ? "SALAH / FALSE" : "FALSE / SALAH", val: false }
    ];
    opts.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${opt.text}</span>`;
      btn.addEventListener("click", () => handleAnswer6(btn, opt.val === q.answer, list, q));
      list.appendChild(btn);
    });
  } else {
    const opts = state.lang === "id" ? q.options_id : q.options_en;
    opts.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.innerHTML = `<span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${opt}</span>`;
      btn.addEventListener("click", () => handleAnswer6(btn, i === q.answer, list, q));
      list.appendChild(btn);
    });
  }
}

function handleAnswer6(btn, isCorrect, list, q) {
  list.querySelectorAll(".option-btn").forEach(b => b.disabled = true);
  if (isCorrect) {
    btn.classList.add("correct");
    state.level6Correct++;
    playSound("correct");
  } else {
    btn.classList.add("wrong");
    playSound("wrong");
  }
  const fb = $("#feedbackArea6");
  fb.innerHTML = `
    <div class="feedback-box ${isCorrect ? "correct" : "wrong"}">
      <strong>${isCorrect ? t("feedbackCorrect") : t("feedbackWrong")}</strong><br>
      ${state.lang === "id" ? q.explanation_id : q.explanation_en}
    </div>
    <button class="btn btn-primary" id="btnNextQ6" style="margin-top:14px;">
      ${state.level6Index + 1 < GAME_DATA[6].questions.length ? t("next") : t("finish")}
    </button>
  `;
  $("#btnNextQ6").addEventListener("click", () => {
    state.level6Index++;
    renderLevel6Question($("#levelBody"), GAME_DATA[6]);
  });
}

/* ============ FINISH LEVEL ============ */
function finishLevel(level, correct, total) {
  const pct = Math.round((correct / total) * 100);
  let stars = 1;
  if (pct >= CONFIG.STAR_THRESHOLD_3) stars = 3;
  else if (pct >= CONFIG.STAR_THRESHOLD_2) stars = 2;
  state.levelScores[level] = pct;
  state.levelStars[level] = stars;
  if (!state.completedLevels.includes(level)) state.completedLevels.push(level);
  // total score = akumulasi bintang (max 18) + pct rata-rata
  state.totalScore = Object.values(state.levelStars).reduce((a, b) => a + b, 0) * 100 + Object.values(state.levelScores).reduce((a, b) => a + b, 0);
  updateHeaderScore();
  saveProgress();

  const body = $("#levelBody");
  body.innerHTML = `
    <div style="text-align:center; padding:20px 0;">
      <div style="font-size:64px;">${stars === 3 ? "🏆" : stars === 2 ? "🥈" : "🥉"}</div>
      <h3 style="font-size:24px; margin:10px 0;">${t("levelComplete")}</h3>
      <div style="font-size:28px; letter-spacing:4px; margin:12px 0;">${"⭐".repeat(stars)}${"☆".repeat(3 - stars)}</div>
      <p style="font-size:18px;"><strong>${t("yourScore")}: ${pct}%</strong></p>
      <p style="color:var(--text-secondary);">${correct} / ${total} ${t("correct")}</p>
      <div style="margin-top:20px; display:flex; gap:10px; justify-content:center; flex-wrap:wrap;">
        ${level < 6 ? `<button class="btn btn-primary" id="btnNextLevel">${t("nextLevel")} →</button>` : `<button class="btn btn-primary" id="btnSeeResult">${t("finish")} →</button>`}
        <button class="btn btn-secondary" id="btnMap">${t("backToMapBtn")}</button>
      </div>
    </div>
  `;
  if (level < 6) {
    $("#btnNextLevel").addEventListener("click", () => openLevel(level + 1));
  } else {
    $("#btnSeeResult").addEventListener("click", () => showFinalResults());
  }
  $("#btnMap").addEventListener("click", () => { renderMap(); showScreen("map"); });
  showConfetti();
}

/* ============ FINAL RESULTS ============ */
function showFinalResults() {
  const totalStars = Object.values(state.levelStars).reduce((a, b) => a + b, 0);
  const levelsDone = state.completedLevels.length;
  const summary = $("#resultSummary");
  summary.innerHTML = `
    <div class="result-summary-grid">
      <div class="result-stat"><div class="result-stat-value">${totalStars}/18</div><div class="result-stat-label">${t("totalStars")}</div></div>
      <div class="result-stat"><div class="result-stat-value">${levelsDone}/6</div><div class="result-stat-label">${t("levelsDone")}</div></div>
      <div class="result-stat"><div class="result-stat-value">${state.playerName || "—"}</div><div class="result-stat-label">Player</div></div>
    </div>
    <div style="margin-top:16px;">
      ${Object.keys(state.levelStars).sort((a,b)=>a-b).map(lvl => `
        <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid var(--border);">
          <span>Level ${lvl}: ${state.lang === "id" ? GAME_DATA[lvl].name_id : GAME_DATA[lvl].name_en}</span>
          <span>${"⭐".repeat(state.levelStars[lvl])} (${state.levelScores[lvl]}%)</span>
        </div>
      `).join("")}
    </div>
  `;
  showScreen("result");
  showConfetti();
}

/* ============ CERTIFICATE (Canvas API) ============ */
function generateCertificate() {
  const canvas = document.createElement("canvas");
  canvas.width = 1200; canvas.height = 850;
  const ctx = canvas.getContext("2d");
  // Background
  ctx.fillStyle = "#F8FAFC"; ctx.fillRect(0, 0, canvas.width, canvas.height);
  // Border
  ctx.strokeStyle = "#2563EB"; ctx.lineWidth = 20; ctx.strokeRect(30, 30, canvas.width - 60, canvas.height - 60);
  ctx.strokeStyle = "#F59E0B"; ctx.lineWidth = 4; ctx.strokeRect(60, 60, canvas.width - 120, canvas.height - 120);
  // Title
  ctx.fillStyle = "#1E40AF"; ctx.font = "bold 52px Poppins, sans-serif"; ctx.textAlign = "center";
  ctx.fillText("SERTIFIKAT / CERTIFICATE", canvas.width / 2, 170);
  ctx.fillStyle = "#64748B"; ctx.font = "24px Poppins, sans-serif";
  ctx.fillText("Petualangan E-Portofolio Digital", canvas.width / 2, 215);
  // Given to
  ctx.fillStyle = "#0F172A"; ctx.font = "22px Poppins, sans-serif";
  ctx.fillText("Diberikan kepada / Awarded to:", canvas.width / 2, 310);
  ctx.fillStyle = "#2563EB"; ctx.font = "bold 60px Poppins, sans-serif";
  ctx.fillText(state.playerName || "Siswa", canvas.width / 2, 395);
  // Achievement
  const totalStars = Object.values(state.levelStars).reduce((a, b) => a + b, 0);
  ctx.fillStyle = "#0F172A"; ctx.font = "22px Poppins, sans-serif";
  ctx.fillText("Telah menyelesaikan / Has completed:", canvas.width / 2, 470);
  ctx.fillStyle = "#F59E0B"; ctx.font = "bold 44px Poppins, sans-serif";
  ctx.fillText(`${totalStars} / 18 ⭐`, canvas.width / 2, 530);
  ctx.fillStyle = "#64748B"; ctx.font = "20px Poppins, sans-serif";
  ctx.fillText("LKPD Informatika Kelas 9 - E-Portofolio & Showcase Digital", canvas.width / 2, 590);
  // Date
  const today = new Date().toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
  ctx.fillStyle = "#0F172A"; ctx.font = "20px Poppins, sans-serif";
  ctx.fillText(`Tanggal / Date: ${today}`, canvas.width / 2, 660);
  // Footer
  ctx.fillStyle = "#64748B"; ctx.font = "16px Poppins, sans-serif";
  ctx.fillText("SMP Negeri 19 Kota Bekasi - Tim MGMP Informatika", canvas.width / 2, 760);
  return canvas;
}

function downloadCertificate() {
  const canvas = generateCertificate();
  const link = document.createElement("a");
  link.download = `Sertifikat_E-Portofolio_${(state.playerName || "Siswa").replace(/\s+/g, "_")}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("Sertifikat diunduh! / Certificate downloaded!", "success");
}

/* ============ REPORT & SHARE ============ */
function downloadReport() {
  const lines = [];
  lines.push("LAPORAN LKPD - PETUALANGAN E-PORTOFOLIO DIGITAL");
  lines.push("=".repeat(60));
  lines.push(`Nama: ${state.playerName}`);
  lines.push(`Tanggal: ${new Date().toLocaleDateString("id-ID")}`);
  lines.push("");
  lines.push("SKOR PER LEVEL:");
  for (let i = 1; i <= 6; i++) {
    if (state.levelScores[i] !== undefined) {
      lines.push(`  Level ${i} - ${GAME_DATA[i].name_id}: ${state.levelScores[i]}% (${state.levelStars[i]} ⭐)`);
    }
  }
  lines.push("");
  lines.push("REFLEKSI / EXIT TICKET:");
  lines.push(`1. ${$("#exit1")?.value || "-"}`);
  lines.push(`2. ${$("#exit2")?.value || "-"}`);
  lines.push(`3. ${$("#exit3")?.value || "-"}`);
  lines.push("");
  lines.push("=".repeat(60));
  lines.push("LKPD Informatika Kelas 9 · E-Portofolio dan Showcase Digital");
  lines.push("© 2026 SMP Negeri 19 Kota Bekasi");
  const blob = new Blob([lines.join("\n")], { type: "text/plain" });
  const link = document.createElement("a");
  link.download = `Laporan_E-Portofolio_${(state.playerName || "Siswa").replace(/\s+/g, "_")}.txt`;
  link.href = URL.createObjectURL(blob);
  link.click();
  showToast("Laporan diunduh! / Report downloaded!", "success");
}

function shareResult() {
  const totalStars = Object.values(state.levelStars).reduce((a, b) => a + b, 0);
  const text = `Halo Guru! 👋\n\nSaya *${state.playerName}* telah menyelesaikan LKPD "Petualangan E-Portofolio Digital"!\n\n⭐ Total Bintang: ${totalStars}/18\n✅ Level Selesai: ${state.completedLevels.length}/6\n\nTerima kasih!`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      showToast("Ringkasan disalin! Tempel di WhatsApp/Classroom 📋", "success");
    });
  } else {
    showToast(text);
  }
}

/* ============ EVENT LISTENERS ============ */
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  applyTranslations();
  updateHeaderScore();
  renderMap();

  // Sembunyikan header di splash
  const updateHeaderVisibility = () => {
    const splashActive = $("#screen-splash").classList.contains("active");
    $("#appHeader").style.display = splashActive ? "none" : "flex";
  };
  updateHeaderVisibility();
  const origShowScreen = showScreen;
  window.showScreen = (name) => { origShowScreen(name); updateHeaderVisibility(); };

  // Start button
  $("#btnStart").addEventListener("click", () => {
    const name = $("#playerName").value.trim();
    if (!name) { showToast(t("nameRequired"), "error"); $("#playerName").focus(); return; }
    state.playerName = name;
    saveProgress();
    playSound("click");
    showScreen("map");
    renderMap();
  });

  // Language toggle
  $("#langToggle").addEventListener("click", () => { playSound("click"); switchLanguage(); });

  // Sound toggle
  $("#soundToggle").addEventListener("click", () => {
    state.soundOn = !state.soundOn;
    $("#soundToggle").textContent = state.soundOn ? "🔊" : "🔇";
    saveProgress();
  });

  // Menu toggle
  $("#menuToggle").addEventListener("click", () => {
    $("#menuDropdown").classList.toggle("hidden");
  });
  document.addEventListener("click", (e) => {
    if (!e.target.closest("#menuToggle") && !e.target.closest("#menuDropdown")) {
      $("#menuDropdown").classList.add("hidden");
    }
  });

  // How to play modals
  const openHowToPlay = () => $("#modalHowToPlay").classList.remove("hidden");
  $("#btnHowToPlay").addEventListener("click", openHowToPlay);
  $("#btnHowToPlay2").addEventListener("click", openHowToPlay);
  $$(".modal-close").forEach(b => b.addEventListener("click", (e) => {
    e.target.closest(".modal-overlay").classList.add("hidden");
  }));
  $$(".modal-overlay").forEach(ov => ov.addEventListener("click", (e) => {
    if (e.target === ov) ov.classList.add("hidden");
  }));

  // Reset progress
  $("#btnResetProgress").addEventListener("click", () => { $("#menuDropdown").classList.add("hidden"); resetProgress(); });

  // Back to map
  $("#btnShowMap").addEventListener("click", () => { $("#menuDropdown").classList.add("hidden"); renderMap(); showScreen("map"); });
  $("#btnBackToMap").addEventListener("click", () => { renderMap(); showScreen("map"); });

  // Result actions
  $("#btnDownloadCert").addEventListener("click", downloadCertificate);
  $("#btnDownloadReport").addEventListener("click", downloadReport);
  $("#btnShare").addEventListener("click", shareResult);
  $("#btnPlayAgain").addEventListener("click", () => {
    if (confirm(t("resetConfirm"))) { resetProgress(); }
  });

  // Teacher mode hotkey
  document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.shiftKey && (e.key === "T" || e.key === "t")) {
      e.preventDefault();
      openTeacherMode();
    }
  });
});

/* ============ TEACHER MODE ============ */
function openTeacherMode() {
  const totalStars = Object.values(state.levelStars).reduce((a, b) => a + b, 0);
  let html = `<p><strong>Nama Murid:</strong> ${state.playerName || "—"}</p>`;
  html += `<p><strong>Total Bintang:</strong> ${totalStars}/18</p>`;
  html += `<p><strong>Level Selesai:</strong> ${state.completedLevels.join(", ") || "—"}</p>`;
  html += `<h4 style="margin-top:14px;">Skor per Level:</h4><ul>`;
  for (let i = 1; i <= 6; i++) {
    if (state.levelScores[i] !== undefined) {
      html += `<li>Level ${i} (${GAME_DATA[i].name_id}): ${state.levelScores[i]}% — ${state.levelStars[i]} ⭐</li>`;
    }
  }
  html += `</ul>`;
  $("#teacherContent").innerHTML = html;
  $("#modalTeacher").classList.remove("hidden");
}

/* ============ INIT: Sembunyikan header di splash ============ */
window.addEventListener("load", () => {
  const splashActive = $("#screen-splash")?.classList.contains("active");
  if (splashActive) $("#appHeader").style.display = "none";
});