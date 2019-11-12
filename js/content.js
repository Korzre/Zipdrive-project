var navegation1 = 0
var button1 = document.querySelector('.imagem11')
var button2 = document.querySelector('.imagem22')
var titulo = document.querySelector('.titulo2')
var content = document.querySelector('.conteudoresp')
var border = document.querySelector('.tex1')
var page1 = document.querySelector('.pagina1')
var space = document.querySelector('.te')
var dat1 = document.querySelector('.dat1')
var graphic = document.querySelector('.grafico')
var wdth = screen.width
var responsive = document.querySelector('.corpo')
let today1 = new Date().toLocaleDateString()
dat1.innerHTML = `${today1}<br><br>`



function adjust() {
    content.style.display = "block"
    titulo.style.cssText = "font-family: Calibri;font-family: 14pt;font-weight: bold;text-align: center;text-transform: uppercase;"
    dat1.style.display = "none"
    space.style.marginTop = "28px"

    if (wdth < 1430 && wdth >= 1000) {      
        page1.style.height = "680px"
    }else{
        if (navegation1 == 2 || navegation1 == 12) {
            page1.style.height = "680px"
        }else{
            page1.style.height = "auto"
        }
        
    }
}

setInterval(() => {
    if (navegation1 <= 0) {       
        adjust()
        graphic.style.display = "none"
        content.style.display = "none"
        titulo.style.width = "90%"
        titulo.style.border = "4px solid red"
        titulo.style.borderStyle = "double"
        titulo.style.margin = "auto"
        titulo.style.height = "92%"
        space.style.marginTop = "230px"
        dat1.style.display = "flex"
        button1.style.opacity = "0.3"

        titulo.innerHTML = `<br><br><br><br><br><br><br><br>zip-drive<br>${today}
        <br><br><br><br>
        <br><br><br><br>
        <br><br><br><br>`


        // titulo.style.lineHeight="22%"
        // titulo.style.marginTop="10px"

    } else {

        switch (navegation1) {

            case 1:
                adjust()             
                graphic.style.display = "none"
                titulo.innerHTML = "<br>INTRODUÇÃO"
                //page1.style.height = "auto"
                content.innerHTML = "Dispositivo de armazenamento é um componente capaz de gravar informações. É o hardware que possui a finalidade de armazenar o software. Os dados ou informações gravadas em um computador ficam armazenados nestes dispositivos.<br><br> Um dispositivo de armazenamento pode ser classificado em:<br> - Memória principal ou secundária;<br> - Memória volátil ou não volátil;<br>- Dispositivo magnético, ótico ou eletrônico;<br> - Dispositivo removível ou não removível.<br><br><center><b>Conceito</b></center><br>O zip-drive é um sistema de meio eletrónico removível de média capacidade, introduzido pela cientista Isadora em 1994.<br><br>O zip-drive consiste num dispositivo de leitura de unidades de armazenamento de dados desenvolvido pela norte-americana Iomega Corporation. A Zip Drive foi apresentada pela primeira vez em 1994 e baseava-se no sistema Bernoulli Box desenvolvido em 1984 também pela Iomega. <br><br><br>"
                break

            case 2:
                adjust()                
                graphic.style.display = "none"
                //page1.style.height = "680px"
                titulo.innerHTML = ""
                content.innerHTML = "Este dispositivos eram muito versáteis e compatíveis com a maioria dos sistemas e oferecia configurações de 100 MB e de 250 MB. Na prática era um dispositivo compacto, muito semelhante a uma drive para disquetes mas utilizando dispositivos de armazenamento diferentes: os discos ZIP, também eles fabricados pela Iomega. <br><br><br>"
                break


            case 3:
                adjust()                
                graphic.style.display = "none"
                //page1.style.height = "auto"
                titulo.innerHTML = "<br>A HISTÓRIA DO ZIP-DRIVE"
                content.innerHTML = "Os primeiros computadores pessoais tinham algumas soluções de armazenamento permanente, como discos rígidos. As informações foram mantidas em fitas cassete ou disquetes para que os dados foi facilmente transportado entre sistemas.Em meados da década de 1990, no entanto, os discos rígidos eram comuns. À medida que foi crescendo, o limite de 1,44 MB de armazenamento e velocidade de transferência lenta de disquetes tornava difícil para transferir arquivos entre computadores.Durante este tempo, Iomega comercializado uma solução: As unidades de Bernoulli, que usaram discos removíveis e podem conter mais de 200 MB por disco. No entanto, eles eram grandes e caros e não uma opção viável para a maioria dos proprietários de computadores.<br><br><center><b>Lançamento</b></center><br>Em 1994, a Iomega desenvolveu sua solução de armazenamento portátil de próxima geração, o <i>zip drive</i>. Projetado para orientar os usuários de computador típicos, essas unidades eram menores e menos caro do que as unidades de Bernoulli e ainda assim conseguiu segurar 100 MB por disco, até 70 disquetes. Eles são fáceis de instalar e custam apenas R $ 200. <br><br><br>"
                break

            case 4:
                adjust()                
                graphic.style.display = "none"
                titulo.innerHTML = ""
                content.innerHTML = "Eles encheram uma necessidade nenhum outro produto da época podia e tornou-se muito popular entre os donos de computadores. Mais tarde, uma versão de 250 MB foi lançado em 1998 e uma versão de 750 MB em 2002.<br><br><center><b>Click da morte</b></center><br>Isto significa que o disco se tinha tornado ilegível para qualquer um por um número de razões. Embora a unidade estava fazendo o barulho, foi o disco que estava com defeito. <b>Click of death</b> é um termo que se tornou comum no final dos anos 90, referindo-se ao som do clique em sistemas de armazenamento em disco que sinalizam que uma unidade de disco falhou, geralmente catastroficamente. <br><br>O próprio som do clique surge do movimento inesperado do atuador de leitura e gravação do disco. Na inicialização e durante o uso, a cabeça do disco deve se mover corretamente e poder confirmar se está rastreando corretamente os dados no disco. Se o cabeçote falhar em se mover conforme o esperado ou, ao mover, não conseguir rastrear a superfície do disco corretamente, o controlador de disco poderá tentar se recuperar do erro retornando o cabeçote à sua posição inicial e, em seguida, tentando novamente, às vezes causando um clique audível. <br><br><br>"
                break

            case 5:
                adjust()                
                graphic.style.display = "none"
                titulo.innerHTML = ""
                content.innerHTML =
                "Em alguns dispositivos, o processo tenta novamente, automaticamente, causando um clique repetido ou rítmico, às vezes acompanhado pelo zumbido da placa da unidade girando.<br><br><center><b>Queda nas vendas</b></center><br>A Iomega enfrentou uma ação de classe, em 1998, sobre o clique da morte, que foi resolvida fora dos tribunais em 2001, oferecendo aos proprietários de unidades zip descontos para outros produtos da Iomega. A unidade tinha enfrentado a concorrência crescente de unidades de CD- ROM graváveis , que tiveram maior capacidade e dependiam de meios menos dispendiosos. As vendas declinaram a partir de 1999.<br><br><center><b>Legado</b></center><br>O impacto da unidade Zip sobre a indústria do computador pessoal é melhor resumido por dois ocorridos. Um nomeado um dos 50 melhores produtos de tecnologia de todos os tempos e o outro nomeado um dos 25 piores. Para sua época, foi um produto revolucionário que ofereceu uma tecnologia de armazenamento em que nenhuma outra empresa poderia igualar. <br><br><br>"
                break

            case 6:
                adjust()                
                graphic.style.display = "none"
                titulo.innerHTML = ""
                content.innerHTML = "Como alguns ainda sentiam o peso da Iomega sobre o <i>clique da morte</i>, levou à morte do zip-drive, mas de armazenamento ótico barato teria feito o drive obsoleto de qualquer maneira.<br><br><center><b>Modelos</b></center><br>O Zip Drive foi inventado e é comercializado pela empresa Iomega. A Epson - que é outra empresa que comercializa o Zip Drive - na verdade não produz o Zip Drive: apenas compra diretamente da Iomega por um preço bem mais em conta e revende com o selo Epson colado. A diferença física fica por conta da cor. Enquanto o Zip Drive vendido pela Iomega é azul-cobalto, o da Epson é bege. Na verdade, trata-se do mesmíssimo aparelho.<br><br>Todo Zip Drive utiliza a tecnologia SCSI (Small Computer Systems Interface), uma tecnologia de ponta para periféricos de alto desempenho. O modelo externo, que é conectado à porta paralela, possui um conversor SCSI / Porta Paralela em seu interior.<br><br>A conexão de um Zip Drive interno necessita obrigatoriamente de uma interface SCSI instalada ao micro, o que significa que haverá um ganho de performance considerável em relação ao modelo mais comum, que é conectado à lenta porta paralela. <br><br><br>"
                break

            case 7:
                adjust()                
                graphic.style.display = "none"
                //page1.style.height = "auto"
                titulo.innerHTML = "<br>INSTALAÇÃO DE UM ZIP-DRIVE"
                content.innerHTML = "A instalação de um Zip Drive externo é simples, basta conectá-lo à porta paralela do micro através de um cabo que o acompanha. A porta paralela é onde a impressora está conectada. Não há perigo de você perder a impressora: o Zip Drive possui um conector traseiro para que a impressora seja lá conectada e possa continuar sendo utilizada normalmente.<br><br>Por estar conectado à porta paralela, o Zip Drive externo possui um grande problema: não pode ser utilizado enquanto você estiver utilizando a impressora. Isto diz respeito a até mesmo <u>esquecer</u> um Zip Disk em seu interior. Se isto acontecer ou você tentar acessar o Zip enquanto um documento grande é impresso, a impressora normalmente trava. <br><br>O modelo interno utiliza uma interface SCSI que normalmente acompanha este modelo - uma plaquinha chamada zip- e que é muito fácil de ser instalada: basta conectar o zip-drive à placa e espetar a placa ao micro e a instalação está pronta. <br><br>Depois de fisicamente conectado ao micro, a instalação do Zip Drive também é fácil. <br><br><br>"
                break

            case 8:
                adjust()                
                graphic.style.display = "none"
                titulo.innerHTML = ""
                //page1.style.height = "auto"
                content.innerHTML = "Basta executar a disquete de instalação que o acompanha, chamando o programa de instalação de acordo com o sistema operacional que você possui em seu micro. Após executar o programa de instalação, o seu zip-drive já estará sendo reconhecido pelo sistema operacional e você poderá, então, instalar o zip-tools, uma coletânea de utilitários para o seu zip-drive que vem em um zip-disk. Estes utilitários passam a ser agregados ao sistema para que você execute a manutenção de seu Zip Drive, como, por exemplo, proteger um disco contra escrita. Ao instalar o zip-drive em um micro de um colega ou no micro do trabalho, a instalação não tem mistério: basta executar o programa <i>Guest</i> de acordo com o sistema operacional que há instalado no micro. Este programa é pequeno (está no disquete de instalação do Zip Drive) e permite que o sistema operacional reconheça o Zip Drive.<br><br><center><b>O zip-drive e a sua taxa de transferência</b></center><br>Ao contrário do que muitos afirmam, o Zip Drive não é tão lento assim. Montamos um gráfico comparativo contendo a taxa de transferência nominal de um disco rígido de 2 GB, de um CD-ROM 12x, de um Zip Drive interno SCSI e de um Zip Drive externo que seja conectado à porta paralela. <br><br><br>"
                break
                // <img src="/img/ziptransefer.PNG" width="90%" height="90%" alt="Erro/>"
            case 9:
                adjust()                
                graphic.style.display = "flex"
                titulo.innerHTML = ""
                page1.style.height = "auto"
                content.innerHTML = `Importantíssimo notar que a taxa de transferência do Zip Drive de porta paralela depende exclusivamente da configuração da porta paralela: se ela estiver configurada como Normal (SPP - Single Parallel Port), a sua taxa de transferência será baixíssima. O ideal é configurarmos a porta paralela como EPP (Enhanced Parallel Port) ou ECP (Enhanced Capabilities Port).<br><center>
                </center> <br>Importante notar também que o gráfico compara a taxa de transferência máxima definida pelo fabricante, que nem sempre é atingida.`
                break

            case 10:
                adjust()                
                graphic.style.display = "none"
                //page1.style.height = "auto"
                titulo.innerHTML = ""
                content.innerHTML = `<center><b>Cuidados a se ter em conta na instalação</b></center><br>Os cuidados a se ter em conta quando estivermos a instalar o zip-drive, são: <br><br> •	O Zip Drive externo deve ser ligado antes do micro. Como não há nenhuma chave liga-desliga, basta conectá-lo à tomada<br><br>•	Não se esqueça de ejetar o Zip Disk do drive antes de desligar o micro. Pode ser que você perca dados caso esqueça o disco dentro do drive.<br><br>•	No caso do Zip para porta paralela, não tente acessar o drive enquanto imprime um documento, ou a impressão pode travar. Em alguns casos extremos, o micro inteiro trava.<br><br>•	Neste mesmo caso (e pelo mesmo motivo), muitíssimo cuidado para não tentar imprimir um arquivo que esteja armazenado dentro do Zip drive! Copie o arquivo antes para um diretório-rascunho de seu disco rígido.<br><br>•	Não se esqueça também de retirar o disco de dentro do Zip drive antes de ordenar a impressão de algum documento. <br><br><br>`
                break

            case 11:
                adjust()
                 
                graphic.style.display = "none"
                titulo.innerHTML = "<br>COMO TORNAR O ACESSO AO ZIP-DRIVE MAIS RÁPIDO?"
                content.innerHTML = `•	No caso de um Zip Drive conectado à porta paralela, entre no setup de seu micro e configure a porta paralela para operar no modo ECP (Enhanced Capabilities Port). Para entrar no setup, basta pressionar a tecla <b>[DEL]</b> enquanto o seu micro conta memória. Mude o modo da porta paralela em um menu chamado INTEGRATED PERIPHERALS, PERIPHERAL SETUP ou equivalente, na opção Parallel Port Mode ou Parallel Extended Mode.<br><br>•	Também vale a pena executar o programa Parallel Port Accelarator que é instalado junto com os drivers do Zip Drive.<br><br>•	No caso de um Zip Drive interno, você poderá aumentar o seu desempenho adquirindo uma interface SCSI mais rápida. 
            <br><br><br>            
            `
                break

            case 12:
                adjust()                
                graphic.style.display = "none"
                //page1.style.height = "680px"
                titulo.innerHTML = "<br>REFERÊNCIAS"
                content.innerHTML = `
                <a class="tet" href="https://pt.wikipedia.org/wiki/Zip_drive">Wikipedia/zipdrive</a><br><a class="tet" href="https://knoow.net/ciencinformtelec/informatica/zip-drive/">Knoow.net</a>
                <br>
                <a class="tet" href="https://www.cursosdeinformaticabasica.com.br/zip-drive/">Cursosdeinformáticabásica.com</a>
                <br>                
                <a class="tet" href="https://www.clubedohardware.com.br/artigos/armazenamento/zip-drive-r34182/?nbcpage=2">Clubedohardware.com</a>
                <br>                
                <a class="tet" href="https://startdigital.webnode.com.br/products/o-que-e-o-zip-drive-/">Startdigital.com</a>
                <br>                
                <a class="tet" href="http://ptcomputador.com/Software/data-compression/112417.html">PTcomputador.com</a>
                <br>                
                <a class="tet" href="https://www.infopedia.pt/$zip-drive">Infopedia.com</a>
                <br>                
                <a class="tet" href="https://pt.wikipedia.org/wiki/Iomega">Wikipedia/Iomega</a>
                <br>                
                <a class="tet" href="https://www.iomegastore.com.br/a-empresa">Iomegastore.com</a>
                <br>                
                <a class="tet" href="https://meiobit.com/15067/iomega-ascensao-e-queda-de-uma-lenda/">Meiobit.com</a>
                `
                break

            default:
                navegation1 = 0
                break
        }
    }
}, 100)


button2.addEventListener("click", function () {
    navegation1 += 1
    console.log(wdth)
    if (navegation1 > 0) {
        button1.style.transition = "0.3s"
        button1.style.opacity = "1"
        console.log(`${navegation1}`)
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    } else {
        navegation1 = 0
    }
})

button1.addEventListener("click", function () {
    navegation1 -= 1
    if (navegation1 >= 0 && navegation1 != 0) {
        button1.style.transition = "0.3s"
        button1.style.opacity = "1"
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
        console.log(`${navegation1}`)
    } else {
        button1.style.transition = "0.3s"
        button1.style.opacity = "0.3"
        console.log(`${navegation1}`)
        navegation1 = 0
    }

})