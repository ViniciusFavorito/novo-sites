<template>
  <div class='divwidth'>
    <nav class='nav'>

      <div>
        <img src='../assets/logo-uni.png' class='logo_inst'>
        <div class='botao' style="margin-right:60px;"><a href="http://www.unievangelica.edu.br/vestibular/2019-2/A/regular/">Vestibular</a></div>
        <div class='botao'>
          <router-link to="/login">
            Acesso
          </router-link>
        </div>
      </div>

      <div class='sec_menu'>
        <img src='../assets/logo-eng.png' class='logo_inst_eng'>
          <div class='botao_menu'  style="margin-right:71px;" >
            Fale Conosco
          </div>
          <div class='botao_menu'>
            Comunidade
          </div>
          <div class='botao_menu'>
            Galeria SITES
          </div>
          <div class='botao_menu'>
            <router-link to="/Eventos">
              Eventos
            </router-link>
          </div>
          <div class='botao_menu'>
              Inicio
          </div>
      </div>

    </nav>
    <slot>


    </slot>
    <Footer/>
  </div>
</template>

<script>
import Footer from './Footer'
import SocialMedia from './../components/SocialMedia'
export default {
  name: 'Template',
  components: {
    Footer
  }
}
</script>

<style scoped>
  .divwidth{
    width: 100%;
  }

  .nav{
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #07132B;
    color: white;
  }

  .botao{
  float: right;
  background-color: #07132B;
  border: none;
  color: white;
  height: 10px;
  padding: 20px;
  text-align: left;
  text-decoration: none;
  display: inline-block;
  font-size: 15px;
  margin: 2px 1px;
  cursor: pointer;
  }

  .logo_inst{
    height: 35px;
    padding-top: 15px;
    padding-left: 60px;
  }

  .logo_inst_eng{
    float:left;
    height: 70px;
    padding-top: 20px;
    padding-left: 60px;
  }

  .sec_menu{
    width: 100%;
    height: 125px;
    background-color: #1F2B50;
    color: black;
  }

  .botao_menu{
    float: right;
    margin-left: 100px;
    background-color: #1F2B50;
    border: none;
    color: white;
    height: 10px;
    padding: 20px;
    padding-top: 46px;
    text-align: left;
    font-size: 19px;
    margin:4px 2px;
    cursor: pointer;
  }

  .botao > a {
    text-decoration: none;
    color: white;
  }

  .botao_menu > a{
    text-decoration: none;
    color: white;
  }
  
</style>
  