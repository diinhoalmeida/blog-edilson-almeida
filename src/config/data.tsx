interface IBlogList {
  id: number,
  title: string,
  category: string,
  subCategory: string[],
  description: string,
  textblog: ITextBlog[],
  authorName: string,
  authorAvatar: string,
  createdAt: string,
  cover: string
}

interface ITextBlog {
  paragraph?: string,
  topic?: string,
  theproblem? :string,
  subtopic?: string,
  tomarkdown?: string,
  gifblog?: string 
}

export const blogList: IBlogList[] = [
    {
      id: 1,
      title: 'Busca Binária',
      category: 'JavaScript',
      subCategory: ['logica', 'javascript'],
      description:
        "Fala comigo, mate. Trago aqui uma resolução simples e explicada sobre como realizar busca binária em um array com JavaScripto. Prometo deixar detalhado de forma que não vai sair de sua cabeça. Bora lá!",
      textblog: [
        {
          topic: `Olá!`
        },
        {
          paragraph: 'Esse desafio aqui é lá do site https://leetcode.com, inclusive indico que façam uma conta por lá e no seu ritmo desvendando o mundo da lógica, se for Dev de primeira viagem indico começar pelo easy. Ir direto para desafios de nível alto quando se está aprendendo a aprender pode trazer descontentamento, você sente-se incapaz e daí como um caracol se encaracola, entra em posição fetal e espera o problema passar, não faz isso, se respeite, e já digo, maneira no café.'
        },
        {
          topic: 'O Problema:'
        },
        {
          theproblem: `Dada uma matriz de inteiros nums classificada em ordem crescente e um alvo inteiro, escreva uma função para pesquisar alvo em nums. Se o destino existir, retorne seu índice. Caso contrário, retorne -1.`
        },
        {
          theproblem: `Você deve escrever um algoritmo com complexidade de tempo de execução O(log n).`
        },
        {
          subtopic: '1. Entender o Problema:'
        },
        {
          gifblog: '/gifs/understand-gif.gif'
        },
        {
          paragraph: 'O primeiro passo é sempre entender o problema, esquecer um pouco de código e entender o que está sendo solicitado, como num jogo de RPG, quanto mais informações coletamos, mais preciso será nossa forma de derrotar o boss, nesse caso, resolver o problema.'
        },
        {
          paragraph: 'A questão nos diz que será dada uma matriz de inteiros nums que é classificada em ordem crescente, ou seja, será nos dado um array que iniciará no menor número e termina no maior. Uma informação óbvia, eu sei, mas todo detalhe importa, essa ideia é de dar nome as coisas, você fazer um mapa mental desde a primeira informação, ter uma leitura atenta. O array enviado vai ser mais ou menos assim:'
        },
        {
          tomarkdown: `
            const array = [-2, -1, 0, 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10];
            `
        },
        {
          paragraph: 'Temos então de retornar o índice em qual se encontra, sendo um número positivo para índice encontrado e -1 para quando ele não estiver lá.'
        },
        {
          paragraph: '“Po, mas aí eu uso o indexOf no meu array e acabou!”, calma, jovem Padawan, mas e se o array for grande pra carai?'
        },
        {
          subtopic: '2. Iniciando a Busca Binária:'
        },
        {
          tomarkdown: 
          `
            const binarySearch = (arr, target) => {
              var start = 0;
              var end = arr.length - 1;
          
              while (start <= end) {
                  var mid = Math.floor((start + end) / 2);
                  if (arr[mid] === target) return mid;
                  if (target > arr[mid]) start += 1;
                  if (target < arr[mid]) end -= 1;
              }
          
              return -1;
            }
          
            const array = [-2, -1, 0, 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10];
            
            console.log(binarySearch(array, 0))
          `
        },
        {
          paragraph: `Olha aqui a nossa função e nosso array logo abaixo, nós a chamamos com o “console.log(binarySearch(array, 8))” onde o número 8 é o target.`
        },
        {
          subtopic: '3. Debug: '
        },
        {
          paragraph: `Vamos debugar aqui então nosso array, começamos setando um start, que deve ser o 0, e o end, que deve ser o tamanho do array menos um.`
        },
        {
          tomarkdown: `
            var start = 0;
            var end = arr.length - 1;
          `
        },
        {
          subtopic: '3.1. arr.length - 1?'
        },
        {
          paragraph: `Oxe, BUT WHY “arr.length - 1”? Porque no array temos 13 itens, então o “arr.length” nos retorna 13, é certo que iremos percorrê-lo posteriormente. O primeiro item de um array se encontra não na posição 1, mas no "arr[0]', então no caso do nosso array o último item estará no "arr[12]" e não "arr[12]": `
        },
        {
          tomarkdown: `
          const array = [-2, -1, 0, 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10];
                          0   1  2  3  4  5  6  7  8  9  10 11 12
          `
        },
        {
          subtopic: '3.2. "While":'
        },
        {
          paragraph: `Então agora iniciamos com um while, que cria um loop enquanto seu argumento for verdadeiro:`
        },
        {
          tomarkdown: 
          `
                       0       12
              while (start <= end) {
                  var mid = Math.floor((start + end) / 2);
                  if (arr[mid] === target) return mid;
                  if (target > arr[mid]) start += 1;
                  if (target < arr[mid]) end -= 1;
              }
          `
        },
        {
          paragraph: `Start agora é menor que end, atribuímos 0 a ele e ao “end = arr.length - 1” resultando em 12. Para a busca binária funcionar temos de encontrar o meio do nosso array, é daqui que partimos a busca, um para esquerda, outro para direita. Usamos o “Math.floor” para retornar o menor número inteiro, por exemplo, se o valor é 3,5, retorna 3, mas no nosso caso aqui retorna um valor inteiro “mid = 6”. Sempre que o loop voltar a este ponto teremos novos valores de start e end;`
        },
        {
          tomarkdown: 
          `
            var mid = Math.floor((start + end) / 2);
                                   ((0 +   12)  / 2)
          `
        },
        {
          paragraph: `Começamos com um if na linha 8, se já cairmos no valor setado em target já retornamos a posição mid. “array[mid = 6]” é 4, então se “target = 4”, é pau, é pedra, é o fim do caminho.`
        },
        {
          tomarkdown: 
          `
            if (arr[mid] === target) return mid;
          `
        },
        {
          paragraph: `Lembra da informação que coletamos lá no início? O array que nos é dado vem em ordem crescente, o mid para nosso array de exemplo será a posição 6, onde temos o número 4. Como queremos encontrar aqui o número 8, sabemos que “8 > 4”, logo sabemos que precisamos buscar em posições posteriores ao “mid = 6”, então rumo ao Olimpo buscamos numa posição mais alta, start recebe +1;`
        },
        {
          tomarkdown: 
          `
            if (target > arr[mid]) start += 1;
               (   8   >    4) => start = start + 1;
          `  
        },
        {
          subtopic: '3.3. Math.floor(number):'
        },
        {
          paragraph: `O loop irá acontecer novamente desde o “while”, então retomamos a linha 6, porém o start recebeu +1, o retorno de “mid = Math.floor((1 + 12) / 2)” será 6,5, arredondado para baixo será 6. Retornamos ao “mid = 6”, o mesmo de antes, erramos? Não, o que acontece é que agora a busca será feita sempre a partir do 6 até encontrar a posição “mid = 10” em que o “target = 8” está, se “start += 1” novamente, então a busca será feita a partir de “mid = Math.floor((2 + 12) / 2)”, ou seja, agora “mid = 7”.`
        },
        {
          tomarkdown: 
          `
            var mid = Math.floor((start + end) / 2);
                                ((  1   +  12) / 2);
          `
        },
        {
          paragraph: `Mas e se o target for menor que o “array[mid = ?]”, e não maior? Utilizando o mesmo array de exemplo, suponhamos que o “target = -1”, chamado com o “console.log(binarySearch(array, -1))”, sabemos que nosso “array[mid = 6]” nos retorna 4, então não precisamos fazer buscas em “mid > 6” e sim em “mid < 6”, entraremos nessa condição: `
        },
        {
          tomarkdown: 
          `
            if (target < arr[mid]) end -= 1;
               (  -1   <    4    ) => end = end - 1;
          `
        },
        {
          paragraph: `Então “end -= 1”, agora rumo ao Tártaro, com isso limitamos mais uma vez o espaço de busca, quando voltamos ao início do “while”, setamos agora um novo mid, o “end = 12” agora decai para “end = 11”:`
        },
        {
          tomarkdown: 
          `
            var mid = Math.floor((start + end) / 2);
                                ((  0   +  11) / 2);
          `
        },
        {
          paragraph: `O retorno de “mid = Math.floor((0 + 11) / 2)” será 5,5, que arredondado para baixo teremos 5, então agora a busca será feita no “array[mid = 5]” que retorna 3, e enquanto o “target = -1” for menor que este valor, teremos um decrescimento do end em -1, o retorno do mid encontrado para o “target = -1” tem de ser “mid = 1”:`
        },
        {
          tomarkdown: 
          `
            const array = [-2, -1, 0, 1, 2, 3, 4 ,5 ,6 ,7 ,8 ,9 ,10];
                            0   1  2  3  4  5  6  7  8  9  10 11 12
          `
        },
        {
          paragraph: `Ao final da função, fora do “while”, adicionamos um retorno para que se o target não for encontrado no array teremos o retorno solicitado de -1:`
        },
        {
          tomarkdown: 
          `
          return -1;
          `
        },
        {
          gifblog: `/gifs/this-is-all-folks.gif`
        }
      ],
      authorName: 'Edilson Almeida',
      authorAvatar: '/author.jpeg',
      createdAt: 'Setembro 09, 2022',
      cover: '/foto-three.jpeg',
    },
    // {
    //   id: 2,
    //   title: 'S.O.L.I.D',
    //   category: 'Principios',
    //   subCategory: ['php'],
    //   description: `Ainda não há nada aqui`,
    //   textblog: [
    //     {
    //       topic: 'Olá'
    //     },
    //     {
    //       paragraph: `Ainda não há nada aqui`
    //     }
    //   ],
    //   authorName: 'Edilson Almeida',
    //   authorAvatar: '/author.jpeg',
    //   createdAt: 'Setembro 09, 2022',
    //   cover: '/foto-three.jpeg',
    // }
  ];