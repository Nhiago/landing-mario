console.log(document);
console.log(document.querySelector(".trailerBtn"));
const botaoTrailer = document.querySelector(".trailerBtn");
const modal = document.querySelector(".modal");
const fecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const link = video.src;


botaoTrailer.addEventListener("click", () =>{modal.classList.add("aberto")
video.setAttribute("src", link);
});

fecharModal.addEventListener("click", () =>{modal.classList.remove("aberto") 
video.setAttribute("src", ""); 

});
