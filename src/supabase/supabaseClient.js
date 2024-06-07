import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

const supabase = createClient(
  "https://pqecexeonrfmxhmcyfzu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZWNleGVvbnJmbXhobWN5Znp1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNDg5MzYsImV4cCI6MjAzMjgyNDkzNn0.rmQRo3X-mDy2zuKjM5N3ryiu4q7r7soST3vjnyFKvIA",
);

export default supabase;
