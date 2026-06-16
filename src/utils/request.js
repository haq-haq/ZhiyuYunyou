const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms))

export async function request(data, ms = 300) {
  await delay(ms)
  return data
}

export function showToast(message, duration = 2500) {
  const existing = document.querySelector('.toast')
  if (existing) existing.remove()

  const toast = document.createElement('div')
  toast.className = 'toast'
  toast.textContent = message
  document.body.appendChild(toast)

  setTimeout(() => {
    toast.remove()
  }, duration)
}
