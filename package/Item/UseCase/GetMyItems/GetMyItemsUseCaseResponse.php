<?php

namespace Package\Item\UseCase\GetMyItems;

use Package\Item\Domain\Entity\Items;

class GetMyItemsUseCaseResponse implements \JsonSerializable
{
	private Items $items;

	public function __construct(Items $items)
	{
		$this->items = $items;
	}

	public function getItems(): Items
	{
		return $this->items;
	}

	public function jsonSerialize(): array
	{
		return [
			'items' => $this->items->toArray(),
		];
	}
}
