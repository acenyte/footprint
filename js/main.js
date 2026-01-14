$(document).ready(function () {
  function calcHeight() {
    var logoHeight = $("header").height();
    var totalHeight = $(window).height();
    $(".main_wrapper").css("height", totalHeight - logoHeight - 1);
  }

  calcHeight();

  $(window).resize(function () {
    calcHeight();
  });

  $(".primary_nav li").hover(
    function () {
      $(this).find(".secondary_nav").css("display", "block");
      $(this)
        .find(".secondary_nav")
        .animate(
          {
            height: "+=" + 96 + "px",
          },
          400
        );
    },
    function () {
      $(this).find(".secondary_nav").css("display", "none");
      $(this)
        .find(".secondary_nav")
        .animate(
          {
            height: "-=" + 96 + "px",
          },
          400
        );
    }
  );
  $(".secondary_nav > li").hover(
    function () {
      $(this)
        .find("> a")
        .animate(
          {
            height: "+=" + 4 + "px",
          },
          300
        );
      $(this).find(".tertiary_nav").css("display", "block");
      $(this)
        .find(".tertiary_nav")
        .animate(
          {
            width: "+=" + 250 + "px",
          },
          400
        );
    },
    function () {
      $(this).find(".tertiary_nav").css("display", "none");
      $(this)
        .find("> a")
        .animate(
          {
            height: "-=" + 4 + "px",
          },
          300
        );
      $(this)
        .find(".tertiary_nav")
        .animate(
          {
            width: "-=" + 250 + "px",
          },
          400
        );
    }
  );
  $(".main_wrapper").vegas({
    preload: false,
    preloadImage: true,
    slides: [
      {
        src: "images/eccelston/Thumbnail.jpg",
        animation: "customAce",
        delay: 13000,
        animationDuration: 13000,
        valign: "bottom",
      },
      {
        src: "images/steyn5046/File 1.jpg",
        animation: "customAce",
        delay: 11000,
        animationDuration: 10000,
        valign: "bottom",
      },
      {
        src: "images/yzer-beach-house/Thumbnail.jpg",
        animation: "customAce",
        delay: 11000,
        animationDuration: 10000,
        valign: "bottom",
      },
      {
        src: "images/steyn2416/File 1.jpg",
        animation: "customAce",
        delay: 11000,
        animationDuration: 10000,
        valign: "bottom",
      },
      {
        src: "images/solomon/File 1.jpg",
        animation: "customAce",
        delay: 12000,
        animationDuration: 12000,
        valign: "bottom",
      },
      {
        src: "images/houghton/File 1.jpg",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
      },
      {
        src: "images/helder5294/File 12.jpg",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
        align: "right",
      },
      {
        src: "images/neighbourhood144/File 12.jpg",
        animation: "customAce",
        delay: 10000,
        animationDuration: 10000,
        valign: "bottom",
      },
      {
        src: "images/cliff/File 3.jpg",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
      },
      {
        src: "images/blair-athol/1.jpg",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
      },
      {
        src: "images/cradle29/File 4.jpg",
        animation: "customAce",
        delay: 10000,
        animationDuration: 10000,
        valign: "bottom",
      },
      {
        src: "images/helder5279/File 1.jpg",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
        align: "right",
      },
      {
        src: "images/eof1512/File 10.jpg",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
        align: "right",
      },
      {
        src: "images/helder5294/File 1.jpg",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
        align: "right",
      },
      {
        src: "images/bluevalley/1.jpg?v=1",
        animation: "customAce",
        delay: 9000,
        animationDuration: 9000,
        valign: "bottom",
        align: "right",
      },
    ],
    walk: function (index) {
      var $control = $("#controls");
      var $info = $("#itemInfo");
      $control.find("li").removeClass("active").eq(index).addClass("active");
      $info.find("li").css("display", "none");
      $info.find("li").eq(index).fadeIn(250);
    },
  });
  $(".submenu ul li").click(checkME);
  $("#itemInfo li").click(checkME);
  $("a.3D").click(checkME);
  $("#controls li").click(function (event) {
    var iDex = $(this).index();
    var $control = $("#controls");
    var $info = $("#itemInfo");
    $control.find("li").removeClass("active").eq(iDex).addClass("active");
    $(".main_wrapper").vegas("jump", iDex);
    $info.find("li").css("display", "none");
    $info.find("li").eq(index).fadeIn(250);
  });
});
$(".WF").click(function () {
  ExitStuff();
  var ImageList = {
    image3: "images/waterfallthree/thumb.jpg",
    image2: "images/waterfalltwo/thumb.jpg",
    image1: "images/waterfallone/thumb.jpg",
  };
  $(".submenu").css("height", 0);
  $(".submenu").animate(
    {
      height: "+=" + 400 + "px",
    },
    300
  );
  $(".submenu > div").css("display", "none");
  $("#WF_MENU").css("display", "block");
  $(".submenu .exit").css("display", "block");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".thumb_side").empty();
  $.each(ImageList, function () {
    $(".thumb_side").prepend(
      '<img src="' + this + '" data-project="' + this + '" />'
    );
  });
  $("#thumb_side img").click(checkME);
  $("#thumb_side img").hover(HLM, LLM);
  $(".thumb_side").fadeIn(300);
  //$(".thumb_side").mCustomScrollbar();
  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");
});
$(".videos").click(function () {
  ExitStuff();
  $(".demo-gallery").fadeIn(300);
  $('#lightgallery').lightGallery({
    plugins: ['lgVideo'],
    videojs: true,
    videojsOptions: {
      muted: true,
    }
  });
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");

  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");
});
$(".EOF").click(function () {
  ExitStuff();


  var ImageList = {
    image5: { img: "images/eof2190/File 1.jpg", label: "Stand 2190" },
    image1: { img: "images/eoffour/thumb.jpg?v=1", label: "Stand 2147" },
    image2: { img: "images/eofthree/thumb.jpg?v=1", label: "Stand 1706" },
    image3: { img: "images/eoftwo/thumb.jpg?v=1", label: "Stand 1678" },
    image4: { img: "images/eofone/thumb.jpg?v=1", label: "Stand 1615" },
    image6: { img: "images/eof1512/File 1.jpg", label: "Stand 1512" },

  };
  $(".submenu").css("height", 0);
  $(".submenu").animate(
    {
      height: "+=" + 400 + "px",
    },
    300
  );
  $(".submenu > div").css("display", "none");
  $("#EOF_MENU").css("display", "block");
  $(".submenu .exit").css("display", "block");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".thumb_side").empty();
  $.each(ImageList, function () {
    $("#thumb_side").prepend(
      "<div class='new-thumbb' data-project='" + this.img + "'>" +
      '<img src="' + this.img + '" data-project="' + this.img + '" />' +
      '<p' + ' data-project="' + this.img + '">' + this.label + '</p></div>'
    );
  });
  $("#thumb_side img").click(checkME);
  $("#thumb_side img").hover(HLM, LLM);
  $(".thumb_side").fadeIn(300);
  //$(".thumb_side").mCustomScrollbar();
  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");
});

$(".CRADLE").click(function () {
  ExitStuff();
  if (lastProject == 'CRADLE') {
    return
  }
  var ImageList = {

    image1: { img: "images/cradle154/File 1.jpg", label: "Cradle Ridge Stand 154" },
    image2: { img: "images/cradle81/File 1.jpg", label: "Cradle Ridge Stand 81" },
    image3: { img: "images/cradle29/File 1.jpg", label: "Cradle Ridge Stand 29" },

  };

  $(".submenu").css("height", 0);
  $(".submenu").animate(
    {
      height: "+=" + 400 + "px",
    },
    300
  );
  $(".submenu > div").css("display", "none");
  $("#CRA_MENU").css("display", "block");
  $(".submenu .exit").css("display", "block");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".thumb_side").empty();

  $.each(ImageList, function () {
    $("#thumb_side").prepend(
      "<div class='new-thumbb' data-project='" + this.img + "'>" +
      '<img src="' + this.img + '" data-project="' + this.img + '" />' +
      '<p' + ' data-project="' + this.img + '">' + this.label + '</p></div>'
    );
  });
  $("#thumb_side img").click(checkME);
  $(".thumb_side").fadeIn(300);
  //$(".thumb_side").mCustomScrollbar();
  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");

  lastProject = 'CRADLE'
});

$(".HELDER").click(function () {
  ExitStuff();
  if (lastProject == 'HELDER') {
    return
  }
  var ImageList = {
    image1: { img: "images/helder5294/File 1.jpg", label: "Helderfontein Stand 5294" },
    image0: { img: "images/helder5279/File 1.jpg", label: "Helderfontein Stand 5279" },
  };

  $(".submenu").css("height", 0);
  $(".submenu").animate(
    {
      height: "+=" + 400 + "px",
    },
    300
  );
  $(".submenu > div").css("display", "none");
  $("#HEL_MENU").css("display", "block");
  $(".submenu .exit").css("display", "block");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".thumb_side").empty();

  $.each(ImageList, function () {
    $("#thumb_side").prepend(
      "<div class='new-thumbb' data-project='" + this.img + "'>" +
      '<img src="' + this.img + '" data-project="' + this.img + '" />' +
      '<p' + ' data-project="' + this.img + '">' + this.label + '</p></div>'
    );
  });
  $("#thumb_side img").click(checkME);
  $("#thumb_side").fadeIn(300);

  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");

  lastProject = 'HELDER'
});
$(".STY").click(function () {
  ExitStuff();
  if (lastProject == 'STY') {
    return
  }
  var ImageList = {
    image2: { img: "images/steyn/thumb.jpg", label: "Stand 5047" },
    image1: { img: "images/steyn5046/File 1.jpg", label: "Stand 5046" },
    image0: { img: "images/steyn2416/File 1.jpg", label: "Stand 2416" },

  };

  $(".submenu").css("height", 0);
  $(".submenu").animate(
    {
      height: "+=" + 400 + "px",
    },
    300
  );
  $(".submenu > div").css("display", "none");
  $("#STE_MENU").css("display", "block");
  $(".submenu .exit").css("display", "block");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".thumb_side").empty();

  $.each(ImageList, function () {
    $("#thumb_side").prepend(
      "<div class='new-thumbb' data-project='" + this.img + "'>" +
      '<img src="' + this.img + '" data-project="' + this.img + '" />' +
      '<p' + ' data-project="' + this.img + '">' + this.label + '</p></div>'
    );
  });
  $("#thumb_side img").click(checkME);
  $("#thumb_side").fadeIn(300);

  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");

  lastProject = 'STY'
});
var lastProject = ''

var ImageList = {
  image6: { img: "images/yzer-beach-house/Thumbnail.jpg", label: "Yzerfontein Beach House" },
  image5: { img: "images/waterfall-maharaj/Thumbnail.jpg", label: "Waterfall Estate 3690" },
  image4: { img: "images/vaal/Thumbnail.jpg", label: "Vaal River Villa" },
  image3: { img: "images/neighbourhood264/Thumbnail.jpg", label: "Neighbourhood Stand 264" },
  image2: { img: "images/neighbourhood144/Thumbnail.jpg", label: "Neighbourhood Stand 144" },
  image1: { img: "images/eccelston/Thumbnail.jpg", label: "Eccleston House" },

};
$("#thumb_side2").empty();
$.each(ImageList, function () {
  $("#thumb_side2").prepend(
    "<div class='new-thumbb' data-project='" + this.img + "'>" +
    '<img src="' + this.img + '" data-project="' + this.img + '" />' +
    '<p' + ' data-project="' + this.img + '">' + this.label + '</p></div>'
  );
});

$("#thumb_side2 .new-thumbb").click(checkME);
$("#thumb_side2").fadeIn(300);
$("#thumb_side2").mCustomScrollbar();
$("#thumb_side2 #mCSB_1").prepend("<img class='exit' src='images/icon_exit_blank.png'>");
$("#thumb_side2 .exit").click(ExitStuff);
$(".thumb_side2").hide();

$(".gallery").click(function () {
  ExitStuff();
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".thumb_side2").show();
  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");
});

$(".NHB").click(function () {
  ExitStuff();
 

  var ImageList = {
    image3: { img: "images/neighbourhood264/Thumbnail.jpg", label: "Stand 264" },
    image5: { img: "images/neighbourhood/thumb.jpg", label: "Stand 261" },
    image6: { img: "images/neighbourhood2/thumb.jpg", label: "Stand 199" },
    image2: { img: "images/neighbourhood144/Thumbnail.jpg", label: "Stand 144" },
  
  };
  $(".submenu").css("height", 0);
  $(".submenu").animate(
    {
      height: "+=" + 400 + "px",
    },
    300
  );
  $(".submenu > div").css("display", "none");
  $("#NHB_MENU").css("display", "block");
  $(".submenu .exit").css("display", "block");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".thumb_side").empty();
  $.each(ImageList, function () {
    $("#thumb_side").prepend(
      "<div class='new-thumbb' data-project='" + this.img + "'>" +
      '<img src="' + this.img + '" data-project="' + this.img + '" />' +
      '<p' + ' data-project="' + this.img + '">' + this.label + '</p></div>'
    );
  });
  $("#thumb_side img").click(checkME);
  $("#thumb_side img").hover(HLM, LLM);
  $(".thumb_side").fadeIn(300);
  //$(".thumb_side").mCustomScrollbar();
  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  $("#serviceWrap").css("height", "0px");
  $("#aboutWrap").css("height", "0px");
});


$(".MON").click(checkME);
$(".XAN").click(checkME);
$(".BLU").click(checkME);
$(".LEO").click(checkME);
$(".PARK").click(checkME);
$(".YZE").click(checkME);
$(".COMM1").click(checkME);
$(".BLU2").click(checkME);
$(".NIC").click(checkME);

$(".BLA").click(checkME);
$(".COMM2").click(checkME);
$(".DEV1").click(checkME);
$(".UNK").click(checkME);


$("#phoneimg").click(function () {
  $("#extra").animate(
    {
      height: "+=" + 100 + "px",
    },
    400
  );
});
$("#extra img").click(function () {
  $("#extra").animate(
    {
      height: "-=" + 100 + "px",
    },
    400
  );
});


$(".services").click(function () {
  ExitStuff();
  $(".thumb_side2").hide();
  $(".demo-gallery").hide();
  $("#serviceWrap").animate(
    {
      height: "+=" + 230 + "px",
    },
    350
  );
  $(".services").attr("disabled", true);
  $(".about").attr("disabled", false);
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".submenu").css("height", 0);
  $(".submenu > div").css("display", "none");
  $(".submenu .exit").css("display", "none");
  $(".thumb_side").empty();
  $("#aboutWrap").css("height", "0px");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
});
$("#serviceWrap .exit").click(function () {
  $("#serviceWrap").animate(
    {
      height: "-=" + 230 + "px",
    },
    250
  );
  $("#controls").css("display", "block");
  $("#itemInfo").css("display", "block");
});
$(".about").click(function () {
  ExitStuff();
  $(".thumb_side2").hide();
  $(".demo-gallery").hide();
  $("#aboutWrap").animate(
    {
      height: "+=" + 510 + "px",
    },
    350
  );
  $(".about").attr("disabled", true);
  $(".services").attr("disabled", false);
  $(".main_wrapper").addClass("blurred");
  $(".main_wrapper").vegas("pause");
  $(".submenu").css("height", 0);
  $(".submenu > div").css("display", "none");
  $(".submenu .exit").css("display", "none");
  $(".thumb_side").empty();
  $("#serviceWrap").css("height", "0px");
  $("#controls").css("display", "none");
  $("#itemInfo").css("display", "none");
});
$("#aboutWrap .exit").click(function () {
  $("#aboutWrap").animate(
    {
      height: "-=" + 510 + "px",
    },
    250
  );
  $("#controls").css("display", "block");
  $("#itemInfo").css("display", "block");
});


$(".submenu ul li").hover(HLM, LLM);
$(".exit").click(ExitStuff);


function ExitStuff() {
  $(".demo-gallery").hide();

  $(".submenu").css("height", 0);
  $(".submenu > div").css("display", "none");
  $(".submenu .exit").css("display", "none");
  $("#controls").css("display", "block");
  $("#itemInfo").css("display", "block");
  $(".main_wrapper").removeClass("blurred");
  $(".main_wrapper").vegas("play");
  $(".thumb_side").empty();

  $(".thumb_side2").hide();
  $(".services").attr("disabled", false);
  $(".about").attr("disabled", false);
  lastProject = ''

}
function LLM() {
  var iDex = $(this).index();
  $("#thumb_side img").eq(iDex).removeClass("HL");
  $(".submenu ul:visible li").eq(iDex).css("font-weight", "normal");
}
function HLM() {
  var iDex = $(this).index();
  console.log(iDex)
  $("#thumb_side img").eq(iDex).addClass("HL");
  $(".submenu ul:visible li").eq(iDex).css("font-weight", "bold");
}
function checkME(e) {
  if (!e) e = window.event;
  var eTis = e.target || e.srcElement;
  var iName = $(eTis).data("project");
  var folderName = "";
  console.log(iName)
  switch (iName) {
    case "images/yzer-beach-house/Thumbnail.jpg":
      folderName = "yzer-beach-house";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/Thumbnail.jpg",
            thumb: "images/" + folderName + "/Thumbnail.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/9.jpg",
            thumb: "images/" + folderName + "/9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/10.jpg",
            thumb: "images/" + folderName + "/10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/11.jpg",
            thumb: "images/" + folderName + "/11.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/12.jpg",
            thumb: "images/" + folderName + "/12.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/13.jpg",
            thumb: "images/" + folderName + "/13.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/14.jpg",
            thumb: "images/" + folderName + "/14.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/15.jpg",
            thumb: "images/" + folderName + "/15.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/16.jpg",
            thumb: "images/" + folderName + "/16.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/17.jpg",
            thumb: "images/" + folderName + "/17.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/18.jpg",
            thumb: "images/" + folderName + "/18.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/19.jpg",
            thumb: "images/" + folderName + "/19.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/20a.jpg",
            thumb: "images/" + folderName + "/20a.jpg",
            subHtml: "",
          },


        ],
      });
      break;
    case "images/waterfall-maharaj/Thumbnail.jpg":
      folderName = "waterfall-maharaj";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/Thumbnail.jpg",
            thumb: "images/" + folderName + "/Thumbnail.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/Maharaj 1.jpg",
            thumb: "images/" + folderName + "/Maharaj 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/Maharaj View 2.jpg",
            thumb: "images/" + folderName + "/Maharaj View 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/Maharaj View 4.jpg",
            thumb: "images/" + folderName + "/Maharaj View 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/Maharaj View 6.jpg",
            thumb: "images/" + folderName + "/Maharaj View 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/Maharaj View 7.jpg",
            thumb: "images/" + folderName + "/Maharaj View 7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/Maharaj View 10.jpg",
            thumb: "images/" + folderName + "/Maharaj View 10.jpg",
            subHtml: "",
          },



        ],
      });
      break;
    case "images/vaal/Thumbnail.jpg":
      folderName = "vaal";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/Thumbnail.jpg",
            thumb: "images/" + folderName + "/Thumbnail.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 7.jpg",
            thumb: "images/" + folderName + "/File 7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 8.jpg",
            thumb: "images/" + folderName + "/File 8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 9.jpg",
            thumb: "images/" + folderName + "/File 9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 10.jpg",
            thumb: "images/" + folderName + "/File 10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 11.jpg",
            thumb: "images/" + folderName + "/File 11.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 12.jpg",
            thumb: "images/" + folderName + "/File 12.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 13.jpg",
            thumb: "images/" + folderName + "/File 13.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 14.jpg",
            thumb: "images/" + folderName + "/File 14.jpg",
            subHtml: "",
          },



        ],
      });
      break;
    case "images/neighbourhood264/Thumbnail.jpg":
      folderName = "neighbourhood264";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/Thumbnail.jpg",
            thumb: "images/" + folderName + "/Thumbnail.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 7.jpg",
            thumb: "images/" + folderName + "/File 7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 8.jpg",
            thumb: "images/" + folderName + "/File 8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 9.jpg",
            thumb: "images/" + folderName + "/File 9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 10.jpg",
            thumb: "images/" + folderName + "/File 10.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case "images/neighbourhood144/Thumbnail.jpg":
      folderName = "neighbourhood144";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/Thumbnail.jpg",
            thumb: "images/" + folderName + "/Thumbnail.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 7.jpg",
            thumb: "images/" + folderName + "/File 7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 8.jpg",
            thumb: "images/" + folderName + "/File 8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 9.jpg",
            thumb: "images/" + folderName + "/File 9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 10.jpg",
            thumb: "images/" + folderName + "/File 10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 11.jpg",
            thumb: "images/" + folderName + "/File 11.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 12.jpg",
            thumb: "images/" + folderName + "/File 12.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 13.jpg",
            thumb: "images/" + folderName + "/File 13.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 14.jpg",
            thumb: "images/" + folderName + "/File 14.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case "images/neighbourhood/thumb.jpg":
      folderName = "neighbourhood";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/0.jpg",
            thumb: "images/" + folderName + "/0.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/neighbourhood2/thumb.jpg":
      folderName = "neighbourhood2";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/0.jpg",
            thumb: "images/" + folderName + "/0.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/eccelston/Thumbnail.jpg":
      folderName = "eccelston";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/Thumbnail.jpg",
            thumb: "images/" + folderName + "/Thumbnail.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 7.jpg",
            thumb: "images/" + folderName + "/File 7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 8.jpg",
            thumb: "images/" + folderName + "/File 8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 9.jpg",
            thumb: "images/" + folderName + "/File 9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 10.jpg",
            thumb: "images/" + folderName + "/File 10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 11.jpg",
            thumb: "images/" + folderName + "/File 11.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 12.jpg",
            thumb: "images/" + folderName + "/File 12.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 13.jpg",
            thumb: "images/" + folderName + "/File 13.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 14.jpg",
            thumb: "images/" + folderName + "/File 14.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 15.jpg",
            thumb: "images/" + folderName + "/File 15.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 16.jpg",
            thumb: "images/" + folderName + "/File 16.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 17.jpg",
            thumb: "images/" + folderName + "/File 17.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 18.jpg",
            thumb: "images/" + folderName + "/File 18.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 19.jpg",
            thumb: "images/" + folderName + "/File 19.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 20.jpg",
            thumb: "images/" + folderName + "/File 20.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 21.jpg",
            thumb: "images/" + folderName + "/File 21.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 22.jpg",
            thumb: "images/" + folderName + "/File 22.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 23.jpg",
            thumb: "images/" + folderName + "/File 23.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 24.jpg",
            thumb: "images/" + folderName + "/File 24.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 25.jpg",
            thumb: "images/" + folderName + "/File 25.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 26.jpg",
            thumb: "images/" + folderName + "/File 26.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 27.jpg",
            thumb: "images/" + folderName + "/File 27.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 28.jpg",
            thumb: "images/" + folderName + "/File 28.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 29.jpg",
            thumb: "images/" + folderName + "/File 29.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case "images/steyn/thumb.jpg":
      folderName = "steyn";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/0.jpg",
            thumb: "images/" + folderName + "/0.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/nicolaides/thumb.jpg":
      folderName = "nicolaides";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/8.jpg",
            thumb: "images/" + folderName + "/8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/9.jpg",
            thumb: "images/" + folderName + "/9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/10.jpg",
            thumb: "images/" + folderName + "/10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/11.jpg",
            thumb: "images/" + folderName + "/11.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/12.jpg",
            thumb: "images/" + folderName + "/12.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/13.jpg",
            thumb: "images/" + folderName + "/13.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/14.jpg",
            thumb: "images/" + folderName + "/14.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/15.jpg",
            thumb: "images/" + folderName + "/15.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/16.jpg",
            thumb: "images/" + folderName + "/16.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/monaghanfarm/thumb.jpg":
      folderName = "monaghanfarm";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/waterfallone/thumb.jpg":
      folderName = "waterfallone";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/waterfalltwo/thumb.jpg":
      folderName = "waterfalltwo";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/waterfallthree/thumb.jpg":
      folderName = "waterfallthree";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/xanadu/thumb.jpg":
      folderName = "xanadu";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/silverton/thumb.jpg":
      folderName = "silverton";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/8.jpg",
            thumb: "images/" + folderName + "/8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/9.jpg",
            thumb: "images/" + folderName + "/9.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/eofone/thumb.jpg?v=1":
      folderName = "eofone";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/eoftwo/thumb.jpg?v=1":
      folderName = "eoftwo";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/8.jpg",
            thumb: "images/" + folderName + "/8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/9.jpg",
            thumb: "images/" + folderName + "/9.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/eofthree/thumb.jpg?v=1":
      folderName = "eofthree";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/eoffour/thumb.jpg?v=1":
      folderName = "eoffour";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/3d":
      folderName = "3d";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/bluevalley/thumb.jpg?v=1":
      folderName = "bluevalley";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg?v=1",
            thumb: "images/" + folderName + "/1.jpg?v=1",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg?v=1",
            thumb: "images/" + folderName + "/2.jpg?v=1",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg?v=1",
            thumb: "images/" + folderName + "/3.jpg?v=1",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/leo/thumb.jpg":
      folderName = "leo";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/8.jpg",
            thumb: "images/" + folderName + "/8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/9.jpg",
            thumb: "images/" + folderName + "/9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/10.jpg",
            thumb: "images/" + folderName + "/10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/10.jpg",
            thumb: "images/" + folderName + "/10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/11.jpg",
            thumb: "images/" + folderName + "/11.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/yzer/thumb.jpg":
      folderName = "yzer";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/2.jpg",
            thumb: "images/" + folderName + "/2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/8.jpg",
            thumb: "images/" + folderName + "/8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/9.jpg",
            thumb: "images/" + folderName + "/9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/10.jpg",
            thumb: "images/" + folderName + "/10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/11.jpg",
            thumb: "images/" + folderName + "/11.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/12.jpg",
            thumb: "images/" + folderName + "/12.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/13.jpg",
            thumb: "images/" + folderName + "/13.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/14.jpg",
            thumb: "images/" + folderName + "/14.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/parkmore/thumb.jpg":
      folderName = "parkmore";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },

          {
            src: "images/" + folderName + "/3.jpg",
            thumb: "images/" + folderName + "/3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/4.jpg",
            thumb: "images/" + folderName + "/4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/5.jpg",
            thumb: "images/" + folderName + "/5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/6.jpg",
            thumb: "images/" + folderName + "/6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/7.jpg",
            thumb: "images/" + folderName + "/7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/8.jpg",
            thumb: "images/" + folderName + "/8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/9.jpg",
            thumb: "images/" + folderName + "/9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/10.jpg",
            thumb: "images/" + folderName + "/10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/10.jpg",
            thumb: "images/" + folderName + "/10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/11.jpg",
            thumb: "images/" + folderName + "/11.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/bluehills/thumb.jpg":
      folderName = "bluehills";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/blair-athol/thumb.jpg":
      folderName = "blair-athol";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/1.jpg",
            thumb: "images/" + folderName + "/1.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/boka":
      folderName = "boka";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/reserve/thumb.jpg":
      folderName = "reserve";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 0.jpg",
            thumb: "images/" + folderName + "/File 0.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case "images/cliff":
      folderName = "cliff";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [

          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },


        ],
      });
      break;
    case "images/cradle81/File 1.jpg":
      folderName = "cradle81";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [

          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 7.jpg",
            thumb: "images/" + folderName + "/File 7.jpg",
            subHtml: "",
          },



        ],
      });
      break;
    case "images/cradle154/File 1.jpg":
      folderName = "cradle154";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case "images/cradle29/File 1.jpg":
      folderName = "cradle29";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },




        ],
      });
      break;
    case "images/helder5279/File 1.jpg":
      folderName = "helder5279";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [

          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case "images/helder5294/File 1.jpg":
      folderName = "helder5294";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 7.jpg",
            thumb: "images/" + folderName + "/File 7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 8.jpg",
            thumb: "images/" + folderName + "/File 8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 9.jpg",
            thumb: "images/" + folderName + "/File 9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 10.jpg",
            thumb: "images/" + folderName + "/File 10.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 11.jpg",
            thumb: "images/" + folderName + "/File 11.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 12.jpg",
            thumb: "images/" + folderName + "/File 12.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case 'images/eof1512/File 1.jpg':
      folderName = "eof1512";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 6.jpg",
            thumb: "images/" + folderName + "/File 6.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 7.jpg",
            thumb: "images/" + folderName + "/File 7.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 8.jpg",
            thumb: "images/" + folderName + "/File 8.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 9.jpg",
            thumb: "images/" + folderName + "/File 9.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 10.jpg",
            thumb: "images/" + folderName + "/File 10.jpg",
            subHtml: "",
          },


        ],
      });
      break;
    case 'images/eof2190/File 1.jpg':
      folderName = "eof2190";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case 'images/houghton/File 1.jpg':
      folderName = "houghton";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case 'images/solomon/File 1.jpg':
      folderName = "solomon";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 4.jpg",
            thumb: "images/" + folderName + "/File 4.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 5.jpg",
            thumb: "images/" + folderName + "/File 5.jpg",
            subHtml: "",
          },
        ],
      });
      break;
    case 'images/steyn5046/File 1.jpg':
      folderName = "steyn5046";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },

        ],
      });
      break;
    case 'images/steyn2416/File 1.jpg':
      folderName = "steyn2416";
      $(this).lightGallery({
        dynamic: true,
        dynamicEl: [
          {
            src: "images/" + folderName + "/File 1.jpg",
            thumb: "images/" + folderName + "/File 1.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 2.jpg",
            thumb: "images/" + folderName + "/File 2.jpg",
            subHtml: "",
          },
          {
            src: "images/" + folderName + "/File 3.jpg",
            thumb: "images/" + folderName + "/File 3.jpg",
            subHtml: "",
          },

        ],
      });
      break;

  }
  $(".demo-gallery").hide(0);
}
