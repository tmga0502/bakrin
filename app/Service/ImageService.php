<?php
namespace App\Service;

use Carbon\Carbon;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ImageService
{
	protected mixed $file;
	protected string $pathName;

	public function __construct($file, $pathName)
	{
		$this->file = $file;
		$this->pathName = $pathName;
	}


	public function save(): string
	{
		$extension = $this->file->getClientOriginalExtension();
		$fileName = Carbon::now()->format('YmdHi') . '_' . Str::random(40) . '.' . $extension;
		//ファイル保存
		Storage::disk('public')->putFileAs($this->pathName, $this->file, $fileName);
		return 'storage/' . $this->pathName . '/' . $fileName;
	}

}
