<?php

namespace Package\Item\Domain\Value;

class Uuid
{
	private string $uuid;

	public function __construct(string $uuid)
	{
		$this->uuid = $uuid;
	}

	public function getUuid(): string
	{
		return $this->uuid;
	}
}
