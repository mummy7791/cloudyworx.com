document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('subscribedForm');
  if (!form) {
    console.error('subscribedForm not found');
    return;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const subs = JSON.parse(localStorage.getItem('cw_subscribers')) || [];
    subs.push({
      name: form.name.value,
      email: form.email.value,
      subscribedAt: new Date().toISOString(),
    });
    localStorage.setItem('cw_subscribers', JSON.stringify(subs));

    // ✅ Pick one based on your actual file name
    // window.location.href = 'subscribed.html';
    window.location.href = 'subscribed.html'; // if your file is subscribe.html
  });
});
