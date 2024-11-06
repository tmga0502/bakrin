<?php

namespace Package\Item\Domain\Repository;

interface GetMyItemRepositoryInterface
{
  public function getMyItem(int $prePage);
}
