import { careerList } from "../database/careerList.js";

//! content to show when page loads
window.addEventListener("DOMContentLoaded", function () {
  displayCareers(careerList);
});

//! careers card
const careersCntr = document.querySelector(".careers__cards");
const overlay = '<p class="coming-soon"><span>Coming Soon</span></p>';

function displayCareers(careers) {
  //* individual card
  for (let career of careers) {
    careersCntr.innerHTML += `
      <a href="${career.link}" class="careers__card-link ${
      career.comingSoon ? "disabled" : ""
    } ">
        ${
          career.comingSoon
            ? '<p class="coming-soon"><span>Coming Soon</span></p>'
            : ""
        }
        <div class="careers__card">
          <h3>${career.title}</h3>
          <p>${career.body}</p>
        </div>
      </a>`;
  }
}
