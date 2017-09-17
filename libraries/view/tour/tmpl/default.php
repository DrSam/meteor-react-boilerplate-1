<!DOCTYPE html>
<html>
<head>
	<title>VR360 Globalvision - 7ddd22776e48</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0"/>
	<meta name="apple-mobile-web-app-capable" content="yes"/>
	<meta name="apple-mobile-web-app-status-bar-style" content="black"/>
	<meta http-equiv="Content-Type" content="text/html;charset=utf-8"/>
	<meta http-equiv="x-ua-compatible" content="IE=edge"/>

	<meta name="description" content="Creation of high-resolution 360° images in immersive and panoramic format. Photographic services related to immersive 360° vision. Our panoramas display on all internet browsers, mobile devices and smartphones, i.e. iOS and Android.">
	<meta name="keywords" content="360°, 360 degrés, photo, photographie, photographe, panographe, prise de vue, reportage, technique, technologie, immersive, immersion, panorama, omnidirectionnel, regarder alentour, environnement, création de visite virtuelle, tour virtuel">

	<meta itemprop="image" content="[thumbnail]">

	<style>
		@-ms-viewport {
			width: device-width;
		}

		@media only screen and (min-device-width: 800px) {
			html {
				overflow: hidden;
			}
		}

		html {
			height: 100%;
		}

		body {
			height: 100%;
			overflow: hidden;
			margin: 0;
			padding: 0;
			font-family: Arial, Helvetica, sans-serif;
			font-size: 16px;
			color: #FFFFFF;
			background-color: #000000;
		}
	</style>
</head>
<body>

<script src="assets/js/tour.js"></script>

<div id="pano" style="width:100%;height:100%;">
	<noscript>
		<table style="width:100%;height:100%;">
			<tr style="vertical-align:middle;">
				<td>
					<div style="text-align:center;">ERROR:<br/><br/>Javascript not activated<br/><br/></div>
				</td>
			</tr>
		</table>
	</noscript>
	<script>
		embedpano({
			swf: "tour.swf",
			xml:  "_/<?php echo $data->tour->dir; ?>/vtour/tour.xml",
			target: "pano",
			html5: "auto",
			mobilescale: 1.0,
			passQueryParameters: true
		});
	</script>
</div>
</body>
</html>
