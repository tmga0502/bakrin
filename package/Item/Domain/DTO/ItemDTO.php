<?php

namespace Package\Item\Domain\DTO;

use Package\Item\Domain\Entity\Item;

class ItemDTO
{


	public function __construct(
		public ?int $id,
		public ?string $uuid,
		public ?string $producerUuid,
		public ?string $varietyId,
		public ?string $name,
		public ?int $categoryId,
		public ?int $count,
		public ?int $unitId,
		public ?int $guideCount,
		public ?int $guideUnitId,
		public ?int $planId,
		public ?string $description,
		public ?int $shippingStart,
		public ?string $shippingStartPart,
		public ?int $shippingEnd,
		public ?string $shippingEndPart,
		public ?int $status,
		public ?int $thumbnail,
	){}

	public static function fromEntity(Item $item): self
	{
		return new self(
			$item->getId(),
			$item->getUuid(),
			$item->getProducerUuid(),
			$item->getVarietyId(),
			$item->getName(),
			$item->getCategoryId(),
			$item->getCount(),
			$item->getUnitId(),
			$item->getGuideCount(),
			$item->getGuideUnitId(),
			$item->getPlanId(),
			$item->getDescription(),
			$item->getShippingStart(),
			$item->getShippingStartPart(),
			$item->getShippingEnd(),
			$item->getShippingEndPart(),
			$item->getStatus(),
			$item->getThumbnail(),
		);
	}

}
