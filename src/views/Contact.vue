<template>
  <div id="container" class="flex-column">
    <div class="flex-column event-form">
      <div id="title-container" class="flex-column">
        <div id="title">Fale-Conosco</div>
        <div class="sub-title">Meios de Contato</div>
        <div class="grid-container">
            <div class="item1">E-mail
                <a href='http://www.unievangelica.edu.br/faleconosco/formulario/'></a>
                <a style='color: #0000ff;' href='http://www.unievangelica.edu.br/faleconosco/formulario/'>
                    <div style="font-size:20px; text-decoration:none; color:black;">
                        <img style=" height:80px; margin-left:2px; margin-right:2px;border:0pt none;" src='../assets/contact/contact_1.jpg'>
                        Formulário de Contato Via Internet &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </a>
            </div>
            <div class="item1">Telefones
                <a href='http://www.unievangelica.edu.br/faleconosco/formulario/'></a>
                <a style='color: #0000ff;' href='http://www.unievangelica.edu.br/faleconosco/formulario/'>
                    <div style="font-size:20px; text-decoration:none; color:black;">
                        <img style=" height:80px; margin-left:2px; margin-right:2px;border:0pt none;" src='../assets/contact/contact_2.jpg'>
                        0800 603 2023 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; (62) 3310-6600 &nbsp;(62) 3307-7402 (Campus Ceres)
                    </div>
                </a>
            </div>
        </div>
        <div class="grid-container">
            <div class="item1">Ouvidoria
                <a style="margin-top:10px;" href='http://www.unievangelica.edu.br/ouvidoria/'></a>
                <a style='color: #0000ff;' href='http://www.unievangelica.edu.br/ouvidoria/'>
                    <div style="font-size:20px; text-decoration:none; color:black; widht:700px;">
                        <img style=" height:80px; margin-left:2px; margin-right:2px;border:0pt none;" src='../assets/contact/contact_4.jpg'>
                        Reclamações, denúncias e sugestões &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </a>
            </div>
            <div class="item1">Fale com o Presidente
                <a href='http://www.unievangelica.edu.br/falecompresidente/'></a>
                <a style='color: #0000ff;' href='http://www.unievangelica.edu.br/falecompresidente/'>
                    <div style="font-size:20px; text-decoration:none; color:black;">
                        <img style=" height:80px; margin-left:2px; margin-right:2px;border:0pt none;" src='../assets/contact/contact_5.png'>
                        Contato direto com o presidente da UniEVANGÉLICA. &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </div>
                </a>
            </div>
        </div>
        <div class="grid-container">
            <div class="item1">Fale com o Reitor
                <a href='http://www.unievangelica.edu.br/reitoria/falecomreitor/'></a>
                <a style='color: #0000ff;' href='http://www.unievangelica.edu.br/reitoria/falecomreitor/'>
                    <div style="font-size:20px; text-decoration:none; color:black;">
                        <img style=" height:80px; margin-left:2px; margin-right:2px;border:0pt none;" src='../assets/contact/contact_6.png'>
                        Contato direto com o reitor da UniEVANGÉLICA .
                    </div>
                </a>
            </div>
            <div class="item1">Assessoria
                <a href='http://www.unievangelica.edu.br/faleconosco/formulario/'></a>
                <a style='color: #0000ff;' href='http://www.unievangelica.edu.br/faleconosco/formulario/'>
                    <div style="font-size:20px; text-decoration:none; color:black;">
                        <img style=" height:80px; margin-left:2px; margin-right:2px;border:0pt none;" src='../assets/contact/contact_7.png'>
                        Quer agendar uma entrevista ou dar sugestões de matérias? 
                    </div>
                </a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>

.grid-container {
  display: grid;
  grid-template-columns: 700px 700px;
  grid-gap: 10px;
  background-color: white;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px 0;
  text-align: center;
  font-size: 30px;
}

.item1 {
  grid-row: 1 / 2;
}

.sub-title {
  color: #989898;
}
.flex-column {
  display: flex;
  flex-direction: column;
}

#container {
  font-family: Arial, sans-serif;
  color: #4442A1;
  font-size: 16px;
  justify-content: left;
  align-items: left;
  background-color: white;
  width: 100vw;
  height: 100vh;
}

.event-form {
  align-items: left;
  background-color: white;
  padding:  4% ;
  border-radius: 10px;
}

#title {
  font-size: 32px;
  margin-bottom: 16px;
}

.sub-title {
  font-size: 15px;
  margin-bottom: 60px;
}

#title-container {
  align-items: left;
  margin-bottom: 38px;
}
#input-container {
}
.input {
  border: 0;
  border-bottom: 1px solid #C7C7C7;
  text-decoration: none;
  outline: none;
  min-width: 280px;
  margin-bottom: 32px;
  padding-bottom: 8px;
  padding-left: 8px;
  font-size: 16px;
  color: #4442A2;
}
.input::placeholder {
  color: #4442A2;
  font-size: 16px;
}
.button-login {
  margin-top: 32px;
  margin-bottom: 32px;
  background-color: #1f2b5f;
  color: white;
  font-size: 26px;
  padding: 16px 64px;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.25), 0 2px 2px rgba(0, 0, 0, 0.25), 0 1px 1px rgba(0, 0, 0, 0.25);
}
.button-login:active {
  background-color: #1f2b5f;
}
#social-media-container {
  margin-top: 32px;
}

.li{
  margin-bottom: 7px;
  margin-top: 7px;
}

.li-event{
  padding:20px;
  margin-bottom: 16px;
  padding-left: 130px;
}
</style>
