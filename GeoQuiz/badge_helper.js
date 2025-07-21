// js/common.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://pzyzdmndotuvbvfhxwad.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InB6eXpkbW5kb3R1dmJ2Zmh4d2FkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MDUxNzIsImV4cCI6MjA2MjM4MTE3Mn0.UpltfEmKUgYINeWP4aHPOkYT8cOx6nVi0cdE5bMAjqA';
const sb = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: { persistSession: true, autoRefreshToken: true }
});

document.addEventListener('DOMContentLoaded', () => {
  // Grab every <input> on the page
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('input', e => {
      if (e.target.value.trim().toLowerCase() === 'hugo') {
        console.log(`🎉 You typed “hugo” into`, e.target);
        // …do whatever you need here…
      }
    });
  });
});
