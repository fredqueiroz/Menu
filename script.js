var filterSize = 360;
var i = 1;
var text = document.querySelector('#buttons').innerHTML;
var buttons = text.split('<');
var value = '';
var value2 = document.querySelector('#menu').innerHTML;
for (i = 1; i <= buttons.length - 1; i++) {
    value2 = value2.replace('<li>', '<li class=\"spotli\"><a class=\"spota\" data-id=\"div' + i + '\" href=\"#\"><span class=\"filter-names\">');
    $("#buttons > input:nth-child(" + i + ")").wrap("<div id=\"div" + i + "\">");
}

value2 = value2.replace(/<\/li>/g, '</span></a></li>');
$('#menu').html(value2);

function triggerClick(id) {
    var children = $("#" + id).children();
    children.click();
}

$(".spota").click(function() {
    var navMenu = $(this).attr('data-id');
    triggerClick(navMenu);
});

$(".icons").click(function() {
    var navMenu = $(this).attr('data-id');
    triggerClick(navMenu);
});

document.getElementById("shadow").onclick = function() {
document.getElementById("shadow").style.width = "0%";
document.getElementById("filter").style.width = "0px";
document.getElementById("filterbutton").innerHTML = "<i title=\"Open filters\" class=\"fas fa-filter icons\"></i>";
    document.getElementById("menu").style.width = "0px";
    document.getElementById("menubutton").innerHTML = "<i title=\"Open menu\" class=\"fas fa-bars icons\"></i>";
    $("#myaccordion,#myaccordionfilters").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        activate: function(event, ui) {
            if (ui.newHeader.text() != "") {
                $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
            } else {
                $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            }
            $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
            $(".ListContainer").width(filterSize + "px");
            $(".ListContainerScroll").width((filterSize - 6) + "px");
            $(".Image").css("left", (filterSize - 3) + "px");
            $(".sfc-scrollable").width((filterSize - 8) + "px");
            $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
            $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
            $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
            $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
            $(".ui-widget-content").css({
                "background": "inherit",
                "color": "inherit",
            });
        },
    });
};

document.getElementById("menubutton").onclick = function() {
		document.getElementById("shadow").style.width = "0%";
document.getElementById("filter").style.width = "0px";
$("#myaccordion,#myaccordionfilters").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        activate: function(event, ui) {
            if (ui.newHeader.text() != "") {
                $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
            } else {
                $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            }
            $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
            $(".ListContainer").width(filterSize + "px");
            $(".ListContainerScroll").width((filterSize - 6) + "px");
            $(".Image").css("left", (filterSize - 3) + "px");
            $(".sfc-scrollable").width((filterSize - 8) + "px");
            $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
            $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
            $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
            $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
            $(".ui-widget-content").css({
                "background": "inherit",
                "color": "inherit",
            });
        },
    });
document.getElementById("filterbutton").innerHTML = "<i title=\"Open filters\" class=\"fas fa-filter icons\"></i>";
document.getElementById("shadow").classList.remove('shadowfilter');
    if (document.getElementById("menubutton").innerHTML.trim() == "<i title=\"Open menu\" class=\"fas fa-times fatimesmenu icons\"></i>") {
        document.getElementById("menu").style.width = "0px";
        document.getElementById("shadow").style.width = "0%";
        document.getElementById("menubutton").innerHTML = "<i title=\"Open menu\" class=\"fas fa-bars icons\"></i>";
        $("#myaccordion,#myaccordionfilters").accordion({
            collapsible: true,
            active: false,
            heightStyle: 'content',
            activate: function(event, ui) {
                if (ui.newHeader.text() != "") {
                    $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
                } else {
                    $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
                }
                $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
                $(".ListContainer").width(filterSize + "px");
                $(".ListContainerScroll").width((filterSize - 6) + "px");
                $(".Image").css("left", (filterSize - 3) + "px");
                $(".sfc-scrollable").width((filterSize - 8) + "px");
                $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
                $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
                $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
                $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
                $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
                $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
                $(".ui-widget-content").css({
                    "background": "inherit",
                    "color": "inherit",
                });
            },
        });
    } else {
        if (document.getElementById("menubutton").innerHTML.trim() == "<i title=\"Open menu\" class=\"fas fa-bars icons\"></i>") {
            document.getElementById("menu").style.width = "400px";
            document.getElementById("shadow").style.width = "100%";
            document.getElementById("menubutton").innerHTML = "<i title=\"Open menu\" class=\"fas fa-times fatimesmenu icons\"></i>";



        }
    }
};







document.getElementById("filterbutton").onclick = function() {

document.getElementById("menu").style.width = "0px";
        document.getElementById("shadow").style.width = "0%";
$("#myaccordion,#myaccordionfilters").accordion({
        collapsible: true,
        active: false,
        heightStyle: 'content',
        activate: function(event, ui) {
            if (ui.newHeader.text() != "") {
                $(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
            } else {
                $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            }
            $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
            $(".ListContainer").width(filterSize + "px");
            $(".ListContainerScroll").width((filterSize - 6) + "px");
            $(".Image").css("left", (filterSize - 3) + "px");
            $(".sfc-scrollable").width((filterSize - 8) + "px");
            $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
            $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
            $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
            $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
            $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
            $(".ui-widget-content").css({
                "background": "inherit",
                "color": "inherit",
            });
        },
    });
        document.getElementById("menubutton").innerHTML = "<i title=\"Open menu\" class=\"fas fa-bars icons\"></i>";
	document.getElementById("shadow").classList.remove('shadowmenu');
 if (document.getElementById("filterbutton").innerHTML.trim() == "<i title=\"Open filters\" class=\"fas fa-filter icons\"></i>") {
		document.getElementById("shadow").classList.add('shadowfilter');
		document.getElementById("shadow").style.width = "100%";
document.getElementById("filter").style.width = "400px";
document.getElementById("filterbutton").innerHTML = "<i title=\"Open filters\" class=\"fas fa-times fatimesfilter icons\"></i>";
	}
	else
	{
	if (document.getElementById("filterbutton").innerHTML.trim() == "<i title=\"Open filters\" class=\"fas fa-times fatimesfilter icons\"></i>") {
		document.getElementById("shadow").style.width = "0%";
		document.getElementById("filter").style.width = "0px";
		document.getElementById("filterbutton").innerHTML = "<i title=\"Open filters\" class=\"fas fa-filter icons\"></i>";
		$("#myaccordion,#myaccordionfilters").accordion({
			collapsible: true,
			active: false,
			heightStyle: 'content',
			activate: function(event, ui) {
			    if (ui.newHeader.text() != "") {
				$(".ui-accordion-header-active > .spota > .fa-angle-right").removeClass('fa-angle-right').addClass('fa-angle-down');
			    } else {
				$(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
			    }
			    $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
			    $(".ListContainer").width(filterSize + "px");
			    $(".ListContainerScroll").width((filterSize - 6) + "px");
			    $(".Image").css("left", (filterSize - 3) + "px");
			    $(".sfc-scrollable").width((filterSize - 8) + "px");
			    $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
			    $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
			    $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
			    $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
			    $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
			    $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
			    $(".ui-widget-content").css({
				"background": "inherit",
				"color": "inherit",
			    });
			},
		    });
		}
		
	}
};


$("#myaccordion,#myaccordionfilters").accordion({
    collapsible: true,
    active: false,
    heightStyle: 'content',
    activate: function(event, ui) {
        if (ui.newHeader.text() != "") {
            $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
            $(".ui-accordion-header-active > .spota > .fa-angle	-right").removeClass('fa-angle-right').addClass('fa-angle-down');
        } else {
            $(".ui-corner-all > .spota > .fa-angle-down").removeClass('fa-angle-down').addClass('fa-angle-right');
        }
        $(".sf-input-with-placeholder").width((filterSize - 27) + "px");
        $(".ListContainer").width(filterSize + "px");
        $(".ListContainerScroll").width((filterSize - 6) + "px");
        $(".Image").css("left", (filterSize - 3) + "px");
        $(".sfc-scrollable").width((filterSize - 8) + "px");
        $(".ListContainerScroll .HorizontalScrollbarContainer").width((filterSize - 22) + "338px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("left", (filterSize - 20) + "px");
        $(".ListContainerScroll .VerticalScrollbarContainer").css("top", "0px");
        $(".sf-element-list-box .ScrollArea").width((filterSize - 22) + "px");
        $(".sf-element-check-box .ScrollArea").width((filterSize - 22) + "px");
        $(".ListItems .sf-element-list-box-item").width((filterSize - 34) + "px");
        $(".ui-widget-content").css({
            "background": "inherit",
            "color": "inherit",
        });
    },
});

$('.VerticalScrollbarContainer.sf-element.sf-element-scroll-bar.sfpc-right').attr('style', 'display: none');
$('.HorizontalScrollbarContainer.sf-element.sf-element-scroll-bar.sfpc-bottom').attr('style', 'display: none');

var i = 0;
for (i = 0; i <= document.getElementsByClassName("StyledScrollbar").length - 1; i++)
{
	if (document.getElementsByClassName("StyledScrollbar")[i].innerHTML.includes("<span id=\"cssstyle\"></span>"))
	{
		document.getElementsByClassName("StyledScrollbar")[i].style.height = "36px";
	}
}
