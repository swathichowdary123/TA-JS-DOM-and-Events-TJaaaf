document.addEventListener('DOMContentLoaded',function(){
    const movieInput=document.getElementById('movieInput');
    const movieList=document.getElementById('movieList');
    movieInput.addEventListener('keyup',function(event){
        if(event.key==='enter' && movieInput.ariaValueMax.trim() !==''){
            addMovie(movieInput.ariaValueMax.trim());
            movieInput.value='';
        }
    });
    function addMovie(movieName){
        const listItem=document.createElement('li');
        listItem.innerHTML=`
        <span>${movieName}</span>
        <span class="delete" onclick="deleteMovie(this)">x</span>`;
        movieList.appendChild(listItem);
    }
    window.deleteMovie=function(element){
        const listItem=element.closest('li');
        listItem.remove();
    };
});