(function() {
    var bouncer;

    var position = function() {
        var circle = $(".container");
        var social = $(".social");
        var body = $("body");

        circle.css({
            marginTop: (body.height() / 2) - (circle.height() / 2)
        });

        social.css({
            top: (body.height() / 2) - (circle.height() / 2)
        });
    };

    var registerService = function(service, url) {
        $(".service." + service).click(function() {
            window.open(url);

            return false;
        });
    };

    $(document).ready(function() {
        position();

        $(".container").click(function() {
            $(".container").toggleClass("hover");
            $(".container").removeClass("info");

            window.setTimeout(function() {
                if($(".container").hasClass("hover")) {
                    $(".service").addClass("expanded");
                } else {
                    $(".service").removeClass("expanded");
                }
            }, 1000);
        });

        $(".circle .info").click(function() {
            $(".container").toggleClass("info");

            return false;
        });

        registerService("linkedin", "https://www.linkedin.com/profile/view?id=108940873");
        registerService("facebook", "https://www.facebook.com/philipp.giese");
        registerService("github", "https://github.com/frontendphil");

        $(".service.info").click(function() {
            $(".container").removeClass("contact").toggleClass("info");

            $(".service").removeClass("selected");

            $(this).addClass("selected");

            return false;
        });
    });

    $(window).resize(function() {
        if(bouncer) {
            window.clearTimeout(bouncer);
        }

        bouncer = window.setTimeout(position, 1);
    });
}());
