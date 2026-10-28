export type Lesson = { id: string; subjectId: string; title: string; objective: string; sections: { heading: string; body: string; example?: string }[]; summary: string[]; tecSearch: string };
export type Question = { id: string; subjectId: string; topic: string; statement: string; options: string[]; answer: number; explanations: string[]; takeaway: string };
const tec = 'https://www.tecconcursos.com.br/questoes/cadernos';
export const lessons: Lesson[] = [
 { id:'port-interpretação', subjectId:'portugues', title:'Interpretação de textos: tema, ideia central e inferência', objective:'Distinguir o assunto geral, a ideia defendida pelo autor e as conclusões que podem ser tiradas das pistas do texto.', sections:[
  {heading:'1. Tema e ideia central',body:'Tema é o assunto geral de que o texto trata. Ideia central é aquilo que o texto afirma sobre esse assunto. Em questões FGV, não basta localizar uma palavra repetida: é preciso compreender a mensagem do conjunto.',example:'Texto: “A tecnologia facilita tarefas, mas seu uso sem planejamento pode aumentar distrações.” Tema: tecnologia. Ideia central: a tecnologia ajuda, porém precisa ser usada com planejamento.'},
  {heading:'2. Informação explícita',body:'É aquela que aparece diretamente no texto. A resposta pode exigir paráfrase, mas não pode acrescentar informação que o texto não forneceu.',example:'Se o texto diz que “a reunião começou às nove”, afirmar que começou às 9h é explícito.'},
  {heading:'3. Inferência',body:'É uma conclusão razoável construída a partir de pistas textuais. Inferir não é inventar: a conclusão deve ser sustentada pelo texto. Desconfie de alternativas com “sempre”, “nunca”, “todos” ou causas que não foram apresentadas.'},
  {heading:'4. Estratégia para a FGV',body:'Leia o comando antes de marcar. Volte ao trecho que sustenta a resposta. Elimine alternativas que extrapolam, contradizem o texto ou trocam uma possibilidade por certeza. Diferencie a opinião do autor da opinião de personagens citados.'}
 ],summary:['Tema = assunto geral.','Ideia central = o que se afirma sobre o tema.','Explícito = está dito no texto.','Inferência = conclusão sustentada por pistas, sem extrapolar.'],tecSearch:tec},
 { id:'penal-crime',subjectId:'penal',title:'Conceito analítico de crime',objective:'Entender a estrutura tripartida mais cobrada: fato típico, ilicitude e culpabilidade.',sections:[
  {heading:'1. Conceito tripartido',body:'Na teoria tripartida, crime é fato típico, ilícito (antijurídico) e culpável. As três categorias são analisadas separadamente. Há outras formulações doutrinárias, mas essa é a referência usual em questões introdutórias.'},
  {heading:'2. Fato típico',body:'É o fato que se encaixa na descrição da lei penal. Em sua análise aparecem conduta, resultado quando exigido, nexo causal quando aplicável e tipicidade. Não confunda fato típico com crime completo: ainda se examinam ilicitude e culpabilidade.'},
  {heading:'3. Ilicitude',body:'É a contrariedade do fato típico ao Direito. A legítima defesa e o estado de necessidade, por exemplo, podem excluir a ilicitude quando os requisitos legais estão presentes.'},
  {heading:'4. Culpabilidade',body:'É o juízo de reprovação pessoal sobre o agente. Na formulação usual, estuda-se imputabilidade, potencial consciência da ilicitude e exigibilidade de conduta diversa. A ausência de culpabilidade não apaga automaticamente a ocorrência material do fato.'}
 ],summary:['Fato típico: encaixe na descrição penal.','Ilicitude: contrariedade ao Direito, salvo justificante.','Culpabilidade: possibilidade de reprovação pessoal.','Tripartido: fato típico + ilicitude + culpabilidade.'],tecSearch:tec},
 { id:'constitucional-principios',subjectId:'constitucional',title:'Constituição: conceito e princípios fundamentais',objective:'Reconhecer funções constitucionais e os princípios fundamentais previstos nos arts. 1º a 4º da Constituição.',sections:[
  {heading:'1. Conceito',body:'A Constituição é a norma fundamental que organiza o Estado, distribui competências, limita o poder e reconhece direitos e garantias. As normas inferiores devem respeitar a Constituição.'},
  {heading:'2. Fundamentos da República (art. 1º)',body:'São fundamentos: soberania; cidadania; dignidade da pessoa humana; valores sociais do trabalho e da livre iniciativa; pluralismo político. Macete: SO-CI-DI-VA-PLU.'},
  {heading:'3. Poderes e objetivos',body:'O art. 2º prevê Legislativo, Executivo e Judiciário, independentes e harmônicos entre si. O art. 3º lista objetivos fundamentais, como construir sociedade livre, justa e solidária e reduzir desigualdades sociais e regionais.'},
  {heading:'4. Relações internacionais',body:'O art. 4º traz princípios como independência nacional, prevalência dos direitos humanos, autodeterminação dos povos, não intervenção, igualdade entre os Estados, defesa da paz e solução pacífica dos conflitos.'}
 ],summary:['Art. 1º: fundamentos da República.','Art. 2º: separação dos Poderes.','Art. 3º: objetivos fundamentais.','Art. 4º: princípios das relações internacionais.'],tecSearch:tec},
 { id:'informatica-processador',subjectId:'informatica',title:'Hardware: processador, núcleos e threads',objective:'Diferenciar núcleo físico, thread lógica e frequência sem cair em afirmações absolutas.',sections:[
  {heading:'1. O que faz a CPU?',body:'A CPU executa instruções e coordena operações de processamento. O desempenho depende de diversos fatores, incluindo arquitetura, núcleos, frequência, cache, consumo e tipo de tarefa.'},
  {heading:'2. Núcleos físicos e threads',body:'Núcleo físico é uma unidade de processamento no chip. Tecnologias de multithreading podem permitir que um núcleo execute mais de uma thread lógica em certas condições. Threads lógicas não são simplesmente núcleos físicos extras.'},
  {heading:'3. Pegadinhas de prova',body:'Evite absolutos como “todos os processadores têm”, “apenas núcleos físicos” ou “mais frequência sempre significa maior desempenho”. A resposta depende da arquitetura e da carga de trabalho.'}
 ],summary:['Núcleo físico = unidade de execução do chip.','Thread lógica = fluxo lógico de execução; não equivale a núcleo físico.','Desempenho depende de vários fatores, não só frequência.'],tecSearch:tec},
 { id:'extravagante-metodo',subjectId:'extravagante',title:'Legislação penal extravagante: como estudar para a PCMG',objective:'Organizar a leitura das leis especiais e reconhecer os pontos que costumam ser confundidos em questões objetivas.',sections:[
  {heading:'1. O que significa legislação extravagante?',body:'É o conjunto de leis penais e processuais penais que ficam fora do Código Penal e do Código de Processo Penal. Elas complementam o sistema: podem definir crimes, penas, procedimentos, meios de investigação ou regras especiais. Para a prova, a lista efetivamente cobrada depende do edital vigente.'},
  {heading:'2. Comece pelo texto legal',body:'Para cada lei, monte uma ficha com: finalidade e âmbito de aplicação; conceitos e definições; condutas proibidas; elemento subjetivo quando indicado; penas e causas de aumento ou diminuição; regras processuais e prazos; exceções e alterações legislativas. Não memorize apenas resumos: confira os artigos na versão oficial atualizada.'},
  {heading:'3. Diplomas para organizar no ciclo PCMG',body:'Na lista preliminar de estudo estão Lei de Drogas (Lei 11.343/2006), Estatuto do Desarmamento (Lei 10.826/2003), Crimes Hediondos (Lei 8.072/1990), Lei de Tortura (Lei 9.455/1997), Abuso de Autoridade (Lei 13.869/2019), Lei Maria da Penha (Lei 11.340/2006), Organizações Criminosas (Lei 12.850/2013), Lavagem de Dinheiro (Lei 9.613/1998), Interceptação Telefônica (Lei 9.296/1996) e dispositivos pertinentes do ECA. Confirme a lista no edital oficial quando publicado.'},
  {heading:'4. Como a FGV pode cobrar',body:'Leia com atenção o verbo da questão, o sujeito da conduta, a finalidade exigida, as exceções e a consequência jurídica. Alternativas podem misturar uma regra correta de uma lei com prazo, requisito ou pena pertencente a outra. Marque o artigo de origem de cada informação e resolva questões por diploma legal.'},
  {heading:'5. Cuidado com alterações',body:'Leis especiais podem ser modificadas. Uma apostila antiga ou uma questão baseada em redação anterior pode não refletir o texto atual. Antes de transformar um detalhe em regra de memória, confira a redação vigente em fonte oficial e registre a data da consulta.'}
 ],summary:['Legislação extravagante = leis especiais fora do CP e do CPP.','Estude artigo por artigo: conduta, requisitos, finalidade, pena, exceções e procedimento.','A lista preliminar de leis não substitui o edital oficial.','Confira sempre a redação vigente em fonte oficial.'],tecSearch:tec},
 {id:'rlm-proposicoes',subjectId:'rlm',title:'Raciocínio lógico: proposições e negação',objective:'Reconhecer proposições e negar frases quantificadas sem trocar a lógica por uma frase apenas parecida.',sections:[
  {heading:'1. O que é uma proposição?',body:'Proposição é uma frase declarativa à qual podemos atribuir um valor lógico: verdadeiro ou falso. Não precisa ser verdadeira; precisa ser possível julgar seu valor lógico.',example:'“Brasília é a capital do Brasil.” é proposição. “Feche a porta!” é uma ordem e não é proposição. “Que horas são?” é pergunta e não é proposição.'},
  {heading:'2. Frases que não são proposições',body:'Ordens, perguntas, desejos e exclamações subjetivas normalmente não são proposições lógicas, porque não afirmam algo que possa ser classificado objetivamente como verdadeiro ou falso.',example:'“Estude para a prova” é uma ordem. “Tomara que chova” expressa desejo. Nenhuma das duas é proposição.'},
  {heading:'3. Negação de uma proposição',body:'Negar uma frase significa produzir outra que tenha valor lógico oposto. A negação não é necessariamente uma frase com palavras opostas; é a afirmação de que a frase original não é verdadeira.',example:'P: “O portão está aberto.” Negação: “O portão não está aberto.”'},
  {heading:'4. Negação de frases com “todos”',body:'A negação de “Todos os candidatos estudaram” é “Pelo menos um candidato não estudou”. Para derrubar uma afirmação universal, basta um contraexemplo. Não é necessário afirmar que ninguém estudou.',example:'“Todos chegaram no horário” → “Pelo menos uma pessoa não chegou no horário”.'},
  {heading:'5. Negação de frases com “existe algum”',body:'A negação de “Existe pelo menos um candidato aprovado” é “Nenhum candidato foi aprovado”. Atenção: “algum” e “pelo menos um” indicam existência; sua negação elimina essa existência.',example:'“Algum arquivo foi salvo” → “Nenhum arquivo foi salvo”.'},
  {heading:'6. Pegadinhas de prova',body:'Não confunda a negação de “todos estudaram” com “ninguém estudou”: a segunda afirmação é muito mais forte. Leia os quantificadores com cuidado e verifique se a alternativa é exatamente a negação lógica, não apenas uma frase diferente.'}
 ],summary:['Proposição: frase declarativa com valor verdadeiro ou falso.','Perguntas, ordens e desejos não são proposições.','Negação de “todos P”: “existe pelo menos um que não P”.','Negação de “existe algum P”: “nenhum P”.','Não confunda negar uma afirmação universal com afirmar o contrário para todos.'],tecSearch:tec},
 {id:'port-morfologia',subjectId:'portugues',title:'Português: classes de palavras e substantivo',objective:'Identificar classes de palavras pelo papel que exercem no contexto, começando pelo substantivo.',sections:[
  {heading:'1. O que é morfologia?',body:'Morfologia estuda a estrutura, a formação e a classificação das palavras. Em questões de concurso, a classe de uma palavra deve ser identificada pelo contexto, não apenas pela aparência.',example:'Em “O jantar estava pronto”, jantar é substantivo. Em “Vou jantar cedo”, jantar é verbo.'},
  {heading:'2. Substantivo',body:'Substantivo é a palavra que nomeia seres, pessoas, lugares, sentimentos, ações, estados e conceitos. Pode ser concreto ou abstrato, comum ou próprio, simples ou composto, primitivo ou derivado, entre outras classificações.',example:'policial, cidade, coragem, investigação, Brasil e guarda-chuva são substantivos.'},
  {heading:'3. Concreto e abstrato',body:'Substantivos concretos nomeiam seres considerados como tendo existência própria, reais ou imaginários. Abstratos nomeiam ações, estados, qualidades ou sentimentos que dependem de um ser ou contexto para se manifestar.',example:'“cachorro” e “fantasma” são concretos; “coragem”, “beleza” e “investigação” são abstratos.'},
  {heading:'4. Comum e próprio',body:'Comum nomeia seres de uma mesma espécie de forma geral; próprio individualiza um ser ou entidade e normalmente começa com letra maiúscula.',example:'cidade é comum; Belo Horizonte é próprio. policial é comum; Maria é próprio.'},
  {heading:'5. Simples e composto',body:'Simples apresenta um só radical; composto apresenta mais de um radical. Não confunda número de palavras escritas com número de radicais.',example:'“flor” é simples; “guarda-chuva” é composto.'},
  {heading:'6. Pegadinha FGV: classe depende do uso',body:'Uma palavra pode pertencer a classes diferentes conforme a função no enunciado. Analise o que ela faz na frase e se está nomeando algo ou indicando uma ação, característica ou circunstância.',example:'“O olhar dele assustou a equipe” — olhar é substantivo. “Ele vai olhar o documento” — olhar é verbo.'}
 ],summary:['Morfologia classifica palavras.','Substantivo nomeia seres, lugares, sentimentos, ações e conceitos.','Concreto/abstrato e comum/próprio são classificações diferentes.','A classe gramatical pode mudar conforme o contexto.'],tecSearch:tec},
 {id:'processo-penal-inquerito',subjectId:'processo-penal',title:'Processo Penal: inquérito policial',objective:'Entender a finalidade, as características gerais e os limites do inquérito policial para questões de concurso.',sections:[
  {heading:'1. Conceito e finalidade',body:'O inquérito policial é um procedimento administrativo de investigação, conduzido pela polícia judiciária, destinado a apurar a existência de uma infração penal e indícios de autoria. Reúne elementos informativos que podem auxiliar o titular da ação penal.',example:'Após um furto, a polícia pode ouvir testemunhas, requisitar perícias e reunir informações para esclarecer o fato e identificar possível autor.'},
  {heading:'2. Inquérito não é processo',body:'O inquérito não é um processo judicial e não termina com sentença condenatória. A função de julgar e impor pena cabe ao Poder Judiciário, observadas as garantias do processo. A investigação pode subsidiar a atuação do titular da ação penal.'},
  {heading:'3. Características gerais',body:'Em regra, o inquérito é escrito, sigiloso na medida necessária à investigação, oficial quando conduzido por órgão estatal competente e inquisitivo, pois não reproduz integralmente a estrutura contraditória do processo judicial. O sigilo não é absoluto e há garantias de acesso da defesa aos elementos documentados nos termos aplicáveis.'},
  {heading:'4. Dispensabilidade',body:'O inquérito policial é, em regra, dispensável para o oferecimento da ação penal se já existirem elementos informativos suficientes obtidos por outros meios lícitos. Não é correto afirmar que toda ação penal depende obrigatoriamente de inquérito concluído.',example:'Documentos, perícias ou outros elementos lícitos suficientes podem, conforme o caso, embasar a atuação do titular da ação penal sem a conclusão de inquérito.'},
  {heading:'5. Pegadinhas de prova',body:'Desconfie de expressões absolutas como “sempre obrigatório”, “condena o investigado” ou “sigilo absoluto”. Separe a fase investigativa da fase processual e confira o texto legal atualizado, especialmente os dispositivos do CPP indicados no edital.'}
 ],summary:['O inquérito apura a infração penal e indícios de autoria.','É procedimento investigatório, não processo judicial.','Não condena e não substitui a ação penal.','Em regra, é dispensável se houver elementos suficientes por outros meios lícitos.','O sigilo não é absoluto.'],tecSearch:tec},
 {id:'penal-tentativa-consumacao',subjectId:'penal',title:'Direito Penal: consumação e tentativa',objective:'Distinguir crime consumado, tentado, desistência voluntária e arrependimento eficaz.',sections:[
 {heading:'1. Crime consumado',body:'O crime é consumado quando se reúnem todos os elementos de sua definição legal, conforme o art. 14, I, do Código Penal. O momento da consumação depende do tipo penal: não existe uma única regra factual para todos os crimes.',example:'No homicídio, a consumação ocorre com a morte da vítima.'},
 {heading:'2. Crime tentado',body:'Pelo art. 14, II, do Código Penal, há tentativa quando, iniciada a execução, o crime não se consuma por circunstâncias alheias à vontade do agente. Em regra, a pena do crime consumado é reduzida de um a dois terços, observadas as regras legais e as particularidades do delito.',example:'O agente dispara para matar, mas erra o alvo por circunstância alheia à sua vontade.'},
 {heading:'3. Desistência voluntária',body:'O agente interrompe voluntariamente a execução antes de esgotar os atos executórios. Responde pelos atos já praticados, se constituírem infração penal. O ponto decisivo é a voluntariedade da interrupção, não um simples impedimento externo.',example:'O agente poderia continuar executando o plano, mas decide parar por vontade própria.'},
 {heading:'4. Arrependimento eficaz',body:'O agente já praticou os atos executórios, mas atua voluntariamente para impedir que o resultado se produza. Se o resultado não ocorre por sua atuação eficaz, responde pelos atos já praticados, conforme o art. 15 do Código Penal.',example:'Depois de envenenar a vítima, o agente voluntariamente providencia socorro eficaz que impede a morte.'},
 {heading:'5. Pegadinha de prova',body:'Na tentativa, a não consumação decorre de circunstância alheia à vontade do agente. Na desistência voluntária, ele para durante a execução; no arrependimento eficaz, impede o resultado depois de esgotar os atos executórios. Memorize a diferença sem ignorar os detalhes do enunciado.'}
 ],summary:['Consumado: todos os elementos legais se realizam.','Tentado: execução iniciada, sem consumação por circunstância alheia à vontade.','Desistência voluntária: agente para a execução por vontade própria.','Arrependimento eficaz: agente impede o resultado após os atos executórios.','Nos casos do art. 15, responde pelos atos já praticados.'],tecSearch:tec},
 {id:'administrativo-principios',subjectId:'administrativo',title:'Direito Administrativo: princípios da Administração Pública',objective:'Reconhecer os princípios expressos no art. 37 da Constituição Federal.',sections:[{heading:'1. LIMPE',body:'O caput do art. 37 da Constituição Federal prevê legalidade, impessoalidade, moralidade, publicidade e eficiência para a Administração Pública direta e indireta. A sigla LIMPE ajuda a memorizar a lista.'},{heading:'2. Legalidade',body:'O agente público deve atuar com fundamento no ordenamento jurídico e dentro de suas competências. A vontade pessoal não substitui a autorização jurídica necessária.',example:'Um servidor não pode criar uma obrigação ao cidadão sem fundamento jurídico.'},{heading:'3. Impessoalidade',body:'A atuação deve buscar o interesse público, sem favorecimentos ou perseguições pessoais. A publicidade institucional não pode ser usada para promoção pessoal de autoridades ou servidores.'},{heading:'4. Moralidade e publicidade',body:'Moralidade exige ética e probidade. Publicidade exige transparência, respeitadas as hipóteses legais de sigilo.'},{heading:'5. Eficiência',body:'A Administração deve buscar qualidade, bons resultados e uso adequado dos recursos. Eficiência não autoriza descumprir a lei.'},{heading:'6. Questões FGV',body:'Favorecimento pessoal aponta para impessoalidade; falta de fundamento jurídico, para legalidade; falta de transparência, para publicidade; desperdício e serviço ruim, para eficiência.'}],summary:['LIMPE: legalidade, impessoalidade, moralidade, publicidade e eficiência.','Legalidade: atuação conforme o ordenamento.','Impessoalidade: sem favorecimento ou promoção pessoal.','Publicidade: transparência, ressalvado o sigilo legal.','Eficiência: qualidade e resultados sem abandonar a lei.'],tecSearch:tec},
 {id:'constitucional-direitos',subjectId:'constitucional',title:'Direitos e garantias fundamentais: art. 5º',objective:'Revisar regras iniciais do art. 5º da Constituição Federal.',sections:[{heading:'1. Igualdade',body:'O art. 5º afirma que todos são iguais perante a lei, sem distinção de qualquer natureza, e protege direitos fundamentais como vida, liberdade, igualdade, segurança e propriedade.'},{heading:'2. Legalidade',body:'Ninguém será obrigado a fazer ou deixar de fazer alguma coisa senão em virtude de lei. A regra limita imposições sem fundamento jurídico.'},{heading:'3. Manifestação do pensamento',body:'A manifestação do pensamento é livre, mas o anonimato é vedado. A liberdade de expressão não afasta automaticamente a responsabilidade por abusos.'},{heading:'4. Consciência e crença',body:'A Constituição protege a liberdade de consciência e de crença e assegura o livre exercício dos cultos religiosos, na forma constitucional e legal.'},{heading:'5. Atenção à FGV',body:'Observe expressões absolutas nas alternativas e confira se elas ignoram ressalvas constitucionais. Diferencie liberdade de manifestação da ideia de ausência total de responsabilidade.'}],summary:['Art. 5º protege direitos e garantias fundamentais.','Ninguém será obrigado a fazer ou deixar de fazer algo senão em virtude de lei.','A manifestação do pensamento é livre, vedado o anonimato.','Liberdade não significa ausência automática de responsabilização.'],tecSearch:tec},

 {id:'port-periodo-simples-composto',subjectId:'portugues',title:'Sintaxe: período simples e período composto',objective:'Diferenciar frase, oração e período, identificando quantas orações existem em um enunciado.',sections:[
  {heading:'1. Frase, oração e período',body:'Frase é um enunciado com sentido completo, com verbo ou sem verbo. Oração é a estrutura organizada em torno de um verbo ou locução verbal. Período é a frase formada por uma ou mais orações.',example:'“Silêncio!” é frase sem verbo. “O candidato estudou.” tem uma oração e forma um período simples.'},
  {heading:'2. Período simples',body:'O período simples apresenta apenas uma oração, portanto normalmente possui um único núcleo verbal (verbo ou locução verbal). Não conte palavras: identifique os verbos e veja como estão organizados.',example:'“A investigadora analisou o documento.” — uma oração, um verbo: período simples.'},
  {heading:'3. Período composto',body:'O período composto apresenta duas ou mais orações. Elas podem se relacionar por coordenação, quando têm independência sintática relativa, ou por subordinação, quando uma exerce função em relação à outra.',example:'“A investigadora analisou o documento e redigiu o relatório.” — duas formas verbais com duas ações: período composto.'},
  {heading:'4. Locução verbal: cuidado',body:'Uma locução verbal é formada por verbo auxiliar + verbo principal e, em regra, constitui um único núcleo verbal para a contagem de orações. Não conte automaticamente cada palavra verbal como uma oração.',example:'“O candidato vai estudar.” — “vai estudar” é locução verbal; há uma oração.'},
  {heading:'5. Como resolver questões',body:'Localize primeiro os verbos e locuções verbais. Depois, determine se cada forma verbal inicia uma oração distinta. Orações reduzidas também contam como orações, mesmo quando o verbo está no infinitivo, gerúndio ou particípio sem conjunção explícita.',example:'“Ao terminar a prova, o candidato saiu.” — “ao terminar a prova” é oração reduzida; há período composto.'}
 ],summary:['Frase pode ter verbo ou não.','Oração organiza-se em torno de verbo ou locução verbal.','Período simples: uma oração.','Período composto: duas ou mais orações.','Verbo auxiliar + principal pode formar uma única locução verbal.'],tecSearch:tec},

 {id:'rlm-conectivos',subjectId:'rlm',title:'Raciocínio lógico: conectivos e negações',objective:'Interpretar “e”, “ou” e “se... então”, e aplicar as regras de negação mais cobradas em questões objetivas.',sections:[
  {heading:'1. Conjunção: “e”',body:'A conjunção p e q (p ∧ q) só é verdadeira quando as duas proposições são verdadeiras. Se uma delas for falsa, a conjunção será falsa.',example:'“Estudei Português e Penal” só é verdadeira se estudei as duas matérias.'},
  {heading:'2. Disjunção inclusiva: “ou”',body:'A disjunção inclusiva p ou q (p ∨ q) é verdadeira quando pelo menos uma das proposições é verdadeira. Só é falsa quando ambas são falsas. Em lógica, “ou” normalmente é inclusivo, salvo indicação contextual de exclusividade.',example:'“Estudei Português ou Penal” é verdadeira se estudei pelo menos uma das duas matérias.'},
  {heading:'3. Condicional: “se... então”',body:'A condicional p → q (“se p, então q”) é falsa somente quando p é verdadeira e q é falsa. Nos outros três casos, é verdadeira. A primeira parte é o antecedente; a segunda, o consequente.',example:'“Se estudo, então melhoro” só é falsa, na tabela lógica, quando estudo (p verdadeira) e não melhoro (q falsa).'},
  {heading:'4. Negação de “e” e “ou”',body:'Pela lei de De Morgan, negar “p e q” resulta em “não p ou não q”. Negar “p ou q” resulta em “não p e não q”. A negação deve inverter o valor lógico da frase original.',example:'Negação de “Estudei Português e Penal”: “Não estudei Português ou não estudei Penal”.'},
  {heading:'5. Negação da condicional',body:'A negação de “se p, então q” é “p e não q”. Não basta negar somente a segunda parte nem inverter a ordem das partes.',example:'Negação de “Se estudo, então passo”: “Estudo e não passo”.'},
  {heading:'6. Estratégia de prova',body:'Traduza cada frase para símbolos quando ajudar: p ∧ q, p ∨ q, p → q. Depois aplique a regra. Cuidado para não confundir a negação de uma condicional com sua recíproca (“se q, então p”), que não é equivalente.'}
 ],summary:['p ∧ q: só é verdadeira se p e q forem verdadeiras.','p ∨ q: só é falsa se p e q forem falsas.','Negação de p ∧ q: ¬p ∨ ¬q.','Negação de p ∨ q: ¬p ∧ ¬q.','Negação de p → q: p ∧ ¬q.'],tecSearch:tec},

 {
  "id": "port-acentuacao",
  "subjectId": "portugues",
  "title": "Acentuação gráfica e regras básicas",
  "objective": "Aplicar as regras gerais de acentuação e reconhecer as pegadinhas mais comuns.",
  "sections": [
   {
    "heading": "1. Oxítonas",
    "body": "Oxítonas têm a última sílaba tônica. São acentuadas quando terminam em a(s), e(s), o(s), em(ens): café, cipó, também, parabéns. Não confunda tonicidade com acento gráfico: nem toda oxítona recebe acento.",
    "example": "Café, sofá e armazém recebem acento; papel e rapaz não."
   },
   {
    "heading": "2. Paroxítonas",
    "body": "Paroxítonas têm a penúltima sílaba tônica. A regra geral favorece terminações como l, n, r, x, i(s), us, um/uns, ã(s), ão(s), ps e ditongo: fácil, hífen, caráter, tórax, júri, álbum, órfã, história.",
    "example": "Em “fácil”, a sílaba tônica é fá; por isso é paroxítona terminada em l."
   },
   {
    "heading": "3. Proparoxítonas e hiatos",
    "body": "Toda proparoxítona é acentuada: lâmpada, público, lógico. Também há regras específicas para hiatos, como em saída e país; observe a posição da vogal tônica e as condições da regra.",
    "example": "“Médico” é proparoxítona; “saída” tem hiato entre a e í."
   },
   {
    "heading": "4. Acordo ortográfico e estratégia",
    "body": "Não use regras antigas para formas que perderam acento, como ideia, assembleia e voo. Em prova, separe sílabas, identifique a sílaba tônica e só então aplique a regra. Confira casos especiais e a redação atual das normas ortográficas."
   }
  ],
  "summary": [
   "Oxítona: última sílaba tônica.",
   "Paroxítona: penúltima sílaba tônica.",
   "Proparoxítona: antepenúltima; todas são acentuadas.",
   "Identifique tonicidade e terminação antes de decidir."
  ]
 },
 {
  "id": "port-pontuacao",
  "subjectId": "portugues",
  "title": "Pontuação: vírgula e seus principais usos",
  "objective": "Entender quando a vírgula é exigida, possível ou proibida em estruturas comuns de prova.",
  "sections": [
   {
    "heading": "1. Enumeração e elementos deslocados",
    "body": "A vírgula separa itens de uma enumeração e pode isolar expressões adverbiais deslocadas, especialmente quando longas. A pontuação deve refletir a estrutura sintática, não apenas uma pausa da fala.",
    "example": "“Foram analisados documentos, imagens e depoimentos.”"
   },
   {
    "heading": "2. Vocativo e aposto explicativo",
    "body": "O vocativo chama o interlocutor e fica separado por vírgula. O aposto explicativo acrescenta uma informação e também costuma ser isolado por vírgulas.",
    "example": "“Candidato, leia o enunciado.” / “A Constituição, norma fundamental do Estado, limita o poder.”"
   },
   {
    "heading": "3. Orações explicativas e adversativas",
    "body": "Orações adjetivas explicativas são isoladas por vírgulas; as restritivas não. Conjunções como “porém”, “contudo” e “entretanto” costumam vir acompanhadas de pontuação conforme a posição na frase.",
    "example": "“Os agentes, que receberam treinamento, iniciaram o trabalho” sugere que todos receberam treinamento; sem vírgulas, a oração pode restringir o grupo."
   },
   {
    "heading": "4. Erros frequentes",
    "body": "Em regra, não se separa sujeito de verbo nem verbo de complemento por vírgula. Em questões FGV, localize primeiro sujeito, verbo e complementos; depois avalie se o trecho é explicativo, deslocado ou intercalado."
   }
  ],
  "summary": [
   "Vocativo e aposto explicativo ficam isolados.",
   "Oração explicativa tem vírgulas; restritiva não.",
   "Não separe sujeito e predicado por vírgula sem justificativa sintática.",
   "Pontue pela estrutura, não só pela pausa oral."
  ]
 },
 {
  "id": "informatica-arquivos",
  "subjectId": "informatica",
  "title": "Windows: arquivos, pastas e atalhos",
  "objective": "Reconhecer operações básicas de arquivos e atalhos úteis em questões de informática.",
  "sections": [
   {
    "heading": "1. Arquivo e pasta",
    "body": "Arquivo armazena dados; pasta organiza arquivos e outras pastas. A extensão costuma indicar o formato, como .pdf, .docx, .xlsx ou .jpg, mas renomear a extensão não converte automaticamente o conteúdo para outro formato.",
    "example": "Trocar “relatorio.txt” para “relatorio.pdf” apenas mudando o nome não cria necessariamente um PDF válido."
   },
   {
    "heading": "2. Copiar, mover e excluir",
    "body": "Copiar cria outra instância do arquivo; mover altera sua localização. Excluir normalmente envia o item à Lixeira quando aplicável, mas exclusões em unidades removíveis, redes ou com comandos específicos podem não seguir esse comportamento.",
    "example": "Ctrl+C copia e Ctrl+V cola; Ctrl+X recorta para mover, em operações comuns."
   },
   {
    "heading": "3. Atalhos comuns",
    "body": "Ctrl+A seleciona tudo; Ctrl+C copia; Ctrl+X recorta; Ctrl+V cola; Ctrl+Z desfaz; Alt+Tab alterna janelas; Win+E abre o Explorador de Arquivos nas versões usuais do Windows.",
    "example": "Se uma questão pergunta como alternar entre janelas abertas, pense em Alt+Tab."
   },
   {
    "heading": "4. Cuidado em prova",
    "body": "Os atalhos podem variar conforme aplicativo, versão ou configuração. Leia o contexto e diferencie excluir, remover atalho e desinstalar programa. Um atalho aponta para um recurso; apagar o atalho não costuma apagar o arquivo original."
   }
  ],
  "summary": [
   "Arquivo guarda dados; pasta organiza itens.",
   "Copiar duplica; mover muda a localização.",
   "Apagar um atalho não costuma apagar o arquivo de destino.",
   "Memorize atalhos comuns, mas considere o aplicativo citado."
  ]
 },
 {
  "id": "informatica-redes",
  "subjectId": "informatica",
  "title": "Redes: IP, DNS, DHCP e protocolos",
  "objective": "Diferenciar serviços e protocolos básicos de redes de computadores.",
  "sections": [
   {
    "heading": "1. Endereço IP",
    "body": "O endereço IP identifica uma interface em uma rede IP para permitir comunicação. IPv4 usa 32 bits e é escrito normalmente em quatro números decimais; IPv6 usa 128 bits e possui espaço de endereçamento muito maior.",
    "example": "192.168.1.10 é um exemplo de endereço IPv4 privado."
   },
   {
    "heading": "2. DNS",
    "body": "O DNS traduz nomes de domínio em informações como endereços IP. Ele permite que o usuário acesse um serviço pelo nome, sem precisar memorizar o endereço numérico.",
    "example": "Ao acessar um site pelo domínio, o DNS ajuda a localizar o endereço associado."
   },
   {
    "heading": "3. DHCP",
    "body": "O DHCP atribui automaticamente configurações de rede aos clientes, como endereço IP, máscara, gateway e servidores DNS, conforme a configuração do servidor.",
    "example": "Em uma rede doméstica, o roteador geralmente distribui endereços aos dispositivos via DHCP."
   },
   {
    "heading": "4. Protocolos e pegadinhas",
    "body": "HTTP/HTTPS são usados na comunicação web; HTTPS acrescenta proteção criptográfica por TLS. SMTP é associado ao envio de e-mails; IMAP e POP3 são usados para acesso/recebimento. Não confunda DNS, que resolve nomes, com DHCP, que distribui configurações."
   }
  ],
  "summary": [
   "IP identifica a interface na rede.",
   "DNS resolve nomes de domínio.",
   "DHCP distribui configurações automaticamente.",
   "HTTPS protege a comunicação com TLS; SMTP está ligado ao envio de e-mail."
  ]
 },
 {
  "id": "rlm-tabelas-verdade",
  "subjectId": "rlm",
  "title": "Tabelas-verdade e equivalências básicas",
  "objective": "Determinar valores lógicos de conectivos e reconhecer equivalências importantes.",
  "sections": [
   {
    "heading": "1. Negação",
    "body": "A negação ¬p inverte o valor lógico: se p é verdadeira, ¬p é falsa; se p é falsa, ¬p é verdadeira."
   },
   {
    "heading": "2. Conjunção e disjunção",
    "body": "p ∧ q (“p e q”) só é verdadeira quando ambas são verdadeiras. p ∨ q (“p ou q” inclusivo) só é falsa quando ambas são falsas.",
    "example": "V ∧ F = F; V ∨ F = V."
   },
   {
    "heading": "3. Condicional",
    "body": "p → q (“se p, então q”) só é falsa quando p é verdadeira e q é falsa. A primeira parte é antecedente; a segunda, consequente.",
    "example": "Se a premissa p ocorre, mas q não ocorre, a condicional é falsa."
   },
   {
    "heading": "4. Equivalências e método",
    "body": "A condicional p → q equivale a ¬p ∨ q. Sua negação é p ∧ ¬q. Resolva linha por linha e destaque o único cenário falso da condicional, pois é uma fonte comum de pegadinhas."
   }
  ],
  "summary": [
   "¬p inverte o valor de p.",
   "p ∧ q só é verdadeira com duas verdadeiras.",
   "p ∨ q só é falsa com duas falsas.",
   "p → q só é falsa quando p=V e q=F.",
   "¬(p → q) equivale a p ∧ ¬q."
  ]
 },
 {
  "id": "processo-penal-inquerito-detalhe",
  "subjectId": "processo-penal",
  "title": "Inquérito policial: natureza, características e prazos",
  "objective": "Organizar os conceitos básicos do inquérito e distinguir investigação de processo judicial.",
  "sections": [
   {
    "heading": "1. Conceito e finalidade",
    "body": "O inquérito policial é procedimento administrativo de investigação destinado a apurar a infração penal e sua autoria, reunindo elementos informativos para subsidiar a atuação do titular da ação penal. Não é, por si só, processo judicial nem aplica pena."
   },
   {
    "heading": "2. Características",
    "body": "Tradicionalmente é descrito como escrito, oficial, inquisitivo e dispensável para o oferecimento da denúncia quando já existirem elementos suficientes. A característica inquisitiva significa que não há contraditório pleno nos moldes da fase judicial, sem eliminar direitos e garantias da defesa previstos em lei."
   },
   {
    "heading": "3. Instauração e diligências",
    "body": "A forma de instauração depende da natureza da ação penal e das regras legais. A autoridade policial pode realizar diligências legalmente admitidas, ouvir pessoas, preservar vestígios e documentar elementos relevantes, respeitando direitos fundamentais e requisitos para medidas sujeitas à reserva de jurisdição."
   },
   {
    "heading": "4. Prazos e cautela",
    "body": "Os prazos variam conforme legislação, situação de investigado preso ou solto e leis especiais. Para a prova, memorize o dispositivo efetivamente indicado no edital e diferencie regra geral do CPP de regimes especiais; não aplique um prazo universal a todos os casos."
   }
  ],
  "summary": [
   "Inquérito é procedimento administrativo investigativo.",
   "Não é processo judicial nem aplica pena.",
   "É tradicionalmente escrito, oficial, inquisitivo e dispensável em certas condições.",
   "Prazos variam; confira CPP e leis especiais vigentes."
  ]
 },
 {
  "id": "administrativo-atos",
  "subjectId": "administrativo",
  "title": "Atos administrativos: elementos e atributos",
  "objective": "Identificar os elementos de validade e os atributos mais cobrados dos atos administrativos.",
  "sections": [
   {
    "heading": "1. Elementos",
    "body": "A estrutura clássica reúne competência, finalidade, forma, motivo e objeto. Competência é quem pode praticar; finalidade é o interesse público previsto; forma é o modo de exteriorização; motivo são os pressupostos de fato e de direito; objeto é o efeito jurídico produzido.",
    "example": "Se uma autoridade competente pratica ato para perseguir desafeto, o problema está na finalidade, caracterizando desvio de poder."
   },
   {
    "heading": "2. Presunção de legitimidade e veracidade",
    "body": "Os atos administrativos gozam, em regra, de presunção relativa de legitimidade e veracidade. Isso não significa que sejam infalíveis: a presunção pode ser afastada por prova em contrário."
   },
   {
    "heading": "3. Imperatividade e autoexecutoriedade",
    "body": "Imperatividade permite impor obrigações independentemente da concordância do destinatário, quando cabível. Autoexecutoriedade permite execução direta em hipóteses legalmente admitidas, mas não está presente em todos os atos e não elimina exigências legais."
   },
   {
    "heading": "4. Anulação e revogação",
    "body": "Anulação decorre de ilegalidade; revogação incide sobre ato válido que deixou de ser conveniente ou oportuno, respeitados limites legais e direitos protegidos. A Administração exerce autotutela, e o Judiciário controla a legalidade sem substituir livremente o mérito administrativo."
   }
  ],
  "summary": [
   "Elementos: competência, finalidade, forma, motivo e objeto.",
   "Presunções são relativas.",
   "Imperatividade e autoexecutoriedade não aparecem em todos os atos.",
   "Anulação: ilegalidade; revogação: mérito administrativo de ato válido."
  ]
 },
 {
  "id": "dh-dudh",
  "subjectId": "dh",
  "title": "Direitos Humanos: Declaração Universal e características",
  "objective": "Conhecer as ideias centrais da Declaração Universal e características dos direitos humanos.",
  "sections": [
   {
    "heading": "1. Ideia central",
    "body": "A Declaração Universal dos Direitos Humanos, proclamada pela Assembleia Geral da ONU em 1948, afirma a dignidade inerente a todas as pessoas e a igualdade em direitos. É referência central do sistema internacional de proteção."
   },
   {
    "heading": "2. Características",
    "body": "Direitos humanos são frequentemente descritos como universais, interdependentes, indivisíveis e relacionados à dignidade humana. Universalidade significa que pertencem a todas as pessoas; não significa que todos os direitos tenham aplicação prática idêntica em qualquer situação."
   },
   {
    "heading": "3. Direitos previstos",
    "body": "A Declaração aborda vida, liberdade, segurança, proibição da escravidão e da tortura, reconhecimento perante a lei, garantias processuais, liberdade de pensamento e religião, expressão, reunião, trabalho, educação e participação na vida pública."
   },
   {
    "heading": "4. Como a banca pode cobrar",
    "body": "Desconfie de alternativas que afirmem que direitos humanos pertencem apenas a cidadãos de um país, que tortura pode ser normalizada por conveniência ou que todos os direitos são absolutos. Em situações concretas, observe a norma aplicável, os limites jurídicos legítimos e a proteção da dignidade."
   }
  ],
  "summary": [
   "DUDH proclamada pela ONU em 1948.",
   "Direitos humanos se vinculam à dignidade e à igualdade.",
   "Universalidade não significa aplicação sem análise jurídica.",
   "Desconfie de alternativas que tratem direitos como privilégios de nacionalidade ou como absolutos sem exceção."
  ]
 }

];
export const questions: Question[] = [
 {id:'p1',subjectId:'portugues',topic:'Interpretação',statement:'Leia: “O acesso à informação cresceu, mas a capacidade de avaliar sua confiabilidade não aumentou no mesmo ritmo.” A ideia central é que:',options:['O acesso à informação diminuiu nos últimos anos.','Toda informação disponível na internet é falsa.','O aumento do acesso não garante avaliação adequada da confiabilidade.','A confiabilidade deixou de ser relevante.','A avaliação da informação é impossível.'],answer:2,explanations:['Contradiz o trecho, que afirma que o acesso cresceu.','O texto não afirma que toda informação é falsa.','Correta: reproduz a relação de contraste e a ideia principal.','O trecho não diz que a confiabilidade perdeu importância.','“Impossível” extrapola o que foi dito.'],takeaway:'A ideia central deve resumir a afirmação do texto sem exagerar.'},
 {id:'p2',subjectId:'portugues',topic:'Inferência',statement:'Um texto afirma: “Apesar de ter saído cedo, Marina chegou atrasada por causa de um acidente na avenida.” Qual conclusão é sustentada pelo trecho?',options:['Marina sempre se atrasa.','O acidente contribuiu para o atraso de Marina.','Marina saiu de casa depois do horário.','A avenida estava interditada por completo.','Marina provocou o acidente.'],answer:1,explanations:['“Sempre” generaliza além do caso descrito.','Correta: o texto atribui o atraso ao acidente.','O texto informa que ela saiu cedo, não tarde.','Não há informação sobre interdição total.','Não há informação de que Marina causou o acidente.'],takeaway:'Inferência válida é sustentada por pistas textuais, não por suposição.'},
 {id:'p3',subjectId:'portugues',topic:'Extrapolação',statement:'Em uma questão de interpretação, uma alternativa afirma que uma medida “sempre resolve o problema”, enquanto o texto diz apenas que ela “pode ajudar”. O principal defeito da alternativa é:',options:['Uso de linguagem figurada.','Transformação de possibilidade em certeza absoluta.','Presença de informação explícita.','Uso obrigatório de sentido literal.','Ausência de verbo.'],answer:1,explanations:['Não há necessariamente linguagem figurada.','Correta: “pode ajudar” não equivale a “sempre resolve”.','A alternativa não é simplesmente informação explícita; ela exagera a afirmação.','O problema não é sentido literal.','A alternativa contém verbo.'],takeaway:'A FGV costuma testar extrapolação por palavras absolutas.'},
 {id:'c1',subjectId:'penal',topic:'Conceito de crime',statement:'De acordo com a concepção analítica tripartida predominante no estudo introdutório do Direito Penal, crime é composto por:',options:['Conduta, pena e reincidência.','Tipicidade e punibilidade, apenas.','Fato típico, ilicitude e culpabilidade.','Resultado, dolo e prisão.','Ilicitude e condenação judicial.'],answer:2,explanations:['Pena e reincidência não compõem a estrutura analítica do crime.','A formulação está incompleta e não corresponde à teoria tripartida.','Correta: reúne fato típico, ilicitude e culpabilidade.','Nem todo crime exige resultado naturalístico e prisão não define crime.','Condenação judicial não é elemento do conceito analítico.'],takeaway:'Memorize a estrutura tripartida, sem confundir crime com pena.'},
 {id:'c2',subjectId:'penal',topic:'Ilicitude',statement:'Em regra, a legítima defesa, quando presentes os requisitos legais, exclui:',options:['A tipicidade formal em todos os casos.','A ilicitude do fato.','A existência da conduta humana.','A vigência da lei penal.','A culpabilidade em qualquer situação.'],answer:1,explanations:['A legítima defesa é causa de exclusão da ilicitude, não regra geral de atipicidade.','Correta: é causa legal de exclusão da ilicitude (art. 23 do CP).','A conduta pode existir e ser típica.','Não afeta a vigência da lei.','Não é tecnicamente uma causa geral de exclusão da culpabilidade.'],takeaway:'Art. 23 do Código Penal: estado de necessidade, legítima defesa, estrito cumprimento do dever legal e exercício regular de direito.'},
 {id:'c3',subjectId:'penal',topic:'Fato típico',statement:'Na estrutura analítica do crime, a tipicidade se relaciona principalmente:',options:['À adequação do fato à descrição prevista na lei penal.','À personalidade do juiz.','À pena que será escolhida depois da condenação.','À prova de que o agente está arrependido.','À execução da sentença.'],answer:0,explanations:['Correta: tipicidade envolve correspondência do fato à descrição penal, com as distinções doutrinárias cabíveis.','Personalidade do juiz é irrelevante para a definição de tipicidade.','Dosimetria da pena é etapa diferente.','Arrependimento não define tipicidade.','Execução da sentença ocorre em outro momento processual.'],takeaway:'Fato típico é a primeira categoria da teoria tripartida.'},
 {id:'k1',subjectId:'constitucional',topic:'Fundamentos da República',statement:'Assinale a alternativa que contém apenas fundamentos da República Federativa do Brasil previstos no art. 1º da Constituição Federal.',options:['Soberania, cidadania e dignidade da pessoa humana.','Erradicar a pobreza, garantir o desenvolvimento e promover o bem de todos.','Independência nacional, defesa da paz e solução pacífica dos conflitos.','Separação dos Poderes e controle de constitucionalidade.','Legalidade, impessoalidade e eficiência.'],answer:0,explanations:['Correta: os três são fundamentos do art. 1º.','São objetivos fundamentais do art. 3º.','São princípios das relações internacionais do art. 4º.','O art. 2º trata da separação dos Poderes; controle de constitucionalidade não é fundamento do art. 1º.','São princípios expressos da Administração Pública no art. 37, caput.'],takeaway:'Diferencie fundamentos (art. 1º), Poderes (art. 2º), objetivos (art. 3º) e relações internacionais (art. 4º).'},
 {id:'i1',subjectId:'informatica',topic:'Processador',statement:'Sobre processadores modernos, assinale a afirmação correta.',options:['Todos possuem apenas núcleos físicos e não usam threads lógicas.','Mais frequência garante sempre maior desempenho em qualquer tarefa.','Núcleos físicos e threads lógicas são conceitos relacionados, mas não equivalentes.','A arquitetura não interfere no desempenho.','A CPU é responsável exclusivamente por armazenar arquivos permanentemente.'],answer:2,explanations:['É uma afirmação absoluta incorreta; há CPUs com multithreading.','Desempenho depende de arquitetura, carga, cache, consumo e outros fatores.','Correta: thread lógica não é a mesma coisa que um núcleo físico.','A arquitetura interfere no desempenho.','Armazenamento permanente é função de dispositivos como SSD/HD, não exclusivamente da CPU.'],takeaway:'Questões de informática usam absolutos como “sempre”, “todos” e “exclusivamente” como armadilhas.'},
 {id:'e1',subjectId:'extravagante',topic:'Método de estudo da legislação especial',statement:'Ao estudar uma lei penal especial para um concurso, qual procedimento é mais seguro?',options:['Memorizar apenas um resumo antigo, pois a estrutura das leis não muda.','Estudar somente as penas, deixando conceitos e exceções para depois.','Conferir o texto oficial vigente e organizar condutas, requisitos, penas, exceções e regras processuais.','Presumir que todas as leis especiais seguem os mesmos prazos e requisitos.','Ignorar o edital e estudar todas as leis existentes com a mesma prioridade.'],answer:2,explanations:['Resumos podem estar desatualizados; é necessário conferir o texto vigente.','Conceitos, elementos, exceções e procedimento também podem ser cobrados.','Correta: combina atualização legislativa e estudo estruturado dos dispositivos.','Cada diploma pode estabelecer requisitos e prazos próprios.','O edital define o escopo da prova e ajuda a priorizar o estudo.'],takeaway:'Texto oficial atualizado + leitura por artigo + questões por diploma legal.'},
 {id:'e2',subjectId:'extravagante',topic:'Atualização legislativa',statement:'Uma apostila de legislação especial foi publicada há vários anos. Antes de memorizar um prazo ou uma pena nela indicada, o candidato deve:',options:['Considerar o dado correto por estar impresso em material de curso.','Conferir a redação atual da lei em fonte oficial e verificar alterações posteriores.','Usar sempre o prazo mais longo entre os materiais.','Substituir a lei pelo comentário de um fórum.','Ignorar a data de publicação se o título da lei for o mesmo.'],answer:1,explanations:['A publicação não garante que o conteúdo continue atualizado.','Correta: a redação vigente deve ser conferida em fonte oficial.','Escolher o prazo mais longo não tem fundamento jurídico.','Comentários podem ajudar, mas não substituem a conferência oficial.','A mesma lei pode receber alterações sem mudar seu número ou título.'],takeaway:'Antes de decorar números e exceções, confirme a redação vigente.'},

 {id:'r1',subjectId:'rlm',topic:'Proposições',statement:'Em lógica proposicional, qual das frases abaixo é uma proposição?',options:['Feche a porta, por favor.','Que horas são?','Brasília é a capital do Brasil.','Tomara que chova!','Estude mais para a prova.'],answer:2,explanations:['É uma ordem, não uma frase declarativa com valor lógico.','É uma pergunta, não pode ser classificada como verdadeira ou falsa.','Correta: é uma frase declarativa à qual se pode atribuir valor verdadeiro ou falso.','Expressa desejo, não uma proposição declarativa.','É uma ordem/conselho, não uma proposição.'],takeaway:'Proposição é uma frase declarativa que pode ser julgada verdadeira ou falsa.'},
 {id:'r2',subjectId:'rlm',topic:'Negação lógica',statement:'A negação lógica de “Todos os candidatos estudaram” é:',options:['Nenhum candidato estudou.','Todos os candidatos não estudaram.','Pelo menos um candidato não estudou.','Alguns candidatos estudaram.','A maioria dos candidatos não estudou.'],answer:2,explanations:['“Nenhum” é mais forte: afirma que todos deixaram de estudar.','Pode ser interpretada como ausência de estudo por todos, também mais forte que a negação necessária.','Correta: basta existir pelo menos um candidato que não estudou para tornar falsa a frase “todos estudaram”.','É compatível com a frase original e não a nega.','“Maioria” não é o oposto lógico de “todos”.'],takeaway:'A negação de “todos” é “existe pelo menos um que não”.'},
 {id:'pp1',subjectId:'processo-penal',topic:'Inquérito policial',statement:'Conforme a estrutura geral do Código de Processo Penal, o inquérito policial tem como finalidade principal:',options:['Aplicar diretamente a pena ao investigado.','Apurar a infração penal e sua autoria, reunindo elementos informativos.','Substituir obrigatoriamente a ação penal.','Proferir sentença condenatória.','Garantir que toda investigação termine em denúncia.'],answer:1,explanations:['A aplicação de pena depende do processo e da decisão judicial competente.','Correta: o inquérito busca apurar a infração e indícios de autoria, reunindo elementos informativos.','O inquérito não substitui a ação penal.','Sentença é ato jurisdicional, não finalidade do inquérito.','A investigação pode ter diferentes resultados; denúncia não é automática.'],takeaway:'Inquérito é procedimento investigatório; não condena nem substitui o processo.'},
 {id:'a1',subjectId:'administrativo',topic:'Princípios administrativos',statement:'O princípio da impessoalidade na Administração Pública exige, entre outros aspectos, que:',options:['O agente público possa usar a publicidade oficial para promover sua imagem pessoal.','A atuação administrativa vise ao interesse público e não seja usada para favorecimentos ou perseguições pessoais.','Toda decisão administrativa seja sigilosa.','O administrador possa ignorar a lei se acreditar que a intenção é boa.','A Administração dispense critérios objetivos em nome da amizade.'],answer:1,explanations:['A promoção pessoal é incompatível com a impessoalidade e com o art. 37, § 1º, da Constituição.','Correta: a atuação não deve privilegiar nem perseguir pessoas por razões pessoais.','Publicidade é princípio constitucional, ressalvadas hipóteses legais de sigilo.','A atuação administrativa está sujeita à legalidade.','Favorecimento pessoal contraria a impessoalidade.'],takeaway:'Impessoalidade: finalidade pública, igualdade de tratamento e vedação à promoção pessoal.'},
 {id:'dh1',subjectId:'dh',topic:'Direitos Humanos',statement:'A dignidade da pessoa humana, na Constituição Federal de 1988, é expressamente:',options:['Um objetivo fundamental do art. 3º, exclusivamente.','Um princípio das relações internacionais previsto apenas no art. 4º.','Um fundamento da República Federativa do Brasil, previsto no art. 1º, III.','Um princípio restrito à Administração Pública no art. 37.','Uma regra aplicável somente a cidadãos brasileiros natos.'],answer:2,explanations:['O art. 3º prevê objetivos fundamentais, não a classificação indicada.','O art. 4º contém princípios de relações internacionais, mas a dignidade está no art. 1º, III, como fundamento.','Correta: a dignidade da pessoa humana é fundamento da República no art. 1º, III.','O art. 37 lista princípios da Administração Pública e não é a localização normativa da dignidade como fundamento.','A dignidade humana não se limita a brasileiros natos.'],takeaway:'Art. 1º, III, da CF: dignidade da pessoa humana é fundamento da República.'},

 {id:'p4',subjectId:'portugues',topic:'Classes de palavras',statement:'No período “O jantar foi servido cedo”, a palavra “jantar” está empregada como:',options:['Verbo no infinitivo, pois indica uma ação.','Substantivo, pois nomeia uma refeição.','Adjetivo, pois caracteriza o período.','Advérbio, pois indica tempo.','Pronome, pois substitui uma pessoa.'],answer:1,explanations:['No contexto, não expressa a ação de jantar; nomeia a refeição.','Correta: vem acompanhado do artigo “o” e funciona como nome de uma refeição.','Não caracteriza outro substantivo.','Não modifica verbo, adjetivo ou advérbio.','Não substitui um nome de pessoa.'],takeaway:'A classe da palavra depende do contexto; artigo antes dela pode sinalizar substantivação.'},
 {id:'p5',subjectId:'portugues',topic:'Substantivo concreto e abstrato',statement:'Assinale a alternativa em que o substantivo destacado pelo sentido é abstrato.',options:['Cadeira.','Policial.','Coragem.','Cachorro.','Montanha.'],answer:2,explanations:['Nomeia um objeto considerado como ser de existência própria: concreto.','Nomeia uma pessoa/profissional: concreto.','Correta: nomeia uma qualidade/estado, não um ser de existência própria.','Nomeia um animal: concreto.','Nomeia uma formação geográfica: concreto.'],takeaway:'Qualidades, sentimentos, estados e ações são exemplos frequentes de substantivos abstratos.'},
 {id:'p6',subjectId:'portugues',topic:'Substantivo comum e próprio',statement:'Em qual alternativa há um substantivo próprio?',options:['estado.','investigador.','delegacia.','Minas Gerais.','cidade.'],answer:3,explanations:['“Estado” é nome comum quando usado genericamente.','“Investigador” nomeia uma profissão de modo geral.','“Delegacia” é nome comum.','Correta: “Minas Gerais” individualiza uma unidade federativa e é nome próprio.','“Cidade” é nome comum.'],takeaway:'Nomes específicos que individualizam pessoas, lugares e entidades são próprios.'},

 {id:'pp2',subjectId:'processo-penal',topic:'Inquérito policial',statement:'Assinale a alternativa correta sobre a finalidade do inquérito policial.',options:['Aplicar pena ao investigado ao final da investigação.','Apurar a infração penal e indícios de autoria, reunindo elementos informativos.','Substituir obrigatoriamente a ação penal.','Proferir sentença condenatória.','Impedir que a defesa tenha qualquer acesso a elementos documentados.'],answer:1,explanations:['A aplicação de pena depende de processo e decisão judicial competente.','Correta: a investigação busca esclarecer a infração e indícios de autoria.','O inquérito não substitui a ação penal.','Sentença é ato jurisdicional, não finalidade do inquérito.','O sigilo não é absoluto; o acesso da defesa aos elementos documentados segue as garantias e regras aplicáveis.'],takeaway:'Inquérito investiga; não julga nem condena.'},
 {id:'pp3',subjectId:'processo-penal',topic:'Dispensabilidade do inquérito',statement:'Sobre o inquérito policial, assinale a afirmação correta.',options:['É obrigatório em toda ação penal, sem exceção.','É dispensável quando já existem elementos informativos suficientes por meios lícitos.','É uma sentença provisória que se torna definitiva automaticamente.','Só pode reunir confissões do investigado.','Elimina a necessidade de observar garantias legais.'],answer:1,explanations:['O inquérito é, em regra, dispensável se houver elementos suficientes para embasar a ação.','Correta: a ação penal pode ser proposta sem inquérito concluído quando houver elementos suficientes obtidos licitamente.','Não é sentença nem condenação.','A investigação pode reunir diferentes elementos informativos, como documentos, depoimentos e perícias.','A investigação deve respeitar a Constituição e a legislação aplicável.'],takeaway:'Não confunda investigação prévia com requisito obrigatório para toda ação penal.'},

 {id:'pen4',subjectId:'penal',topic:'Consumação e tentativa',statement:'Segundo a regra geral do Código Penal, há tentativa quando o agente:',options:['Apenas pensa em cometer o crime, sem iniciar a execução.','Inicia a execução, mas o crime não se consuma por circunstâncias alheias à sua vontade.','Desiste voluntariamente antes de iniciar qualquer ato executório.','Consuma todos os elementos do tipo penal.','É impedido de planejar o delito.'],answer:1,explanations:['Pensamento não exteriorizado não configura tentativa punível.','Correta: é a definição legal geral de crime tentado.','A desistência voluntária pressupõe que a execução tenha sido iniciada.','Isso descreve crime consumado, não tentado.','Planejamento isolado, em regra, não equivale à execução do crime.'],takeaway:'Tentativa exige início da execução e não consumação por circunstância alheia à vontade.'},
 {id:'pen5',subjectId:'penal',topic:'Desistência voluntária',statement:'O agente inicia a execução, ainda pode prosseguir, mas voluntariamente interrompe sua conduta. Em regra, ocorre:',options:['Crime consumado necessariamente.','Desistência voluntária, respondendo pelos atos já praticados se forem típicos.','Arrependimento posterior em qualquer hipótese.','Tentativa obrigatoriamente punida com a pena integral do crime consumado.','Atipicidade automática de todos os atos anteriores.'],answer:1,explanations:['A execução foi interrompida antes da consumação.','Correta: caracteriza desistência voluntária se a interrupção é voluntária e o agente responde pelos atos já praticados que constituam infração penal.','Arrependimento posterior é instituto distinto e possui requisitos legais próprios.','A tentativa não é automática e, além disso, a regra geral prevê redução de pena.','Os atos anteriores podem constituir infração penal e não são automaticamente apagados.'],takeaway:'Desistência voluntária: o agente para quando poderia continuar.'},
 {id:'pen6',subjectId:'penal',topic:'Arrependimento eficaz',statement:'Após praticar os atos executórios, o agente age voluntariamente e impede a produção do resultado. Em regra, o caso corresponde a:',options:['Arrependimento eficaz.','Crime impossível em qualquer situação.','Crime consumado necessariamente.','Desistência voluntária, mesmo após esgotar os atos executórios.','Erro de tipo inevitavelmente.'],answer:0,explanations:['Correta: após esgotar os atos executórios, o agente impede eficazmente o resultado.','Crime impossível tem requisitos próprios no art. 17 do Código Penal.','Se o resultado não ocorre por atuação eficaz do agente, não há consumação desse resultado.','Desistência voluntária ocorre quando o agente interrompe a execução; aqui ele já praticou os atos executórios e impede o resultado.','Não há elementos suficientes para caracterizar erro de tipo.'],takeaway:'Arrependimento eficaz: depois dos atos executórios, o agente impede o resultado.'},
 {id:'adm1',subjectId:'administrativo',topic:'Princípios administrativos',statement:'A prefeitura divulga uma obra pública com nome e imagem do prefeito em destaque, promovendo sua figura pessoal. Qual princípio é mais diretamente comprometido?',options:['Eficiência, porque toda publicidade custa dinheiro.','Impessoalidade, que veda promoção pessoal na publicidade institucional.','Continuidade, pois a obra pode ser interrompida.','Autotutela, pois não houve revisão do ato.','Especialidade, própria de contratos privados.'],answer:1,explanations:['O custo isolado não demonstra violação da eficiência.','Correta: a Constituição veda publicidade institucional com elementos de promoção pessoal de autoridades ou servidores.','O enunciado não informa interrupção de serviço.','Autotutela trata da revisão dos próprios atos administrativos.','Especialidade não é o princípio diretamente descrito.'],takeaway:'Publicidade institucional não pode promover pessoalmente a autoridade.'},
 {id:'adm2',subjectId:'administrativo',topic:'Legalidade administrativa',statement:'Um agente público concede um benefício a um conhecido porque considera a medida justa, embora não haja fundamento jurídico que autorize a concessão. A conduta é:',options:['Regular, pois boa intenção substitui autorização legal.','Regular se o beneficiário agradecer publicamente.','Irregular, pois a vontade pessoal não substitui o fundamento jurídico exigido.','Regular em razão da eficiência.','Irregular somente se houver prejuízo financeiro comprovado.'],answer:2,explanations:['Boa intenção não substitui fundamento jurídico.','Agradecimento é irrelevante para a legalidade.','Correta: o agente deve atuar dentro de suas competências e do ordenamento jurídico.','Eficiência não permite afastar a legalidade.','A violação não depende necessariamente de prejuízo financeiro comprovado.'],takeaway:'O administrador não pode agir apenas por vontade própria.'},
 {id:'constf1',subjectId:'constitucional',topic:'Direitos fundamentais',statement:'Segundo o art. 5º, IV, da Constituição Federal, a manifestação do pensamento:',options:['É livre, sendo permitido o anonimato.','É livre, sendo vedado o anonimato.','Depende sempre de autorização prévia do Estado.','Afasta qualquer responsabilização posterior.','É garantida exclusivamente a brasileiros natos.'],answer:1,explanations:['O anonimato é expressamente vedado.','Correta: essa é a regra literal do art. 5º, IV.','A Constituição não exige autorização prévia geral para toda manifestação.','A liberdade não elimina automaticamente a responsabilidade por abusos.','A garantia não se restringe a brasileiros natos.'],takeaway:'Manifestação do pensamento livre; anonimato vedado.'},
 {id:'constf2',subjectId:'constitucional',topic:'Princípio da legalidade',statement:'A regra segundo a qual ninguém será obrigado a fazer ou deixar de fazer algo senão em virtude de lei está prevista no art. 5º e se relaciona ao princípio da:',options:['Publicidade.','Legalidade.','Eficiência.','Continuidade do serviço público.','Especialidade.'],answer:1,explanations:['Publicidade trata da transparência administrativa.','Correta: é a regra do art. 5º, II, da Constituição.','Eficiência é princípio administrativo do art. 37.','Continuidade do serviço público não é o fundamento direto.','Especialidade não corresponde à regra citada.'],takeaway:'Art. 5º, II: obrigações e proibições exigem fundamento legal.'},

 {id:'p7',subjectId:'portugues',topic:'Período simples e composto',statement:'Assinale a alternativa que apresenta um período simples.',options:['A equipe chegou e iniciou a reunião.','Quando o sinal tocou, os candidatos entraram.','A investigadora revisou o relatório.','O candidato estudou porque queria melhorar.','Embora estivesse cansada, ela continuou.'],answer:2,explanations:['“Chegou” e “iniciou” formam duas orações coordenadas.','“Tocou” e “entraram” formam duas orações.','Correta: há uma oração organizada em torno do verbo “revisou”.','“Estudou” e “queria” formam duas orações.','“Estivesse” e “continuou” formam duas orações.'],takeaway:'Período simples apresenta apenas uma oração.'},
 {id:'p8',subjectId:'portugues',topic:'Locução verbal',statement:'No enunciado “A equipe vai analisar os documentos”, a sequência “vai analisar” funciona como:',options:['Duas orações obrigatoriamente, pois há duas palavras verbais.','Uma locução verbal que integra uma oração.','Uma oração subordinada adverbial.','Um verbo e um substantivo.','Uma conjunção coordenativa.'],answer:1,explanations:['Duas palavras verbais não significam automaticamente duas orações; aqui há locução verbal.','Correta: “vai” é auxiliar e “analisar” é verbo principal, formando uma locução verbal.','Não há oração subordinada nesse enunciado.','“Analisar” continua sendo verbo, não substantivo nesse contexto.','Não há conjunção coordenativa na sequência.'],takeaway:'Verbo auxiliar + verbo principal pode formar uma única locução verbal.'},
 {id:'p9',subjectId:'portugues',topic:'Período composto',statement:'Qual enunciado apresenta período composto?',options:['A prova estava difícil.','O policial atento ouviu o relato.','A candidata chegou cedo.','O investigador consultou o sistema e registrou a ocorrência.','A sala permaneceu vazia.'],answer:3,explanations:['Uma oração com o verbo “estava”.','Uma oração com o verbo “ouviu”.','Uma oração com o verbo “chegou”.','Correta: “consultou” e “registrou” organizam duas orações ligadas por coordenação.','Uma oração com o verbo “permaneceu”.'],takeaway:'Identifique as orações a partir dos verbos e da estrutura sintática, não do tamanho da frase.'},


 {id:'r3',subjectId:'rlm',topic:'Negação de conjunção',statement:'A negação lógica de “O candidato estudou Português e estudou Penal” é:',options:['O candidato não estudou Português e não estudou Penal.','O candidato estudou Português ou não estudou Penal.','O candidato não estudou Português ou não estudou Penal.','O candidato estudou Português e não estudou Penal.','O candidato não estudou nenhuma matéria, necessariamente.'],answer:2,explanations:['Essa frase exige que ambas as partes sejam falsas; é mais forte que a negação da conjunção.','Não nega a primeira parte e, por isso, pode ser verdadeira junto com a frase original.','Correta: pela lei de De Morgan, a negação de p e q é não p ou não q.','É apenas um dos cenários possíveis, não a negação completa.','A negação não afirma que nenhuma matéria foi estudada; basta uma das partes ser falsa.'],takeaway:'Negação de “p e q” = “não p ou não q”.'},
 {id:'r4',subjectId:'rlm',topic:'Negação de condicional',statement:'A negação de “Se o candidato revisa, então melhora o desempenho” é:',options:['Se não revisa, então não melhora.','O candidato revisa e não melhora o desempenho.','O candidato não revisa e melhora o desempenho.','O candidato revisa ou melhora o desempenho.','O candidato não revisa ou não melhora o desempenho.'],answer:1,explanations:['Não é a negação lógica da condicional original; é outra condicional.','Correta: a negação de p → q é p ∧ não q.','Não satisfaz a condição que torna a condicional falsa.','É uma disjunção e não equivale à negação da condicional.','Não é equivalente a p e não q.'],takeaway:'Negação de “se p, então q” = “p e não q”.'},
 {id:'r5',subjectId:'rlm',topic:'Disjunção inclusiva',statement:'Considere p: “Estudei Português” e q: “Estudei Penal”. Na lógica proposicional usual, a disjunção p ou q é falsa quando:',options:['p e q são verdadeiras.','p é verdadeira e q é falsa.','p é falsa e q é verdadeira.','p e q são falsas.','p tem valor verdadeiro, independentemente de q.'],answer:3,explanations:['Se ambas são verdadeiras, a disjunção inclusiva é verdadeira.','Com uma parte verdadeira, a disjunção é verdadeira.','Com uma parte verdadeira, a disjunção é verdadeira.','Correta: o “ou” inclusivo só é falso quando as duas proposições são falsas.','Se p é verdadeira, a disjunção já é verdadeira, qualquer que seja q.'],takeaway:'O “ou” inclusivo exige pelo menos uma proposição verdadeira.'},

];
