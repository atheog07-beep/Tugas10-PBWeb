const daftarPenghasilan = [
    {
        penghasilan: "Dibawah 3jt"
    },
    {
        penghasilan: "3jt"
    },
    {
        penghasilan: "Lebih dari 3jt"
    }
];

const semuaPenghasilan = document.querySelectorAll(".pilihan");
for (const pilihanPenghasilan of semuaPenghasilan) {
    for (const dataPenghasilan of daftarPenghasilan) {
        const option = document.createElement("option");
        option.value = dataPenghasilan.penghasilan;
        option.textContent = dataPenghasilan.penghasilan;
        pilihanPenghasilan.appendChild(option);
    }
}

const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        window.location.href = "selesai.html";
    });
}

const balik = document.getElementById("balik");
if (balik) {
    balik.addEventListener("click", function () {
        window.location.href = "index.html";
    });
}
