import type { Database } from "@/shared/api";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_PUBLISHABLE_KEY;

export const createSupabaseClient = async () => {
   return createClient<Database>(supabaseUrl!, supabaseKey!);
};
