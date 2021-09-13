function irPara(str, boolean) {
    if (boolean) { return window.open(str, "_blank", 'noopener'); }
    window.location.href = str;
}

$("#brazil-card").click(function (a) {
    a.preventDefault(), 
    $("#brazil-card").addClass("active"), 
    $("#eua-card").removeClass("active"), 
    $("#brazil").show(), 
    $("#eua").hide()
});

$("#eua-card").click(function (a) {
    a.preventDefault(), 
    $("#eua-card").addClass("active"), 
    $("#brazil-card").removeClass("active"), 
    $("#eua").show(), 
    $("#brazil").hide()
});