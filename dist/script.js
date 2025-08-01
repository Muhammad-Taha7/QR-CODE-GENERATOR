const imagebox = document.getElementById('image-box');
const image = document.getElementById('qr-image');
const text = document.getElementById('qr-text');

function generateqr() {
  if (text.value.trim() === "") return; // prevent empty QR generation
  image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + encodeURIComponent(text.value);
  imagebox.classList.remove("hidden"); // optional: to show image if initially hidden
  image.classList.add("border", "border", "p-3" , "rounded-md" , "border-gray-500");
}
