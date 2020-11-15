
moduleInit()

function moduleInit() {

    //仿真按钮
    $("#iqrrl-route-simulate-btn").click(function () {
        $(".iqrrl-route-tab .not-start-hint").css("display", "none");
        $(".iqrrl-route-tab .loading-hint").css("display", "block");

        // $.ajax({
        //     type: "get",
        //     url: "http://" + HOST_ADDR + ":" + ,
        //     contentType: "application/json",
        //     dataType:"json",    //一定要加，否则返回不一定是json对象
        //     success: function (msg) {
        //
        //         //如果session中存有信息
        //         if (msg.status === 0) {
        //             console.log(msg);
        //             window.location.href = "/modules/service1";
        //         } else {
        //             console.log(msg);
        //         }
        //     }
        // });

        //模拟延迟
        setTimeout(function () {
            $(".iqrrl-route-tab .loading-hint").css("display", "none");
            $(".iqrrl-route-content").css("display", "block")
        }, 2000);

    });

    //清除记录按钮
    $("#iqrrl-route-clear-history").click(function () {
        layui.use(['layer'], function () {
            const layer = layui.layer;
            layer.alert("清除路由协议记录");
        })

    });
}