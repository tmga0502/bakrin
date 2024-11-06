<?php

namespace Package\Item\Domain\Value;

class ShippingStartPart
{
	private string $shippingStartPart;

	public function __construct(string $shippingStartPart)
	{
		$this->shippingStartPart = $shippingStartPart;
	}

	public function getUuid(): string
	{
		return $this->shippingStartPart;
	}
}
