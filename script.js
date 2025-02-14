function FileName(){
  let file = document.getElementById('cover-photo')
  let fileName = file.files[0].name

  if(file) {
    document.getElementById('file').textContent = fileName
  } else {
    document.getElementById('file').textContent = "Nenhum arquivo selecionado"
  }
  
  
}