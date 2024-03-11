import { createClient } from "@supabase/supabase-js";

const supabase = createClient("https://gljdznvvkvgounrfgayv.supabase.co", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsamR6bnZ2a3Znb3VucmZnYXl2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3NDE0NzcsImV4cCI6MjAxMDMxNzQ3N30.nU47ZC0DqMv275qAYPiEmLkGDDvqDPFF4WQwi09Csj8");

//function which posts an email address to supabase db
export const Post = async (data) => {
    await supabase
        .from('emails')
        .insert(
            {Email: data},
        );
};

export default supabase;
