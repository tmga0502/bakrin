<?php

namespace Package\Item\Domain\Value;

class Status
{
	private string $status;

	public function __construct(string $status)
	{
		$this->status = $status;
	}

	public function getUuid(): string
	{
		return $this->status;
	}
}
