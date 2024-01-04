let tipePengitung = 1;
function hitungKeliling(e) {
e.preventDefault();
const sisi1 = Number(document.getElementById("sisi1").value);
const sisi2 = Number(document.getElementById("sisi2").value);
const sisi3 = Number(document.getElementById("sisi3").value);
const keliling = Math.round((sisi1 + sisi2 + sisi3) * 100000) / 100000;
if (document.getElementById("output").style.display="none") {
document.getElementById("output").style.display="block";
}
document.getElementById("hasil").innerText = `Keliling segitiga anda adalah : ${keliling}`;
}
function hitungLuas(e) {
e.preventDefault();
const tinggi = Number(document.getElementById("tinggi").value);
const alas = Number(document.getElementById("alas").value);
const luas = Math.round((tinggi * alas) * 0.5 * 10000) / 10000;
if (document.getElementById("output").style.display="none") {
document.getElementById("output").style.display="block";
}
document.getElementById("hasil").innerText = `Luas segitiga anda adalah : ${luas}`;
}
function gantiPen() {
if (tipePengitung === 1) {
    document.getElementById("pengitung").style.display = "none";
    document.getElementById("pengitungluas").style.display = "block";
    document.getElementById("indi").innerText = "Luas Segitiga = 1/2 X A X T";
    tipePengitung = 2;
} else if (tipePengitung === 2) {
    document.getElementById("pengitung").style.display = "block";
    document.getElementById("pengitungluas").style.display = "none";
    document.getElementById("indi").innerText = "Keliling Segitiga = S1 + S2 + S3";
    tipePengitung = 1;
}
}
document.getElementById("pengitung").addEventListener("submit", hitungKeliling);
document.getElementById("pengitungluas").addEventListener("submit", hitungLuas);
document.getElementById("ganti").addEventListener("click", gantiPen);

function reset() {
const alas = document.getElementById("alas");
const tinggi = document.getElementById("tinggi");
const sisi1 = document.getElementById("sisi1");
const sisi2 = document.getElementById("sisi2");
const sisi3 = document.getElementById("sisi3");
sisi1.value = '';
sisi2.value = '';
sisi3.value = '';
alas.value = '';
tinggi.value = '';
}
document.getElementById("reset").addEventListener("click", reset)