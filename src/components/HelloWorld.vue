
<template>
  <div>
    <k-dropdownlist
        :data-items='sports'
        :default-item="'Select sport ...'"
    ></k-dropdownlist>
    <k-input :style="{ width: '230px' }" :label="'First name'"></k-input>
      <k-grid
                 :data-items="items"
                 :skip= "skip"
                 :take="take"
                 :total="total"
                 :pageable="pageable"
                 :page-size="pageSize"
                 v-on:pagechange="pageChangeHandler"
                 :sortable="true"
                  :sort="sort"
                  @sortchange="sortChangeHandler"
                 :columns = "columns">
                 <template v-slot:pdt="{ props }">
                    <td>
                      {{ props.dataItem }}
                    </td>
                </template>
      </k-grid>
      
  </div>
</template>

<script>
import { orderBy } from '@progress/kendo-data-query';
  export default{
    // components: {
    //   'k-grid': window.KendoVueGrid.Grid,
    //   'k-dropdownlist': window.KendoVueDropdowns.DropDownList,
    //   'k-input':window.KendoVueInputs.Input,
    // },
    data(){
      return {
      skip: 0,
      take: 10,
      products: [],
      sort: [],
      pageSize: 10,
      pageable: {
        buttonCount: 5,
        info: true,
        type: 'numeric',
        pageSizes: true,
        previousNext: true
      },
      columns: [
        { field: 'ProductID'},
        { field: 'ProductName', title: 'Product Name', cell:"pdt" },
        { field: 'UnitPrice', title: 'Unit Price' }
      ],
      sports: [ 'Basketball', 'Football', 'Tennis', 'Volleyball' ],
      selectedFruit: null,
      }
    },
    computed: {
      items: {
        get: function() {
          return orderBy(this.products.slice(this.skip, this.take + this.skip),this.sort);
        }
      },
      total () {
        return this.products ? this.products.length : 0;
      }
    },
    methods: {
      
      pageChangeHandler: function(event) {
        this.skip = event.page.skip;
        this.take = event.page.take;
      },
      sortChangeHandler(e){
        this.sort = e.sort;
      },
      createRandomData(count) {
        const productNames = ['Chai', 'Chang', 'Syrup', 'Apple', 'Orange', 'Banana', 'Lemon', 'Pineapple', 'Tea', 'Milk'];
        const unitPrices = [12.5, 10.1, 5.3, 7, 22.53, 16.22, 20, 50, 100, 120]

        return Array(count).fill({}).map((_, idx) => ({
          ProductID: idx + 1,
          ProductName: productNames[Math.floor(Math.random() * productNames.length)],
          UnitPrice: unitPrices[Math.floor(Math.random() * unitPrices.length)]
        }));
      }
    },
    mounted() {
      this.products = this.createRandomData(1000);
    }
  }
</script>