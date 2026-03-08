

let issues = []

async function loadIssues(){

const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/issues")

const data = await res.json()

issues = data.data

document.getElementById("count").innerText = issues.length + " Issues"

displayIssues(issues)

}

window.onload = loadIssues


function displayIssues(list){

const container = document.getElementById("container")

container.innerHTML = ""

list.forEach(issue => {

const card = document.createElement("div")

card.className = "card"

if(issue.status === "open"){
card.style.borderTop = "4px solid #00b894"
}else{
card.style.borderTop = "4px solid #a55eea"
}

card.innerHTML = `

<div class="top">
<span>🟢</span>
<span class="priority ${issue.priority.toLowerCase()}">${issue.priority}</span>
</div>

<h4>${issue.title}</h4>

<p>${issue.description}</p>

<div class="labels">
<span class="label bug">BUG</span>
<span class="label help">HELP WANTED</span>
</div>

<div class="footer">
<span>#${issue.id} by ${issue.author}</span>
<span>${issue.createdAt}</span>
</div>

`

card.onclick = () => openModal(issue.id)

container.appendChild(card)

})

}

// active status
const buttons = document.querySelectorAll(".tab-btn");

buttons.forEach(btn => {
btn.addEventListener("click", function(){

buttons.forEach(b => b.classList.remove("active"));

this.classList.add("active");

});
});

/* FILTER */

function filterIssues(status){

if(status === "all"){
displayIssues(issues)
return
}

const filtered = issues.filter(issue => issue.status === status)

displayIssues(filtered)

}


/* SEARCH */

async function searchIssue(){

const q = document.getElementById("searchInput").value

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issues/search?q=${q}`)

const data = await res.json()

displayIssues(data.data)

}


/* MODAL */

async function openModal(id){

const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`)

const data = await res.json()

const issue = data.data

document.getElementById("modalContent").innerHTML = `

<h3>${issue.title}</h3>

<p>${issue.description}</p>

<p>Status: ${issue.status}</p>

<p>Category: ${issue.category}</p>

<p>Author: ${issue.author}</p>

<p>Priority: ${issue.priority}</p>

<p>Label: ${issue.label}</p>

<p>Created: ${issue.createdAt}</p>

<button onclick="closeModal()">Close</button>

`

document.getElementById("modal").classList.remove("hidden")

}

function closeModal(){

document.getElementById("modal").classList.add("hidden")

};

