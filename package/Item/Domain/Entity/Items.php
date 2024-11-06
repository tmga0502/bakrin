<?php

namespace Package\Item\Domain\Entity;

use Illuminate\Support\Collection;
use Illuminate\Pagination\LengthAwarePaginator;

class Items implements \IteratorAggregate
{
	private ?Collection $items;
	private ?LengthAwarePaginator $paginator;

	public function __construct(Collection $items, LengthAwarePaginator $paginator)
	{
		$this->items = $items;
		$this->paginator = $paginator;
	}

	public function getIterator(): \ArrayIterator
	{
		return new \ArrayIterator($this->items->toArray());
	}

	public function getPaginator(): LengthAwarePaginator
	{
		return $this->paginator;
	}
	public function toArray(): array
	{
		return [
			'items' => $this->items->map(function (Item $item) {
				return $item->toArray();
			}),
			'current_page' => $this->paginator->currentPage(),
			'last_page' => $this->paginator->lastPage(),
			'per_page' => $this->paginator->perPage(),
			'total' => $this->paginator->total(),
		];
	}

}
