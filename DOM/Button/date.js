const p = document.querySelector('.last-changes')



export const updateDate = () => {
  const currDate = new Date().toLocaleString('uk-UA', {
    timeZone: 'Europe/Kiev',
  });
  p.textContent = `Last changed ${currDate}`;
  localStorage.setItem('lastChanged', p.textContent);
};