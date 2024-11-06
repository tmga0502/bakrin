<?php

namespace Package\Item\Domain\Value;

class ShippingStart
{
	private string $shippingStart;

	public function __construct(string $shippingStart)
	{
		$this->shippingStart = $shippingStart;
	}

	public function getUuid(): string
	{
		return $this->shippingStart;
	}
}
