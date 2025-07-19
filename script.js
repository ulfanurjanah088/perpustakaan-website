const users = [];

function showRegister() {
  document.getElementById("login-form").style.display = "none";
  document.getElementById("register-form").style.display = "block";
}

function showLogin() {
  document.getElementById("login-form").style.display = "block";
  document.getElementById("register-form").style.display = "none";
}

function register() {
  const email = document.getElementById("register-email").value;
  const nim = document.getElementById("register-nim").value;
  const password = document.getElementById("register-password").value;

  if (email && nim && password) {
    if (users.find(u => u.email === email || u.nim === nim)) {
      alert("Email atau NIM sudah terdaftar!");
      return;
    }
    users.push({ email, nim, password });
    alert("Registrasi berhasil, silakan login.");
    showLogin();
  } else {
    alert("Mohon isi semua data.");
  }
}

function login() {
  const email = document.getElementById("login-email").value;
  const nim = document.getElementById("login-nim").value;
  const password = document.getElementById("login-password").value;

  const user = users.find(u => u.email === email && u.nim === nim && u.password === password);
  if (user) {
    alert("Login berhasil!");
    document.getElementById("auth-container").style.display = "none";
    document.getElementById("main-content").style.display = "block";
    loadBooks();
  } else {
    alert("Email, NIM atau password salah!");
  }
}

function loadBooks() {
  const books = [
    { title: "Laskar Pelangi", author: "Andrea Hirata", image: "https://source.unsplash.com/400x600/?book,1" },
    { title: "Bumi Manusia", author: "Pramoedya Ananta Toer", image: "https://source.unsplash.com/400x600/?book,2" },
    { title: "Negeri 5 Menara", author: "Ahmad Fuadi", image: "https://source.unsplash.com/400x600/?book,3" },
    { title: "Perahu Kertas", author: "Dee Lestari", image: "https://source.unsplash.com/400x600/?book,4" },
    { title: "Pulang", author: "Tere Liye", image: "https://source.unsplash.com/400x600/?book,5" }
  ];

  const bookList = document.getElementById("bookList");
  bookList.innerHTML = "";

  books.forEach(book => {
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book");
    bookDiv.innerHTML = `
      <h3>${book.title}</h3>
      <p>Penulis: ${book.author}</p>
      <button onclick='showModal("${book.title}", "${book.author}", "${book.image}")'>Lihat Detail</button>
    `;
    bookList.appendChild(bookDiv);
  });
}

function showModal(title, author, image) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalAuthor").textContent = "Penulis: " + author;
  document.getElementById("modalImage").src = image;
  document.getElementById("bookModal").style.display = "block";
}

function closeModal() {
  document.getElementById("bookModal").style.display = "none";
}

function handleBorrow(event) {
  event.preventDefault();
  closeModal();
  alert("Berhasil meminjam buku! Selamat membaca 📖");
  return false;
}
