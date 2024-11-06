<?php

namespace Package\Item\Domain\Value;

class ShippingEndPart
{
	private string $shippingEndPart;

	public function __construct(string $shippingEndPart)
	{
		$this->shippingEndPart = $shippingEndPart;
	}

	public function getUuid(): string
	{
		return $this->shippingEndPart;
	}
}
