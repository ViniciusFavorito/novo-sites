<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul>
      <li v-for="(aluno, index) in alunos" :key="index" @click="mostrarAluno(aluno)">
        {{ aluno.nome }} - {{ aluno.sobrenome }} <button type="button" class="btn btn-primary">teste</button>
      </li><br/>
    </ul>
    <h2>Hello Sid</h2>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      alunos: [
        { nome: 'sid', sobrenome: 'noiado' },
        { nome: 'sid2', sobrenome: 'noiado2' },
        { nome: 'sid3', sobrenome: 'noiado3' },
      ]
    }
  },
  methods: {
    mostrarAluno: function (aluno) {
      console.log('nome:', aluno.nome)
      console.log('sobrenome:', aluno.sobrenome)
    }
  },
  props: {
    msg: String,
    nome: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
