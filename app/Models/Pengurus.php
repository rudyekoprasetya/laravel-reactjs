<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pengurus extends Model
{
    use HasFactory;

    //konfigurasi field apa saja yang boleh diisi
    protected $fillable=['nama','alamat','gender','gaji'];
}
