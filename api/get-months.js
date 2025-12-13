import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tqmyprncjpxsfgahousj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbXlwcm5janB4c2ZnYWhvdXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NTEwNTYsImV4cCI6MjA4MTIyNzA1Nn0.UC37djXKafoLOSg0UM-m_HINuOS7-INfn9-l94vQtUA'
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  try {
    const { data, error } = await supabase
      .from('months')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}