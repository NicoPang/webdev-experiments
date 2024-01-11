document.addEventListener("DOMContentLoaded", function() {
    const headings = document.getElementsByTagName("h1");
    console.log(headings);
    let num = 0;
    for (heading of headings) {
        const new_link = document.createElement("a");
        new_link.innerHTML = heading.innerHTML;
        new_link.href = `#${heading.innerHTML}`;
        new_link.id = `h1_${num}`;
        heading.innerHTML = "";
        new_link.addEventListener("click", generate_random_links);
        heading.appendChild(new_link);

        num++;
    }
});


function update_list_slider_value(val) {
    document.getElementById("value-display").innerHTML = val;
    document.getElementById("changing-list").style.paddingLeft = `${parseInt(val)*10+40}px`;
    console.log("${val}px");
    console.log(document.getElementById("changing-list").style.paddingLeft);
}

function generate_random_links(e) {
    const headings = document.getElementsByTagName("h1");
    const links = Array.prototype.map.call(headings, (x) => x.getElementsByTagName("a")[0].id);
    new_ind = Math.floor(Math.random() * links.length);
    e.srcElement.href = `#${links[new_ind]}`;
}