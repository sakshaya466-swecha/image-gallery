function openImage(img){
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = img.src;
}

function closeImage(){
  document.getElementById("lightbox").style.display = "none";
}

function toggleDarkMode(){
  document.body.classList.toggle("dark-mode");
}

function filterImages(category){

  let images = document.querySelectorAll(".gallery img");

  images.forEach(img => {

    if(category === "all"){
      img.style.display = "block";
    }

    else if(img.classList.contains(category)){
      img.style.display = "block";
    }

    else{
      img.style.display = "none";
    }

  });

}

function searchImages(){

  let input = document.getElementById("search").value.toLowerCase();

  let images = document.querySelectorAll(".gallery img");

  images.forEach(img => {

    if(img.className.includes(input) || input === ""){
      img.style.display = "block";
    }

    else{
      img.style.display = "none";
    }

  });

}
