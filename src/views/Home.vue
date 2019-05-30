<template>
  <!-- <div class="home"> -->
    <div class="container destaque">
	  <div class="row">

        <div class="col-7">

            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img class="d-block w-100" src="../assets/banner_01.jpg" alt="First slide">
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
                    <a href="#" class="list-group-item list-group-item-action d-flex">
                        <img class="d-flex mr-3" src="../assets/news/visita_congresso.jpg" alt="Generic placeholder image">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1">Visita ao Congresso Nacional</h5>
                            Alunos dos 7º período visitam o Congresso Nacional.
                            <br/>
                            <small>3 days ago</small>
                        </div>
                    </a>
                </li>
                <li class="media">
                    <a href="#" class="list-group-item list-group-item-action d-flex">
                        <div class="media-body">
                            <h5 class="mt-0 mb-1">Visita ao Congresso Nacional</h5>
                            Alunos dos 7º período visitam o Congresso Nacional.
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
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                <div class="col-4">
                    <h4>Mercado de Trabalho</h4>
                    <img id="logomarca" src="../assets/ftt.jpg" class="d-inline-block align-top" alt="">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
                </div>
                <div class="col-4">
                    <h4>Projetos e Parcerias</h4>
                    <img id="logomarca" src="../assets/ftt.jpg" class="d-inline-block align-top" alt="">
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.</p>
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
