<?php

namespace App\Http\Middleware;

use App\Models\Producer;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiAuth
{
    /**
     * Handle an incoming request.
     *
     * @param Closure(Request): (Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        //トークンの認証
        $auth_check = Producer::where('login_token', $request->auth_token)->whereNotNull('login_token')->exists();
        if(!$auth_check){
          return response()->json([], 401);
        }
        return $next($request);
    }
}
