<template>
    <div class='divwidth'>
        <footer>
            <nav class='nav container '>
            <div class="row">
                <div class="col-4 d-flex align-items-center">
                    <img src="../assets/logo-uni.png" class='logo_inst'>
                </div>
                <div class="col-4 space">
                    <h4>Navegação</h4>

                    <div class="nav-list">
                        <a class=" nav-item" href='http://v2.unievangelica.edu.br/engenharia-de-software/' >Sobre o curso</a>
                       <!-- <a class=" nav-item" >Mercado de trabalho</a>
                        <a class=" nav-item" >Matriz Currícular</a>-->
                        <a class=" nav-item" href='http://periodicos.unievangelica.edu.br/portal/' >Internacionalização</a>
                        <!--<a class=" nav-item" >Corpo Docente</a>
                        <a class=" nav-item" >Notícias</a>-->
                        <a class=" nav-item" href='http://periodicos.unievangelica.edu.br/portal/' >Revista do Curso</a>
                        <a class=" nav-item" href='http://www.unievangelica.edu.br/unifotos'>UniFotos</a>
                        <a class=' nav-item' href="http://www.unievangelica.edu.br/vestibular/2019-2/A/regular/">Fale Conosco</a>
                        <a class=" nav-item" >Comunidade</a><!--Fazer com  fa fa icons-->
                        
                    </div>
                </div>
                <div class="col-4">
                    <h4>Contato</h4>

                    <p>
                        Av. Universitária Km 3,5<br>
                        Cidade Universitária - Anápolis/GO<br>
                        75083-515						
                    </p>

                    <p>
                        (62) 3310-6658<br>
                        (62) 3310-6658
                    </p>

                    <h5>Horário de Funcionamento:</h5>
                    <p>
                        Segunda à Quinta: 13:00 - 23:00<br>
                        Sexta: 14:00 - 22:00
                    </p>

                </div>
            </div>
            <div class="row" style='border-top: 1px solid #111b3a;'>
                <div class="footter">
                    <p class="copyright">© Copyright UniEVANGÉLICA 1947 - 2019</p>
                </div>
            </div>
            </nav>
        </footer>
    </div>
</template>

<script>
export default {
    name:'Footer'
}
</script>

<style scoped>

    .divwidth{
        width: 100%;
        background-color: #07132b;
    }

    .nav{
        display: flex;
        flex-direction: column;
        background-color: #07132B;
        color: white;
    }

    .logo_inst{
        height: 50px;
        padding-top: 15px;
        padding-left: 60px;
    }

    footer .nav-list a{
        display: block;
        color: #ffffff;
    }

    .col-4,.col-12{
        position: relative;
        min-height: 1px;
        padding-right: 15px;
    }

    .space{
        margin-left: 200px;
        margin-right: 200px;
    }

    .d-flex{
        display: -ms-flexbox !important;
        display: flex !important;
    }

    .align-items-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }

    

    footer .copyright {
        font-size: smaller;
        padding: 30px 0px;
        margin-left: 520px;
    }

    .container {
        margin-right: auto;
        margin-left: auto;
        padding-right: 15px;
        padding-left: 15px;
        width: 100%;
    }

    .row {
        display: -ms-flexbox;
        display: flex;
        -ms-flex-wrap: wrap;
        flex-wrap: wrap;
        margin-right: -15px;
        margin-left: -15px;
        text-align: center
    }

    .footer{
        width: 100%;
        text-align: center
    }

    .nav-item{
        text-decoration: none;
        color: white;
        padding:8px;
    }

</style>
