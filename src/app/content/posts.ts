import type { GuideDoc } from "./rich";

const relatedBase = {
    teste: { href: "/teste-gratis", label: "Teste grátis de 4 horas" },
  planos: { href: "/planos", label: "Planos e preços" },
  faq: { href: "/faq", label: "Dúvidas frequentes" },
  internet: { href: "/blog/internet-para-iptv-4k", label: "Qual internet para 4K" },
  travando: { href: "/blog/iptv-travando", label: "IPTV travando" },
  m3u: { href: "/blog/m3u-ou-xtream-codes", label: "M3U ou Xtream Codes" },
  escolher: { href: "/blog/como-escolher-iptv", label: "Como escolher um IPTV" },
  seguro: { href: "/blog/iptv-e-seguro", label: "Cuidados ao assinar" },
  aparelho: { href: "/blog/melhor-aparelho-para-iptv", label: "Melhor aparelho" },
  instalacao: { href: "/instalacao", label: "Instalação por aparelho" },
  apps: { href: "/apps", label: "Apps de IPTV" },
};

export const articles: GuideDoc[] = [
  {
    kind: "article",
    slug: "iptv-travando",
    path: "/blog/iptv-travando",
    title: "IPTV travando: como resolver | Coffee Play",
    description:
      "A imagem parou ou o áudio cortou? Confira os 10 Mega, o Wi-Fi, o aparelho e o plano de 1 tela. O suporte do Coffee Play atende no WhatsApp 24 horas.",
    h1: "IPTV travando: como resolver",
    eyebrow: "Guia",
    intro:
      "Quando a imagem congela, o som segue sozinho ou o canal volta do zero, a culpa parece ser sempre do serviço. Em casa, o mesmo acesso muitas vezes funciona no celular e falha na TV da sala. Dá para separar isso com alguns testes, sem trocar de plano no escuro.",
    related: [relatedBase.internet, relatedBase.aparelho, relatedBase.teste, relatedBase.faq],
    minWords: 800,
    maxWords: 1500,
    body: `
## O que “travando” quer dizer

Travar não é uma coisa só. Às vezes a imagem fica num quadro parado e o áudio continua. Às vezes os dois param por um segundo e voltam. Às vezes o canal fecha e abre de novo, ou a tela fica preta até você mudar de canal e voltar. Anote o que acontece, em qual canal e em qual aparelho. Esse relato curto evita uma conversa genérica com o suporte.

Um filme sob demanda que demora para começar é diferente de um canal ao vivo que corta no meio do jogo. O primeiro pode ser carga do título. O segundo costuma ser conexão instável ou mais de uma tela usando o mesmo acesso. O Coffee Play informa guia de programação (EPG), filmes e séries on demand e canais em 4K, Full HD, HD e SD. A qualidade que você escolhe na hora muda o quanto a rede precisa aguentar.

Se o problema aparece só num horário, olhe o que mais está ligado nesse momento: videochamada, download, outra TV, câmera. Se aparece o dia inteiro, em todo canal, o teste seguinte é outro.

## Comece pela internet que o serviço pede

A orientação publicada no site é direta: uma conexão de no mínimo 10 Mega e um aparelho compatível, seja TV, celular, TV Box ou computador. Dez mega é o piso informado, não uma promessa de que qualquer Wi-Fi fraco segura 4K com outras pessoas na rede.

Meça no próprio aparelho que vai assistir, não só no celular ao lado do roteador. Caminhe até a TV e faça o teste ali. Números bons na cozinha e ruins na sala explicam muita imagem picotada. Se a medição oscila, o canal também oscila.

Cabo de rede, quando o aparelho tem entrada, tira o Wi-Fi do caminho. Não é obrigatório, e o site não exige cabo. É só o jeito mais estável de saber se a falha é o ar ou o acesso. Se no cabo a imagem firma e no Wi-Fi volta a pular, o próximo passo é o roteador, não um plano novo.

O guia [qual internet preciso para IPTV 4K](/blog/internet-para-iptv-4k) detalha essa diferença entre o mínimo de 10 Mega e o uso real de HD e 4K.

## Wi-Fi, distância e vizinhos de rede

Roteador dentro de armário, atrás da TV ou no outro extremo da casa entrega sinal fraco justamente onde a tela grande está. 2,4 GHz atravessa parede melhor e costuma ser mais lento. 5 GHz é mais rápido e mais curto. Se a TV está longe, aproximar o roteador ou usar um ponto de acesso no mesmo cômodo muda mais do que ficar trocando de canal.

Outros aparelhos na mesma rede disputam essa faixa. Um backup de fotos, uma atualização de console ou duas crianças em vídeo ao mesmo tempo derrubam um fluxo que parecia estável de manhã. Pause isso e veja se o canal segura por dez minutos. Se segurar, o limite era a rede, não o catálogo.

Reiniciar o roteador uma vez, esperando ele voltar por completo, limpa sessão travada. Fazer isso toda hora só esconde um Wi-Fi mal posicionado.

## Uma tela usa um acesso

Os planos padrão do Coffee Play são para 1 tela. Se duas pessoas abrem o mesmo login ao mesmo tempo, uma das duas tende a cair, voltar ou ficar em buffer. Isso não é um mistério de servidor: é o limite informado do plano. Pontos adicionais existem, com preços especiais, e esse valor não está publicado nesta página. Quem precisa de sala e quarto juntos deve perguntar no WhatsApp antes de assumir que um único acesso cobre as duas TVs.

Para conferir, feche o aplicativo em todos os outros aparelhos, inclusive o celular que ficou aberto no bolso. Espere um minuto e abra só na TV. Se a imagem firmar, você achou a causa. Os detalhes estão nas [dúvidas frequentes](/faq), na pergunta sobre mais de uma tela.

## O aparelho também entra na conta

Smart TV antiga, TV Box sem espaço livre e celular com a bateria no vermelho tratam o mesmo canal de jeitos diferentes. Feche outros aplicativos. Se o aparelho estiver quente e lento em tudo, não só no IPTV, um descanso e uma reinicialização ajudam mais do que insistir no mesmo canal.

A lista de compatíveis do site inclui Smart TV Samsung, LG, Sony e Android TV, TV Box como MXQ, Mi Box, Fire Stick e Roku, celular Android e iPhone/iPad, computador Windows, Mac e Linux, e Chromecast para transmitir do celular para a TV. O panorama está em [onde instalar](/instalacao) e no texto sobre [qual aparelho usar](/blog/melhor-aparelho-para-iptv).

Se só um aparelho falha e os outros, na mesma rede, passam o mesmo canal, o acesso em si está entregando. Aí o ajuste é nesse aparelho ou no caminho até ele.

## O que dizer ao suporte

O envio do acesso é imediato, no WhatsApp ou no e-mail, e o atendimento funciona 24 horas, de segunda a segunda. Uma mensagem útil traz: aparelho, se está no Wi-Fi ou no cabo, se outra tela estava aberta, se o teste de velocidade foi feito na TV e em qual canal a falha aparece. “Não funciona” obriga o suporte a perguntar tudo de novo.

Antes de pagar um período longo só para “ver se melhora”, use o [teste grátis de 4 horas](/teste-gratis) na própria TV e no horário em que você costuma assistir. Quatro horas dão para ver canal ao vivo, um filme e o comportamento do Wi-Fi da sua casa. Os valores, se decidir continuar, estão na página de [planos](/planos): mensal, trimestral, semestral e anual, sem multa e sem fidelidade.
`,
  },
  {
    kind: "article",
    slug: "internet-para-iptv-4k",
    path: "/blog/internet-para-iptv-4k",
    title: "Qual internet preciso para IPTV 4K | Coffee Play",
    description:
      "O Coffee Play pede no mínimo 10 Mega. Veja o que isso muda na prática para HD e 4K, no Wi-Fi ou no cabo, e teste a imagem por 4 horas, com suporte.",
    h1: "Qual internet preciso para IPTV 4K",
    eyebrow: "Guia",
    intro:
      "A pergunta certa não é qual é o plano mais caro da operadora. É se a TV, no cômodo onde ela está, recebe com folga o mínimo que o serviço pede e ainda sobra banda quando mais alguém usa a rede.",
    related: [relatedBase.travando, relatedBase.aparelho, relatedBase.teste, relatedBase.planos],
    minWords: 800,
    maxWords: 1500,
    body: `
## O número que o Coffee Play publica

No site, a exigência é uma conexão de no mínimo 10 Mega, com um aparelho compatível: TV, celular, TV Box ou computador. Não há uma segunda tabela escondida dizendo “4K só acima de X mega”. Quem anuncia outro número como se fosse regra oficial do Coffee Play está inventando. O piso informado é 10 Mega.

Isso não significa que 10 Mega no papel da operadora chegam inteiros na TV. O plano contratado é o teto da sua casa, não a velocidade na porta do aparelho. Medir ao lado do roteador e achar que a sala recebe o mesmo é o erro mais comum.

## HD e 4K não pesam igual

Canais em SD e HD pedem menos da rede do que um canal em 4K. O catálogo do Coffee Play inclui 4K, Full HD, HD e SD, além de filmes e séries on demand. Se a imagem em 4K corta e o mesmo canal, ou outro em HD, fica estável, a rede está no limite para a faixa mais pesada. Não é obrigatório assistir tudo em 4K. Muita TV de sala continua excelente em Full HD quando o Wi-Fi não acompanha.

Um filme on demand que carrega e depois toca sem pausas está usando a rede de um jeito diferente de um jogo ao vivo, em que cada segundo precisa chegar na hora. Por isso o teste precisa incluir os dois: um canal ao vivo e um título on demand.

## Onde medir

Faça o teste de velocidade no aparelho que vai reproduzir, ou o mais perto possível dele. No celular, fique ao lado da TV, não na sacada. Se a TV ou o TV Box tiver navegador, melhor ainda. Anote o horário. Noite e fim de semana costumam ser mais concorridos, tanto na sua casa quanto no bairro.

Olhe dois números, não só o de descida. A descida é a que traz o vídeo. A estabilidade importa mais do que um pico de um segundo. Se o teste mostra 80 Mega e, repetido, cai para 8, a imagem vai acompanhar essa queda. Repita três vezes.

Wi-Fi de 5 GHz perto do roteador costuma sobrar. Do outro lado da casa, atrás de duas paredes, o 2,4 GHz às vezes é o único que chega, e chega justo. Aproximar o roteador, tirar ele de dentro do rack ou colocar um ponto no cômodo da TV é ajuste de casa, não de plano de IPTV.

Cabo de rede, quando existe porta, elimina essa variável. O Coffee Play não obriga cabo. Ele só torna o diagnóstico mais claro: se no cabo passa e no Wi-Fi não, você já sabe onde mexer. O texto sobre [imagem travando](/blog/iptv-travando) segue a partir daí.

## O que mais divide os 10 Mega

Dez mega deixam de ser dez quando a casa inteira está online. Videochamada, atualização de jogo, câmera e outra TV com o mesmo acesso comem a margem. O plano padrão é de 1 tela. Duas reproduções ao mesmo tempo não são o cenário para o qual o plano foi descrito. Feche o outro aparelho antes de concluir que “a internet não dá”.

Chromecast, citado no site como forma de transmitir do celular para a TV, usa o Wi-Fi duas vezes na prática: o celular e o aparelho de transmissão. Se os dois estão longe do roteador, a folga some mais rápido do que numa TV ligada direto.

## Como saber se a sua casa aguenta

O caminho mais honesto é o [teste grátis de 4 horas](/teste-gratis), pedido no WhatsApp. O acesso chega na hora, no WhatsApp ou no e-mail. Use essas horas na TV de verdade, no horário em que a família assiste, com o Wi-Fi do dia a dia. Quatro horas mostram mais do que qualquer tabela genérica de “mega ideal”.

Se durante o teste o HD fica firme e o 4K só falha quando alguém mais entra na rede, você tem um retrato útil: dá para assistir, e o 4K pede folga. Se nem o HD segura com a casa quieta e a medição ao lado da TV acima dos 10 Mega, aí sim vale chamar o suporte com esses dados, 24 horas.

Os aparelhos em que esse teste pode rodar estão na página de [instalação](/instalacao). Os períodos, se o teste convencer, estão em [planos](/planos), do mensal de R$ 24,90 ao anual de R$ 250,00, sem multa e sem fidelidade.

## O que não muda o diagnóstico

Trocar de aplicativo no meio do teste, sem anotar a velocidade ao lado da TV, só mistura as causas. O player não aumenta os mega que chegam na sala. Fechar a segunda tela, medir de novo e assistir dez minutos do mesmo canal diz mais do que abrir três apps diferentes em cinco minutos.

Se a operadora entrega menos do que os 10 Mega no horário em que você assiste, o ajuste é com ela ou com o Wi-Fi da casa. O suporte do Coffee Play ajuda a ler o que acontece no acesso, 24 horas, desde que você conte aparelho, horário e se o teste foi feito na própria TV. Com esses dados, a conversa fica curta. Sem eles, os dois lados chutam.
`,
  },
  {
    kind: "article",
    slug: "m3u-ou-xtream-codes",
    path: "/blog/m3u-ou-xtream-codes",
    title: "M3U ou Xtream Codes: qual a diferença | Coffee Play",
    description:
      "M3U é um link de lista. Xtream Codes é usuário, senha e servidor. Veja a diferença e use só os dados que o Coffee Play envia no WhatsApp ou e-mail.",
    h1: "M3U ou Xtream Codes: qual a diferença",
    eyebrow: "Guia",
    intro:
      "Quem recebe o acesso e abre um aplicativo pela primeira vez esbarra em dois nomes: M3U e Xtream Codes. Não são dois produtos do Coffee Play. São dois jeitos comuns de um player guardar a lista. O site não escolhe um deles por você na página inicial.",
    related: [relatedBase.apps, relatedBase.teste, relatedBase.faq, relatedBase.seguro],
    minWords: 800,
    maxWords: 1500,
    body: `
## O que chega na sua mão

O Coffee Play descreve o recebimento assim: o envio é imediato e automático. Quando o pagamento é confirmado, ou quando o teste é solicitado, os dados vão para o WhatsApp ou para o e-mail. Essa mensagem é a fonte. Não invente servidor, usuário ou link a partir de um tutorial de outra pessoa. Se a tela do aplicativo pede um campo que a mensagem não traz, pare e fale com o suporte. Chutar URL é o atalho mais curto para uma lista que não abre.

O [teste grátis de 4 horas](/teste-gratis) segue o mesmo caminho: você pede, os dados chegam, você confere a qualidade e a grade antes de assinar.

## M3U, em linguagem simples

M3U é uma lista. Na prática, quase sempre um endereço (uma URL) que o aplicativo baixa para saber quais canais, filmes e séries existem. Algumas pessoas recebem um arquivo, outras um link. O player chama isso de playlist, lista ou URL M3U, conforme o idioma do app.

Uma lista M3U não pede, por si, três campos separados de login. Você cola o endereço no lugar certo e o aplicativo monta o catálogo. Se o link estiver incompleto, cortado na mensagem ou com um espaço no final, a lista não carrega. Copie de novo, direto do WhatsApp ou do e-mail, sem passar por bloco de notas que quebra a linha.

M3U não é “melhor” nem “pior”. É um formato. O guia de programação (EPG) que o Coffee Play cita no site aparece quando a lista e o aplicativo conseguem mostrar a grade. Se a grade não surgir, isso não prova que o formato está errado. Pode ser só a opção de EPG desligada no player.

## Xtream Codes, em linguagem simples

Xtream Codes é um login em partes. O aplicativo costuma pedir três informações: endereço do servidor (uma URL), nome de usuário e senha. Há ainda um campo de nome qualquer, só para você reconhecer aquele acesso entre outros. Esse nome livre não é o usuário.

Quando a mensagem do Coffee Play vier separada desse jeito, use a opção Xtream, API ou “login”, não a opção de colar M3U. Trocar os campos, colocar a senha no lugar do usuário ou a URL sem o começo http, faz o app dizer que o login falhou mesmo com os dados certos.

Guarde usuário e senha como qualquer outra credencial. O plano padrão é de 1 tela. Repassar o login para outra casa é o cenário que a própria pergunta de [mais de uma tela](/faq) alerta.

## Qual dos dois você deve usar

Use o formato que estiver escrito na mensagem que você recebeu. Se vier um único link longo, procure a opção de playlist ou M3U. Se vierem servidor, usuário e senha, procure Xtream ou login. Os dois caminhos levam a uma lista. Não existe vantagem em converter um no outro por conta própria se você não sabe fazer isso sem quebrar o endereço.

O Coffee Play não publica, no site, um aplicativo obrigatório. Players como IPTV Smarters, TiviMate e XCIPTV são exemplos comuns de quem pede exatamente esses campos. Os guias em [apps](/apps) explicam a tela de cada um, sem transformar nenhum deles em app oficial da marca. Se o seu aparelho já tem outro player que aceita M3U ou Xtream, a lógica é a mesma: casar os campos com a mensagem.

## Erros que parecem culpa do serviço

Espaço no começo ou no fim do usuário. Senha com letra trocada porque a fonte do WhatsApp confunde caracteres parecidos. URL do servidor colada só até a metade. M3U aberto na opção de Xtream, e o contrário. Dois aparelhos com o mesmo login ao mesmo tempo, no plano de 1 tela, gerando queda que parece “lista inválida”.

Nada disso exige um plano mais caro para ser testado. Peça ajuda no WhatsApp com um print da tela, sem publicar a senha em grupo ou rede social. O atendimento é 24 horas. E, antes de fechar um período longo, as quatro horas de teste servem para ver se a lista abre no seu aparelho. Os períodos estão em [planos](/planos).

Quem ainda está decidindo se vale assinar pode ler [como escolher um IPTV](/blog/como-escolher-iptv) e os [cuidados ao pagar](/blog/iptv-e-seguro). O formato da lista não substitui essas perguntas.

## Guardar a mensagem sem espalhar

Deixe a mensagem original no WhatsApp ou no e-mail. É o backup quando o aplicativo é reinstalado. Não reescreva usuário e senha num arquivo com nome óbvio na área de trabalho compartilhada, e não mande print da senha para um grupo da família. Quem mora com você e vai assistir na única tela pode receber os dados com calma, sabendo que duas reproduções ao mesmo tempo não cabem no plano padrão.

Se um dia a lista deixar de abrir depois de uma troca de celular, o primeiro passo é colar de novo a mensagem original, não procurar “lista atualizada” em fórum. Listas de desconhecidos não são o acesso do Coffee Play. O suporte oficial, no número publicado no site, reenvia ou confere o que foi mandado. Isso vale tanto para M3U quanto para Xtream, e vale no teste de 4 horas tanto quanto depois de assinar.
`,
  },
  {
    kind: "article",
    slug: "como-escolher-iptv",
    path: "/blog/como-escolher-iptv",
    title: "Como escolher um IPTV confiável | Coffee Play",
    description:
      "Antes de assinar um IPTV, confira teste grátis, preço fechado, suporte e fidelidade. O Coffee Play publica planos, 4 horas de teste e WhatsApp.",
    h1: "Como escolher um IPTV confiável",
    eyebrow: "Guia",
    intro:
      "Anúncio bonito não substitui três coisas que dá para verificar antes de pagar: se existe teste, se o preço está escrito e se tem com quem falar quando a imagem falhar. O resto é detalhe.",
    related: [relatedBase.teste, relatedBase.planos, relatedBase.seguro, relatedBase.faq],
    minWords: 800,
    maxWords: 1500,
    body: `
## Teste antes de qualquer período longo

Um serviço que só aceita pagamento adiantado, sem deixar você ver a imagem na sua TV, pede confiança demais. O Coffee Play publica teste grátis de 4 horas para conferir a qualidade e a grade de canais antes de assinar. O pedido é no WhatsApp, e o acesso chega na hora, no WhatsApp ou no e-mail.

Use essas horas no aparelho e no horário reais. Testar de manhã, no Wi-Fi vazio, e assinar para assistir de noite, com a casa cheia, é um teste incompleto. O passo a passo do pedido está em [teste grátis](/teste-gratis).

Quatro horas não respondem tudo para sempre. Respondem se a lista abre, se a imagem te serve e se o suporte responde enquanto você ainda não pagou um ano.

## Preço escrito, sem fidelidade escondida

Desconfie de valor que só aparece no privado, diferente do que está no site, ou de “promoção de hoje” sem dizer o que acontece na renovação. No Coffee Play os períodos estão publicados:

- Mensal: R$ 24,90
- Trimestral: R$ 69,90, equivalente a R$ 23,30 por mês
- Semestral: R$ 130,00, equivalente a R$ 21,66 por mês
- Anual: R$ 250,00, equivalente a R$ 20,83 por mês

A página de [planos](/planos) ainda informa a economia de cada período mais longo, que o trimestral é o mais popular, e que não há multa nem fidelidade. A renovação é manual. Isso importa: ninguém deveria descobrir uma cobrança recorrente que não escolheu.

Pontos extras, para mais de uma tela, têm preços especiais que não estão nessa tabela. Pergunte antes. O plano padrão é 1 tela, como a [FAQ](/faq) explica.

O pagamento aceito é PIX, cartão de crédito e boleto, descrito como 100% seguro. Pagar por um atalho que não seja o canal do site é outro assunto, tratado em [cuidados ao assinar](/blog/iptv-e-seguro).

## Suporte com horário e canal claros

“Tem suporte” não significa nada se você não sabe onde chamar. O Coffee Play mostra WhatsApp, o e-mail coffeeplayy@gmail.com e atendimento de segunda a segunda, 24 horas. Há também a central do assinante em coffeeplay.tv. Um serviço confiável deixa esses caminhos visíveis antes da compra, não só depois que o acesso para.

No teste, vale mandar uma dúvida simples e ver o tempo de resposta. Não precisa ser um problema grave. Se ninguém responde enquanto você ainda está nas quatro horas, imagine a resposta no meio de um jogo.

O catálogo anunciado passa de 90.000 conteúdos, com canais em 4K, Full HD, HD e SD, filmes e séries on demand, canais adultos opcionais e guia de programação. Trate “opcional” ao pé da letra: adultos não precisam estar na sua tela. Se isso importa na sua casa, confirme no teste, em vez de acreditar só no número grande.

## Aparelho e rede entram na escolha

O melhor serviço do anúncio falha numa TV sem sinal de Wi-Fi. A lista de compatíveis inclui Smart TV Samsung, LG, Sony e Android TV, TV Boxes como MXQ, Mi Box, Fire Stick e Roku, celular Android e iOS, computador e Chromecast. Veja o seu aparelho em [instalação](/instalacao) e leia [qual aparelho combina](/blog/melhor-aparelho-para-iptv) se ainda vai comprar a caixa.

A internet mínima informada é 10 Mega. Meça na sala. O guia de [internet para 4K](/blog/internet-para-iptv-4k) explica por que o número do contrato não é o número da TV.

## O que não precisa decidir agora

Você não precisa escolher o aplicativo definitivo no primeiro dia. O site não impõe um player. M3U e Xtream Codes são formatos de lista, explicados à parte. Smarters, TiviMate e XCIPTV são exemplos de apps que pedem esses dados, não um selo oficial. Comece pelo teste, no aparelho que você já tem. Trocar de player é reversível. Pagar um ano sem ter visto a imagem, não.

## Um critério simples de comparação

Se você estiver olhando dois anúncios, ponha os dois lado a lado nestas linhas: tem teste com hora marcada, o preço do mês e do ano está numa página, a renovação é manual ou automática, o suporte tem canal e horário, e o plano diz quantas telas inclui. O Coffee Play responde essas linhas no próprio site: 4 horas, tabela de R$ 24,90 a R$ 250,00, sem multa e sem fidelidade, WhatsApp 24 horas, 1 tela no padrão.

O que o anúncio não precisa prometer, e esta página também não promete, é que nunca haverá um canal fora do ar ou uma noite de Wi-Fi ruim. Isso depende da grade naquele dia e da sua rede. Por isso o teste na sua sala pesa mais do que um adjetivo. Se as linhas de cima faltarem no outro anúncio, você não tem como conferir o resto. Volte para quem publica os números e atende antes do pagamento.
`,
  },
  {
    kind: "article",
    slug: "iptv-e-seguro",
    path: "/blog/iptv-e-seguro",
    title: "IPTV é seguro? Cuidados ao assinar | Coffee Play",
    description:
      "Cuidados ao assinar: use o WhatsApp oficial, pague por PIX, cartão ou boleto e não compartilhe o login. O plano padrão do Coffee Play é 1 tela.",
    h1: "IPTV é seguro? Cuidados ao assinar",
    eyebrow: "Guia",
    intro:
      "Segurança, aqui, é o que você controla na hora de pedir o teste, pagar e guardar o acesso. Não é um certificado mágico colado no anúncio. O Coffee Play afirma compra segura, privacidade e pagamento 100% seguro. Os hábitos abaixo são o que faz essa frase valer na prática.",
    related: [relatedBase.escolher, relatedBase.faq, relatedBase.teste, relatedBase.m3u],
    minWords: 800,
    maxWords: 1500,
    body: `
## Use o canal que está no site

O WhatsApp de atendimento publicado no rodapé é (21) 98799-8271. O pedido de teste que aparece nos botões do site usa outro atalho oficial, também no domínio wa.me da página. O e-mail é coffeeplayy@gmail.com. A central do assinante fica em coffeeplay.tv. Se uma mensagem chega de um número novo, com senso de urgência, pedindo um PIX “diferente” para liberar o mesmo acesso, pare. Confira no site antes de pagar.

Grupo de rede social, perfil com nome parecido e anúncio que copia a marca não substituem esses canais. O [teste grátis](/teste-gratis) também se pede por ali, não por um link solto que alguém encaminhou sem contexto.

## Como o pagamento é descrito

As formas informadas são PIX, cartão de crédito e boleto. O texto do site diz que o pagamento é 100% seguro. Os planos têm página própria, com valor fechado: R$ 24,90 no mensal, R$ 69,90 no trimestral, R$ 130,00 no semestral e R$ 250,00 no anual. Sem multa, sem fidelidade, renovação manual. Essa combinação facilita a vida de quem não quer cobrança automática surpresa.

Pagar fora desse caminho, para uma chave que não veio do fluxo do site, é o ponto em que a frase “compra segura” deixa de te cobrir. Se o valor não bate com a [página de planos](/planos), não complete. Pergunte no WhatsApp oficial e espere a resposta no mesmo canal.

Não existe, nesta página, uma taxa escondida de adesão. Se alguém inventar uma, ela não está no site.

## O acesso é uma credencial

Usuário, senha ou link de lista são como a chave de casa. O plano padrão é para 1 tela. Compartilhar com outra residência, ou deixar o login aberto em dois aparelhos ao mesmo tempo, além de cair a imagem, espalha a credencial. A resposta sobre telas extras está na [FAQ](/faq): há preços especiais para pontos adicionais, que você deve consultar, não adivinhar.

Não publique print em que a senha apareça. Não mande o acesso em grupo. Se desconfiar que outra pessoa está usando, fale com o suporte para orientar a troca, em vez de continuar assistindo “até ver o que acontece”.

O formato desses dados, M3U ou Xtream, está explicado em [outro guia](/blog/m3u-ou-xtream-codes). Nenhum dos dois formatos é desculpa para baixar um aplicativo de um site aleatório. Se for usar um player, instale pela loja do aparelho quando ele existir ali. Os exemplos de tela estão em [apps](/apps), e nenhum deles é apresentado como aplicativo obrigatório da marca.

## O que o site afirma, e o que você observa

“Totalmente seguro” e “privacidade garantida” são frases da própria página, ao lado de compra segura e ativação imediata. Leia isso como compromisso de quem vende, e confira o comportamento: o teste chega sem você ter pago o ano, o suporte responde, o valor cobrado é o da tabela. Observação vale mais do que adjetivo.

O serviço pede internet de no mínimo 10 Mega e lista os aparelhos compatíveis. Não pede, no site, que você desligue a proteção do roteador, instale perfil estranho no celular ou entregue senha do banco. Qualquer pedido nesse sentido está fora do que está publicado.

Canais adultos são opcionais. Em casa com criança, trate essa opção como escolha, não como padrão inevitável. Confirme no teste o que aparece na grade.

## Um roteiro curto antes de assinar

Peça as quatro horas. Assista na sua TV. Chame o WhatsApp uma vez, com uma dúvida real. Confira se o preço é o da página. Pague por PIX, cartão ou boleto no fluxo do site. Guarde o acesso só com quem mora com você, respeitando 1 tela, ou pergunte o ponto extra. Se algo disso falhar, você ainda não está preso: não há fidelidade nem multa na renovação manual.

Quem quer um critério maior, além do pagamento, encontra em [como escolher um IPTV](/blog/como-escolher-iptv).

## O que fica de fora de propósito

Este texto não diz que IPTV é liberado ou proibido, porque o site do Coffee Play não faz essa afirmação e um guia de cuidado não substitui orientação jurídica. Também não inventa certificado, nota de loja ou quantidade de clientes. O que dá para checar está publicado: canais de contato, formas de pagamento, preços, teste de 4 horas, uma tela no plano padrão e a lista de aparelhos.

Se a sua dúvida é só a imagem caindo, o caminho é técnico, não de desconfiança: internet de 10 Mega na sala, uma tela por vez e o relato ao suporte. Esse outro problema está em [IPTV travando](/blog/iptv-travando). Segurança de pagamento e estabilidade de Wi-Fi se resolvem com atitudes diferentes, e misturar os dois só atrasa os dois.
`,
  },
  {
    kind: "article",
    slug: "melhor-aparelho-para-iptv",
    path: "/blog/melhor-aparelho-para-iptv",
    title: "Melhor aparelho para IPTV | Coffee Play",
    description:
      "Smart TV, TV Box, Fire Stick, celular ou PC estão na lista do Coffee Play. Veja qual encaixa na sala, na viagem ou no computador, com internet de 10 Mega.",
    h1: "Melhor aparelho para IPTV",
    eyebrow: "Guia",
    intro:
      "Não existe um aparelho campeão para todo mundo. Existe o que você já tem na sala, o que cabe na viagem e o que a sua internet aguenta. O Coffee Play lista vários compatíveis e diz que roda liso, com instalação em segundos. A escolha é encaixar essa lista na sua rotina.",
    related: [relatedBase.instalacao, relatedBase.internet, relatedBase.travando, relatedBase.apps],
    minWords: 800,
    maxWords: 1500,
    body: `
## O que a lista oficial inclui

Os compatíveis publicados são estes:

- Smart TVs Samsung, LG, Sony e Android TV
- TV Box, com MXQ, Mi Box, Fire Stick e Roku entre os exemplos
- Celular Android e iOS, iPhone e iPad
- Computador Windows, Mac e Linux
- Chromecast, para transmitir do celular para a TV

A exigência de rede é a mesma para todos: no mínimo 10 Mega. Trocar de caixa não corrige um Wi-Fi que não chega na sala. Se a imagem corta, leia [IPTV travando](/blog/iptv-travando) e [internet para 4K](/blog/internet-para-iptv-4k) antes de comprar outro aparelho.

Cada grupo tem uma página própria em [instalação](/instalacao). O plano padrão continua sendo 1 tela, não importa qual caixa você escolha.

## Smart TV, quando ela já está na parede

Se a TV é Samsung, LG, Sony ou Android TV, você pode nem precisar de um aparelho extra. O acesso chega no WhatsApp ou no e-mail, e o suporte ajuda se a loja da TV for confusa. A vantagem é um controle só e nenhum decodificador ocupando a tomada. A limitação é a loja daquela marca: nem todo player aparece ali. Quando o aplicativo que você queria não existe na TV, um TV Box ligado na entrada HDMI resolve sem trocar o televisor.

4K na Smart TV só aparece como 4K se o conteúdo vier nessa faixa e se a rede segurar. A TV ser 4K não cria qualidade que a conexão não entrega.

## TV Box, Fire Stick e Roku

MXQ, Mi Box, Fire Stick e Roku estão agrupados no site como TV Box. São caixinhas na HDMI, úteis quando a Smart TV é antiga ou a loja dela é pobre. Fire Stick tem página separada porque muita gente procura por esse nome: [Coffee Play no Fire Stick](/instalacao/fire-stick). Android TV e as outras caixas estão em [Android e TV Box](/instalacao/android-tv-box).

Esses aparelhos costumam ser o lugar onde players como TiviMate aparecem. O Coffee Play não exige esse app. Se for usar um, o guia está em [apps](/apps), e os dados continuam sendo os da mensagem oficial, em M3U ou Xtream.

Uma caixa barata e sem folga de memória trava o sistema inteiro, não só um canal. Se o menu da caixa já está lento antes de abrir a lista, o limite é o aparelho.

## Celular, tablet e Chromecast

Android e iPhone/iPad estão na lista, e o benefício do plano cita assistir no celular ou na TV. Para viagem, ou para o quarto sem televisor, o celular basta. Na sala, o Chromecast entra como o site descreve: transmitir do celular para a TV. Os dois precisam enxergar o Wi-Fi com folga. O detalhe do celular está em [celular](/instalacao/celular). O caminho com o Chromecast na sala está em [IPTV no Chromecast](/blog/iptv-no-chromecast).

Celular no bolso com a tela bloqueada não deve ficar reproduzindo junto com a TV. Isso consome a única tela do plano padrão e parece “queda do serviço”.

## Computador

Windows, Mac e Linux servem para quem assiste na mesa, ou para testar se a lista abre antes de mexer na TV. É um bom primeiro passo nas quatro horas de teste: se no computador, ligado no cabo, a imagem vem, e na TV não, você isolou o problema na sala. A página é [Coffee Play no PC](/instalacao/pc).

## Como decidir sem comprar à toa

Comece pelo que já está em casa. Peça o [teste de 4 horas](/teste-gratis) nesse aparelho. Se a loja não deixa instalar um player e você não quer outro, pergunte ao suporte antes de adquirir uma caixa. Se a TV for hostil e você já sabe que quer HDMI, um TV Box ou Fire Stick da lista basta. Não há, no site, um modelo “oficial” único nem uma exigência de marca além dos exemplos publicados.

Os preços do acesso, separados do preço do aparelho, continuam em [planos](/planos). A caixa você compra uma vez. O período do Coffee Play é mensal, trimestral, semestral ou anual, sem fidelidade.

## Uma ordem que evita gasto à toa

Primeiro meça a internet ao lado da TV. Se não chega perto dos 10 Mega, nenhum aparelho da lista vai criar banda. Depois peça as 4 horas de teste no que você já tem, mesmo que seja o celular ou o computador. Se a imagem servir e a loja da TV não deixar instalar um player, aí sim um TV Box ou Fire Stick entra na conversa. Se a imagem não servir nem no cabo, no computador, o aparelho novo não é o próximo passo: é o suporte, com o relato do teste.

Quem assiste em dois cômodos precisa lembrar da tela única do plano padrão antes de comprar duas caixas. O segundo ponto tem preço à parte, não publicado nesta página. Perguntar no WhatsApp custa menos do que duas caixas ligadas num login só, as duas caindo no meio do programa. O aparelho certo é o que a sua casa usa de verdade, na rede que ela tem, com o número de telas que o plano cobre.
`,
  },
  {
    kind: "article",
    slug: "iptv-no-chromecast",
    path: "/blog/iptv-no-chromecast",
    title: "IPTV no Chromecast: transmitir do celular | Coffee Play",
    description:
      "O Chromecast transmite o Coffee Play do celular para a TV. Confira o mesmo Wi-Fi, os 10 Mega, o plano de 1 tela e o teste grátis de 4 horas no WhatsApp.",
    h1: "IPTV no Chromecast: transmitir do celular",
    eyebrow: "Guia",
    intro:
      "No site do Coffee Play, o Chromecast não abre a lista sozinho. Ele transmite do celular para a TV. Se o aparelho já está na HDMI da sala, dá para assistir sem trocar o televisor, desde que o telefone e o Wi-Fi da casa acompanhem.",
    related: [
      { href: "/instalacao/celular", label: "Coffee Play no celular" },
      relatedBase.internet,
      relatedBase.aparelho,
      relatedBase.faq,
    ],
    minWords: 800,
    maxWords: 1500,
    body: `
## O que o site publica sobre o Chromecast

Na página de celular, o Chromecast aparece junto com Android e iOS. A frase do site é direta: dá para assistir no celular e, com Chromecast, transmitir do celular para a TV. Não há aplicativo oficial do Coffee Play para esse aparelho, nem uma geração obrigatória. O celular reproduz. A TV mostra.

Procurar uma loja dentro do Chromecast, como se ele fosse um TV Box, é um caminho que o site não descreve. MXQ, Mi Box, Fire Stick e Roku estão em [Android e TV Box](/instalacao/android-tv-box). O Chromecast está em [celular](/instalacao/celular). Se a TV já abre um player sem telefone, compare com [qual aparelho usar](/blog/melhor-aparelho-para-iptv) antes de insistir na transmissão.

O celular compatível é Android ou iPhone/iPad. A transmissão junta o telefone e a TV da sala quando a loja do televisor não ajuda, ou quando o controle que você quer é o que já está na mão.

## Celular e Chromecast na mesma rede

Os dois precisam ver o mesmo roteador. Rede de visitas, que isola os aparelhos, deixa o celular online e o Chromecast invisível. Se a TV não aparece para transmitir, saia do Wi-Fi de convidados e use a rede principal. Confira também se o telefone não caiu nos dados móveis. Dados móveis e o Wi-Fi da sala não se encontram.

A distância pesa nos dois pontos. O celular no sofá pode ter sinal cheio e o Chromecast atrás da TV ficar no canto morto. A imagem sai do telefone e ainda precisa chegar na HDMI. O guia de [internet para 4K](/blog/internet-para-iptv-4k) descreve esse caminho: o Wi-Fi entra duas vezes, no celular e de novo até a TV. A folga acaba mais rápido do que numa Smart TV ligada direto.

O piso publicado é no mínimo 10 Mega, medido ao lado da TV, não só na cozinha. Se a velocidade oscila, a transmissão oscila. Perto do roteador, 5 GHz costuma sobrar. Do outro lado da casa, o sinal no Chromecast pode ficar justo mesmo com um plano largo no contrato. O site não exige cabo. Assista alguns minutos só no celular. Se ali a imagem firma e só piora na TV, o limite está no segundo trecho de Wi-Fi, não na lista que você recebeu.

## O acesso abre no celular

O envio é imediato. Pedido o teste ou confirmado o pagamento, os dados chegam no WhatsApp ou no e-mail. Essa mensagem manda nos campos: um link de lista, ou servidor, usuário e senha. A diferença está em [M3U ou Xtream Codes](/blog/m3u-ou-xtream-codes). Não invente um servidor que a mensagem não trouxe, e não cole um link cortado pela quebra de linha.

O player fica no telefone. O site não impõe um aplicativo. Exemplos de tela, em outros aparelhos, estão em [apps](/apps), e nenhum deles é app obrigatório da marca. No celular, instale pela loja do Android ou da Apple quando o aplicativo existir ali. Arquivo solto ou APK de site desconhecido não faz parte do atendimento publicado.

Abra um canal no celular e só então transmita. Se a lista não carrega no telefone, a TV não corrige senha com espaço, usuário trocado ou formato errado. O suporte, de segunda a segunda e 24 horas, lê melhor um print em que a senha não aparece.

A função de transmitir é do celular, para o Chromecast que estiver na mesma rede. O Coffee Play não publica um botão com outro nome. Se o player não mostrar esse controle, use a opção de transmitir tela do próprio telefone. Continua sendo o celular levando a imagem até a TV, que é o uso descrito no site.

## Uma tela, mesmo com a TV ligada

Os planos padrão são para 1 tela. Transmitir é o celular usando o acesso, com a TV só exibindo. Abrir o mesmo login ao mesmo tempo na Smart TV, no tablet ou no telefone de outra pessoa são duas reproduções, e o plano padrão não foi descrito para isso.

Feche os outros aparelhos antes de concluir que o Chromecast derrubou o canal. A pergunta sobre mais telas está nas [dúvidas frequentes](/faq). O ponto adicional tem preço especial, não publicado neste guia. Se a sala e o quarto precisam funcionar juntos, pergunte no WhatsApp em vez de assumir o valor.

O celular que transmite precisa seguir na rede. Em alguns telefones, bloquear a tela pausa o aplicativo ou corta a transmissão. Se a TV congela quando o telefone apaga, destrave e veja se a imagem volta. Deixar o telefone tocando no bolso e ainda abrir outro aplicativo na TV consome a única tela do plano.

## Como usar as quatro horas de teste

O [teste grátis de 4 horas](/teste-gratis) mostra esse arranjo na sua sala, não na casa de outra pessoa. Peça no WhatsApp, receba os dados na hora e use as horas no horário em que você assiste, com o Wi-Fi do dia a dia.

- Assista alguns minutos só no celular, ao lado da TV, sem transmitir.
- Transmita o mesmo canal e espere cerca de dez minutos, com download e videochamada pausados.
- Abra também um filme ou uma série on demand. O catálogo inclui filmes e séries on demand e canais em 4K, Full HD, HD e SD.
- Se a grade aparecer, ela é o guia de programação citado no plano. Se não aparecer, o canal ainda pode tocar.

4K pede mais da rede do que HD. Se a transmissão em 4K corta e o HD segura, a sala está no limite da faixa mais pesada. Não é obrigatório assistir tudo em 4K. O mínimo informado continua 10 Mega. Se o celular segura e a TV picota, o ajuste é o Wi-Fi da sala. Se os dois picotam, com a casa quieta e a medição acima dos 10 Mega, siga o guia de [imagem travando](/blog/iptv-travando) e leve aparelho, Wi-Fi, se havia outra tela e o canal da falha.

## Quando outro aparelho faz mais sentido

O Chromecast depende do celular por perto, acordado e na mesma rede. Quem quer a TV sozinha, com um controle só, olha Smart TV Samsung, LG, Sony ou Android TV, ou um TV Box como MXQ, Mi Box, Fire Stick e Roku. O mapa está em [instalação](/instalacao). O site não pede que você compre um aparelho novo para fazer o teste.

Não troque de caixa se o celular já mostra a imagem e o que falta é sinal na sala. Aparelho novo não cria mega. Se a loja da TV não ajuda e você não quer o telefone no meio da sessão, um TV Box da lista entra depois de ver a imagem pelo menos uma vez.

## Se a imagem servir

Os períodos publicados são mensal R$ 24,90, trimestral R$ 69,90, semestral R$ 130,00 e anual R$ 250,00. Sem multa, sem fidelidade, com renovação manual. A tabela, com o equivalente mensal de cada período, está em [planos](/planos). O pagamento informado é PIX, cartão de crédito ou boleto. O preço do Chromecast não está no site, e este texto não inventa um. O hardware é seu. O Coffee Play cobra o período do acesso.

Se algo falhar, o WhatsApp de suporte do rodapé é (21) 98799-8271 e o e-mail é coffeeplayy@gmail.com, com atendimento 24 horas. Diga se o celular sozinho toca, se o Chromecast aparece para transmitir, se os dois estão na mesma rede e se outro login estava aberto. A conversa começa do ponto em que a sua sala realmente parou.
`,
  },
];
