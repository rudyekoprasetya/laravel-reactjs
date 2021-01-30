# Dokumentasi Belajar Laravel + ReactJS

## Untuk Dimas
1. Setelah Clone Jalankan, masuk ke Project
`$ composer install`
`$ npm install`

2. copy dan rename **.env.example** menjad **.env** dan lakukan penyesuaian konifgurasi database semisal **laravel-react**

3. lakukan migrate database
`$ php artisan migrate`

4. Untuk menjalankan server
`$ php artisan serve`

5. untuk recompile reactjs
`$ npm run dev`

6. Folder Coding ReactJS ada di **resources/js/component**


### Persiapan
1. Install [Composer](https://getcomposer.org/download/)
2. Install [NodeJS](https://nodejs.org/en/download/)
3. XAMPP
4. POSTMAN [Download](https://www.postman.com/downloads/)

### Membuat Backend dengan Laravel
1. Install Laravel
`$ composer create-project --prefer-dist laravel/laravel laravel-react`

2. Uji Coba Laravel, untuk menutup server tekan tombol **CTRL+C**
`$ cd laravel-react`
`$ php artisan serve`

3. Membuat Table **Penguruses** dengan Migrate, Disini Kenapa ada tambahan *es* karena saat kita akan membuat model dan request ke model secara otomatis laravel memanggil nama tabel sesuai dengan nama model dengan tambahan es atau kata benda jamak.
`$ php artisan make:migration CreatePengurusesTable`

4. Buka Text editor ( *sublime-text, vs-code dll* ) dan edit file di folder **laravel-react/database/migrations/2021_01_29_084542_create_penguruses_table.php** kita sesuaikan field-fieldnya

```php
<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePengurusesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        // sesuaikan type data di field
        Schema::create('penguruses', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nama');
            $table->text('alamat');
            $table->enum('gender',['L','P']);
            $table->integer('gaji');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('penguruses');
    }
}
```

5. Kita Edit vile **.env** untuk konfigurasi database mysql yang digunakan, terlebih dahulu buatlah database di [phpmyadmin](http://localhost/phpmyadmin) dengan nama database **laravel-react**, kita masukan nama database, dengan user root dan password kosong
```
APP_NAME=Laravel
APP_ENV=local
APP_KEY=base64:N3Mzdwt/qnYFH7BzGNkBqMlXvA1aVVLLzEJmurZne44=
APP_DEBUG=true
APP_URL=http://localhost

LOG_CHANNEL=stack
LOG_LEVEL=debug

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=laravel-react
DB_USERNAME=root
DB_PASSWORD=
```

6. Jalankan Migrate
`$ php artisan migrate`

7. Buat Model dengan nama **Pengurus**, untuk model dibuat kata benda benda tunggal
`$ php artisan make:model Pengurus`

8. Edit Model di folder **app/Models/Pengurus.php** 
```php
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
```

9. Membuat Controller dengan nama **PengurusController** beserta function didalamnya
`$ php artisan make:Controller PengurusController --resource`

10. Kita edit file Controller di **app/Http/Controllers/PengurusController.php**
```php
<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
//load Model Pengurus
use App\Models\Pengurus;

class PengurusController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //function untuk tampil data
        $pengurus = Pengurus::all();
        return response()->json($pengurus);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //function simpan data
        $pengurus = Pengurus::create($request->all());  
        return response()->json('Berhasil Simpan Data!', 201); 
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //function cari data berdasarkan id
        $pengurus = Pengurus::find($id);
        return response()->json($pengurus);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //function cari data berdasarkan id
        $pengurus = Pengurus::find($id);
        return response()->json($pengurus);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //function update data pengurus
        $pengurus = Pengurus::find($id);
        $pengurus->nama = $request->get('nama');
        $pengurus->alamat = $request->get('alamat');
        $pengurus->gender = $request->get('gender');
        $pengurus->gaji = $request->get('gaji');
        $pengurus->save();

        return response()->json('Berhasil Update Data!', 200); 
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //function untuk hapus data
        $pengurus = Pengurus::find($id);
        $pengurus->delete();

        return response()->json('Data Terhapus!', 204); 

    }
}
```

11. Edit route di di file **routes/api.php**
```php
<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// Routes untuk API Pengurus
Route::get('/pengurus', [App\Http\Controllers\PengurusController::class, 'index']);
Route::post('/pengurus', [App\Http\Controllers\PengurusController::class, 'store']);
Route::get('/pengurus/{id}', [App\Http\Controllers\PengurusController::class, 'show']);
Route::put('/pengurus/{id}', [App\Http\Controllers\PengurusController::class, 'update']);
Route::delete('/pengurus/{id}', [App\Http\Controllers\PengurusController::class, 'destroy']);
```

12. Jalankan Server kemudian lakukan ujicoba dengan POSTMAN untuk akses endpoint API
`GET http://127.0.0.1:8000/api/pengurus`
`POST http://127.0.0.1:8000/api/pengurus`
`PUT http://127.0.0.1:8000/api/pengurus/3`
`DELETE http://127.0.0.1:8000/api/pengurus/3`

### Membuat Frontend dengan ReactJS
1. Install Laravel UI
`$ composer require laravel/ui`

2. Install UI react JS
`$ php artisan ui react`

3. Compile react UI
`$ npm install && npm run dev`

4. Install react router dom
`$ npm install react-router-dom`


