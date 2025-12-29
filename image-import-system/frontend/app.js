async function importImages() {
  const url = document.getElementById("url").value;
  await fetch("http://localhost:5000/import/google-drive", {
    method: "POST",
    headers: {"Content-Type":"application/json"},
    body: JSON.stringify({ folderUrl: url })
  });
  loadImages();
}

async function loadImages() {
  const res = await fetch("http://localhost:5000/images");
  const images = await res.json();
  document.getElementById("list").innerHTML =
    images.map(i => `<li>${i.name}</li>`).join("");
}
