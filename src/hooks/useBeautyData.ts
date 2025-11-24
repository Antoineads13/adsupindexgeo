import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface BeautyBrand {
  rank: number;
  name: string;
  totalMentions: number;
  marketShare: number;
  chatGPTMentions: number;
  perplexityMentions: number;
  aiOverviewMentions: number;
  averagePosition: number;
}

export interface DailyVisibility {
  date: string;
  brand: string;
  mentions: number;
}

export interface BeautyDataResponse {
  brands: BeautyBrand[];
  dailyVisibility: DailyVisibility[];
  lastUpdated: string;
}

export const useBeautyData = () => {
  return useQuery({
    queryKey: ["beauty-data"],
    queryFn: async () => {
      console.log("Fetching beauty data from edge function...");
      
      const { data, error } = await supabase.functions.invoke<BeautyDataResponse>(
        "fetch-beauty-data",
        {
          method: "GET",
        }
      );

      if (error) {
        console.error("Error fetching beauty data:", error);
        throw error;
      }

      if (!data) {
        throw new Error("No data returned from function");
      }

      console.log("Beauty data fetched successfully:", data.brands.length, "brands");
      return data;
    },
    refetchInterval: 5 * 60 * 1000, // Refresh every 5 minutes
    staleTime: 2 * 60 * 1000, // Consider data stale after 2 minutes
  });
};
