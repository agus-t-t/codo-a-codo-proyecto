document.getElementById("video-sol").addEventListener("click", function(){
    var popup = document.getElementById("popup");
    popup.style.display = 'flex';
    popup.insertAdjacentHTML("afterend", '<iframe class="video" src="https://www.youtube.com/embed/LkaLfbuB_6E" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})

document.getElementById("video-mercurio").addEventListener("click", function(){
    var popup = document.getElementById("popup");
    popup.style.display = 'flex';
    popup.insertAdjacentHTML("afterend", '<iframe class="video" src="https://www.youtube.com/embed/TbfvCXeRXqs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})

document.getElementById("video-venus").addEventListener("click", function(){
    var popup = document.getElementById("popup");
    popup.style.display = 'flex';
    popup.insertAdjacentHTML("afterend", '<iframe class="video" src="https://www.youtube.com/embed/rk0PZ1qnLXw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})

document.getElementById("video-tierra").addEventListener("click", function(){
    var popup = document.getElementById("popup");
    popup.style.display = 'flex';
    popup.insertAdjacentHTML("afterend", '<iframe class="video" src="https://www.youtube.com/embed/jdkMHkF7BaA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})

document.getElementById("video-marte").addEventListener("click", function(){
    var popup = document.getElementById("popup");
    popup.style.display = 'flex';
    popup.insertAdjacentHTML("afterend", '<iframe class="video" src="https://www.youtube.com/embed/sioX2bbkZms" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})

document.getElementById("video-jupiter").addEventListener("click", function(){
    var popup = document.getElementById("popup");
    popup.style.display = 'flex';
    popup.insertAdjacentHTML("afterend", '<iframe class="video" src="https://www.youtube.com/embed/CC7OJ7gFLvE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
})

document.getElementById('cerrar').addEventListener('click', function(){
    var video = document.getElementsByClassName("video");
    video[0].remove();
    document.querySelector('.popup-container').style.display = 'none';
});


