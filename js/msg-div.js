
moduleInit();

function moduleInit() {
    //仿真按钮增加监听
    $("#msg-div-simulate-btn").click(function () {
        $(".msg-div-tab .not-start-hint").css("display", "none");
        $(".msg-div-tab .loading-hint").css("display", "block");
        setTimeout(function() {
            $(".msg-div-tab .loading-hint").css("display", "none");
            $(".msg-div-delay-content, .msg-div-throughput-content").css("display", "block");
        }, 2000);

    });

    //清除记录增加监听
    $("#clear-msg-div-history").click(function () {
        // $(".msg-div-delay-content, .msg-div-throughput-content").css("display", "none");
        // // $(".msg-div-tab .loading-hint").css("display", "none");
        // $(".msg-div-tab .not-start-hint").css("display", "block");

    })
}

