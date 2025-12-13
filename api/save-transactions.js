import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://tqmyprncjpxsfgahousj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRxbXlwcm5janB4c2ZnYWhvdXNqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjU2NTEwNTYsImV4cCI6MjA4MTIyNzA1Nn0.UC37djXKafoLOSg0UM-m_HINuOS7-INfn9-l94vQtUA'
);

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { transactions } = req.body;

    // Supprimer les anciennes transactions
    await supabase.from('transactions').delete().neq('id', 0);

    // Insérer les nouvelles
    const { data, error } = await supabase
      .from('transactions')
      .insert(transactions);

    if (error) throw error;

    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}