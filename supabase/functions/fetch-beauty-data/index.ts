import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Function called');
    
    // Log environment variable status
    const apiKey = Deno.env.get('GOOGLE_SHEETS_API_KEY');
    console.log('API Key exists:', !!apiKey);
    console.log('API Key length:', apiKey?.length || 0);
    
    if (!apiKey) {
      console.error('Google Sheets API key not configured');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const SHEET_ID = '19rnEC9yMqU8-c0_YKElyXo2hax4EbcRZdFHERNGOESI';

    // First, get the spreadsheet metadata
    console.log('Fetching spreadsheet metadata...');
    const metadataUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}?key=${apiKey}`;
    const metadataResponse = await fetch(metadataUrl);
    
    console.log('Metadata response status:', metadataResponse.status);
    
    if (!metadataResponse.ok) {
      const errorText = await metadataResponse.text();
      console.error('Failed to fetch spreadsheet metadata:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to fetch spreadsheet metadata', details: errorText }),
        { status: metadataResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const metadata = await metadataResponse.json();
    const firstSheetName = metadata.sheets[0].properties.title;
    console.log('First sheet name:', firstSheetName);

    // Fetch data from the first sheet
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent(firstSheetName)}?key=${apiKey}`;
    console.log('Fetching data from Google Sheets...');
    
    const response = await fetch(url);
    console.log('Data response status:', response.status);
    
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

    // Parse brand data
    const brands = rows.slice(1).map((row: string[]) => ({
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

    // Fetch Daily Visibility data
    console.log('Fetching Daily Visibility data...');
    const dailyVisibilityUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${encodeURIComponent('Daily Visibility')}?key=${apiKey}`;
    
    const dailyVisibilityResponse = await fetch(dailyVisibilityUrl);
    let dailyVisibility: any[] = [];
    
    console.log('Daily Visibility response status:', dailyVisibilityResponse.status);
    
    if (dailyVisibilityResponse.ok) {
      const dailyData = await dailyVisibilityResponse.json();
      const dailyRows = dailyData.values;
      
      if (dailyRows && dailyRows.length > 1) {
        dailyVisibility = dailyRows.slice(1).map((row: string[]) => ({
          date: row[0] || '',
          brand: row[1] || '',
          mentions: parseInt(row[2]) || 0,
        }));
        console.log(`Successfully fetched ${dailyVisibility.length} daily visibility records`);
      }
    } else {
      const errorText = await dailyVisibilityResponse.text();
      console.error('Failed to fetch Daily Visibility:', errorText);
    }

    return new Response(
      JSON.stringify({ 
        brands,
        dailyVisibility,
        lastUpdated: new Date().toISOString(),
        sheetName: firstSheetName
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );
  } catch (error) {
    console.error('Error in fetch-beauty-data function:', error);
    return new Response(
      JSON.stringify({ error: String(error) }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});
