<?php
namespace Package\Item\Domain\Entity;

use App\Models\Item as ModelsItem;

/**
 * @method static get()
 */
class Item
{
	private ?int $id;
	private ?string $uuid;
	private ?string $producerUuid;
	private ?string $varietyId;
	private ?string $name;
	private ?int $categoryId;
	private ?int $count;
	private ?int $unitId;
	private ?int $guideCount;
	private ?int $guideUnitId;
	private ?int $planId;
	private ?string $description;
	private ?int $shippingStart;
	private ?string $shippingStartPart;
	private ?int $shippingEnd;
	private ?string $shippingEndPart;
	private ?int $status;
	private ?string $thumbnail;

	public function __construct(
		?int $id,
		?string $uuid,
		?string $producerUuid,
		?string $varietyId,
		?string $name,
		?int $categoryId,
		?int $count,
		?int $unitId,
		?int $guideCount,
		?int $guideUnitId,
		?int $planId,
		?string $description,
		?int $shippingStart,
		?string $shippingStartPart,
		?int $shippingEnd,
		?string $shippingEndPart,
		?int $status,
		?string $thumbnail,
	)
	{
		$this->id = $id;
		$this->uuid = $uuid;
		$this->producerUuid = $producerUuid;
		$this->varietyId = $varietyId;
		$this->name = $name;
		$this->categoryId = $categoryId;
		$this->count = $count;
		$this->unitId = $unitId;
		$this->guideCount = $guideCount;
		$this->guideUnitId = $guideUnitId;
		$this->planId = $planId;
		$this->description = $description;
		$this->shippingStart = $shippingStart;
		$this->shippingStartPart = $shippingStartPart;
		$this->shippingEnd = $shippingEnd;
		$this->shippingEndPart = $shippingEndPart;
		$this->status = $status;
		$this->thumbnail = $thumbnail;
	}

	public static function fromItem(ModelsItem $item):self
	{
		return new self(
			$item->id,
			$item->uuid,
			$item->producerUuid,
			$item->varietyId,
			$item->name,
			$item->categoryId,
			$item->count,
			$item->unitId,
			$item->guideCount,
			$item->guideUnitId,
			$item->planId,
			$item->description,
			$item->shippingStart,
			$item->shippingStartPart,
			$item->shippingEnd,
			$item->shippingEndPart,
			$item->status,
			$item->thumbnail,
		);
	}


	public function getId(): ?int
	{
		return $this->id;
	}

	public function getUuid(): ?string
	{
		return $this->uuid;
	}

	public function getProducerUuid(): ?string
	{
		return $this->producerUuid;
	}

	public function getVarietyId(): ?string
	{
		return $this->varietyId;
	}

	public function getName(): ?string
	{
		return $this->name;
	}

	public function getCategoryId(): ?int
	{
		return $this->categoryId;
	}

	public function getCount(): ?int
	{
		return $this->count;
	}

	public function getUnitId(): ?int
	{
		return $this->unitId;
	}

	public function getGuideCount(): ?int
	{
		return $this->guideCount;
	}

	public function getGuideUnitId(): ?int
	{
		return $this->guideUnitId;
	}

	public function getPlanId(): ?int
	{
		return $this->planId;
	}

	public function getDescription(): ?string
	{
		return $this->description;
	}

	public function getShippingStart(): ?int
	{
		return $this->shippingStart;
	}

	public function getShippingStartPart(): ?string
	{
		return $this->shippingStartPart;
	}

	public function getShippingEnd(): ?int
	{
		return $this->shippingEnd;
	}

	public function getShippingEndPart(): ?string
	{
		return $this->shippingEndPart;
	}

	public function getStatus(): ?int
	{
		return $this->status;
	}

	public function getThumbnail(): ?int
	{
		return $this->thumbnail;
	}

	public function toArray()
	{
		return [
			'id' => $this->id,
			'uuid' => $this->uuid,
			'producerUuid' => $this->producerUuid,
			'varietyId' => $this->varietyId,
			'name' => $this->name,
			'categoryId' => $this->categoryId,
			'count' => $this->count,
			'unitId' => $this->unitId,
			'guideCount' => $this->guideCount,
			'guideUnitId' => $this->guideUnitId,
			'planId' => $this->planId,
			'description' => $this->description,
			'shippingStart' => $this->shippingStart,
			'shippingStartPart' => $this->shippingStartPart,
			'shippingEnd' => $this->shippingEnd,
			'shippingEndPart' => $this->shippingEndPart,
			'status' => $this->status,
			'thumbnail' => $this->thumbnail,
		];
	}

}
