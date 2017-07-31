<template>
  <div>
    <div class="weui-cells__title">稀土分类</div>
    <cell-box>
      <cell title="标题一" :link="true"></cell>
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

