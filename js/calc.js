// Ambil elemen form
const form = document.getElementById("calculator");

// Tambahkan event listener untuk form submit
form.addEventListener("submit", function (event) {
  // Hentikan aksi default form submit
  event.preventDefault();

  // Ambil nilai dari input angka 1, operator, dan angka 2
  const num1 = Number(document.getElementById("num1").value);
  const operator = document.getElementById("operator").value;
  const num2 = Number(document.getElementById("num2").value);

  // Validasi input angka 1 dan angka 2
  if (isNaN(num1) || isNaN(num2)) {
    alert("Maaf yang Anda Input bukan Angka");
    return;
  }

  // Hitung hasil perhitungan berdasarkan operator yang dipilih
  let result;
  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;
    default:
      alert("Pilih operator terlebih dahulu");
      return;
  }

  // Tampilkan hasil perhitungan
  document.getElementById(
    "hasil"
  ).innerHTML = `Hasil: ${num1} ${operator} ${num2} = ${result}`;
});
