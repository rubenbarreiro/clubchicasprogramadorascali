async function enviarArchivos() {
  const input = document.querySelector('input[type="file"]');
  const alias = document.querySelector("#alias");

  const data = new FormData();
  data.append("user", alias.value);

  for (const file of input.files) {
    data.append("files", file, file.name);
  }

  fetch("/upload", {
    method: "POST",
    body: data,
  });
}
