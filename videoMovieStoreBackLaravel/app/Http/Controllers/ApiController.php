<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\RequestException;

class ApiController extends Controller
{
    public function atualizarDados()
    {
        // Ler o arquivo JSON com os dados da locadora
        $json = file_get_contents(public_path('../../../public/FallbackData/movies.json'));

        // Decodificar o JSON em um array associativo
        $data = json_decode($json, true);

        // Crie uma instância do cliente Guzzle
        $client = new Client();

        try {
            // Faça uma solicitação PUT para atualizar os dados
            $response = $client->request('PUT', 'https://fakestoreapi.com/products', [
                'headers' => ['Content-Type' => 'application/json'],
                'body' => json_encode($data)
            ]);

            // Verifique a resposta
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
