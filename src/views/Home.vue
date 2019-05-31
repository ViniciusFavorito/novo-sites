<template>
  <!-- <div class="home"> -->
    <div class="container destaque">
	  <div class="row">

        <div class="col-7">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/sites_xx.jpg" alt="First slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/banner_02.jpg" alt="Second slide">
                    </div>
                    <div class="carousel-item">
                        <img class="d-block w-100" src="../assets/banner_03.jpg" alt="Third slide">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>

        <!-- ULTIMA NOTICIAS -->
        <div class="col-5 content-segment">

            <h3>Notícias</h3>
            
            <ul class="list-unstyled news-list list-group">
                <li class="media">
                    <a href="https://www.instagram.com/p/ByDt9efDySc/" class="list-group-item list-group-item-action d-flex">
                        <img class="d-flex mr-3" src="../assets/uni-calculo.jpg" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1">Vencedor do Uni-Calculo</h5>
                            Alunos do 1º período vence competição.
                            <br/>
                            <small>2 days ago</small>
                        </div>
                    </a>
                </li>
                <li class="media">
                    <a href="https://www.instagram.com/p/Bx-e-HJDYtG/" class="list-group-item list-group-item-action d-flex">
                        <img class="d-flex mr-3" src="../assets/minicurso.jpg" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1">Confira nossos minicursos dessa Edição</h5>
                            <br/>
                            <small>3 days ago</small>
                        </div>
                    </a>
                </li>
            </ul>
        </div>


      </div>

      <div class="row diferenciais">
        <div class="col-12">
            <h2 class="align-center">DIFERENCIAIS DO CURSO</h2>

            <div class="row">
                <div class="col-4">
                    <h4>Fábrica de Tecnologias Turing</h4>
                    <img id="logomarca" src="../assets/ftt.jpg" class="d-inline-block align-top" alt="">
                    <p>A Fábrica de Tecnologias Turing (FTT), unidade dos cursos superiores de computação da UniEVANGÉLICA é um ambiente onde os alunos têm a oportunidade de vivenciar na prática tudo o que aprendem em sala de aula, por meio de projetos reais de desenvolvimento de tecnologias..</p>
                </div>
                <div class="col-4">
                    <h4>Mercado de Trabalho</h4>
                    <img id="logomarca" src="../assets/trabs.jpg" class="d-inline-block align-top" alt="">
                    <p> Pessoas e organizações, por meio de diversas tecnologias, buscam e fazem uso de informação na execução de diferentes atividades cotidianas e profissionais. Nesse contexto, a presença de softwares na sociedade é, cada vez mais, necessária. O processo de produção e manutenção desses sistemas requer profissionais focados em melhoria contínua, comprometidos em gerar produtos de qualidade, produzidos a custo reduzido, confiáveis e com alta produtividade.

                    </p><p> Deste cenário, resulta a urgência por Engenheiros de Software qualificados e conscientes dos aspectos humanos, éticos, legais e ambientais. Considerando as demandas local, regional e nacional, o curso de Engenharia de Software do Centro Universitário de Anápolis, busca contribuir na formação de profissionais que estarão aptos a atuar em todo o processo de produção de sistemas de software, seja em instituições de Tecnologia da Informação e Comunicação, em empresas/indústrias que fazem uso dessas tecnologias e, ainda, no meio acadêmico.</p>
                </div>
                <div class="col-4">
                    <h4>Atividades Complementares</h4>
                    <img id="logomarca" style="height=90px;" src="../assets/ativ_comp.png" class="d-inline-block align-top" alt="">
                    <p> As atividades complementares são componentes curriculares que objetivam, principalmente, enriquecer o perfil do egresso com ações que privilegiem aspectos diversos da sua formação, dentre elas:

                        <li>cursos de formação profissional, experiências de trabalho ou estágios não obrigatórios</li>
                        <li>extensão universitária junto à comunidade</li>
                        <li>pesquisa, iniciação científica e participação em eventos técnico-científicos, publicações científicas
                        ensino e programas de monitoria</li>
                        <li>inovação, participação em startups, incubadoras ou outros mecanismos.</li></p>
                </div>
            </div>

        </div>
      </div>


    </div>
  <!-- </div> -->
</template>

<script>


// @ is an alias to /src
import HelloWorld from './../components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>

<style scoped>

.media-body {
  -ms-flex: 1;
      flex: 1;
      text-decoration: none;
      color:black;
}

.mr-3 {
  margin-right: 1rem !important;
  text-decoration: none;
  color: black;
}

.d-flex {
  display: -ms-flexbox !important;
  display: flex !important;
}

.list-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
}
.list-unstyled {
    padding-left: 0;
    list-style: none;
}
dl, ol, ul {
    margin-top: 0;
    margin-bottom: 1rem;
}
*, ::after, ::before {
    box-sizing: inherit;
}

.media {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
}

.news-list .list-group-item {
    height: 125px;
    padding: .75rem .75rem;
    border: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    margin-bottom: -1px;
    border-top: 1px solid rgba(0,0,0,.125);
    border-bottom: 1px solid rgba(0,0,0,.125);
}

.news-list .list-group-item:first-child {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
}

.mb-1 {
  margin-bottom: 0.25rem !important;
  text-decoration: none;
  color :black;
}


.mt-0 {
  margin-top: 0 !important;
    text-decoration: none;
  color :black;
}

.align-top {
  vertical-align: top !important;
}

.d-inline-block {
  display: inline-block !important;
}

    #h4{
        margin-bottom: .5rem;
        font-family: inherit;
        font-weight: 500;
        line-height: 1.1;
        color: inherit;
    }

.align-center {
    text-align: center;
}

    .col-12 {
        -ms-flex: 0 0 100%;
        flex: 0 0 100%;
        max-width: 100%;
            position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
}

    .col-4 {
        -ms-flex: 0 0 33.333333%;
        flex: 0 0 33.333333%;
        max-width: 33.333333%;
        position: relative;
    width: 100%;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    }

    .w-100 {
        width: 100%!important;
    }
    
    .d-block {
        display: block!important;
    }
    img {
        vertical-align: middle;
        border-style: none;
    }
    
    .carousel {
      position: relative;
      margin-left: 15px;
      margin-right: 40px;
    }


    .carousel-inner {
      position: relative;
      width: 100%;
      overflow: hidden;
    }

    .carousel-item {
      position: relative;
      display: none;
      -ms-flex-align: center;
          align-items: center;
      width: 100%;
      transition: -webkit-transform 0.6s ease;
      transition: transform 0.6s ease;
      transition: transform 0.6s ease, -webkit-transform 0.6s ease;
      -webkit-backface-visibility: hidden;
              backface-visibility: hidden;
      -webkit-perspective: 1000px;
              perspective: 1000px;
    }

    .carousel-item.active,
    .carousel-item-next,
    .carousel-item-prev {
      display: block;
    }

    .carousel-item-next,
    .carousel-item-prev {
      position: absolute;
      top: 0;
    }

    .carousel .carousel-item img{
        height: 420px;
        background-color: black;
        margin-right:20px;
    }


    .content-segment{
        margin-top: 15px;
    }

    /* NEWS */
    .news-list .media img{
        width: 140px;
        height: 80px;
    }

    .news-list .list-group-item {
        height: 125px;
        padding: .75rem .75rem;
        border: 0;
        border-bottom-right-radius: 0;
        border-bottom-left-radius: 0;
        margin-bottom: -1px;
        border-top: 1px solid rgba(0,0,0,.125);
        border-bottom: 1px solid rgba(0,0,0,.125);
    }
        .news-list .list-group-item:first-child {
            border-top-left-radius: 0;
            border-top-right-radius: 0;
        }
    .news-list .list-group-item h5{
        font-size: 1.15rem;
    }




    .diferenciais, .destaque{
        margin-top: 40px;
        margin-bottom: 40px;
    }
    .diferenciais h2{
        margin-bottom: 20px;
    }
    .diferenciais p{
        text-align: justify;
    }
    .diferenciais img{
        width: 100%;

    }

    .col-7 {
      -ms-flex: 0 0 58.333333%;
          flex: 0 0 58.333333%;
      max-width: 58.333333%;
    }
      .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
    }


           .container {
        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;
        width: 100%;
    }
    .diferenciais, .destaque{
    margin-top: 40px;
    margin-bottom: 40px;
    }
    .diferenciais h2{
        margin-bottom: 20px;
    }
    .diferenciais p{
        text-align: justify;
    }
    .diferenciais img{
        width: 100%;

    }


</style>
