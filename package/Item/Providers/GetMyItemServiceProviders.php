<?php

namespace Package\Item\Providers;

use Illuminate\Support\ServiceProvider;
use Package\Item\Adapter\Presenter\GetMyItems\GetMyItemsPresenter;
use Package\Item\Adapter\Presenter\GetMyItems\GetMyItemsPresenterInterface;
use Package\Item\Domain\Repository\GetMyItemRepositoryInterface;
use Package\Item\Infrastructure\RepositoryImpl\GetMyItemRepository;
use Package\Item\UseCase\GetMyItems\GetMyItemsUseCase;
use Package\Item\UseCase\GetMyItems\GetMyItemsUseCaseInterface;

class GetMyItemServiceProviders extends ServiceProvider
{
	public function boot():void {}

	public function register(): void
	{
		$this->app->bind(
			GetMyItemsPresenterInterface::class,
			GetMyItemsPresenter::class,
		);
		$this->app->bind(
			GetMyItemRepositoryInterface::class,
			GetMyItemRepository::class
		);
		$this->app->bind(
			GetMyItemsUseCaseInterface::class,
			GetMyItemsUseCase::class,
		);
	}
}
