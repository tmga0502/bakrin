<?php

namespace Package\Item\Infrastructure\RepositoryImpl;

use App\Models\Item;
use Illuminate\Support\Facades\Auth;
use Package\Item\Domain\Entity\Item as ItemEntity;
use Package\Item\Domain\Entity\Items as ItemsEntity;
use Package\Item\Domain\Repository\GetMyItemRepositoryInterface;

class GetMyItemRepository implements GetMyItemRepositoryInterface
{
	public function getMyItem(int $prePage): ItemsEntity
	{
		$paginator = Item::with('plan')
			->where('producerUuid', Auth::user()->uuid)
			->orderBy('created_at', 'DESC')
			->paginate($prePage);

		$items = $paginator->getCollection()->map(function(Item $item){
			return ItemEntity::fromItem($item);
		});
		return new ItemsEntity($items, $paginator);
	}
}
