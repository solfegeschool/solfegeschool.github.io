$(document).ready(function() {
	var pagetop = $('.pagetop');
	var wolf = $('.bg-aboutTop');
	var aboutUs = $('.bg-about');
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			pagetop.fadeIn();
			// wolf.css('visibility','visible').fadeIn('slow');
			// aboutUs.css('visibility','visible').fadeIn('slow');
		} else {
			pagetop.fadeOut();
		}
	});
	
	$(function() {
	    $("img").on('contextmenu', function(e) {
	        return false;
	    });
	});    

	$(function() {
		$('a[href^="#"]').click(function() {
			var velocidad = 400;
			var href = $(this).attr("href");
			var target = $(href == "#" || href == "" ? 'html' : href);
			var position = target.offset().top;
			$('body,html').animate({scrollTop:position}, velocidad, 'swing');
			return false;
		});
	});

})

function showCourseDetail(index) {
	switch(index) {
		case 0:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #DAA520;">ソルフェージ科<br />器楽・声楽科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator01.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">幼児～成人<br />初めての方から上級の方まで。</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><p><b>内容:&emsp;</b></p></td>' +
					'<td>当スクールのメインクラスです。<br />' +
					'<p>初めての方は、まず、ソルフェージ科のみを受講して下さい。<br />' +
					'経験のある方は、両科目を受けていただいても、ソルフェージ科のみ受けていただいても構いません。<br />' +
					'ソルフェージ科にはリトミックを含みます。（7、8歳まで）<br />' +
					'レッスンの曜日と時間は、相談をして決めます。<br />' +
					'器楽・声楽科はいずれのクラスも個人レッスンです。</p>' +
					'年間レッスン40回 + 夏季レッスン1回</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  First Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#DAA520" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="6"><p><b>ソルフェージ科</b></p></td>' +
				'</tr><tr>' +
				'<th>クラス</th>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>入室金<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'<th>冷暖房費</th>' +
				'</tr><tr>' +
					'<td>個人</td>' +
					'<td>30分</td>' +
					'<td>月額8,000円</td>' +
					'<td rowspan="4">20,000円</td>' +
					'<td rowspan="4">月額<br />1口300円×4口以上</td>' +
					'<td rowspan="4">月額450円<br /><small>（税込額）</small></td>' +
				'</tr><tr>' +
					'<td>個人（大人）</td>' +
					'<td>45分</td>' +
					'<td>月額10,000円</td>' +
				'</tr><tr>' +
					'<td>個人（大人）</td>' +
					'<td>60分</td>' +
					'<td>月額12,000円</td>' +
				'</tr><tr>' +
					'<td>グループ</td>' +
					'<td>45分</td>' +
					'<td>月額8,000円</td>' +
				'</tr>' +
			'</tbody></table><br />' +
			
			// #####  Second Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#DAA520" style="border-collapse:collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="6"><p><b>器楽・声楽科</b></p></td>' +
				'</tr><tr>' +
				'<th>クラス</th>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>入室金<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'<th>冷暖房費</th>' +
				'</tr><tr>' +
					'<td>初級</td>' +
					'<td>30分</td>' +
					'<td>月額9,000円</td>' +
					'<td rowspan="5">20,000円</td>' +
					'<td rowspan="5">月額<br />1口300円×4口以上</td>' +
					'<td rowspan="5">月額450円<br /><small>（税込額）</small></td>' +
				'</tr><tr>' +
					'<td>中級A</td>' +
					'<td>30分</td>' +
					'<td>月額10,000円</td>' +
				'</tr><tr>' +
					'<td>中級B</td>' +
					'<td>45分</td>' +
					'<td>月額11,000円</td>' +
				'</tr><tr>' +
					'<td>上級A</td>' +
					'<td>45分</td>' +
					'<td>月額11,000円</td>' +
				'</tr><tr>' +
					'<td>上級B</td>' +
					'<td>60分</td>' +
					'<td>月額12,000円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 1:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #770000;">ソルフェージ専科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator02.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象：</b></td>' +
					'<td valign="top">音大受験生や音大生など、ソルフェージを専門的になさりたい方</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容：</b></td>' +
					'<td valign="top">いずれのクラスも個人レッスンです。<br />' +
					'<p>レッスンの曜日と時間は、相談をして決めます。<br />' +
					'年間レッスン40回 + 夏季レッスン1回</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#770000" style="border-collapse:collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="6"><p><b>ソルフェージ専科 </b></p></td>' +
				'</tr><tr>' +
				'<th>クラス</th>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>入室金<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'<th>冷暖房費</th>' +
				'</tr><tr>' +
					'<td>A</td>' +
					'<td>30分</td>' +
					'<td>月額8,000円</td>' +
					'<td rowspan="3">20,000円</td>' +
					'<td rowspan="3">月額<br />1口300円×4口以上</td>' +
					'<td rowspan="4">月額450円<br /><small>（税込額）</small></td>' +
				'</tr><tr>' +
					'<td>B</td>' +
					'<td>45分</td>' +
					'<td>月額12,000円</td>' +
				'</tr><tr>' +
					'<td>C</td>' +
					'<td>60分</td>' +
					'<td>月額16,000円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 2:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #0e5691;">器楽・声楽専科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator01.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象：</b></td>' +
					'<td valign="top">中学生以上<br />器楽・声楽経験のある方</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容：</b></td>' +
					'<td valign="top">すでに基礎を身につけている方の為のクラスです。<br />' +
					'<p>いずれのクラスも個人レッスンです。<br />' +
					'レッスンの曜日と時間は、相談をして決めます。<br/>' +
					'年間レッスン40回 + 夏季レッスン1回</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#0e5691" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="6"><p><b>器楽・声楽専科 </b></p></td>' +
				'</tr><tr>' +
				'<th>クラス</th>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>入室金<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'<th>冷暖房費</th>' +
				'</tr><tr>' +
					'<td>初級</td>' +
					'<td>30分</td>' +
					'<td>月額13,000円</td>' +
					'<td rowspan="3">20,000円</td>' +
					'<td rowspan="3">月額<br />1口300円×4口以上</td>' +
					'<td rowspan="4">月額450円<br /><small>（税込額）</small></td>' +
				'</tr><tr>' +
					'<td>中級</td>' +
					'<td>45分</td>' +
					'<td>月額15,000円</td>' +
				'</tr><tr>' +
					'<td>上級</td>' +
					'<td>60分</td>' +
					'<td>月額16,000円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 3:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #55cfc1;">成人月&ensp;2回<br />器楽・声楽専科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator02.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">成人<br />器楽・声楽経験のある方</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容：</b></td>' +
					'<td valign="top">すでに基礎を身につけている大人の方で、毎週は通えない方の為のクラスです。<br />' +
					'<p>いずれのクラスも個人レッスンです。<br />' +
					'レッスンの曜日と時間は、相談をして決めます。<br/>' +
					'年間レッスン22回 + 夏季レッスン1回</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#55cfc1" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="6"><p><b>成人月2回&ensp;器楽・声楽専科 </b></p></td>' +
				'</tr><tr>' +
				'<th>クラス</th>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>入室金<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'<th>冷暖房費</th>' +
				'</tr><tr>' +
					'<td>初級</td>' +
					'<td>45分</td>' +
					'<td>月額10,000円</td>' +
					'<td rowspan="3">20,000円</td>' +
					'<td rowspan="3">月額<br />1口300円×4口以上</td>' +
					'<td rowspan="3">授業料に含む</td>' +
				'</tr><tr>' +
					'<td>中級</td>' +
					'<td>45分</td>' +
					'<td>月額11,000円</td>' +
				'</tr><tr>' +
					'<td>上級</td>' +
					'<td>60分</td>' +
					'<td>月額13,000円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 4:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #007767;">室内楽科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator01.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">高校生以上<br />室内楽科クラス生の推薦を受けた方、及び、器楽経験上級者</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容:&emsp;</b></td>' +
					'<td valign="top">こちらのクラスはレベルの高いクラスになります。<br />' +
					'<p>入室前に1度見学にお越し下さい。<br />' +
					'10:30～12:30:&emsp;弦楽合奏<br />' +
					'13:30～15:00:&emsp;トリオ, カルテット等の室内楽（ピアノ、管楽器も含む）<br/>' +
					'月2回日曜日開講。<br/>' +
					'年間レッスン22回　(8月は休み)</p>' +
					'</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>指導教師:&emsp;</b></td>' +
					'<td valign="top">青木十良氏を引き継いだ林徹也氏(元シュトゥットガルト室内管弦楽団首席ヴィオラ奏者）が指導します</p></td>' +
				'</tr>' +
			'</table>' +
			'<p>「ソルフェージスクール室内合奏団」を編成し、さまざまな場で演奏します</p><br />' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#007767" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="5"><p><b>室内楽科</b></p></td>' +
				'</tr><tr>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>入室金<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'<th>冷暖房費</th>' +
				'</tr><tr>' +
					'<td><small><b>9:15～10:00</b><br />午後のレッスン準備時間<br /><b>10:00～10:30</b><br />午前のレッスン準備時間<br /><b>10:30～12:30</b><br />午前のレッスン<br /><b>13:30～15:00</b><br />午後のレッスン</small></td>' +
					'<td>月額10,000円</td>' +
					'<td>20,000円</td>' +
					'<td>月額<br />1口300円×4口以上</td>' +
					'<td>月額225円<br /><small>（税込額）</small></td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 5:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #e67767;">コーラス科<br />レ・グルヌイユ</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator02.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象：</b></td>' +
					'<td valign="top">高校生以上<br />男声女声どなたでも</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容：</b></td>' +
					'<td valign="top">月1回土曜日開講。<br />' +
					'<p>（レッスン日は固定せず、参加者の協議で翌月の日程を決めています）<br />' +
					'年間レッスン11回　(8月は休み)</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#e67767" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="3"><p><b>コーラス科 </b></p></td>' +
				'</tr><tr>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'</tr><tr>' +
					'<td>10時30分から12時</td>' +
					'<td>月額2,700円</td>' +
					'<td>月額300円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 6:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #182436;">リコーダー<br />アンサンブル科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator01.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">リコーダー演奏の経験のある方</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容:&emsp;</b></td>' +
					'<td valign="top">ソプラノ、アルト、テナー、バス等のリコーダーによる三重奏以上のアンサンブルレッスンです。<br />' +
					'<p>月2回火曜日または木曜日開講。<br />' +
					'（レッスン日は固定せず、参加者の協議で翌月の日程を決めています）</p>' +
					'年間レッスン22回 （8月は休み）</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#182436" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="3"><p><b>リコーダーアンサンブル科</b></p></td>' +
				'</tr><tr>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'</tr><tr>' +
					'<td>19時30分から21時</td>' +
					'<td>月額3,000円</td>' +
					'<td>月額600円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 7:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #ffad10;">大人のための<br />基礎音楽入門科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator02.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">音楽をはじめたいが何からはじめて良いのかわからない方<br />' +
					'楽器をやっているが実はリズムは曖昧に演奏している方<br />' +
					'子供のころやっていた楽器を再開したいが音符の読みを忘れてしまった方</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>詳細:&emsp;</b></td>' +
					'<td valign="top"><a href="./doc/event/fundCourse2018.pdf"> PDF</a></td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>リンク:&emsp;</b></td>' +
					'<td valign="top"><a href="https://www.facebook.com/events/105153570412457/"> Facebook</a></td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容:&emsp;</b></p></td>' +
					'<td valign="top">ソルフェージスクールが長年培ってきた教材を基にして、大人が楽しく無理なく音楽の基礎を学び身につけ生きた音楽の世界を体験できるように<br />' +
					'<p>最終目標は、小編成の室内楽と共に、易しいメロディーで合唱やアンサンブルを楽しめるように</p><br />' +
					'<p><b>2018年</b>&ensp;11月08日<br />'+
					'11月15日<br />'+
					'11月22日<br />'+
					'11月29日<br />'+
					'12月06日</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#ffad10" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="2"><p><b>大人のための基礎音楽入門科</b></p></td>' +
				'</tr><tr>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税込）</small></th>' +
				'</tr><tr>' +
					'<td>11時から12時30分</td>' +
					'<td>13,500円 <small>※教材費別途</small></td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 8:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #ff1040;">子どものコーラス科<br />レ・テタール<br /><small>（フランス語源：おたまじゃくし）</small></span>';
			document.getElementById("separatorImg").src = 
			'./img/separator01.png';
			document.getElementById("course-detail").innerHTML = 
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">小学校１年生～高校生</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容:&emsp;</b></td>' +
					'<td valign="top">月1回(日曜日)　の11 時から12時（8月は夏休み）<br />' +
					'年間レッスン11回（8月は休み）<br /><br />' +
					'<p><b>2018年</b>&ensp;4月15日（日）<br />' +
					'5月27日（日）<br />' +
					'6月10日（日）<br />' +
					'7月8日（日）<br />' +
					'9月9日（日）<br />' +
					'10月14日（日）<br />' +
					'11月11日（日）<br />' +
					'12月2日（日）<br />' +
					'<b>2019年</b>&ensp;1月20日（日）<br />' +
					'2月24日（日）<br />' +
					'3月10日（日）</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#ff1040" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="2"><p><b>子どものコーラス科　レ・テタール</b></p></td>' +
				'</tr><tr>' +
				'<th>授業料<small>（税抜額）</small></th>' +
				'<th>後援会費<small>（非課税）</small></th>' +
				'</tr><tr>' +
					'<td>月額1,000円</td>' +
					'<td>月額200円</td>' +
				'</tr>' +
			'</tbody></table><br />' +
                        '<p>別途楽譜代がかかります</p><br />' +
			'</div><br />';
		break;
		case 9:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #2d6f67;">未就学児の科　ウフ<br /><small>（フランス語源：たまご）</small></span>';
			document.getElementById("separatorImg").src = 
			'./img/separator02.png';
			document.getElementById("course-detail").innerHTML = 
                        '<p>毎月1回　ソルフェージスクール3階にあるすてきなホールで音遊びしましょう！！<br />' +
                        'お子さんといっしょにお父さん、お母さん、おじいちゃん、おばあちゃん、ごきょうだいも楽しみましょう！！</p>' +
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">0歳児から 5歳まで</td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容:&emsp;</b></td>' +
					'<td valign="top">月1回(原則として日曜日)　の10時から11時（8月は夏休み）<br />' +
					'年間レッスン11回（8月は休み）<br />' +
					'1回毎に<span class="red-text">要予約</span><br /><br />' +
					'<p><b>2018年</b>&ensp;4月15日（日）<br />' +
					'5月27日（日）<br />' +
					'6月10日（日）<br />' +
					'7月8日（日）<br />' +
					'9月9日（日）<br />' +
					'10月14日（日）<br />' +
					'11月11日（日）<br />' +
					'12月1日（土）<br />' +
					'<b>2019年</b>&ensp;1月20日（日）<br />' +
					'2月24日（日）<br />' +
					'3月10日（日）</p>' +
					'</td>' +
				'</tr>' +
			'</table>' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#2d6f67" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="2"><p><b>未就学児の科　ウフ </b></p></td>' +
				'</tr><tr>' +
				'<th>時間</th>' +
				'<th>授業料<small>（税込額）</small></th>' +
				'</tr><tr>' +
					'<td>2018年1月以降</td>' +
					'<td>月額500円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'</div><br />';
		break;
		case 10:
			document.getElementById("course-title").innerHTML = 
			'<span style="color: #0ebe91;">ソルフェージ & ABC 科</span>';
			document.getElementById("separatorImg").src = 
			'./img/separator01.png';
			document.getElementById("course-detail").innerHTML = 
			'<p>音楽と同じで英語にもリズムがあります。<br />' +
				'英語の歌を歌ったり、その意味を探したり、譜面にかいたりしながら、双方の上達を目指します。</p>' +
			'<table border="0" cellspacing="10" cellpaddding="0" width="100%">' +
				'<tr>' +
					'<td class="horz" valign="top"><b>対象:&emsp;</b></td>' +
					'<td valign="top">小学1～4年生 </td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>詳細:&emsp;</b></td>' +
					'<td valign="top"><a href="./doc/event/ABCsolfege.pdf">PDF</a></td>' +
				'</tr>' +
				'<tr>' +
					'<td class="horz" valign="top"><b>内容:&emsp;</b></td>' +
					'<td valign="top">月1回(原則として日曜日)　の10時から10時50分（8月は夏休み）<br />' +
					'年間レッスン11回（8月は休み）<br /><br />' +
					'<p><b>2018年</b>&ensp;4月15日（日）<br />' +
					'5月27日（日）<br />' +
					'6月10日（日）<br />' +
					'7月8日（日）<br />' +
					'9月9日（日）<br />' +
					'10月14日（日）<br />' +
					'11月11日（日）<br />' +
					'12月2日（日）<br />' +
					'<b>2019年</b>&ensp;1月20日（日）<br />' +
					'2月24日（日）<br />' +
					'3月10日（日）</p>' +
					'</td>' +
				'</tr>' +
			'</table><br />' +
			// #####  Table #####
			'<table class="courseDtlTbl" border="1" cellspacing="0" cellpaddding="10" width="100%" bordercolor="#0ebe91" style="border-collapse: collapse;">' +
				'<tbody align="center"><tr>' +
					'<td colspan="2"><p><b>ソルフェージ & ABC 科</b></p></td>' +
				'</tr><tr>' +
				'<th colspan="2">授業料<small>（税抜額）</small></th>' +
				'</tr><tr>' +
					'<td>一般: 月額1,000円</td>' +
					'<td>スクール生徒: 月額500円</td>' +
				'</tr>' +
			'</tbody></table><br /><br />' +
			'<p>別途教材費がかかります</p><br />' +
			'</div><br />';
		break;
	}
}
var coursePic = 
["./img/tramp.png", "./img/player.png", "./img/tar.png",
"./img/tamb.png", "./img/coffee.png", "./img/piano.png", 
"./img/violin.png", "./img/stand.png", 
"./img/player.png", "./img/tar.png", "./img/tamb.png"];

var courseColorPic = 
["./img/trampDo.png", "./img/playerRe.png", "./img/tarMi.png",
"./img/tambFa.png", "./img/coffeeSol.png", "./img/pianoLa.png", 
"./img/violinSi.png", "./img/standDo.png", 
"./img/playerRe.png", "./img/tarMi.png", "./img/tambFa.png"];

var transPic = 
["./img/transRed.png", "./img/transYellow.png", "./img/transGreen.png",
"./img/transBlue.png", "./img/transPink.png", "./img/transBrown.png", 
"./img/transViolet.png", "./img/transOrange.png", 
"./img/transYellow.png", "./img/transGreen.png", "./img/transBlue.png"];

function setBgImg(index) {
/*
	document.getElementById("bg-courses").style.backgroundImage = "url(" + transPic[index] + "), url(" + coursePic[index] + ")";
	document.getElementById("bg-courses-head").style.backgroundImage = "url(" + transPic[index] + ")";
*/
}

function showCoursePopup(index) {
	showCourseDetail(index);
	document.getElementById("coursePopup").scrollTop=0;
	document.getElementById("coursePopup").scrollLeft=0;
	 document.getElementById("coursePopup").style.display = "block";
	 document.getElementById("popupCloseBtn").style.display = "block";
}

function closeCoursePopup() {
   // showCoursePopup(index);
	 document.getElementById("coursePopup").style.display = "none";
	 document.getElementById("popupCloseBtn").style.display = "none";
}

function colorImg(index) {
	switch(index) {
	 case 0:
	 	document.getElementById("courseDo").src=courseColorPic[index];
	 break;
	 case 1:
	 	document.getElementById("courseRe").src=courseColorPic[index];
	 break;
	 case 2:
	 	document.getElementById("courseMi").src=courseColorPic[index];
	 break;
	 case 3:
	 	document.getElementById("courseFa").src=courseColorPic[index];
	 break;
	 case 4:
	 	document.getElementById("courseSol").src=courseColorPic[index];
	 break;
	 case 5:
	 	document.getElementById("courseLa").src=courseColorPic[index];
	 break;
	 case 6:
	 	document.getElementById("courseSi").src=courseColorPic[index];
	 break;
	 case 7:
	 	document.getElementById("courseDo2").src=courseColorPic[index];
	 break;
	 case 8:
	 	document.getElementById("courseRe2").src=courseColorPic[index];
	 break;
	 case 9:
	 	document.getElementById("courseMi2").src=courseColorPic[index];
	 break;
	 case 10:
	 	document.getElementById("courseFa2").src=courseColorPic[index];
	 break;
	}
}

function silentImg(index) {
	switch(index) {
	 case 0:
	 	document.getElementById("courseDo").src=coursePic[index];
	 break;
	 case 1:
	 	document.getElementById("courseRe").src=coursePic[index];
	 break;
	 case 2:
	 	document.getElementById("courseMi").src=coursePic[index];
	 break;
	 case 3:
	 	document.getElementById("courseFa").src=coursePic[index];
	 break;
	 case 4:
	 	document.getElementById("courseSol").src=coursePic[index];
	 break;
	 case 5:
	 	document.getElementById("courseLa").src=coursePic[index];
	 break;
	 case 6:
	 	document.getElementById("courseSi").src=coursePic[index];
	 break;
	 case 7:
	 	document.getElementById("courseDo2").src=coursePic[index];
	 break;
	 case 8:
	 	document.getElementById("courseRe2").src=coursePic[index];
	 break;
	 case 9:
	 	document.getElementById("courseMi2").src=coursePic[index];
	 break;
	 case 10:
	 	document.getElementById("courseFa2").src=coursePic[index];
	 break;
	}
}
