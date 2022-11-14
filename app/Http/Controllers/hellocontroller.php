<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class hellocontroller extends Controller
{
    public function hello($id){
        return 'user'.$id;
    }
}
