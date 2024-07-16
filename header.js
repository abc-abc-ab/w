'use strict';

    let liStyle = `margin-bottom: 6px;`;

    document.getElementById("head").insertAdjacentHTML("beforebegin",
        `<div style="display:block;position:static;" id="first"></div>`
    );
    document.getElementById("head").insertAdjacentHTML("afterbegin", 
        `<a href="/index.html?from=icon"><img src="/favicon.ico" id="logo"></a>`+
        // pcメニュー
        `<div class="menu pc">`+
        `<ul>`+
        `<li><a class="button" href="/w/blog/">ブログ</a></li>`+
        `<li><a class="button" href="/w/morse/">モールス信号</a></li>`+
        `<li><a class="button" href="/w/codepen/">CodePen集</a></li>`+
        `<li><a class="button" href="/w/canvas/">Canvas</a></li>`+
        `</ul>`+
        `</div>`+// 終了
        `<ul class="right"><li style="${liStyle}"><a class="button" href="/w/login/">ログイン</a></li>`+
        `<li><a class="button" href="/w/login/new.html">新規アカウント登録</a></li></ul>`+
        // ハンバーガーメニュー
        `<div class="nav sp right" style="margin-left: 0;">`+
        `<input id="Input" class="hidden" type="checkbox">`+
        `<label for="Input" class="open"><span></span></label>`+
        `<nav class="nav_content"><ul class="nav_list">`+
            // 中身
            `<li class="nav_item"><a href="/w/blog/">ブログ</a></li>`+
            `<li class="nav_item"><a href="/w/morse/">モールス信号</a></li>`+
            `<li class="nav_item"><a href="/w/codepen/">CodePen集</a></li>`+
            `<li class="nav_item"><a href="/w/canvas/">Canvas</a></li>`+
            // 終了
        `</ul></nav>`+
        `</div>`
        // 終了
    );
'end strict';
/**
    <div class="nav">
        <!-- ハンバーガーメニューの表示・非表示を切り替えるチェックボックス -->
        <input id="Input" class="hidden" type="checkbox">

        <!-- ハンバーガーアイコン -->
        <label for="Input" class="open"><span></span></label>

        <!-- メニュー -->
        <nav class="nav_content">
            <ul class="nav_list">
                <li class="nav_item"><a href=""></a></li>
            </ul>
        </nav>
    </div>
*/
