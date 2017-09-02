<?php

class Vr360HelperTour
{
	/**
	 * @param $filePath
	 *
	 * @return bool
	 */
	public static function fileValidate($filePath)
	{

		if (!file_exists($filePath))
		{
			return false;
		}

		if (!in_array(mime_content_type($filePath), Vr360Configuration::getInstance()->allowMimeTypes))
		{
			return false;
		}

		//!!check image size  x*2x size
		$imgSize = getimagesize($filePath);
		if (!($imgSize[0] == 2 * $imgSize[1]))
		{
			//return false;
		}

		return true;
	}

	public static function generateFilename($fileName)
	{
		$fileName = mb_ereg_replace("([^\w\s\d\-_~,;\[\]\(\).])", '', $fileName);
		// Remove any runs of periods (thanks falstro!)
		$fileName = mb_ereg_replace("([\.]{2,})", '', $fileName);

		return md5(uniqid('sth', true)) . '_' . $fileName;
	}

	public static function tourCreate($uId, $jsonData)
	{
		$pre_img_dir = "./_/$uId/";

		$krPanoPATH      = './assets/krpano/krpanotools ';
		$krPanoCongig    = 'makepano -config=./assets/krpano/templates/vtour-normal.config ';
		$krPanoListImage = $pre_img_dir . implode(" $pre_img_dir", $jsonData['files']);

		// Generate tour via exec
		return exec($krPanoPATH . $krPanoCongig . $krPanoListImage);
	}

	public static function xmlCreate($uId, $jsonData)
	{
		$tagetXmlFile = "./_/$uId/vtour/tour.xml";

		$xmlData = [];

		// dont change the order of this array.
		// if you change the order, maybe you will have foot on your head
		$xmlData['header'] = [];
		$xmlData['scenes'] = [];
		$xmlData['footer'] = [];

		//assign xmlData to array

		foreach ($jsonData['files'] as $scene => $fileName)
		{
			$xmlData['scenes'][$scene] = [];
			$curentScene               = &$xmlData['scenes'][$scene];

			$curentScene['xmlFileName'] = $fileName;
			$curentScene['xmlTitle']    = $jsonData['panoTitle'][$scene];
			$curentScene['xmlHotspots'] = ''; //we will make hotspots later
		}

		//write xmlData to xml Template

		$tagetXmlFileContents = '';

		foreach ($xmlData as $template => $data) //thought file
		{
			$tmpStr = file_get_contents("./assets/krpano-$template.xml");

			foreach ($data as $key => $keyData) //thought key
			{
				if (gettype($keyData) == 'string')
				{
					$tmpStr = preg_replace("/\{\{$key\}\}/", $keyData, $tmpStr);
				}
				elseif (gettype($keyData) == 'array') //okie array will be like scenes, loop thought all template, I know this not perfect but this is the best I can do at this times.
				{
					$tmpStr = file_get_contents("./assets/krpano-$template.xml");
					foreach ($keyData as $subKey => $subKeyData) //thought key
					{
						$tmpStr = preg_replace("/\{\{$subKey\}\}/", $subKeyData, $tmpStr);
					}
					$tagetXmlFileContents .= $tmpStr;
					$tmpStr               = '';
				}
				else
				{
					//500 error, wrong data format or empty
				}

			}
			$tagetXmlFileContents .= $tmpStr;
		}

		return file_put_contents($tagetXmlFile, $tagetXmlFileContents); // need to check if cant overwrite
	}

	public static function generateUId()
	{
		$uId = uniqid('__', false);

		return $uId . '_' . md5(uniqid('', true));
	}

	public static function createDataDir()
	{
		// @TODO Do not create directory if we are not sure about this submit yet
		$uId = Vr360HelperTour::generateUId();

		// Create data directory first
		if (!file_exists(VR360_PATH_DATA))
		{
			if (mkdir(VR360_PATH_DATA))
			{
				return false;
			}
		}

		if (!mkdir(VR360_PATH_DATA . '/' . $uId))
		{
			return false;
		}

		return $uId;
	}
}