// Sembunyikan tombol download dan reset secara default
document.getElementById('downloadBtn').style.display = 'none';
document.getElementById('resetBtn').style.display = 'none';

function generateQR() {
    var urlInput = document.getElementById('url').value;

    if (urlInput.trim() === "") {
        alert("URL tidak boleh kosong");
        return;
    }
document.getElementById("qrcode").innerHTML = "";
    var qrcode = new QRCode(document.getElementById("qrcode"), {
        text: urlInput,
        width: 256,
        height: 256
    });

    // Tampilkan tombol download dan reset setelah QR code dihasilkan
    document.getElementById('downloadBtn').style.display = 'block';
    document.getElementById('resetBtn').style.display = 'block';
}

function downloadQR() {
    var qrcodeCanvas = document.querySelector('#qrcode canvas');
    var downloadLink = document.createElement('a');

    downloadLink.href = qrcodeCanvas.toDataURL("image/png");
    downloadLink.download = 'qrcode.png';
    downloadLink.click();
}

function resetPage() {
    // Sembunyikan tombol download dan reset
    document.getElementById('downloadBtn').style.display = 'none';
    document.getElementById('resetBtn').style.display = 'none';

    // Hapus konten QR code
    document.getElementById("qrcode").innerHTML = "";

    // Kosongkan input URL
    document.getElementById('url').value = "";
  // Berikan alert kepada pengguna
    alert("Silahkan masukkan URL baru yang akan digenerate QR codenya.");
}
