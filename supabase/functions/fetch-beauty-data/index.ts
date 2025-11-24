import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const SHEET_ID = '19rnEC9yMqU8-c0_YKElyXo2hax4EbcRZdFHERNGOESI';

interface SheetRow {
  rank: number;
  name: string;
  totalMentions: number;
  marketShare: number;
  chatGPTMentions: number;
  perplexityMentions: number;
  aiOverviewMentions: number;
  averagePosition: number;
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const apiKey = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    
    if (!apiKey) {
      console.error('Google Sheets API key not configured');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Fetch data from Google Sheets - using A:Z range to get all data from first sheet
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/A:Z?key=${apiKey}`;
    console.log('Fetching data from Google Sheets...');
    
    const response = await fetch(url);
    
    if (!response.ok) {
      const errorText = await response.text();
      console.error('Google Sheets API error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch data from Google Sheets', details: errorText }),
        { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const rows = data.values;

    if (!rows || rows.length === 0) {
      console.error('No data found in sheet');
      return new Response(
        JSON.stringify({ error: 'No data found' }),
        { status: 404, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Skip header row and parse data
    const brands: SheetRow[] = rows.slice(1).map((row: string[]) => ({
      rank: parseInt(row[0]) || 0,
      name: row[1] || '',
      totalMentions: parseInt(row[2]) || 0,
      marketShare: parseFloat(row[3]) || 0,
      chatGPTMentions: parseInt(row[4]) || 0,
      perplexityMentions: parseInt(row[5]) || 0,
      aiOverviewMentions: parseInt(row[6]) || 0,
      averagePosition: parseFloat(row[7]) || 0,
    }));

    console.log(`Successfully fetched ${brands.length} brands`);

    return new Response(
      JSON.stringify({ 
        brands,
        lastUpdated: new Date().toISOString()
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in fetch-beauty-data function:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
