function update_list_slider_value(val) {
    document.getElementById("value-display").innerHTML = val;
    document.getElementById("changing-list").style.paddingLeft = `${parseInt(val)*10+40}px`;
    console.log("${val}px");
    console.log(document.getElementById("changing-list").style.paddingLeft);
}