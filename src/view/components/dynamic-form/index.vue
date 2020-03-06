<template>
  <div>
    <Card>
      <demo1></demo1>
    </Card>
    <Card style="margin-top: 20px">
      <demo2></demo2>
    </Card>
  </div>
</template>

<script>
import demo1 from './demo-1'
import demo2 from './demo-2'
export default {
  name: 'index',
  components: {
    demo1,
    demo2
  }
}
</script>
