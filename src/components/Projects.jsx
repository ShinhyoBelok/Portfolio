import React from 'react'

export default function Projects() {
  return (
    <section class="project" id="project-${i}">
      {/* <img class="snap ${projects[i].contentDirection}" src="${projects[i].image}" alt="First project card picture" />
      <h2>${projects[i].name}</h2>
      <section>
          <ul class="canopy">
              <li>CANOPY</li>
              <li><img src="${projects[i].dot}" alt="Dot icon"/></li>
              <li><span class="lightgray">${projects[i].canopyli1}</span></li>
              <li><img src="${projects[i].dot}" alt="Dot icon" /></li>
              <li><span class="lightgray">${projects[i].canopyli2}</span></li>
          </ul>
      </section>
      <p>${projects[i].resume}</p>
      <ul class="programmingLanguages">
        ${createProgrammingLanguages(i)}
      </ul> */}
      <button class="button detail" id="${projects[i].btnId}">See Project</button>
  </section>
  )
}
