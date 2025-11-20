<script setup>
import Photo from "./Photo.vue";
import Badge from "./Badge.vue";

let {tableColor} = defineProps({
  columns: {
    type: Array,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  fields: {
    type: Array,
    required: true
  },
  tableColor: {
    type: String,
    required: false,
    default: "success"
  }
});

const TableClasses = [
  "table",
  "table-striped",
  "table-striped-columns",
  "table-responsive",
  "table-hover",
  `table-${tableColor}`
];

</script>

<template>
  <table :class="TableClasses">
    <thead>
    <tr>
      <th v-for="column in columns">{{ column }}</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="item in items">
      <td v-for="field in fields">
        <span v-if="field.type !== 'Photo' && !field.ui">{{ item[field.name] }}</span>
        <Photo v-if="field.type === 'Photo'"
               alt="Employee's Photo"
               :value="item[field.name]"
               :displayOnly="true"
               :id="id"></Photo>
        <Badge v-if="field.ui && field.ui === 'Badge'"
               :color="field.color"
               :value="item[field.name]"
               :displayOnly="true"></Badge>
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>

</style>