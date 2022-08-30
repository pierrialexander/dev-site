<template>
  <div id="app">
    <HeaderTopo />
    <HomeSite />
    <FooterSite />
  </div>
</template>


<script>
import './styles/global.css';
import HeaderTopo from './components/Header';
import HomeSite from './pages/Home';
import FooterSite from './components/Footer';

export default {
  name: 'App',
  components: {
    HeaderTopo,
    HomeSite,
    FooterSite
  }
}
</script>


