function getButton(){
    const buttonid = ["home", "project", "contact"];
    buttonid.forEach((id) => {
        const button = document.getElementById(id);
        if(!button) return;
        button.addEventListener("click", () => {
            renderPage(id);
        });
    })
}

function renderPage(page){
    if(page === "home"){
        document.querySelector("main").innerHTML = homePage;
        console.log("home");
    } else if(page === "project"){
        document.querySelector("main").innerHTML = projectPage;
        console.log("project");
    } else if(page === "contact"){
        document.querySelector("main").innerHTML = contactPage;
        console.log("contact");
    }
}

const homePage = `
<div class="profile">
    <img src="src/profile.png" style="object-fit: cover; border-radius: 15px; border: 4px solid black; box-shadow: 2px 2px 1px black;">
</div>
<div class="about">
    <div class="about-me"><strong>ABOUT ME</strong><br>Saya adalah seorang fullstack developer yang tertarik pada pengembangan aplikasi web dari sisi front-end hingga back-end. Saya senang membangun solusi digital yang efisien, fungsional, dan mudah digunakan. Saat ini saya terus mengembangkan skill di teknologi web modern dan terbuka untuk berkolaborasi dalam berbagai proyek pengembangan aplikasi.</div>
    <div class="personal-information"><strong>PERSONAL INFORMATION</strong><br>Nama: Ega Putra Firmansyah<br>Tanggal Lahir: 2 Juni 2006<br>Tempat Tinggal: Surabaya,Jawa Timur,Indonesia</div>
    <div class="education"><Strong>Education</Strong><br>SD: SDN Wonokromo 1 Surabaya<br>SMP: SMPN 32 Surabaya<br>SMA: SMA Kartika IV-3 Surabaya</div>
</div>
`
const projectPage = `
<div class="project-box">
    <div class="atas">
        <img src="src/preview1.png" class="project-img">
    </div>
    <div class="tengah">
        <a href="https://dodolanku.vercel.app/" target="_blank">Dodolanku</a>
    </div>
    <div class="bawah">
        <div class="tech" style="background-color: orange;">HTML</div>
        <div class="tech" style="background-color: lightblue">CSS</div>
        <div class="tech" style="background-color: yellow;">JS</div>
    </div>
</div>
<div class="project-box">
    <div class="atas">
        <img src="src/previewabsen.png" class="project-img">
    </div>
    <div class="tengah">
        <a href="https://github.com/Ega-Putra/absenku" target="_blank">Absenku</a>
    </div>
    <div class="bawah">
        <div class="tech" style="background-color: orange;">HTML</div>
        <div class="tech" style="background-color: lightblue">CSS</div>
        <div class="tech" style="background-color: yellow;">JS</div>
        <div class="tech" style="background-color: greenyellow;">Nodejs</div>
        <div class="tech" style="background-color: aquamarine;">MongoDB</div>
    </div>
</div>
<div class="project-box">
    <div class="atas">
        <img src="src/previewCALC.png" class="project-img">
    </div>
    <div class="tengah">
        <a href="">Calculator</a>
    </div>
    <div class="bawah">
        <div class="tech" style="background-color: orange;">HTML</div>
        <div class="tech" style="background-color: lightblue">CSS</div>
        <div class="tech" style="background-color: yellow;">JS</div>
    </div>
</div>
`
const contactPage = `
<button style="background-color: gainsboro;">
    <a href="https://github.com/Ega-Putra" target="_blank">Github</a>
</button>
<button style="background-color: lightpink;">
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=egaputraf@gmail.com" target="_blank">Email</a>
</button>
<button style="background-color: lightskyblue;">
    <a href="https://www.facebook.com/ega.firmansya.7/" target="_blank">Facebook</a>
</button>
`
getButton()
renderPage("home")