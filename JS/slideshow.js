var slides = $('#DotterSlides').children();
// console.log(slides);
var index = 0;

var dotterDecript = "<br>Dotter is a compact and simple solution to artwork referencing.<br />It assists with the art transferral process of replicating your designs for big surfaces!<br /><br />Simply load your artwork as a digital file onto its internal storage;<br />Set the scale you wish to replicate your artwork.<br />Next, place a pen, pencil, marker, or anything else you draw with into its central grasp.<br /><br />Place dotter against your target surface and designate where you want the center ofthe design to be located. As you rub dotter across the surface, it will draw dots asreference points for your image.<br /><br />All you need to do is connect the dots, and your set to paint!<br /><br />Dotter’s accurate referencing system allows you to set up linework for your art fastand accurately, allowing you and your collaborators to paint without mistakes.<br />";
var gridderDecript = "<br>Gridder allows you to transfer your designs to the wall fast and accurately!<br /><br />Simply load your digital artwork into the gridder app;Your artwork will be overlayed with a referencing grid and sent to Gridder.<br /><br />Next, draw a grid on your wall;Mark your grid numerically on the vertical axis,and alphabetically on the horizontal axis.<br /><br />Now hold up girder in any of your grid squares;Place a pen, pencil, marker, or anything else you draw with into its central grasp.Set the letter and number for the grid square you have positioned it in,and gridder will fill it in with that section of your artwork.<br /><br />Repeat for all grid squares, and your set to paint!<br /><br />Gridder’s accurate referencing system allows you to set up linework for your art without hassle, allowing you and your collaborators to paint without mistakes.";
var spinnerDecript = "<br>Spinner is the robotic arm that gives you a hand with all of your design referencing needs.<br><br>Place a pen, pencil, marker, or anything else you draw with into its grasper.<br><br>Next, push it up against your target surface and activate it.It uses suction to stick to your wall!<br><br>Upload your digital artwork to it, extend its arm out, and watch, as it spins around and draws the linework for your mural project, at the scale you set.<br><br>When its done drawing wherever it can reach, simply remove it from the wall,and place it somewhere else where it can continue to draw what remains of your design.<br><br>Spinner’s accurate referencing system allows you to set up linework for your art without hassle, allowing you and your collaborators to paint without mistakes.";

// 

function slideshow() {
    // console.log('Running');
    slides.filter('.active').fadeOut(700).removeClass('active');
    slides.eq(index).delay(700).fadeIn(700).addClass('active');
    index = (index + 1) % slides.length;
    setTimeout(slideshow, 4000);
}

window.onload = slideshow();

function change_slideShow() {
    var concept = $("#concept").children("option:selected").val();
    slides.filter('.active').fadeOut(500).removeClass('active');
    if (concept == 'Dotter') {
        slides = $('#DotterSlides').children();
    } else if (concept == 'Gridder') {
        slides = $('#GridderSlides').children();
    } else if (concept == 'Spinner') {
        slides = $('#SpinnerSlides').children();
    }
}

function change_decript(){
    var concept = $("#concept").children("option:selected").val();
    decription(concept);
}

function concept_change() {
    var concept = $("#concept").children("option:selected").val();
    var type = $('#type').children("option:selected").val();
    var stand = $('#g-addons').children("option:selected").val()
    $('#title').text(concept);
    addons(concept);
    change_price(concept, type, stand);
    download(type);
    stand_info(stand);
}

function stand_info(stand){
    if (stand == "stand") {
        $('#stand-disclaimer').fadeIn(500).addClass('active');
    } else {
        $('#stand-disclaimer').fadeOut(500).removeClass('active');
    }
}

function change_price(concept, type, stand) {
    if (concept == "Dotter") {
        if (type == "Assembled") {
            $('#price').text('$59.00');
            $("#buynow").text("Buy Now");
        } else if (type == "Self-Assembly") {
            $('#price').text('$39.00');
            $("#buynow").text("Buy Now");
        } else if (type == "Develop-yourself") {
            $('#price').text('Free');
            $("#buynow").text("Download All");
        }
    } else if (concept == "Gridder") {
        if (type == "Assembled") {
            if (stand == 'stand') {
                $('#price').text('$328.00');
                $("#buynow").text("Buy Now");
                index = 4;
            } else {
                $('#price').text('$129.00');
                $("#buynow").text("Buy Now");
            }
        } else if (type == "Self-Assembly") {
            if (stand == 'stand') {
                $('#price').text('$288.00');
                $("#buynow").text("Buy Now");
                index = 4;
            } else {
                $('#price').text('$89.00');
                $("#buynow").text("Buy Now");
            }
        } else if (type == "Develop-yourself") {
            if (stand == 'stand') {
                $('#price').text('$199.00');
                $("#buynow").text("Buy Now");
                index = 4;
            } else {
                $('#price').text('Free');
                $("#buynow").text("Download All");
            }
        }
    } else if (concept == "Spinner") {
        if (type == "Assembled") {
            $('#price').text('$149.00');
            $("#buynow").text("Buy Now");
        } else if (type == "Self-Assembly") {
            $('#price').text('$99.00');
            $("#buynow").text("Buy Now");
        } else if (type == "Develop-yourself") {
            $('#price').text('Free');
            $("#buynow").text("Download All");
        }
    }
}

function addons(concept) {
    if (concept == "Gridder") {
        // $('#g-addons').fadeIn(500).addClass('active');
        $('#g-addons').fadeIn(500).addClass('active');
    } else {
        $('#g-addons').fadeOut(300).removeClass('active');
    }
}

function download(type) {
    if (type == "Develop-yourself") {
        $('#download-instr').fadeIn(500).addClass('active');
        $('#download-code').fadeIn(500).addClass('active');
        $('#download-parts').fadeIn(500).addClass('active');
        $('#download-g-code').fadeIn(500).addClass('active');
        $('#disclaimer').fadeIn(500).addClass('active');
    } else {
        $('#download-instr').fadeOut(500).removeClass('active');
        $('#download-code').fadeOut(500).removeClass('active');
        $('#download-parts').fadeOut(500).removeClass('active');
        $('#download-g-code').fadeOut(500).removeClass('active');
        $('#disclaimer').fadeOut(500).removeClass('active');
    }
}

function decription(concept) {
    var decript = $("#decription");
    if (concept == "Dotter") {
        decript.fadeOut(0);
        decript.delay(500).html(dotterDecript);
        decript.delay(500).fadeIn(500);
    } else if (concept == "Gridder") {
        decript.fadeOut(0);
        decript.delay(500).html(gridderDecript);
        decript.delay(500).fadeIn(500);
    } else if (concept == "Spinner") {
        decript.fadeOut(0);
        decript.delay(500).html(spinnerDecript);
        decript.delay(500).fadeIn(500);
    }
}

function about_show(){
    if($('#about-content').hasClass('active')){
        $('#about-content').fadeOut(500).removeClass('active');
    }else{
        $('#about-content').fadeIn(500).addClass('active');
    }
}
