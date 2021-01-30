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
