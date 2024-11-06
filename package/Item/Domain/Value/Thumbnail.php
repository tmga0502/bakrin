<?php

namespace Package\Item\Domain\Value;

class Thumbnail
{
	private string $thumbnail;

	public function __construct(string $thumbnail)
	{
		$this->thumbnail = $thumbnail;
	}

	public function getUuid(): string
	{
		return $this->thumbnail;
	}
}
