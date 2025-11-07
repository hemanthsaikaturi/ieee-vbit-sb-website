// Located at: supabase/functions/contact-form/index.ts

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

console.log("Contact Form Function Initialized");

Deno.serve(async (req) => {
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, honeypot } = await req.json();

    if (honeypot) {
      console.warn("Honeypot triggered.");
      return new Response('ok', { headers: corsHeaders });
    }

    const supabaseAdmin = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields.' }), {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      });
    }

    const { error } = await supabaseAdmin.from('submissions').insert({
      name,
      email,
      phone,
      message,
    });

    if (error) { throw error; }

    return new Response(JSON.stringify({ message: 'Submission successful!' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });

  } catch (err) {
    console.error('Error processing submission:', err.message);
    return new Response(JSON.stringify({ error: 'An internal error occurred.' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});