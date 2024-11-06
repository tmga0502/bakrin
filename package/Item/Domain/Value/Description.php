<?php

namespace Package\Item\Domain\Value;

class Description
{
	private string $description;

	public function __construct(string $description)
	{
		$this->description = $description;
	}

	public function getUuid(): string
	{
		return $this->description;
	}
}
