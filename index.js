import express from "express";


const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index.ejs")
  });
  

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  }); 



  /* <div class="grid-container"> 
      <div class="grid-item">
        <div class="title">
          <p class="english">
            World Of Languages Centre For Training <br /><span class="arabic"
              >مـــركز عـــالم اللـــغات للـــتدريب
            </span>
          </p>
        </div>
      </div>
      <div class="grid-item">
        <div class="hamburger">☰</div>
        <ul class="flex-container navButtons">
          <li class="navList">
            HOME<br />
            <img
              src="/images/pseudo.png"
              alt="yellowline"
              width="150%"
              height="2px"
            />
          </li>
          <li class="navList">ABOUT</li>
          <li class="navList">SERVICES</li>
          <li class="navList">CLIENTS</li>
          <li class="navList">CONTACTS</li>
        </ul>
      </div>
      <div class="grid-item-3">
        <div>
          <div>
            <img src="/images/pseudo.png" alt="yellowline" class="line" />
            <p class="headingParag">PROFESSIONAL. INNOVATIVE. RELIABLE.</p>
          </div>

          <h1>WORLD<br />OF LANGUAGES<br />CENTER</h1>
          <p class="description">
            World of Languages Centre stands as the foremost provider in the
            region for B2B and B2G, offering highly personalized solutions that
            enhance language proficiency by integrating technology
          </p>
          <button class="consBtn">CONSULT NOW</button>
        </div>
      </div>
      <div class="grid-item-4">
        <img src="/images/earth.png" alt="earth picture" />
      </div>
    </div>

    <script>
      const hamburger = document.querySelector(".hamburger");
      const navButtons = document.querySelector(".navButtons");

      hamburger.addEventListener("click", () => {
        navButtons.classList.toggle("active");
      });
    </script> */