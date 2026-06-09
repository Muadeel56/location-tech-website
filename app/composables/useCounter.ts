/**
 * Animated stat counter — counts from 0 → target over duration ms.
 */
export function useCounter(
  target: MaybeRef<number>,
  options: { duration?: number; suffix?: string } = {},
) {
  const { duration = 2000, suffix = '' } = options
  const count = ref(0)
  const isRunning = ref(false)
  const hasStarted = ref(false)

  const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)

  const start = () => {
    if (hasStarted.value) return
    hasStarted.value = true
    isRunning.value = true

    const targetValue = toValue(target)
    let startTime: number | null = null

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      count.value = Math.round(easeOutCubic(progress) * targetValue)
      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        count.value = targetValue
        isRunning.value = false
      }
    }

    requestAnimationFrame(step)
  }

  const display = computed(() => `${count.value}${suffix}`)

  return { count, display, isRunning, hasStarted, start }
}
