
moduleInit()

function moduleInit() {
    //仿真按钮
    $("#iqrrl-route-simulate-btn").click(function () {
        $(".iqrrl-route-tab .not-start-hint").css("display", "none");
        $(".iqrrl-route-tab .loading-hint").css("display", "block");

        //模拟延迟
        setTimeout(function () {
            $(".iqrrl-route-tab .loading-hint").css("display", "none");
            $(".iqrrl-route-content").css("display", "block")
        }, 2000)
    });

    //清除记录按钮
}