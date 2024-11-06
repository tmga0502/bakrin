<?php

namespace Package\Item\UseCase\GetMyItems;

use Package\Item\Adapter\Presenter\GetMyItems\GetMyItemsPresenterInterface;
use Package\Item\Domain\Repository\GetMyItemRepositoryInterface;

class GetMyItemsUseCase implements GetMyItemsUseCaseInterface
{
	private const PRE_PAGE = 20;
	private GetMyItemRepositoryInterface $itemRepository;
	private GetMyItemsPresenterInterface $presenter;

	public function __construct(GetMyItemRepositoryInterface $itemRepository, GetMyItemsPresenterInterface $presenter)
	{
		$this->itemRepository = $itemRepository;
		$this->presenter = $presenter;
	}

	/**
	 * @return void
	 */
	public function handle()
	{
		//データ取得
		$items = $this->itemRepository->getMyItem(self::PRE_PAGE);
		//レスポンス整形
		$response = new GetMyItemsUseCaseResponse($items);
		//返す
		return $this->presenter->output($response);
	}
}
