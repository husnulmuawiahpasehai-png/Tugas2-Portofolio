if (document.title === "Husnul — Home") {
    let intro = document.createElement("div");
    intro.innerHTML = `
        <div style="
            position: fixed;
            inset: 0;
            background: #10243E;
            color: white;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            z-index: 9999;
        ">
            <h1 style="font-size: 48px; margin-bottom: 10px;">Halooo Teman Teman </h1>
            <p style="font-size: 20px; margin-bottom: 30px;">Selamat Datang Di Portofolio Husnul </p>
            <button id="masuk" style="
                padding: 12px 35px;
                border: none;
                border-radius: 5px;
                background: #4FD1D9;
                color: #10243E;
                font-size: 16px;
                cursor: pointer;
            ">MASUK</button>
        </div>
    `;
    document.body.appendChild(intro);
    document.getElementById("masuk").addEventListener("click", function() {
        intro.remove();
    });
}