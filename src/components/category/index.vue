<template>
  <div>
    <div class="weui-cells__title">稀土分类</div>
    <cell-box>
      <cell title="稀土氧化物" :link="true"></cell>
      <cell title="抛光粉" :link="true"></cell>
      <cell title="磁材" :link="true"></cell>
      <cell title="稀土离岸产品" :link="true"></cell>
      <cell title="稀土" :link="true"></cell>
    </cell-box>
  </div>
</template>
<script>
import { Cell, CellBox } from '@/components/base/cell'
export default {
  name: 'category',
  components: {
    Cell,
    CellBox
  }
}
</script>

