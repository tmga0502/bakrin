<?php

namespace App\Http\Controllers;

use App\Models\FavoriteProducer;
use App\Models\Producer;
use Illuminate\Http\Request;

class ProducersController extends Controller
{
    public function getPopularProducers()
    {
        $producers = Producer::select('producers.*', \DB::raw('COUNT(favorite_producers.id) as favorite_count'))
            ->leftJoin('favorite_producers', 'producers.id', '=', 'favorite_producers.producerUuid')
            ->groupBy('producers.id')
            ->orderBy('favorite_count', 'desc')
            ->get()
            ->take(50);
        return response()->json($producers);
    }
}
