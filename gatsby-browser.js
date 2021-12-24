export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Le site a été mis à jour. ` +
      `Voulez-vous rafraîchir la page ?`
  )

  if (answer === true) {
    window.location.reload()
  }
}
