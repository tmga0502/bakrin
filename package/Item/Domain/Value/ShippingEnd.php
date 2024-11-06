<?php

namespace Package\Item\Domain\Value;

class ShippingEnd
{
	private string $shippingEnd;

	public function __construct(string $shippingEnd)
	{
		$this->shippingEnd = $shippingEnd;
	}

	public function getUuid(): string
	{
		return $this->shippingEnd;
	}
}
