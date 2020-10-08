function showBookDetail() {
			document.getElementById("book-title").innerHTML = 
			'<span style="color: #ff1040;">楽の音は海をこえて</span>';
			document.getElementById("book-detail").innerHTML = 
			'<hr color="#ffffff" /><br /><br />' +
			'<div class="content-text">' +
			'<p>1961年（昭和36年）、大村多喜子を加えて、富永三郎、深井利江、宅孝二、林記子、青木十良の六人が「ソルフェージスクール」を開校する。</p>' +
			'<p>現在の西洋音楽教育では、楽器を演奏するための、あるいは歌をうたうための基礎ができていない。<br />' +
			'こども達はひたすら先生の言うことを聞いて、そのとおりに演奏しているだけである。音楽をたのしんでいない。自分自身で考えていない。</p>' +
			'<p>こども達が自ら楽譜に記されたことを的確に読みとり、記されていないことまでも感じとり、作品全体を把握できるように導くには、どのようにしたらよいのか。<br />' +
			'強制的に教え込むのではなく、楽しく音楽させること。小さいときから体で音楽に親しむ環境を整えてあげること―。</p>' +
			'<p>そのために、フランスやベルギーを中心として行われている音楽の基礎教育、ソルフェージ<small><b>*1</b></small> を取り入れる。<br />' +
			'<p>創設者の大村多喜子と「音楽芸術研究会」の仲間たちの、こどもたちの音楽教育についての考えである。</p>' +
			'<p> <small><b>*1:</b>&emsp;[solf&egrave;ge (仏語) ソルフェージュとも表記する] </small></p><br />' +
			'<p class="content-small-text" style="color: #ff1040;">―ソルフェージスクール創設者　大村多喜子―【楽の音は海をこえて】より</p><br /></div>' ;
}

function showBookPopup() {
	showBookDetail();
	 document.getElementById("bookPopup").scrollTop = 0;
	 document.getElementById("bookPopup").style.display = "block";
	 document.getElementById("popupBookCloseBtn").style.display = "block";
}

function closeBookPopup() {
	 showBookPopup();
	 document.getElementById("bookPopup").style.display = "none";
	 document.getElementById("popupBookCloseBtn").style.display = "none";
}

