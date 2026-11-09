// Ganti nomor WhatsApp di bawah ini dengan nomor HP-mu (gunakan kode negara 62 di depan)
const waNumber = "6281234567890";

// Fungsi untuk otomatis memasukkan nama produk ke form saat tombol "Pesan Ini" diklik
function selectProduct(productName) {
    const descField = document.getElementById('customDesc');
    const typeField = document.getElementById('productType');
    
    if (productName.includes('Ganci')) {
        typeField.value = 'Gantungan Kunci (Ganci)';
    } else {
        typeField.value = 'Boneka Flanel Mini';
    }
    
    descField.value = `Halo min, saya mau pesan produk katalog: ${productName}`;
}

// Fungsi otomatis menghitung estimasi harga berdasarkan pilihan ukuran
document.getElementById('itemSize').addEventListener('change', function() {
    const size = this.value;
    const priceDisplay = document.getElementById('estimatedPrice');
    
    if (size.includes('Kecil')) {
        priceDisplay.innerText = 'Rp5.000 - Rp7.000';
    } else if (size.includes('Sedang')) {
        priceDisplay.innerText = 'Rp7.000 - Rp9.000';
    } else {
        priceDisplay.innerText = 'Rp8.000 - Rp10.000';
    }
});

// Fungsi untuk mengirim format pesanan otomatis ke WhatsApp
function sendToWhatsApp() {
    const name = document.getElementById('buyerName').value.trim();
    const type = document.getElementById('productType').value;
    const size = document.getElementById('itemSize').value;
    const desc = document.getElementById('customDesc').value.trim();

    if (!name || !desc) {
        alert('Mohon isi Nama Pemesan dan Detail Custom Bentuk terlebih dahulu ya, Nanat!');
        return;
    }

    const message = `Halo Kak, saya ingin memesan produk Flanela.id (Ngarap Guru Store):\n\n` +
                    `*Nama Pemesan:* ${name}\n` +
                    `*Jenis Produk:* ${type}\n` +
                    `*Ukuran:* ${size}\n` +
                    `*Detail Custom:* ${desc}\n\n` +
                    `Mohon info ketersediaan dan total biayanya ya kak. Terima kasih!`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${waNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}
