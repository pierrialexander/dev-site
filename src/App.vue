<template>
  <div id="app">
    <HeaderTopo />
    <router-view path="$router.key" />
    <FooterSite />
  </div>
</template>


<script>
import './styles/global.css';
import HeaderTopo from './components/Header';
import FooterSite from './components/Footer';

export default {
  name: 'App',
  components: {
    HeaderTopo,
    FooterSite
  }
}
</script>


