const searchInput = document.querySelector("#search-input");

searchInput.addEventListener("keydown", function(event) {
    if(event.code === "Enter") {
        search();
    }
});

function search() {
    const input = searchInput.value;
    window.location.href = "https://www.google.com/search?q=" + input + "&rlz=1C1GCEU_enTH1007TH1007&oq=" + input + "&aqs=chrome..69i57j0i271l2.7546j0j1&sourceid=chrome&ie=UTF-8"
}