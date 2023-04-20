import react from "react";
import "../Css/Team.css";

const Team = () => {
  return (
    <>
      <div className="team-section">
      <section class="articles">
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="nupur.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2>NUPUR KAPOOR</h2>
              <section class="description">21BCP255</section>
              <section class="description">Team Member</section>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="AniketPatel.jpg"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>ANIKET PATEL</h2>
              <section class="description">21BCP256</section>
              <section class="description">Team Leader</section>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="Khushi.jpg" alt="" />
            </figure>
            <div class="article-body">
              <h2>KHUSHI DESAI</h2>
              <section class="description">21BCP264</section>
              <section class="description">Team Member</section>
            </div>
          </div>
        </article>

        <article>
          <div class="article-wrapper">
            <figure>
              <img
                src="dev.jpg"
                alt=""
              />
            </figure>
            <div class="article-body">
              <h2>DEV CHAPATWALA</h2>
              <section class="description">21BCP266</section>
              <section class="description">Team Member</section>
            </div>
          </div>
        </article>
        <article>
          <div class="article-wrapper">
            <figure>
              <img src="vishwa.png" alt="" />
            </figure>
            <div class="article-body">
              <h2>VISHWA NANAVATI</h2>
              <section class="description">21BCP272</section>

              <section class="description">Team Member</section>
            </div>
          </div>
        </article>
      </section>
      </div>
    </>
  );
};
export default Team;
