<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class ApiController extends Controller
{
    public function atualizarDados()
    {
        $json = file_get_contents(public_path('../../../public/FallbackData/movies.json'));
        $data = json_decode($json, true);
        $client = new Client();

        try {
            $response = $client->request('PUT', 'https://fakestoreapi.com/products', [
                'headers' => ['Content-Type' => 'application/json'],
                'body' => json_encode($data)
            ]);

            if ($response->getStatusCode() == 200) {
                echo "Dados atualizados com sucesso!";
            } else {
                echo "Erro ao atualizar os dados.";
            }
        } catch (RequestException $e) {
            echo "Erro ao fazer a solicitação: " . $e->getMessage();
        }
    }
}
