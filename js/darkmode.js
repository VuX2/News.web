var icon = document.getElementById("icon");
icon.onclick = function()
{
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode"))
    {
        icon.classList.replace('fa-moon', 'fa-sun');
    }else{
        icon.classList.replace('fa-sun','fa-moon');
    }
}
