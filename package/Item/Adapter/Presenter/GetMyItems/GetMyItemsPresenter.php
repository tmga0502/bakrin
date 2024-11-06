<?php

namespace Package\Item\Adapter\Presenter\GetMyItems;

use Illuminate\Http\JsonResponse;
use Package\Item\UseCase\GetMyItems\GetMyItemsUseCaseResponse;

class GetMyItemsPresenter implements GetMyItemsPresenterInterface
{
	/**
	 * @param GetMyItemsUseCaseResponse $response
	 * @return JsonResponse
	 */
	public function output(GetMyItemsUseCaseResponse $response): JsonResponse
	{
		return response()->json($response, 200);
	}
}
