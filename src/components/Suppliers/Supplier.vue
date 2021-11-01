<template>
  <div class="displaySupplier">

    <h2>{{ name }}</h2>

    <h3 v-bind:class="[status ? 'isActive' : 'notActive']">Available in stock? {{ status ? "Yes" :  "No" }}</h3>
    <h5>
		Date of last stocktaking : {{ timeFormat }}
	</h5>

  </div>
</template>

<script>

    import { format } from 'timeago.js';

    export default {
        name: 'Supplier',

        props: [
            "id", "name", "date", "status"
        ],

		computed: {
			timeFormat() {
				return format(this.date)
			}
		}
	}

</script>

<style scoped>

.displaySupplier {
    background: rgb(205, 250, 221);

}

.notActive {
	background: rgba(226, 195, 146, 0.712);
}

.isActive {
    background: rgb(205, 250, 221);
}


h3, h2 {
  color: rgb(26, 80, 62);
}

</style>
