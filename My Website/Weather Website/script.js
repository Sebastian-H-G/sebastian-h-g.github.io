document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.container');
  const search = document.querySelector('.search-box button');
  const weatherBox = document.querySelector('.weather-box');
  const weatherDetails = document.querySelector('.weather-details');
  const navLinks = document.querySelectorAll('.nav-links a');
  const sections = document.querySelectorAll('.section');

  search.addEventListener('click', () => {
    const APIKey = '261e6531d2d57e32d6db201bdbffbb7b';
    const city = document.querySelector('.search-box input').value;

    if (city === '') return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`)
      .then(response => response.json())
      .then(json => {
        if (json.cod === '404') {
          alert('City not found');
          return;
        }

        const image = document.querySelector('.weather-box img');
        const temperature = document.querySelector('.weather-box .temperature');
        const description = document.querySelector('.weather-box .description');
        const humidity = document.querySelector('.weather-details .humidity span');
        const wind = document.querySelector('.weather-details .wind span');

        switch (json.weather[0].main) {
          case 'Clear':
            image.src = 'https://img.icons8.com/?size=512&id=9gm09wfa62CF&format=png';
            break;

          case 'Rain':
            image.src = 'https://cdn-icons-png.flaticon.com/512/3351/3351979.png';
            break;

          case 'Snow':
            image.src = 'https://cdn-icons-png.flaticon.com/512/2315/2315309.png';
            break;

          case 'Clouds':
            image.src = 'https://cdn-icons-png.flaticon.com/512/414/414927.png';
            break;

          case 'Mist':
          case 'Haze':
            image.src = 'https://img.freepik.com/free-photo/colorful-sky-after-sunset_661209-461.jpg?t=st=1718043772~exp=1718047372~hmac=334f7bb4535b0ad4111092701d9341e5a31b781496dab8efe207cdb262386aa0&w=900';
            break;

          default:
            image.src = 'https://img.freepik.com/free-photo/colorful-sky-after-sunset_661209-461.jpg?t=st=1718043772~exp=1718047372~hmac=334f7bb4535b0ad4111092701d9341e5a31b781496dab8efe207cdb262386aa0&w=900';
            break;
        }

        temperature.innerHTML = `${Math.round(json.main.temp)}<span>°C</span>`;
        description.innerHTML = `${json.weather[0].description}`;
        humidity.innerHTML = `${json.main.humidity}%`;
        wind.innerHTML = `${Math.round(json.wind.speed)} Km/h`;

        weatherBox.style.display = '';
        weatherDetails.style.display = '';
      })
      .catch(err => console.error('Error fetching the weather data:', err));
  });

  navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();

      const targetSection = link.getAttribute('data-section');

      sections.forEach(section => {
        if (section.id === targetSection) {
          section.style.display = 'flex';
        } else {
          section.style.display = 'none';
        }
      });
    });
  });
});
