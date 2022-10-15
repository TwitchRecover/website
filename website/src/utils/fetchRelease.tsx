export const fetchRelease = async () => {
    try {
        // Github docs about it: https://docs.github.com/en/rest/releases/releases
        // Path: https://api.github.com/repos/OWNER/REPO/releases
        // Querry parameter per_page=1 to only get the latest release.
        const response = await fetch("https://api.github.com/repos/TwitchRecover/TwitchRecover/releases?per_page=1");
        
        return await response.json();
    } catch (error) {
        if (error && error instanceof Error) {
            console.log(error);
            return error?.message;
        }
    }
}