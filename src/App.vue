<template>

	<nav>
		<div class="navbar">
			<router-link to="/">Home</router-link>
		</div>
		<!-- <div class="navbar">
			<router-link to="./components/Suppliers/Supplier">Supplier</router-link>
		</div> -->
		<div class="navbar">
			<router-link to="/suppliers">List </router-link>
		</div>
		<!-- <div class="navbar">
			<router-link to="./components/Suppliers/SuppliersMap">Map : </router-link>
		</div> -->

	</nav>

	<img src="./assets/spiruline.jpg" alt="Image de spiruline." />
	
	<router-view>
	</router-view>
		
</template>

<script>
// import SuppliersList from './components/SuppliersList.vue'
// import SuppliersMap from './components/SuppliersMap.vue'
export default {
  name: 'App',
  // components: {SuppliersList, SuppliersMap},
//   data() {
//       data: "data"
//   },
  methods: {
    onSupplierClick(){
        this.clickSupplier = alert("click on supplier");
    },
    onSuppliersListClick(){
        this.clickSupplier = alert("click on supplierslist");
    },
    onMapClick (){
        this.clickSupplier = alert("click on suppliersMapClick");
    }
  }
}
</script>


<style>

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
}

img {
  margin-top: 0.1%;
  width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
	Color: rgb(26, 80, 62);
}

nav {
	background-color: rgb(26, 80, 62);
  Padding: 2%;
  margin-top: -6.8%;
  width: 100%;
  height: auto;
  font-size: 30px;
  display: flex;
  position: fixed;
}

.navbar {
  padding: 0 4%; 
  padding-top: 1%;
  /* todo color white */
  display: inline-block;
  justify-content: space-around;
  text-align: baseline;
}

.navbar:visited {
  color:rgb(205, 250, 221);
}

.navbar:hover {
  color:rgb(205, 250, 221);
  font-size: 30px;
}

@media (max-width: 700px) {
  nav { 
    display: block;
    flex-direction: column;
  }
}

@media (max-width: 922px) {
  nav {
    margin-top: -10%;
    display: block;
    flex-direction: column;
  }
}

@media (max-width: 600px) {
  nav {
    margin-top: -15%;
    display: block;
    flex-direction: column;
  }
}

</style>
