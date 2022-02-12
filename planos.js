$(function() {

    $("#card1").on({
        mouseenter: function() {
            // alert("ok")
            $("#card1").fadeTo(1000, 1.0);
            $("#plano-titulo-prata").style("color", "#ffbb00");
        },
        mouseleave: function() {
            // alert("fora")
            $("#card1").fadeTo(1000, 0.6)
        }
    });

    $("#card2").on({
        mouseenter: function() {
            // alert("ok")
            $("#card2").fadeTo(1000, 1.0);
            $("#plano-titulo-ouro").style("color", "#ffbb00");
        },
        mouseleave: function() {
            // alert("fora")
            $("#card2").fadeTo(1000, 0.6)
        }
    });





})