<template>
    <div class='divwidth'>
        <footer>
            <nav class='nav container '>
            <div class="row">
                <div class="col-4 d-flex align-items-center">
                    <img src="../assets/logo-uni.png" class='logo_inst'>
                </div>
                <div class="col-4">
                    <h4>Navegação</h4>

                    <div class="nav-list">
                        <a class="nav-item" href="#">Sobre o curso</a>
                        <a class="nav-item" href="#">Mercado de trabalho</a>
                        <a class="nav-item" href="#">Diferenciais</a>
                        <a class="nav-item" href="#">Matriz Currícular</a>
                        <a class="nav-item" href="#">Coordenação</a>
                        <a class="nav-item" href="#">Corpo Docente</a>
                        <a class="nav-item" href="#">Notícias</a>
                        <a class="nav-item" href="#">Eventos Acadêmicos</a>
                        <a class="nav-item" href="#">Quadro de Vagas</a>
                        <a class="nav-item" href="#">Comunidade</a>
                        <a class="nav-item" href="#">Fale Conosco</a>
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
            <div class="row">
                <div class="col-12">
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
        width: 100%;
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
        width: 100%;
        min-height: 1px;
        padding-right: 15px;
        padding-left: 15px;
    }

    .d-flex{
        display: -ms-flexbox !important;
        display: flex !important;
    }

    .align-items-center {
        -ms-flex-align: center !important;
        align-items: center !important;
    }

    footer .copyright{
        text-align: center;
        margin-top: 15px;
        padding: 10px 0 0 0;
        border-top: 1px solid #111b3a;
    }

    footer .copyright {
        font-size: smaller;
        padding: 30px 0px
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
    }

</style>
