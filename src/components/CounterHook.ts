import { ref } from 'vue'
import CounterView, { type CounterViewProps } from './CounterView.vue'

const CounterHook = (): CounterViewProps => {
  const count = ref(0)
  const increaseCount = () => {
    count.value++
  }
  const title = 'test title from hook'

  return {
    count,
    increaseCount,
    title
  }
}

export default CounterHook
