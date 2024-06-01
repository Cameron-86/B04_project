import { createClient } from "@supabase/supabase-js";

// 1) project url
const SUPABASE_PROJECT_URL = "https://supisawnzdtvtvkxdkpd.supabase.co";

// 2) anon key
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1cGlzYXduemR0dnR2a3hka3BkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTcyNjQ2ODIsImV4cCI6MjAzMjg0MDY4Mn0.FP2KDJDSVZeU2o8dcL3542PMVuUbHhFgKbo9LiMtE3A";

const supabase = createClient(SUPABASE_PROJECT_URL, SUPABASE_ANON_KEY);
export default supabase;
