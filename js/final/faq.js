$(".faq_container .accordion-toggle").click(function(){$(this).children("span.icon-list-alt").hasClass("open")?($(this).children("span.icon-list-alt").removeClass("open"),$(this).children("span.icon-list-alt").html("+")):($(this).children("span.icon-list-alt").addClass("open"),$(this).children("span.icon-list-alt").html("-"))});