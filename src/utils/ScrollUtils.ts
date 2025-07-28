export function scrollToWithOffset(id: string, offset: number = 100) {
  const element = document.getElementById(id)
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top: y, behavior: 'smooth' })
  }
}
