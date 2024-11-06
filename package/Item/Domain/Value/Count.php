<?php

namespace Package\Item\Domain\Value;

class Count
{
	private string $count;

	public function __construct(string $count)
	{
		$this->count = $count;
	}

	public function getUuid(): string
	{
		return $this->count;
	}
}
