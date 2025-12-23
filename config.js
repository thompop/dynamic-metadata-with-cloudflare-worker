export const config = {
    domainSource: "https://www.readysetwod.com/", // Your WeWeb app preview link
    patterns: [
        {
            // the initial "^" is important to match only the page url, not its styles and scripts that share a similar url
            pattern: "^/box/[^/]+",
            metaDataEndpoint: "https://kpakcjrxyfbihhincthp.supabase.co/functions/v1/getMetaBox/{id}"
        },
        {
            pattern: "^/athlete/[^/]+",
            metaDataEndpoint: "https://kpakcjrxyfbihhincthp.supabase.co/functions/v1/getMetaAthlete/{id}"
        },
			  {
            pattern: "^/competition/[^/]+",
            metaDataEndpoint: "https://kpakcjrxyfbihhincthp.supabase.co/functions/v1/getMetaCompetition/{id}"
        }
        // Add more patterns and their metadata endpoints as needed
    ]
};
