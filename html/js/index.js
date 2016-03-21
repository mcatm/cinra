//読み込み時の表示
windowLoad();
//リサイズ時の処理
window.onresize = windowLoad;

function windowLoad() {
	//変数定義
	var SW = window.innerWidth;
	var SH = window.innerHeight;
	var CONTAINER = document.getElementById('container');
	var CONTENTS = document.getElementById('contents');
	var CH =window.document.getElementById('contents').offsetHeight;
	
	//#containerサイズ指定
	CONTAINER.style.width = SW + 'px';
	CONTAINER.style.minHeight = SH + 'px';
	
	//#contentsサイズ指定
	CONTENTS.style.width = SW * 0.5 + 'px';
	//#contents位置指定
	CONTENTS.style.marginLeft= -(SW * 0.25) + 'px';
	CONTENTS.style.marginTop = -(CH * 0.5) + 'px';
	
	//canvas設定
	var CANVAS = document.getElementById('cv');
	var CTX = CANVAS.getContext('2d');
	
	function canvas(){
    var B = document.body;
    var D = document.documentElement;
	
	//canvasサイズ指定
	CANVAS.width = B.clientWidth , B.scrollWidth, D.scrollWidth, D.clientWidth;
	CANVAS.height = B.clientHeight , B.scrollHeight, D.scrollHeight, D.clientHeight;
	
	//斜線描画
	CTX.beginPath();        // パスを初期化する
    CTX.moveTo(0, 0);    // 始点
    CTX.lineTo(CANVAS.width, CANVAS.height);   // 終点
	CTX.strokeStyle = '#ff0000';  //線の色
    CTX.stroke();
	}
	canvas();

}
