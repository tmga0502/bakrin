<?php

namespace Package\Item\Domain\Value;

class GuideCount
{
	private string $guideCount;

	public function __construct(string $guideCount)
	{
		$this->guideCount = $guideCount;
	}

	public function getUuid(): string
	{
		return $this->guideCount;
	}
}
