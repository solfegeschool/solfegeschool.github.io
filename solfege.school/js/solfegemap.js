window.onload = function(){
	map = new GMaps({
		div: '#solfegemap',
		zoom: 16,
		lat: 35.72570806006031,
		lng: 139.70143224519117,
		styles : [
			{
			  stylers: [
			    { hue: "#00ffe6" },
			    { saturation: -20 }
			  ]
			}
		]
	 });

	path = [
		[35.721568,139.706613], // A
		[35.722601,139.704606], // B
		[35.722558,139.702845], // C
		[35.723269,139.702862], // D
		[35.724158,139.702761], // E
		[35.724103,139.701749], // F
		[35.725068,139.701661], // G
		[35.725769,139.701248], // H
		[35.725534,139.700567]  // I
	];

	map.drawPolyline({
		path: path,
		strokeColor: '#131540',
		strokeOpacity: 0.6,
		strokeWeight: 3
	});

	path2 = [
		[35.726317, 139.695375], // A
		[35.726016, 139.695732], // B
		[35.725907, 139.696746], // C
		[35.726016, 139.697741], // D
		[35.725559, 139.697682], // E
		[35.725515, 139.698707], // F
		[35.725554, 139.699716], // G
		[35.725541, 139.700488], // H
	];

	map.drawPolyline({
		path: path2,
		strokeColor: '#b725db',
		strokeOpacity: 0.6,
		strokeWeight: 3
	});
		
	map.addMarker({
		lat:35.725503,
		lng:139.700596,
		title:"Solfege School"
	});
/*	map.addMarker({
		lat:35.721267,
		lng:139.706624,
		title:"Mejiro Station",
		infoWindow: {
			content: '<p>Path No.1</p>'
		}		
	});
*/

	map.drawOverlay({ // Solfege School
		lat:35.725500,
		lng:139.700596,
		content:'<div class="overlay"><img src="./img/logoW.png" height="30px" width="30px"></div>',
        verticalAlign: 'middle',
        horizontalAlign: 'center'
	});
	
	map.drawOverlay({ // Mejiro Station
		lat:35.721566,
		lng:139.706940,
		content:'<div class="overlay"><span lang="en">Mejiro Station</span><br><span lang="ja">目白駅</span></div>',
        verticalAlign: 'middle',
        horizontalAlign: 'center'
	});
	
	map.drawOverlay({ // Shiinamachi Station
		lat:35.726531,
		lng:139.694720,
		content:'<div class="overlay"><span lang="en">Shiinamachi Station</span><br><span lang="ja">椎名町駅</span></div>',
        verticalAlign: 'middle',
        horizontalAlign: 'center'
	});

};