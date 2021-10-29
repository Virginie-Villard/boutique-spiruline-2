<template>
	<div>
		<div>
			<router-link to="/">Home</router-link>
		</div>
		<!-- <div>
			<router-link to="./components/Suppliers/Supplier">Supplier</router-link>
		</div> -->
		<div>
			<router-link to="/suppliers">List </router-link>
		</div>
		<!-- <div>
			<router-link to="./components/Suppliers/SuppliersMap">Map : </router-link>
		</div> -->
		
		<router-view>
		</router-view>
	</div>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
