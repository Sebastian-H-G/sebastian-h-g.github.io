import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://pzyzdmndotuvbvfhxwad.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA');

async function fillCountries() {
  const res = await fetch('https://restcountries.com/v3.1/all');
  const countries = await res.json();

  for (const c of countries) {
    const data = {
      name: c.name.common,
      official_name: c.name.official,
      capital: c.capital?.[0] ?? null,
      continent: c.continents?.[0] ?? null,
      subregion: c.subregion ?? null,
      area_sq_km: c.area ?? null,
      latitude: c.latlng?.[0] ?? null,
      longitude: c.latlng?.[1] ?? null,
      borders: c.borders ?? null,
      official_languages: c.languages ? Object.values(c.languages) : null,
      population: c.population ?? null,
      timezone: c.timezones ?? null,
      currency_name: c.currencies ? Object.values(c.currencies)[0]?.name : null,
      currency_code: c.currencies ? Object.keys(c.currencies)[0] : null,
      gdp_usd: null, // Fill separately from World Bank or similar
      government_type: null, // Not in REST Countries, add manually or another source
      independence_date: null, // Not in REST Countries
      independent_from: null,  // Not in REST Countries
      un_member: c.unMember ?? null,
      nato_member: false, // fill manually or via extra logic
      eu_member: ["AUT","BEL","BGR","HRV","CYP","CZE","DNK","EST","FIN","FRA","DEU","GRC","HUN","IRL","ITA","LVA","LTU","LUX","MLT","NLD","POL","PRT","ROU","SVK","SVN","ESP","SWE"].includes(c.cca3),
      domain: c.tld?.[0] ?? null,
      calling_code: c.idd?.root ? `${c.idd.root}${c.idd.suffixes?.[0]}` : null,
      driving_side: c.car?.side ?? null,
    };

    await supabase.from('countries').insert(data);
  }

  console.log('Done inserting!');
}

fillCountries();
