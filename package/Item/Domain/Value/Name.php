<?php

namespace Package\Item\Domain\Value;

class Name
{
	private string $name;

	public function __construct(string $name)
	{
		$this->name = $name;
	}

	public function getUuid(): string
	{
		return $this->name;
	}
}
