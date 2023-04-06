<?php 

require 'vendor/autoload.php';

$client = OpenAI::client('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');


$productTitle = 'Guarda Roupa Casal Portugal';

$productAttributes = 'Cor: Cinamomo/Off-White
Altura (cm): 234 cm
Largura (cm): 270 cm
Profundidade (cm): 56 cm
Garantia: 03 Meses
Material Principal: MDP
Tipo de Porta do Guarda-Roupa: Correr
Quantidade de Prateleiras: 03 Prateleiras
Quantidade de Portas com Espelhos: 01
Quantidade de portas: 3
Quantidade de Gavetas: 8
Marca: Espresso Móveis';

$forbiddenWords = "usado, mel, chumbo, grátis, brinde";


$prompt = "Escreva uma descrição para o seguinte produto " . $productTitle . "Inclua alguns atributos relevantes dessa listagem: " . $productAttributes;

$result = $client->completions()->create([
    'model' => 'text-davinci-003',
    'prompt' => $prompt,
    'max_tokens' => 2048
]);

echo $result['choices'][0]['text'];