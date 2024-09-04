
const form = document.getElementById("projectForm") 
const projectContainer = document.getElementById("article_container") 
const projects = [] 

form.addEventListener("submit", async (event) => {
  event.preventDefault() 

  // Bruker input 
  const newProject = {
    title: event.target.elements.title.value,
    description: event.target.elements.description.value,
    createdAt: event.target.elements.date.value, 
    imgURL: event.target.elements.imglink.value || "placeholder.jpeg"
  }

  projects.push(newProject)
  updateProjects() 

  // sende til serveren
  try {
    const response = await fetch("http://localhost:3998/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProject),
    })

    // Håndterer serverresponsen
    if (response.status === 201) {
      console.log("Vane lagret på serveren")
    } else {
      console.error("Feil ved lagring av vane på serveren")
    }
  } catch (error) {
    console.error("Feil ved sending av data til serveren:", error)
  }
});

function updateProjects() {
  console.log(projects);
  projectContainer.innerHTML = ""; 

  for (const project of projects) {
    const projectHTML = `
      <article>
        <img src="${project.imgURL}" alt="${project.title}">
        <div class="article_content">
          <h3>${project.title}</h3>
          <p>${project.createdAt}</p>
          <p>${project.description}</p>
        </div>
      </article>
    `
    projectContainer.innerHTML += projectHTML
  }
}

function loadFromApi() {
  fetch("http://localhost:3998")
    .then((response) => response.json())
    .then((data) => {
      projects.push(...data)
      updateProjects()
    })
    .catch((error) => {
      console.error("Feil ved henting av data fra serveren:", error)
    });
}

loadFromApi()
