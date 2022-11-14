<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class postcontroller extends Controller
{
    function poster($post,$comment){
        return "posts".$post.",comments".$comment;
    }
    public function posterer(){
        return view('dashboard');
    }

    public function photo(){
        return view('photographs');
    }
}
