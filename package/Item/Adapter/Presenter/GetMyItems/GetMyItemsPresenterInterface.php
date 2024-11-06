<?php

namespace Package\Item\Adapter\Presenter\GetMyItems;

use Package\Item\UseCase\GetMyItems\GetMyItemsUseCaseResponse;

interface GetMyItemsPresenterInterface
{
	public function output(GetMyItemsUseCaseResponse $response);
}
