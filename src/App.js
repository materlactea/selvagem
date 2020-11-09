import './App.css';
import * as React from 'react';
import ReactPlayer from 'react-player/youtube';
import styled from 'styled-components';
import hidrogenio from './sounds/hidrogenio.mp3';
import baia_cosmica from './images/baia_cosmica.jpg';
import embriao from './images/embriao.png';
import levanha from './images/levanha.jpg';
import lua_1 from './images/lua_1.png';
import lua_2 from './images/lua_2.png';
import lua_3 from './images/lua_3.png';
import lua_4 from './images/lua_4.png';
import mini_1 from './images/mini_1.jpg';
import mini_2 from './images/mini_2.jpg';
import mini_3 from './images/mini_3.jpg';
import mini_4 from './images/mini_4.jpg';
import mini_junte from './images/mini_junte.jpg';
import vesicula from './images/vesicula.png';
import pedra from './images/pedra.jpg';

const Content = styled.div``;

const Text = styled.div`
  font-size: calc(10px + 2vmin);
  text-align: justify;
  padding-left: 5%;
  width: 80%;
`;

const Title = styled.h1`
  text-align: left;
  text-transform: uppercase;
`;

const Screen1 = () => null;
const Screen2 = () => (
  <Text>
    <Title>Sonho de abertura</Title>
    Rio de Janeiro, 22 de agosto de 2020. Sonhei que acompanhava a entrevista de uma curadora que problematizava o
    cuidado com as crianças dizendo que poderíamos falar também em paternagem e não apenas em maternagem. Que o pai, ele
    também paterna. Desconfiada, eu interrompia a entrevista para dizer que não, que era muito mais interessante pensar
    que o pai materna do que paterna... e que é ainda mais interessante um homem maternar do que paternar, porque esse
    mater aí não era apenas o mater de mãe, de maternidade, de maternagem... esse mater é o mater de matéria, como
    queria Donna Haraway: mater, matter, mutter. Dizia ainda que a paternagem tal como conhecemos é pura transcendência,
    enquanto esse mater e essa maternagem são radicalmente imanentes... Esse mater aí é da matéria da vida real. Fim de
    sonho.
  </Text>
);

const Screen3 = () => (
  <Text>
    <Title>Nascimentos</Title>
    Alexandre me convoca pra falar sobre nascimento, diz se lembrar de alguns de meus trabalhos e eu me pergunto, numa
    exterioridade talvez implicada no texto de Emanuele, pensando em Gaia como essa parte de uma espécie de todo outro,
    exterior e interior: como nasceriam, então, as estrelas? Em qual metamorfose estariam cadenciadas? Estrelas nascem
    das nebulosas, imensas nuvens de gás. Começam produzindo o Hélio a partir do Hidrogênio, depois o Hélio é queimado,
    produzindo Lítio, e assim por diante, criando novos elementos. Quando há muito gás, a temperatura aumenta o
    suficiente para "acender" o combustível nuclear e iniciar a queima desse Hidrogênio, resultando na fusão nuclear e
    liberando tanta energia quanto possa caber neste instante: o do nascimento de uma estrela. No início, o universo era
    composto só por Hidrogênio e Hélio, portanto toda matéria que conhecemos – e de que somos feitas – foi produzida nas
    estrelas. O sol que Emanuele menciona é uma delas. E ele, o sol, enquanto estrela com 4,5 bilhões de anos, está na
    fase intermediária de sua existência. Em seu constante nascimento, as estrelas se expandem e tudo indica que daqui a
    outros 4,5 bilhões de anos ela, a estrela Sol, terá engolido todo o sistema solar. O que quer dizer que estamos nós
    – esse mesmo nós contido em Gaia, que é também o nós de Emanuele – com um pé dentro e um pé fora do caminho de nos
    tornarmos parte dessa estrela em definitivo.
  </Text>
);

const Video = styled.div`
  position: fixed;
  z-index: -99;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;

const VideoWrapper = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 300%;
  top: -100%;
  pointer-events: none;
`;

const Embed = ({ id, title }) => (
  <ReactPlayer
    id='youtube-player'
    url={`https://youtube.com/watch?v=${id}`}
    width='100%'
    height='100%'
    playing
    muted
    loop
    controls={false}
    volume={1}
    config={{
      youtube: {
        playerVars: {
          rel: 0,
          autoplay: 1,
          showinfo: 0,
          controls: 0,
          playsinline: 1,
        },
      },
      attributes: {
        autoPlay: false,
        preload: 'none',
        allow: 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
      },
    }}
  />
);

const Screen4 = () => (
  <>
    <Video>
      <VideoWrapper>
        <Embed title='A via láctea' id='KhhCpKj8_xk' />
      </VideoWrapper>
    </Video>
    <Text>
      <Title>A Via Láctea</Title>
      São muitos os mitos de origem que coabitam a história do céu cujas constelações estelares compõem aquilo que
      chamamos de Via Láctea, do grego “Caminho de Leite”: um aglomerado de centenas de bilhões de estrelas com um
      buraco negro no meio e cuja idade aproximada é de 13 bilhões de anos. Mas esse céu é um céu específico a depender
      da posição geográfica do observador e da maneira ou das ferramentas com as quais ele o observa. A Via Láctea é
      chamada de “Caminho da Anta” (Tapi’i rapé, em guarani) pela maioria das etnias indígenas brasileiras, devido
      principalmente às constelações representando uma Anta (Tapi’i, em guarani) que nela se localizam. Em algumas
      mitologias asiáticas ela é chamada Tianhe, um “Rio Celeste”, ou mesmo Tengshe, uma “Cobra Aquática”, ou Tianchuan,
      um “Barco Navegando no Rio”. Na Polinésia elas são “Peixes Nadando em Uma Enseada”. Para os Maori, ela é waka: uma
      “Canoa Bem Ancorada”. Aborígines da Austrália veem na Via Láctea um rio com moradias que se estendem por seu leito
      e a chamam de Wodliparri (wodli = cabana, parri = rio). Algumas narrativas indígenas norte-americanas a têm como
      “Caminho dos Mortos”: as estrelas são as fogueiras acesas durante a viagem. São inúmeras as interpretações
      mitológicas da galáxia, notavelmente quase sempre considerada um rio ou caminho: "Rio" para os árabes, "Rio da
      Luz" para os hebreus, "Rio Celestial" para os chineses, "Cama do Ganges" para a tradição sânscrita. Para alguns
      povos esquimós, a faixa brilhante forma o "Caminho das Cinzas". Em culturas africanas ela vem da história de uma
      menina que marcou seu caminho para que seu povo pudesse encontrá-la. Para os cheyennes, a Via Láctea é o rastro de
      poeira deixado pela corrida entre o búfalo e o cavalo. Alguns turcos conheciam a galáxia como Hadjiler Juli, ou
      "Estrada dos Peregrinos". Mas nenhuma, nenhuma dessas mitologias fala de leite como a mitologia grega que a nomeia
      e que fez o nome se espalhar por todo o ocidente. O caminho de leite da galáxia, do grego “gala”, “galaktos”,
      leite, foi criado por um jato de leite saído do peito de Hera, madrasta de Hércules com o peito cheio de leite,
      mas que se recusara a alimentá-lo. Uma noite, enquanto dormia, Hera foi surpreendida com o bebê Hércules levado ao
      seu seio por Zeus. Ao dar-se conta, Hera tirou o peito da boca de Hércules e dele saiu um jorro de leite que se
      espalhou no céu. Daí o nome Via Láctea. Existem pequenas variações nessa história que herdamos, mas o caminho de
      leite no céu é o mesmo. E leite também é língua.
    </Text>
  </>
);

const Columns = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 50vw 50vw;
`;

const Column = styled.div``;

const Image = styled.img`
  display: inline;
  width: 100%;
`;

const Screen5 = () => (
  <Columns>
    <Column>
      <Image alt='Lua' src={lua_1} />
    </Column>
    <Column>
      <Text>
        Durante o experimento, o leite fermentando no copo foi dando lugar a imagens de luas com crateras fúngicas e
        gordurosas, cada vez mais parecidas com a forma desta satélite que nos ecoa nos corpos d’água. Aqui no Brasil
        reconhecemos a expressão “lua de leite”, usada para determinar o tempo que parturiente e bebê levam para se
        conhecer e fortalecer seus laços no pós-parto. A descida do leite para latines – e não por acaso a subida do
        leite para anglo-europeus – é o tempo de encontro e de contato pele a pele, tempo a sós.
      </Text>
    </Column>
  </Columns>
);

const Screen6 = () => (
  <Columns>
    <Column>
      <Image alt='Lua' src={lua_2} />
    </Column>
    <Column>
      <Text>
        Aliancei-me com outras fêmeas e seus leites – aqui, especificamente, cabra, vaca, ovelha e monika – de dentro de
        um cenário de lactation para pensar por e com esses corpos. Tocar o leite como língua, como língua-mãe, é também
        entender que, ao parar e olhar para essa substância, na pausa forçada do corpo que amamenta, é descortinada toda
        uma dinâmica comunitária entre bactérias, vírus, anticorpos, açúcares, gorduras e proteínas que são simpáticas à
        própria vida se pensada fora da noção de trabalho, de liberdade e de autonomia como conhecemos. Não existe
        autonomia nem na dinâmica da língua-láctea, nem na experiência da vida ela mesma: somos todos dependentes uns
        dos outros em certa medida, assim como também sugere Emanuele.
      </Text>
    </Column>
  </Columns>
);

const Screen7 = () => (
  <Columns>
    <Column>
      <Image alt='Lua' src={lua_3} />
    </Column>
    <Column>
      <Text>
        Aproximar a noção de língua/linguagem da matéria leite é também pensar com essa relação matriarcal cúmplice e
        horizontal de troca. A maternidade me ensinou a pensar com o corpo e por ele – quem amamenta sabe o quanto de
        cérebro se esvai junto com o leite e com ele se mistura; a descida do leite é essa descida obrigatória e
        inexorável à altura do corpo. E é aí que mora a mágica, nos procedimentos científico-domésticos, cotidianos e
        ordinários; na maternagem que é matéria roçando matéria, radicalmente imanente, lindamente imanente. Essas luas
        de leite são imagens simples, feitas de copos de leite materno expostos ao tempo de 30 dias, em 2019.
      </Text>
    </Column>
  </Columns>
);

const Screen8 = () => (
  <Columns>
    <Column>
      <Image alt='Lua' src={lua_4} />
    </Column>
    <Column>
      <Text>
        Durante o experimento, o leite fermentando no copo foi dando lugar a imagens de luas com crateras fúngicas e
        gordurosas, cada vez mais parecidas com a forma desta satélite que nos ecoa nos corpos d’água. Aqui no Brasil
        reconhecemos a expressão “lua de leite”, usada para determinar o tempo que parturiente e bebê levam para se
        conhecer e fortalecer seus laços no pós-parto. A descida do leite para latines – e não por acaso a subida do
        leite para anglo-europeus – é o tempo de encontro e de contato pele a pele, tempo a sós.
      </Text>
    </Column>
  </Columns>
);

const Screen9 = () => (
  <Video>
    <VideoWrapper>
      <Embed title='' id='B6OpgDYYZLg' />
    </VideoWrapper>
  </Video>
);

const BlackText = styled(Text)`
  background-color: #1b1b1b;
`;

const RightAligned = styled(Text)`
  text-align: right;
`;

const Screen10 = () => (
  <Columns>
    <Column>
      <Image alt='Mini' src={mini_1} />
    </Column>
    <Column>
      <BlackText>
        <Title>Viagem Ao Centro Das Luas, Minimundinhos</Title>
        Então caímos dentro desses quatro copos de leite que, desde agosto de 2019, estão parados na minha janela
        cultivando ou tornando possíveis suas próprias metamorfoses. Não faço ideia de quantas gentes coabitam,
        fermentam e se re/cocriam em cada um deles, mas vi a olho nu a transformação de cada leite, de cada língua, de
        cada universo lácteo, de cada uma dessas vias lácteas em uma trama multiespecífica.
      </BlackText>
    </Column>
  </Columns>
);

const Screen11 = () => (
  <Columns>
    <Column>
      <Image alt='Mini' src={mini_2} />
    </Column>
    <Column>
      <BlackText>
        E, por ser específico, leite não é um produto de uma relação, mas um produzir-com: é feito sob medida para o
        filhote mamífero daquela espécie. Quando falamos da especificidade do leite, falamos que a quantidade de
        gorduras, açúcares, sais minerais e proteínas presentes nessa substância é regulada pela necessidade e pelo tipo
        de cada filhote, sob demanda.
      </BlackText>
    </Column>
  </Columns>
);
const Screen12 = () => (
  <Columns>
    <Column>
      <Image alt='Mini' src={mini_3} />
    </Column>
    <Column>
      <BlackText>
        O leite da baleia, por exemplo, não tem em sua composição os nutrientes necessários para o filhote da onça, nem
        o leite da cadela contém em sua formulação os nutrientes de que precisa o filhote de leoa-marinha. Saliva e
        glândulas mamárias fazem da boca que se fecha sobre o mamilo um canal vital de nutrição e imunização. Conforme
        cada infante vai amadurecendo, o leite também vai. E é nesse balanço da vida que o leite, vivo por excelência,
        vai se transformando composicionalmente.
      </BlackText>
    </Column>
  </Columns>
);

const Screen13 = () => (
  <Columns>
    <Column>
      <Image alt='Mini' src={mini_4} />
    </Column>
    <Column>
      <BlackText>
        No entanto, apesar de ser específico no sentido de ser inerente à espécie, o leite também é multiespecífico em
        sua composição, ou seja, ele é composto não apenas pelos principais componentes que mencionei, mas também é
        veículo de bactérias e vírus, ou seja, leite é onde podem habitar outras espécies tanto no trato
        lactante-lactente quanto na sua forma supostamente morta fora do corpo e da boca.{' '}
      </BlackText>
    </Column>
  </Columns>
);

const Screen14 = () => <Image src={mini_junte} />;

const Screen15 = () => (
  <Text>
    Dentro do útero o bebê era um órgão inter e codependente daquele corpo-casa. Para os judeus, assim como para os
    Araweté, o feto só passa a ser gente quando muda de mundo, quando experimenta o extrauterino. Chamamos os primeiros
    três meses do bebê humano fora do corpo que o gestou de exterogestação.
  </Text>
);

const Screen16 = () => (
  <Columns>
    <Column>
      <Image alt='Embrião' src={embriao} />
    </Column>
    <Column>
      <RightAligned>
        <p>útero gravídico aumentado</p>
        <p>de volume de contornos regulares e</p>
        <p>textura homogênea:</p>
        <p>observa-se embrião com</p>
        <p>batimentos cardíacos</p>
        <p>presentes</p>
      </RightAligned>
    </Column>
  </Columns>
);

const Screen17 = () => (
  <Columns>
    <Column>
      <Image alt='Vesícula' src={vesicula} />
    </Column>
    <Column>
      <RightAligned>
        <p>vesícula biliar distendida</p>
        <p>de parede algo espessadas</p>
        <p>contendo cálculo com sombra</p>
        <p>acústica posterior</p>
        <p>medindo três centímetros</p>
      </RightAligned>
    </Column>
  </Columns>
);

const ImageBackground = styled.div`
  background-image: url(${(props) => props.$src});
  width: 100%;
  height: 100%;
  opacity: ${(props) => (props.$dim ? '50%' : '100%')};
  position: absolute;
  top: 0;
  left: 0;
  background-position-x: center;
  background-position-y: center;
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -99;
`;

const Screen18 = () => (
  <>
    <ImageBackground $dim $src={pedra} />
    <Text>
      <Title>Pedra</Title>
      Pedra parece um ovo. Uma escultura orgânica e inorgânica, um cálculo biliar composto de sais de cálcio,
      bilirrubina e colesterol cristalizados no mesmo corpo que produziu Dora. Tudo o que se produz nesse corpo é também
      marcado por ele e leva consigo a marca de sua suposta matriz, seria uma continuidade dela. Pedra é também
      metamorfose e talvez forma de vida matérico-melancólica em um microcosmo com sua economia e vida próprios e
      totalmente independente de meu corpo. Pedra levou 7 anos para ser esculpida. Dora, por sua vez, teria sido
      esculpida em torno de 40 semanas. Sais de cálcio são encontrados em leites e seus derivados. Ao contrário de
      Pedra, Dora precisou ser maternada, o que complexifica um pouco a qualidade dessa vida de que somos todos parte
      implicada e implicadora.
    </Text>
  </>
);

const Screen19 = () => (
  <>
    <Video>
      <VideoWrapper>
        <Embed title='Pais em maternagem' id='gicQdzF6YtQ' />
      </VideoWrapper>
    </Video>
    <Text>
      <Title>Pais em maternagem</Title>O que chamamos de natureza não cansa de nos mostrar o quanto a nossa
      cisheretonormatividade patriarcal tem em matéria de pobreza de mundo quando do nascimento e do cuidado de nossas
      proles. O Emo e o Peixe-Lapo são dois exemplos inspiradores de machos que chocam os ovos de suas crias e chegam
      muito junto na criação dos filhotes. O cavalo-marinho é quem sofre as contrações do trabalho de parto e dá à luz
      as suas crias. O Dayak Fruit Bat e a Raposa Voadora são dois tipos diferentes de morcegos cujos machos inclusive
      amamentam seus filhotes. Sabe-se de uma infinidade de peixes, aves, anfíbios e insetos machos por aí nos dando
      bons exemplos já documentados dessa maternagem paterna no mundo dos mais que humanos. Poderíamos ser inventives
      como esses incríveis rapazes, uma vez que também somos essa extensão tão inevitável do mesmo sopro sobre a mesma
      sopa...
    </Text>
  </>
);

const Screen20 = () => (
  <Video>
    <VideoWrapper>
      <Embed title='' id='0vpvE9uCS4g' />
    </VideoWrapper>
  </Video>
);

const Screen21 = () => (
  <>
    <ImageBackground $dim $src={levanha} />
    <Text>
      <Title>O Sopro na bolha que estoura</Title>
      Aprender a fazer pão tem me dado mais do que uma nova habilidade culinária – que estou honestamente longe de
      alcançar – mas uma outra relação com o tempo das coisas. O tempo da fermentação do levain, ou melhor, da massa
      madre, a massa mater, do pão, do trigo, coloca-me em relação direta com o tempo das minhas urgências e com o tempo
      das urgências do mundo. É provável que as primeiras formas de vida tenham sido bactérias fermentadoras que
      transformaram os açúcares com suas complexidades metabólicas. É provável que o pão que eu faço – e eventualmente
      como – é também o corpo de meu ancestral. Uma espécie de ancestrofagia. As bolhas de ar que formarão instigantes
      alvéolos são a libertação do dióxido de carbono, cristalizada no tempo, marcada pelo contorno de uma cama elástica
      de farinha e água. O pão nasce dessa dança tensionada entre o CO2 que quer escapar e a massa que se deixa formar e
      deformar pelas suas tentativas de fuga – mas antes disso, e para que isso ocorra, as proteínas do trigo se
      desenrolam como novelos e se entregam à experiência viscosa do encontro com a água. As fermentações são uma
      espécie de antídoto contra a ideia de estado, dadas as relações prazerosas, comunitárias humanas e outras que
      humanas, dilatadas no tempo e contidas historicamente nos gestos de fazer pão, vinho e cerveja. Nessa imagem uma
      escultura feita de massa madre no formato da pedra.
    </Text>
  </>
);

const Screen22 = () => null;

const Screen23 = () => <ImageBackground $src={baia_cosmica} />;

const Screen24 = () => (
  <Text>
    <Title>Sonho De Fechamento / O Planeta E A Piscina</Title>
    Paris, 22 de novembro de 2018. Sonhei que fazia uma obra de arte em escala planetária. No fundo da terra, sob a
    água, bolava uma espécie de construção usando materiais de piscina, como luz, azulejo e concreto, com os quais eu
    formava uma palavra que podia ser lida de outros planetas e a palavra era... PLANETA. O trabalho ficava pronto muito
    rápido, em um dia, e eu não entendia porque aquilo tinha se dado de maneira tão imediata, pouco pensada, pouco
    trabalhosa; um projeto de características complexas, transcontinental, difícil, que provavelmente levaria anos –
    décadas! – para ser realizado e, de repente, pronto em quase 24h. No final do dia eu mesma já avistava o planeta
    rotulado de planeta-em-piscina, num recuo de anos-luz e com a facilidade de quem se desloca ao segundo pavimento de
    um prédio. E quando via o trabalho pronto, de longe, eu me perguntava que diabos de palavra era essa; tantas
    palavras pra pensar, pra escrever, tantas outras palavras – gestos, imagens, desenhos – possíveis e eu fui lá e
    escolhi marcar o planeta com a palavra planeta, reduzindo esse lugar à ideia fabulada sobre ele próprio por nós,
    esse nós meio “blah”.
  </Text>
);

const Screen25 = () => (
  <Text>
    Aquilo me frustrava um pouco e me colocava diante da insignificância de meu gesto criativo, de uma esterilidade
    fabuladora, ao mesmo tempo em que dava a ele, ao meu gesto, uma dimensão planetária dentro de uma metafísica
    ocupacionista própria de meu modo de vida; ou seja, era um misto de culpa com constrangimento, como se essa espécie
    de duplo clique artístico me fizesse passar vergonha diante de todo o sistema solar. Ao mesmo tempo, e apesar do
    embaraço, o corpo celeste que eu marcara me deixava hipnotizada e encantada. Eu lamentava não ter conseguido
    escolher outra palavra, lamentava marcá-lo em uma escala planetária, assim, tão rapidamente e meio fora de controle,
    lamentava tudo isso e, ainda assim, estava completamente fascinada. Na hora de compor a ficha técnica, eu não
    conseguia: diante de um quadro negro, em um galpão quente, sob um teto de zinco e com um giz na mão, eu escrevia e
    apagava infinitas vezes os materiais que compunham a obra da qual eu me envergonhava. Eles eram tantos, inúmeros,
    não cabiam numa lousa ou num espaço formal com essa finalidade. Eu desistia pois era impossível escrever as
    combinações de todas as letras que nomeavam e compunham toda a matéria de que é feita a Terra.
  </Text>
);

const Screen26 = () => (
  <Text>
    <p>“Quando eu era bem pequeno, meu pensamento ainda estava no esquecimento.”</p>
    <p>Davi Kopenawa em “A queda do céu”.</p>
  </Text>
);

const Screen27 = () => (
  <RightAligned>
    <p>
      “Dedico essa apresentação aos três grandes nascimentos de 2015 que nos metamorfosearam ao ponto desse instante:
    </p>
    <p></p>
    <p>para Dora, de quem um dia fui casulo,</p>
    <p>Colette, para quem um dia fui cereja</p>
    <p>e Caetano, para quem sou a mãe de Dora.”</p>
  </RightAligned>
);

const Screen28 = () => null;

const screens = {
  1: Screen1,
  2: Screen2,
  3: Screen3,
  4: Screen4,
  5: Screen5,
  6: Screen6,
  7: Screen7,
  8: Screen8,
  9: Screen9,
  10: Screen10,
  11: Screen11,
  12: Screen12,
  13: Screen13,
  14: Screen14,
  15: Screen15,
  16: Screen16,
  17: Screen17,
  18: Screen18,
  19: Screen19,
  20: Screen20,
  21: Screen21,
  22: Screen22,
  23: Screen23,
  24: Screen24,
  25: Screen25,
  26: Screen26,
  27: Screen27,
  28: Screen28,
};

const Button = styled.button`
  // button reset
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  color: #fff;

  position: absolute;
  right: 5%;
  bottom: 5%;
  font-size: calc(32px + 2vmin);
`;

const Next = ({ go }) => <Button onClick={go}>&gt;</Button>;

function App() {
  const [screen, setScreen] = React.useState(1);

  const CurrentPage = screens[screen];

  return (
    <Content>
      <audio autoPlay>
        <source src={hidrogenio} />
      </audio>
      <CurrentPage />
      {screens[screen + 1] && <Next go={() => setScreen(screen + 1)} />}
    </Content>
  );
}

export default App;
