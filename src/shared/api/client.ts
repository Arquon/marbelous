import type { Database } from "@/shared/api";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY;

export const createSupabaseClient = async () => {
   return createClient<Database>(supabaseUrl!, supabaseSecretKey!);
};
