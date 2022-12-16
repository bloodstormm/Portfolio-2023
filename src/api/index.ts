import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://ujwijhbochodzrfzcnjp.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqd2lqaGJvY2hvZHpyZnpjbmpwIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzExOTY3NTcsImV4cCI6MTk4Njc3Mjc1N30.8y285J9kUnTuTzYKOZruy_plgBHl1e-oJITD8Co-qNI"
);

export default supabase;
