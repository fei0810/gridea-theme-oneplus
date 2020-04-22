//回到顶部
(function () {
    var backTop = document.getElementById("back_to_top");
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop ?
            document.documentElement.scrollTop :
            document.body.scrollTop;
    }
    var id;
    backTop.onclick = function () {
        id = setInterval(function () {
            var current = document.documentElement.scrollTop ?
                document.documentElement.scrollTop :
                document.body.scrollTop;
            if (current === 0) {
                clearInterval(id);
            }
            document.documentElement.scrollTop = current - 100;
            document.body.scrollTop = current - 100;
        }, 16)
    }
})();

//表格滚动条
[].slice.call(document.querySelectorAll('table')).forEach(function(el){
    var wrapper = document.createElement('div');
    wrapper.className = 'table-area';
    el.parentNode.insertBefore(wrapper, el);
    el.parentNode.removeChild(el);
    wrapper.appendChild(el);
})