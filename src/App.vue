<template>

	<nav>
		<div class="navbar">
			<router-link class="nav-item" to="/">Home</router-link>
		</div>
		<!-- <div class="navbar">
			<router-link to="./components/Suppliers/Supplier">Supplier</router-link>
		</div> -->
		<div class="navbar">
			<router-link class="nav-item" to="/suppliers">Suppliers List</router-link>
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
}

h1 {
	Color: rgb(26, 80, 62);
}

nav {
	background-color: rgb(26, 80, 62);
  width: 100%;
  height: 70px;
  font-size: 30px;
  display: flex;
  position: fixed;
}

.navbar {
  /* todo color white */
  display: inline-block;
  justify-content: space-around;
  align-items:center;
}

.nav-item:visited {
  color:rgb(205, 250, 221);
}

.nav-item:hover {
  color:rgb(205, 250, 221);
  font-size: 30px;
}

.nav-item {
  color: white;
    line-height: 70px;
    margin: 0 20px;
}

</style>
