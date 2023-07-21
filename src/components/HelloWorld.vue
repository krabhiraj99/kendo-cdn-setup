
<template>
  <div>
    <kendo-grid :data-items="gridData" :columns="gridColumns">
      <template v-slot:ageTemp="{ props }">
        <td>
          {{ props.dataItem }}
        </td>
      </template>
    </kendo-grid>
  </div>
</template>

<script>
export default {
  name: "demo-table",
  components: {
    "kendo-grid": window.KendoVueGrid.Grid,
  },
  data() {
    return {
      gridData: [
        { id: 1, name: "John Doe", age: 30 },
        { id: 2, name: "Jane Smith", age: 25 },
        { id: 3, name: "Bob Johnson", age: 40 },
      ],
      gridColumns: [
        { field: "id",title: "ID" },
        { field: "age", title: "Age", cell: "ageTemp" },
        { field: "name", title: "Name" },
      ],
      
    };
  },
};
</script>
